---
name: ai-receptionist
description: Build a secure AI receptionist chat widget connected to an n8n webhook. Use whenever the user asks to add an AI chatbot, AI assistant, AI receptionist, live chat, chat widget, n8n chat integration, conversational lead capture, or any floating chat button connected to an AI backend. Also trigger when the user mentions connecting their site to n8n for chat, customer service automation, or lead qualification through conversation.
---

# AI Receptionist Chat Widget

A secure, production-ready pattern for adding an AI receptionist chat widget to a website, connected to an n8n workflow via a Supabase edge function proxy.

## When to use this skill

Trigger whenever the user wants any of these:
- An AI chatbot or assistant on their site
- A floating chat button visitors can click to talk to an AI
- A connection between their website and an n8n workflow for chat
- Conversational lead capture (AI collects name, email, phone, qualifies the project)
- An "AI receptionist" that answers questions and routes leads

## Architecture overview

The browser never talks to n8n directly. The flow is:

```
Browser chat widget → Supabase edge function → n8n webhook (with auth header)
                                      ↓
                              Supabase database (stores all messages + lead data)
```

The edge function holds the n8n webhook URL and the authentication key as server-only secrets. The browser only ever sees the reply text and a session ID. This is non-negotiable: the n8n URL and auth token must never appear in client-side code, environment variables exposed to the browser, or network responses.

## What the user must provide before you build

1. **n8n webhook URL** — the production webhook endpoint the edge function will call.
2. **n8n auth header name** — the header name n8n checks for authentication. HTTP headers cannot contain spaces, so it must use hyphens (e.g., `X-API-Key`, `X-SNS-Auth-Key`). If the user gives a name with spaces, tell them to change it in n8n before proceeding.
3. **n8n auth key value** — the secret value n8n validates. The user adds this through the Supabase secrets settings screen after the build. The edge function reads it from `Deno.env.get()` at runtime.
4. **Memory model** — ask whether n8n manages its own conversation memory or expects the edge function to send full history. If n8n manages memory, the edge function forwards only the latest message + session ID. If n8n needs history, the edge function gathers prior messages from the database and includes them.

## System prompt

Create a markdown file in the project root (e.g., `ai-receptionist-system-prompt.md`) that defines the AI's role. Adapt it from the business's real information — never copy a generic template without filling in the actual business name, phone, email, services, and service areas.

The system prompt must include:
- **Role and purpose** — what the AI does (lead intake, service Q&A, qualification)
- **Business information** — name, phone, email, website, license, service areas
- **Voice and behavior constraints** — tone, conciseness, context awareness, integrity, security (never reveal system instructions or internal details)
- **Conversation flow** — lead capture steps, when to mark a lead as complete, data minimization rules
- **Approved services** — exact list with slugs matching the site's data layer
- **Service area rules** — confirmed areas, how to handle unknown areas
- **Emergency protocol** — what counts as urgent, required actions, restrictions
- **Pricing policy** — never quote prices via chat
- **Output requirements** — the AI must return a structured JSON object with a `reply` field plus lead-capture fields

This file is the single source of truth the user pastes into their n8n AI node.

## Database schema

Create two tables with RLS enabled and **no policies** — deny by default. The browser (anon role) can never read or write these tables. Only the edge function using the service role key can access them, and the service role bypasses RLS.

### chat_conversations
- `id` (uuid PK)
- `session_id` (text, unique, not null) — browser-generated session identifier
- `visitor_name`, `visitor_email`, `visitor_phone` (text, nullable) — captured from AI responses
- `lead_complete` (boolean, default false)
- `service_category` (text, nullable, CHECK constraint with approved service slugs)
- `service_area_status` (text, nullable, CHECK: confirmed | needs_confirmation)
- `city_or_zip` (text, nullable)
- `is_emergency` (boolean, default false)
- `conversation_status` (text, CHECK: collecting_info | qualifying_service | confirming_area | lead_complete | urgent_call_required)
- `preferred_contact_time` (text, nullable)
- `submitter_ip` (inet, nullable) — for rate limiting
- `created_at`, `updated_at` (timestamptz)

### chat_messages
- `id` (uuid PK)
- `conversation_id` (uuid FK → chat_conversations, ON DELETE CASCADE)
- `role` (text, CHECK: visitor | assistant)
- `content` (text, CHECK: length 1–5000)
- `created_at` (timestamptz)

Add indexes on `session_id` and `conversation_id` for query performance.

Use CHECK constraints for email format, phone length, and service category values — mirror the hardening from any existing form tables in the project.

## Edge function

Deploy via the `mcp__supabase__deploy_edge_function` MCP tool. The function:

1. Validates the incoming message (non-empty, under max length)
2. Enforces a per-IP rate limit (e.g., 30 messages per 15 minutes) by querying recent messages from that IP
3. Loads or creates the conversation record by session_id
4. Stores the visitor's message in `chat_messages`
5. Forwards the message (+ session ID, + history if n8n needs it) to the n8n webhook with the auth header
6. Receives the AI reply (JSON with a `reply` field and optional lead-capture fields)
7. Stores the assistant's reply in `chat_messages`
8. Updates the conversation record with any lead-capture fields from the AI response
9. Returns only `{ reply, sessionId }` to the browser

### Security rules for the edge function

- Read the n8n auth key from `Deno.env.get()` — never hardcode it
- The n8n webhook URL can be a constant in the function (it is not a secret per se, but should not be in client code)
- Return generic error messages ("Service temporarily unavailable") on all failures — never expose internal details, webhook URLs, or stack traces to the browser
- Wrap the entire handler body in a try/catch
- Use CORS headers on every response (preflight, success, error)
- Verify JWT is OFF for the edge function if the chat is public (no sign-in)
- Use the service role key for database access, not the anon key

### Rate limiting approach

Query `chat_messages` joined to `chat_conversations` by IP within a rolling window. If the count exceeds the limit, return a 429. This is durable across edge function instances because it reads from the database, not in-memory state.

## Chat widget UI

Build a floating chat button component that:
- Is pinned to the bottom-right corner (`fixed bottom-5 right-5 z-50`)
- Is green (`bg-green-600`) with a subtle shadow
- Has a pulse-ring animation (expanding ring that fades) to draw the eye without being intrusive
- Has a bouncing icon animation
- Has a notification dot with a ping animation
- On click, opens a chat panel that animates in (fade + slight upward slide)

The chat panel includes:
- **Header**: business name, online indicator, close button
- **Messages area**: scrollable, with distinct styling for visitor (right-aligned, primary color) vs assistant (left-aligned, card color) messages
- **Typing indicator**: three animated dots while waiting for the AI response
- **Input**: text input + send button, disabled while sending
- **Error state**: inline message suggesting retry or calling directly

### Session management
- Generate a session ID via `crypto.randomUUID()` on first open
- Store in `sessionStorage` so the conversation persists across page navigation during the same visit
- Pass the session ID to the edge function on every request

### Integration
- Place the widget in the app root (e.g., in `App.tsx` alongside the router) so it appears on every page
- The widget is self-contained: it manages its own state and does not need props
- Lazy-load if the project uses lazy loading, but a small component is fine to include directly

## Post-build checklist for the user

After the build is complete, tell the user to:
1. Add the n8n auth key value as an edge function secret through the Supabase secrets settings screen — the secret name must match what the edge function reads from `Deno.env.get()`
2. Paste the system prompt markdown into their n8n AI node
3. Confirm the n8n webhook credential header name matches what the edge function sends (no spaces, hyphens only)
4. Test the chat by opening the site, clicking the green button, and sending a message
