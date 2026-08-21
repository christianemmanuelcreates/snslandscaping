/*
  # Restrict quote request inserts to client-supplied columns only

  The anon and authenticated roles previously held table-wide INSERT on
  public.quote_requests, which let any caller of the Data API supply their own
  `id` and `created_at` values. Column defaults are fallbacks, not restrictions.

  1. Changes
    - REVOKE table-wide INSERT from anon and authenticated
    - GRANT INSERT only on (name, email, phone, services, message)

  2. Result
    - `id` always comes from gen_random_uuid()
    - `created_at` always comes from now()
    - SELECT / UPDATE / DELETE remain revoked (unchanged)
*/

REVOKE INSERT ON public.quote_requests FROM anon;
REVOKE INSERT ON public.quote_requests FROM authenticated;

GRANT INSERT (name, email, phone, services, message)
  ON public.quote_requests TO anon;
GRANT INSERT (name, email, phone, services, message)
  ON public.quote_requests TO authenticated;
