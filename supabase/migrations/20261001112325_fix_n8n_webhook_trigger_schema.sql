/*
# Fix n8n Webhook Trigger Function Schema Reference

## Problem
The `notify_n8n_quote_request()` trigger function references `pg_net.http_post()`,
but the `pg_net` extension installs its functions in the `net` schema on this Supabase
instance — there is no `pg_net` schema. This causes every quote request insert to fail
with: `schema "pg_net" does not exist`.

## Fix
1. Recreate `public.notify_n8n_quote_request()` with:
   - search_path set to `public, net, pg_catalog` (was `public, pg_net, pg_catalog`)
   - function call changed from `pg_net.http_post(...)` to `net.http_post(...)`
2. The trigger binding (`quote_requests_n8n_webhook`) stays unchanged — it calls
   the same function name, which is recreated in place.

## Notes
- No data changes, no table changes, no RLS changes.
- The trigger itself is not dropped or recreated — only the function is replaced.
- The webhook_config table (URL, auth header name, auth key) is read dynamically
  at runtime, so updating those values does not require a migration.
*/

CREATE OR REPLACE FUNCTION public.notify_n8n_quote_request()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, net, pg_catalog
AS $$
DECLARE
  v_webhook_url text;
  v_auth_key text;
  v_auth_header text;
  v_payload jsonb;
BEGIN
  SELECT webhook_url, auth_key, auth_header_name
  INTO v_webhook_url, v_auth_key, v_auth_header
  FROM webhook_config WHERE id = 1;

  IF v_webhook_url IS NULL OR v_auth_key IS NULL THEN
    RETURN NEW;
  END IF;

  v_payload := jsonb_build_object(
    'id', NEW.id,
    'name', NEW.name,
    'email', NEW.email,
    'phone', NEW.phone,
    'services', NEW.services,
    'message', NEW.message,
    'image_urls', NEW.image_urls,
    'sms_consent', NEW.sms_consent,
    'created_at', NEW.created_at
  );

  PERFORM net.http_post(
    url := v_webhook_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      v_auth_header, v_auth_key
    ),
    body := v_payload
  );

  RETURN NEW;
END;
$$;