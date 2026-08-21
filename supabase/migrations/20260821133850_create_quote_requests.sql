/*
# Create quote_requests table (single-tenant, no auth)

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, not null) — submitter's phone number
  - `services` (text[], not null) — array of selected service slugs (e.g. ["landscaping-planting", "hardscaping"])
  - `message` (text, nullable) — optional project details / description
  - `created_at` (timestamptz, defaults to now()) — submission timestamp

2. Security
- Enable RLS on `quote_requests`.
- Allow anon + authenticated INSERT only (public can submit quotes but cannot read, update, or delete).
- No SELECT, UPDATE, or DELETE policies — submissions are private to the business owner.

3. Important Notes
- This is a no-auth public website. The anon key client needs INSERT access.
- Visitors can submit quote requests but cannot view, edit, or delete any submissions.
- The business owner reviews submissions directly in the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  services text[] NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests"
ON quote_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT, UPDATE, or DELETE policies — submissions are private.