/*
# Revoke all table-level privileges on chat tables from anon and authenticated

1. Security Changes
- Revoke SELECT, INSERT, UPDATE, and DELETE from both anon and authenticated roles on chat_conversations.
- Revoke SELECT, INSERT, UPDATE, and DELETE from both anon and authenticated roles on chat_messages.
- RLS remains enabled with no policies (deny by default). The edge function uses the service role key, which bypasses RLS, so it can still read and write these tables.
- This is a defense-in-depth measure: even if a permissive policy were accidentally added in the future, the anon and authenticated roles would still have no table-level privileges to fall back on.
*/

REVOKE SELECT, INSERT, UPDATE, DELETE ON chat_conversations FROM anon;
REVOKE SELECT, INSERT, UPDATE, DELETE ON chat_conversations FROM authenticated;

REVOKE SELECT, INSERT, UPDATE, DELETE ON chat_messages FROM anon;
REVOKE SELECT, INSERT, UPDATE, DELETE ON chat_messages FROM authenticated;
