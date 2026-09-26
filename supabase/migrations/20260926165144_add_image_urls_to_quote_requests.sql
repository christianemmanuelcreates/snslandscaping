/*
# Add image_urls column to quote_requests for photo uploads

1. Changes
   - Add `image_urls` (text[], nullable) to public.quote_requests
   - Update column-level INSERT grant to include image_urls

2. Security
   - Storage bucket `quote-attachments` created as PRIVATE
   - anon/authenticated can INSERT into storage.objects for that bucket only
   - No SELECT policy for anon — photos are private, viewable via dashboard

3. Notes
   - image_urls nullable so submissions without photos still work
*/

ALTER TABLE public.quote_requests
  ADD COLUMN IF NOT EXISTS image_urls text[];

REVOKE INSERT ON public.quote_requests FROM anon;
REVOKE INSERT ON public.quote_requests FROM authenticated;

GRANT INSERT (name, email, phone, services, message, image_urls)
  ON public.quote_requests TO anon;
GRANT INSERT (name, email, phone, services, message, image_urls)
  ON public.quote_requests TO authenticated;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'quote_requests_image_urls_valid'
      AND conrelid = 'public.quote_requests'::regclass
  ) THEN
    ALTER TABLE public.quote_requests
      ADD CONSTRAINT quote_requests_image_urls_valid
      CHECK (
        image_urls IS NULL
        OR coalesce(array_length(image_urls, 1), 0) <= 5
      );
  END IF;
END $$;

INSERT INTO storage.buckets (id, name, public)
VALUES ('quote-attachments', 'quote-attachments', false)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "anon_upload_quote_attachments" ON storage.objects;
CREATE POLICY "anon_upload_quote_attachments"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'quote-attachments');