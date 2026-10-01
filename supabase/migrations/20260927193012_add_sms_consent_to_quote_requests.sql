/*
# Add sms_consent column to quote_requests

1. Changes
   - Add `sms_consent` (boolean, NOT NULL, default false) to public.quote_requests
   - Update column-level INSERT grant to include sms_consent

2. Security
   - Re-grant INSERT on the expanded column list so the public form can submit sms_consent
   - SELECT / UPDATE / DELETE remain revoked (unchanged) — submissions stay private

3. Notes
   - sms_consent defaults to false so existing rows and submissions without consent are handled cleanly
   - Every submission explicitly records whether the visitor opted into SMS
   - The CHECK constraint ensures the value is a real boolean (not null), since NOT NULL alone
     still allows the column to be omitted on insert only because of the default — the constraint
     documents the intent and guards against future changes to the default
*/

ALTER TABLE public.quote_requests
  ADD COLUMN IF NOT EXISTS sms_consent boolean NOT NULL DEFAULT false;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'quote_requests_sms_consent_valid'
      AND conrelid = 'public.quote_requests'::regclass
  ) THEN
    ALTER TABLE public.quote_requests
      ADD CONSTRAINT quote_requests_sms_consent_valid
      CHECK (sms_consent IS NOT NULL);
  END IF;
END $$;

REVOKE INSERT ON public.quote_requests FROM anon;
REVOKE INSERT ON public.quote_requests FROM authenticated;

GRANT INSERT (name, email, phone, services, message, image_urls, sms_consent)
  ON public.quote_requests TO anon;
GRANT INSERT (name, email, phone, services, message, image_urls, sms_consent)
  ON public.quote_requests TO authenticated;