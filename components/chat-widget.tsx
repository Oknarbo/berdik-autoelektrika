"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot } from "lucide-react";
import { chat } from "@/lib/data";
import { getAssistantResponse, type ChatMessage } from "@/lib/chat-logic";
import { Button } from "@/components/ui/button";
import { useChat } from "@/components/chat-provider";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const { isOpen, openChat, closeChat, pendingMessage, clearPendingMessage } =
    useChat();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState<"initial" | "followup" | "summary" | "general">("initial");
  const [activeFlow, setActiveFlow] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !initialized) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: chat.welcomeMessage,
          timestamp: new Date(),
        },
      ]);
      setInitialized(true);
    }
  }, [isOpen, initialized]);

  useEffect(() => {
    if (isOpen && pendingMessage) {
      handleSend(pendingMessage);
      clearPendingMessage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, pendingMessage]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = useCallback(
    async (text?: string) => {
      const content = (text ?? input).trim();
      if (!content) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      await new Promise((r) => setTimeout(r, 800 + Math.random() * 700));

      const response = getAssistantResponse(content, stage, activeFlow);
      setStage(response.nextStage);
      setActiveFlow(response.nextFlow);

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: response.content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    },
    [input, stage, activeFlow]
  );

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  const formatTime = (date?: Date) => {
    if (!date) return "";
    return date.toLocaleTimeString("hr-HR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openChat()}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-electric px-5 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-electric/30 transition-shadow hover:shadow-electric/50"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="hidden sm:inline">{chat.fabLabel}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm sm:hidden"
              onClick={closeChat}
            />

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={cn(
                "fixed z-50 flex flex-col overflow-hidden border border-white/10 bg-graphite-light shadow-2xl",
                "inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[600px] sm:w-[420px] sm:rounded-2xl"
              )}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/10">
                    <Bot className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {chat.title}
                    </p>
                    <p className="text-xs text-muted">{chat.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={closeChat}
                  className="rounded-md p-2 text-muted transition-colors hover:bg-white/5 hover:text-white"
                  aria-label="Zatvori"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                        msg.role === "user"
                          ? "rounded-br-md bg-electric text-white"
                          : "rounded-bl-md border border-white/5 bg-white/[0.03] text-white/90"
                      )}
                    >
                      {msg.content}
                      {msg.timestamp && (
                        <p
                          className={cn(
                            "mt-1 text-[10px]",
                            msg.role === "user"
                              ? "text-white/60"
                              : "text-muted"
                          )}
                        >
                          {formatTime(msg.timestamp)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/5 bg-white/[0.03] px-4 py-3">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-2 w-2 rounded-full bg-electric/60"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick replies */}
              {!isTyping && messages.length <= 2 && (
                <div className="flex flex-wrap gap-2 border-t border-white/5 px-4 py-3">
                  {chat.quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="rounded-full border border-electric/30 bg-electric/5 px-3 py-1.5 text-xs text-electric transition-colors hover:bg-electric/15"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="border-t border-white/5 p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Opišite kvar..."
                    className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-muted/50 focus:border-electric/50 focus:outline-none focus:ring-1 focus:ring-electric/30"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!input.trim() || isTyping}
                    className="shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                <p className="mt-2 text-center text-[10px] text-muted/60">
                  {chat.footerNote}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
