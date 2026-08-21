import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, CircleAlert as AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS_NAME } from "@/lib/site";

const EDGE_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-proxy`;
const STORAGE_KEY = "sns_chat_session_id";
const MAX_MESSAGE_LENGTH = 2000;

const WELCOME_MESSAGE =
  `Hi! I'm the ${BUSINESS_NAME} assistant. I can help you find the right landscaping service, answer questions about our service areas, and get you a free quote. What's your name?`;

type ChatMessage = {
  role: "visitor" | "assistant";
  content: string;
};

function getSessionId(): string {
  try {
    let id = sessionStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionIdRef = useRef<string>(getSessionId());

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (messages.length === 0) {
        setMessages([{ role: "assistant", content: WELCOME_MESSAGE }]);
      }
      setTimeout(scrollToBottom, 100);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, messages.length, scrollToBottom]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const userMessage: ChatMessage = { role: "visitor", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);
    setHasError(false);

    try {
      const response = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          message: trimmed,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }

      const data = await response.json() as { reply?: string; sessionId?: string };

      const reply = data?.reply;
      if (typeof reply !== "string" || reply.trim().length === 0) {
        throw new Error("Invalid response from assistant");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply.trim() },
      ]);
    } catch {
      setHasError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try sending your message again, or call us directly for immediate help.",
        },
      ]);
    } finally {
      setIsSending(false);
      setTimeout(scrollToBottom, 100);
    }
  }, [input, isSending, scrollToBottom]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsDismissed(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen && isDismissed) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Chat panel */}
      {isOpen && (
        <div className="chat-panel-enter flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/15">
                <MessageCircle className="size-4 text-primary-foreground" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-primary-foreground">
                  {BUSINESS_NAME}
                </span>
                <span className="flex items-center gap-1 text-xs text-primary-foreground/80">
                  <span className="size-1.5 rounded-full bg-green-400" />
                  Online now
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="flex size-8 items-center justify-center rounded-lg text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              aria-label="Close chat"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-muted/30">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  msg.role === "visitor" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                    msg.role === "visitor"
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md bg-card text-card-foreground border border-border",
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isSending && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3">
                  <span className="chat-typing-dot size-2 rounded-full bg-muted-foreground" style={{ animationDelay: "0s" }} />
                  <span className="chat-typing-dot size-2 rounded-full bg-muted-foreground" style={{ animationDelay: "0.15s" }} />
                  <span className="chat-typing-dot size-2 rounded-full bg-muted-foreground" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>
            )}

            {hasError && (
              <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs text-destructive">
                <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
                <span>Connection issue detected. Your message may not have been delivered.</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border bg-card p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                maxLength={MAX_MESSAGE_LENGTH}
                disabled={isSending}
                className="flex-1 rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={isSending || !input.trim()}
                aria-label="Send message"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Send className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      {!isOpen && (
        <button
          type="button"
          onClick={handleOpen}
          aria-label={`Chat with ${BUSINESS_NAME}`}
          className="group relative flex size-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/40 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
        >
          {/* Pulse ring */}
          <span className="chat-pulse-ring absolute inset-0 rounded-full bg-green-500" aria-hidden="true" />
          {/* Bouncing icon */}
          <MessageCircle className="chat-bounce relative size-6" aria-hidden="true" />
          {/* Notification dot */}
          <span className="absolute -right-0.5 -top-0.5 flex size-4">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-4 rounded-full bg-green-500 border-2 border-white" />
          </span>
        </button>
      )}
    </div>
  );
}
