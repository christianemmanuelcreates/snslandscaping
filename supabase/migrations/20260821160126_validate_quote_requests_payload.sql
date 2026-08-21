/*
# Validate quote_requests payloads server-side

1. Security Changes
- Bound the length of every free-text column so a crafted API call cannot store
  multi-megabyte values (previously `text` with no limit, up to ~1GB per value).
- Require a non-blank name and a plausible email/phone shape. `NOT NULL` alone
  accepts the empty string, so contact details could be stored empty.
- Restrict `services` to the five service slugs the site actually offers and
  bound the array length. Previously any text array of any size was accepted.

2. Important Notes
- These mirror the checks the browser form already performs, so legitimate
  submissions from the site are unaffected. They now also apply to direct
  Data API calls, which bypass the form entirely.
- `coalesce(array_length(...), 0)` is required because `array_length` returns
  NULL for an empty array, and a CHECK evaluating to NULL is satisfied.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'quote_requests_name_valid'
      AND conrelid = 'public.quote_requests'::regclass
  ) THEN
    ALTER TABLE public.quote_requests
      ADD CONSTRAINT quote_requests_name_valid
      CHECK (char_length(btrim(name)) BETWEEN 1 AND 120);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'quote_requests_email_valid'
      AND conrelid = 'public.quote_requests'::regclass
  ) THEN
    ALTER TABLE public.quote_requests
      ADD CONSTRAINT quote_requests_email_valid
      CHECK (
        char_length(email) BETWEEN 5 AND 254
        AND email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'quote_requests_phone_valid'
      AND conrelid = 'public.quote_requests'::regclass
  ) THEN
    ALTER TABLE public.quote_requests
      ADD CONSTRAINT quote_requests_phone_valid
      CHECK (
        char_length(phone) <= 40
        AND char_length(regexp_replace(phone, '[^0-9]', '', 'g')) BETWEEN 7 AND 20
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'quote_requests_message_length'
      AND conrelid = 'public.quote_requests'::regclass
  ) THEN
    ALTER TABLE public.quote_requests
      ADD CONSTRAINT quote_requests_message_length
      CHECK (message IS NULL OR char_length(message) <= 5000);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'quote_requests_services_valid'
      AND conrelid = 'public.quote_requests'::regclass
  ) THEN
    ALTER TABLE public.quote_requests
      ADD CONSTRAINT quote_requests_services_valid
      CHECK (
        coalesce(array_length(services, 1), 0) BETWEEN 1 AND 20
        AND services <@ ARRAY[
          'landscaping-planting',
          'hardscaping',
          'site-preparation',
          'irrigation-drainage',
          'outdoor-amenities'
        ]::text[]
      );
  END IF;
END $$;