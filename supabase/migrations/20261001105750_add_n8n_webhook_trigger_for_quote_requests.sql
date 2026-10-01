/*
# Add n8n webhook trigger for new quote requests

1. Purpose
   - When a new row is inserted into public.quote_requests, automatically
     POST the full row as JSON to an n8n webhook so the n8n workflow can
     generate SMS messages for the lead and the administrative assistant.
   - The webhook is authenticated with an X-SNS-Auth-Key header.

2. Changes
   - Enable the pg_net extension (provides http_post for outbound HTTP from Postgres).
   - Create a secure config table `webhook_config` (schema-private, no RLS needed
     because only the postgres/superuser role can access it; no grants to anon/authenticated).
   - Create a trigger function `notify_n8n_quote_request()` that reads the webhook
     URL and auth key from webhook_config, builds a JSON payload from the new row,
     and fires an async POST via pg_net.net.http_post.
   - Bind the function as an AFTER INSERT trigger on public.quote_requests.

3. Security
   - webhook_config has NO grants to anon or authenticated — only the postgres
     role (which runs triggers) can read it. The auth key is never exposed to
     the public-facing anon key client.
   - The trigger function is SECURITY DEFINER owned by postgres so it can read
     webhook_config even though the inserting role (anon) cannot.
   - The n8n webhook URL and auth key are stored in webhook_config, not hardcoded
     in the trigger function source, so they can be updated without dropping
     and recreating the function.
   - pg_net.http_post is async (returns a request_id) so the insert is never
     blocked if the webhook is slow or down.

4. Important Notes
   - The N8N_AUTH_KEY value must be inserted into webhook_config separately
     (a follow-up SQL statement) because the key is a secret and should not
     be committed in migration files. The key is already configured as an
     edge function secret; it needs to also be stored here for the trigger.
   - The webhook URL is: https://n8n.blackkoimarketing.us/webhook/c65bd880-d08f-49e6-8a9a-44a6f99844c6
   - The auth header name is: X-SNS-Auth-Key
   - The trigger fires once per insert and sends the complete row including
     name, email, phone, services, message, image_urls, sms_consent, and created_at.
*/

-- 1. Enable pg_net extension
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 2. Create webhook_config table (postgres-only, no public grants)
CREATE TABLE IF NOT EXISTS webhook_config (
  id integer PRIMARY KEY DEFAULT 1,
  webhook_url text NOT NULL,
  auth_key text NOT NULL,
  auth_header_name text NOT NULL DEFAULT 'X-SNS-Auth-Key',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT webhook_config_singleton CHECK (id = 1)
);

-- No grants to anon or authenticated — only postgres can read/write this table.
REVOKE ALL ON webhook_config FROM anon;
REVOKE ALL ON webhook_config FROM authenticated;

-- 3. Insert the webhook URL (auth key to be set separately via execute_sql)
INSERT INTO webhook_config (id, webhook_url, auth_key, auth_header_name)
VALUES (1, 'https://n8n.blackkoimarketing.us/webhook/c65bd880-d08f-49e6-8a9a-44a6f99844c6', 'PLACEHOLDER_SET_VIA_EXECUTE_SQL', 'X-SNS-Auth-Key')
ON CONFLICT (id) DO UPDATE SET
  webhook_url = EXCLUDED.webhook_url,
  auth_header_name = EXCLUDED.auth_header_name;

-- 4. Create the trigger function
CREATE OR REPLACE FUNCTION notify_n8n_quote_request()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_net, pg_catalog
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

  -- Fire async POST (does not block the insert)
  PERFORM pg_net.http_post(
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

-- 5. Bind the trigger
DROP TRIGGER IF EXISTS quote_requests_n8n_webhook ON public.quote_requests;
CREATE TRIGGER quote_requests_n8n_webhook
  AFTER INSERT ON public.quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION notify_n8n_quote_request();