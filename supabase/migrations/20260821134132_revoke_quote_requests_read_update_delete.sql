/*
# Revoke non-INSERT privileges on quote_requests

1. Security Changes
- Revoke SELECT, UPDATE, DELETE from both anon and authenticated roles.
- Only INSERT remains granted, matching the single INSERT policy.
- This ensures the public form can submit quotes but cannot read, modify, or delete any submissions.
*/

REVOKE SELECT ON quote_requests FROM anon;
REVOKE UPDATE ON quote_requests FROM anon;
REVOKE DELETE ON quote_requests FROM anon;

REVOKE SELECT ON quote_requests FROM authenticated;
REVOKE UPDATE ON quote_requests FROM authenticated;
REVOKE DELETE ON quote_requests FROM authenticated;
