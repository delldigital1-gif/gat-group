"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { chatNodes, matchKeyword, ROOT_NODE_ID, ChatOption } from "@/lib/chatbot/flow";

export type ChatMessage = {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: ChatOption[];
};

type ChatContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  messages: ChatMessage[];
  hasUnread: boolean;
  selectOption: (option: ChatOption) => void;
  sendText: (text: string) => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `msg-${idCounter}`;
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const welcome = chatNodes[ROOT_NODE_ID];
    return [{ id: nextId(), sender: "bot", text: welcome.message, options: welcome.options }];
  });

  const open = useCallback(() => {
    setIsOpen(true);
    setHasUnread(false);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => {
    setIsOpen((v) => {
      if (!v) setHasUnread(false);
      return !v;
    });
  }, []);

  const pushBotNode = useCallback((nodeId: string) => {
    const node = chatNodes[nodeId] ?? chatNodes.fallback;
    setMessages((prev) => [...prev, { id: nextId(), sender: "bot", text: node.message, options: node.options }]);
  }, []);

  const selectOption = useCallback(
    (option: ChatOption) => {
      setMessages((prev) => [...prev, { id: nextId(), sender: "user", text: option.label }]);
      if (option.action.type === "navigate") {
        router.push(option.action.href);
        return;
      }
      pushBotNode(option.action.nodeId);
    },
    [pushBotNode, router]
  );

  const sendText = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      setMessages((prev) => [...prev, { id: nextId(), sender: "user", text: trimmed }]);
      const nodeId = matchKeyword(trimmed);
      pushBotNode(nodeId);
    },
    [pushBotNode]
  );

  return (
    <ChatContext.Provider value={{ isOpen, open, close, toggle, messages, hasUnread, selectOption, sendText }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat doit être utilisé sous ChatProvider");
  return ctx;
}
