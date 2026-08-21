/*
  # Rate limit anonymous quote request submissions

  The quote request form is an unauthenticated INSERT path with no throttle, so a
  single caller could flood the table through the Data API. This adds a
  server-side per-IP throttle enforced at insert time.

  1. Changes
    - Add `submitter_ip` (inet, nullable) to public.quote_requests
    - Add index on (submitter_ip, created_at) for the throttle lookup
    - Add SECURITY DEFINER function public.enforce_quote_request_rate_limit()
      with a pinned search_path, fired BEFORE INSERT
    - REVOKE EXECUTE on that function from public, anon and authenticated

  2. Behaviour
    - The client cannot write `submitter_ip`: it is not in the column-level
      INSERT grant and is always overwritten by the trigger
    - At most 5 submissions per IP per rolling 10 minute window
    - When no IP can be determined the insert is ALLOWED, so legitimate
      submissions are never blocked by a missing header
*/

ALTER TABLE public.quote_requests
  ADD COLUMN IF NOT EXISTS submitter_ip inet;

CREATE INDEX IF NOT EXISTS quote_requests_submitter_ip_created_at_idx
  ON public.quote_requests (submitter_ip, created_at DESC);

CREATE OR REPLACE FUNCTION public.enforce_quote_request_rate_limit()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  raw_headers text;
  raw_ip text;
  parsed_ip inet;
  recent_count integer;
BEGIN
  -- The client is never trusted to supply this value.
  NEW.submitter_ip := NULL;

  raw_headers := current_setting('request.headers', true);

  IF raw_headers IS NOT NULL AND raw_headers <> '' THEN
    BEGIN
      raw_ip := coalesce(
        split_part((raw_headers::json ->> 'x-forwarded-for'), ',', 1),
        raw_headers::json ->> 'cf-connecting-ip',
        raw_headers::json ->> 'x-real-ip'
      );
    EXCEPTION WHEN others THEN
      raw_ip := NULL;
    END;
  END IF;

  raw_ip := nullif(btrim(coalesce(raw_ip, '')), '');

  IF raw_ip IS NOT NULL THEN
    BEGIN
      parsed_ip := raw_ip::inet;
    EXCEPTION WHEN others THEN
      parsed_ip := NULL;
    END;
  END IF;

  -- No usable client address: allow the insert rather than block a real customer.
  IF parsed_ip IS NULL THEN
    RETURN NEW;
  END IF;

  NEW.submitter_ip := parsed_ip;

  SELECT count(*) INTO recent_count
  FROM public.quote_requests q
  WHERE q.submitter_ip = parsed_ip
    AND q.created_at > now() - interval '10 minutes';

  IF recent_count >= 5 THEN
    RAISE EXCEPTION 'Too many quote requests. Please try again in a few minutes.'
      USING ERRCODE = '54000';
  END IF;

  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.enforce_quote_request_rate_limit() FROM public;
REVOKE ALL ON FUNCTION public.enforce_quote_request_rate_limit() FROM anon;
REVOKE ALL ON FUNCTION public.enforce_quote_request_rate_limit() FROM authenticated;

DROP TRIGGER IF EXISTS quote_requests_rate_limit ON public.quote_requests;
CREATE TRIGGER quote_requests_rate_limit
  BEFORE INSERT ON public.quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.enforce_quote_request_rate_limit();
