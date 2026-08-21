import { createClient } from "npm:@supabase/supabase-js@2.112.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const N8N_WEBHOOK_URL =
  "https://n8n.blackkoimarketing.us/webhook/b835d7c5-3e1b-4b6a-a920-ad961685f890";

const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT_WINDOW_MINUTES = 15;
const RATE_LIMIT_MAX_REQUESTS = 30;

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function errorResponse(message: string, status: number): Response {
  return jsonResponse({ error: message }, status);
}

function getClientIP(req: Request): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return null;
}

function isValidSessionId(id: string): boolean {
  return typeof id === "string" && id.length >= 8 && id.length <= 100 && /^[a-zA-Z0-9_-]+$/.test(id);
}

interface N8nResponse {
  reply?: string;
  lead_complete?: boolean;
  visitor_name?: string | null;
  visitor_email?: string | null;
  visitor_phone?: string | null;
  service_category?: string | null;
  service_area_status?: string | null;
  city_or_zip?: string | null;
  is_emergency?: boolean;
  conversation_status?: string;
  preferred_contact_time?: string | null;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const n8nAuthKey = Deno.env.get("N8N_AUTH_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Missing Supabase environment variables");
      return errorResponse("Service temporarily unavailable", 500);
    }

    if (!n8nAuthKey) {
      console.error("N8N_AUTH_KEY secret not configured");
      return errorResponse("Service temporarily unavailable", 503);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return errorResponse("Invalid request body", 400);
    }

    const { sessionId, message } = (body ?? {}) as {
      sessionId?: unknown;
      message?: unknown;
    };

    if (typeof sessionId !== "string" || !isValidSessionId(sessionId)) {
      return errorResponse("Invalid session identifier", 400);
    }

    if (typeof message !== "string" || message.trim().length === 0) {
      return errorResponse("Message is required", 400);
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return errorResponse("Message too long", 400);
    }

    const clientIP = getClientIP(req);

    // --- Rate limiting: count messages from this IP in the rolling window ---
    const windowStart = new Date(
      Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000,
    ).toISOString();

    if (clientIP) {
      const { count, error: countError } = await supabase
        .from("chat_messages")
        .select("*", { count: "exact", head: true })
        .gte("created_at", windowStart)
        .in("conversation_id", (
          await supabase
            .from("chat_conversations")
            .select("id")
            .eq("submitter_ip", clientIP)
        ).data?.map((r: { id: string }) => r.id) ?? []);

      if (!countError && count !== null && count >= RATE_LIMIT_MAX_REQUESTS) {
        return errorResponse("Too many messages. Please try again later.", 429);
      }
    }

    // --- Load or create the conversation ---
    let { data: conversation, error: convError } = await supabase
      .from("chat_conversations")
      .select("*")
      .eq("session_id", sessionId)
      .maybeSingle();

    if (convError) {
      console.error("Conversation lookup error:", convError.message);
      return errorResponse("Service temporarily unavailable", 500);
    }

    if (!conversation) {
      const { data: newConv, error: createErr } = await supabase
        .from("chat_conversations")
        .insert({
          session_id: sessionId,
          submitter_ip: clientIP ?? null,
        })
        .select("*")
        .single();

      if (createErr || !newConv) {
        console.error("Conversation create error:", createErr?.message);
        return errorResponse("Service temporarily unavailable", 500);
      }

      conversation = newConv;
    }

    const conversationId = conversation.id;

    // --- Store the visitor's message ---
    const { error: msgInsertError } = await supabase
      .from("chat_messages")
      .insert({
        conversation_id: conversationId,
        role: "visitor",
        content: message.trim(),
      });

    if (msgInsertError) {
      console.error("Message insert error:", msgInsertError.message);
      return errorResponse("Service temporarily unavailable", 500);
    }

    // --- Forward to n8n with the auth header ---
    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-SNS-Auth-Key": n8nAuthKey,
      },
      body: JSON.stringify({
        sessionId,
        message: message.trim(),
      }),
    });

    if (!n8nResponse.ok) {
      console.error(`n8n webhook returned status ${n8nResponse.status}`);
      return errorResponse("Service temporarily unavailable", 502);
    }

    let n8nData: N8nResponse;
    try {
      n8nData = await n8nResponse.json() as N8nResponse;
    } catch {
      console.error("Failed to parse n8n response as JSON");
      return errorResponse("Service temporarily unavailable", 502);
    }

    const replyText =
      typeof n8nData.reply === "string" && n8nData.reply.trim().length > 0
        ? n8nData.reply.trim()
        : null;

    if (!replyText) {
      console.error("n8n response missing valid reply field");
      return errorResponse("Service temporarily unavailable", 502);
    }

    // --- Store the assistant's reply ---
    const { error: replyInsertError } = await supabase
      .from("chat_messages")
      .insert({
        conversation_id: conversationId,
        role: "assistant",
        content: replyText,
      });

    if (replyInsertError) {
      console.error("Assistant reply insert error:", replyInsertError.message);
    }

    // --- Update conversation lead-capture fields ---
    const updateFields: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };

    if (typeof n8nData.lead_complete === "boolean") {
      updateFields.lead_complete = n8nData.lead_complete;
    }
    if (n8nData.visitor_name !== undefined) {
      updateFields.visitor_name = n8nData.visitor_name;
    }
    if (n8nData.visitor_email !== undefined) {
      updateFields.visitor_email = n8nData.visitor_email;
    }
    if (n8nData.visitor_phone !== undefined) {
      updateFields.visitor_phone = n8nData.visitor_phone;
    }
    if (n8nData.service_category !== undefined) {
      updateFields.service_category = n8nData.service_category;
    }
    if (n8nData.service_area_status !== undefined) {
      updateFields.service_area_status = n8nData.service_area_status;
    }
    if (n8nData.city_or_zip !== undefined) {
      updateFields.city_or_zip = n8nData.city_or_zip;
    }
    if (typeof n8nData.is_emergency === "boolean") {
      updateFields.is_emergency = n8nData.is_emergency;
    }
    if (typeof n8nData.conversation_status === "string") {
      updateFields.conversation_status = n8nData.conversation_status;
    }
    if (n8nData.preferred_contact_time !== undefined) {
      updateFields.preferred_contact_time = n8nData.preferred_contact_time;
    }

    const { error: convUpdateError } = await supabase
      .from("chat_conversations")
      .update(updateFields)
      .eq("id", conversationId);

    if (convUpdateError) {
      console.error("Conversation update error:", convUpdateError.message);
    }

    return jsonResponse({ reply: replyText, sessionId });
  } catch (err) {
    console.error("Unhandled error:", err);
    return errorResponse("Service temporarily unavailable", 500);
  }
});
