/*
# Create chat conversation and message tables for AI receptionist

1. New Tables
- `chat_conversations`
  - `id` (uuid, primary key) — server-generated unique ID for each conversation
  - `session_id` (text, unique, not null) — browser-generated session identifier passed by the edge function
  - `visitor_name` (text, nullable) — captured from AI response lead data
  - `visitor_email` (text, nullable) — captured from AI response lead data
  - `visitor_phone` (text, nullable) — captured from AI response lead data
  - `lead_complete` (boolean, default false) — whether name AND phone or email are captured
  - `service_category` (text, nullable) — one of the approved service slugs
  - `service_area_status` (text, nullable) — confirmed or needs_confirmation
  - `city_or_zip` (text, nullable) — location provided by visitor
  - `is_emergency` (boolean, default false) — flagged urgent
  - `conversation_status` (text, default 'collecting_info') — current conversation state
  - `preferred_contact_time` (text, nullable) — follow-up timing preference
  - `submitter_ip` (inet, nullable) — client IP for rate limiting
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())
- `chat_messages`
  - `id` (uuid, primary key)
  - `conversation_id` (uuid, foreign key to chat_conversations, on delete cascade)
  - `role` (text, not null) — 'visitor' or 'assistant'
  - `content` (text, not null) — the message text, max 5000 chars
  - `created_at` (timestamptz, default now())

2. Security
- RLS enabled on both tables.
- No policies are created — deny by default. The browser (anon role) can never read or write these tables. Only the edge function using the service role key can access them, and the service role bypasses RLS.
- CHECK constraints validate message length, role values, email format, phone length, and service category values.

3. Important Notes
- The service_category CHECK constraint uses the exact service slugs from the site data layer.
- The conversation_status CHECK constraint uses the states from the system prompt output schema.
- Foreign key on chat_messages.conversation_id cascades deletes so cleaning up a conversation removes its messages.
- Indexes added on session_id (for lookups) and conversation_id (for message queries).
*/

CREATE TABLE IF NOT EXISTS chat_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  visitor_name text,
  visitor_email text CHECK (
    visitor_email IS NULL OR (
      char_length(visitor_email) >= 5
      AND char_length(visitor_email) <= 254
      AND visitor_email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
    )
  ),
  visitor_phone text CHECK (
    visitor_phone IS NULL OR (
      char_length(visitor_phone) <= 40
      AND char_length(regexp_replace(visitor_phone, '[^0-9]', '', 'g')) >= 7
      AND char_length(regexp_replace(visitor_phone, '[^0-9]', '', 'g')) <= 20
    )
  ),
  lead_complete boolean NOT NULL DEFAULT false,
  service_category text CHECK (
    service_category IS NULL
    OR service_category IN (
      'landscaping-planting',
      'hardscaping',
      'site-preparation',
      'irrigation-drainage',
      'outdoor-amenities',
      'general_landscaping'
    )
  ),
  service_area_status text CHECK (
    service_area_status IS NULL
    OR service_area_status IN ('confirmed', 'needs_confirmation')
  ),
  city_or_zip text CHECK (city_or_zip IS NULL OR char_length(btrim(city_or_zip)) <= 100),
  is_emergency boolean NOT NULL DEFAULT false,
  conversation_status text NOT NULL DEFAULT 'collecting_info' CHECK (
    conversation_status IN (
      'collecting_info',
      'qualifying_service',
      'confirming_area',
      'lead_complete',
      'urgent_call_required'
    )
  ),
  preferred_contact_time text CHECK (preferred_contact_time IS NULL OR char_length(btrim(preferred_contact_time)) <= 200),
  submitter_ip inet,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES chat_conversations(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('visitor', 'assistant')),
  content text NOT NULL CHECK (char_length(content) >= 1 AND char_length(content) <= 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_chat_conversations_session_id ON chat_conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_conversation_id ON chat_messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(conversation_id, created_at);

ALTER TABLE chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;
