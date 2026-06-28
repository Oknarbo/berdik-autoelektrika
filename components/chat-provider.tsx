"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type ChatContextType = {
  isOpen: boolean;
  openChat: (initialMessage?: string) => void;
  closeChat: () => void;
  pendingMessage: string | null;
  clearPendingMessage: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  const openChat = useCallback((initialMessage?: string) => {
    if (initialMessage) {
      setPendingMessage(initialMessage);
    }
    setIsOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  const clearPendingMessage = useCallback(() => {
    setPendingMessage(null);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        openChat,
        closeChat,
        pendingMessage,
        clearPendingMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within ChatProvider");
  }
  return context;
}
