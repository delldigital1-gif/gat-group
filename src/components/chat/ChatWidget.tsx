"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useChat } from "@/lib/chat-context";
import { Locale } from "@/lib/i18n/dictionary";

const strings = {
  fr: {
    assistantLabel: "Assistant GAT",
    instantReplies: "Réponses instantanées",
    close: "Fermer l'assistant",
    placeholder: "Écrivez votre question…",
    send: "Envoyer",
    openAssistant: "Ouvrir l'assistant GAT",
    closeAssistant: "Fermer l'assistant GAT",
  },
  en: {
    assistantLabel: "GAT Assistant",
    instantReplies: "Instant replies",
    close: "Close the assistant",
    placeholder: "Type your question…",
    send: "Send",
    openAssistant: "Open the GAT assistant",
    closeAssistant: "Close the GAT assistant",
  },
} as const;

export function ChatWidget({ locale }: { locale: Locale }) {
  const t = strings[locale];
  const { isOpen, toggle, close, messages, hasUnread, selectOption, sendText } = useChat();
  const [draft, setDraft] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendText(draft);
    setDraft("");
  };

  // Seules les options du tout dernier message du bot restent cliquables —
  // évite d'accumuler des boutons obsolètes au fil de la conversation.
  const lastBotIndex = messages.reduce((acc, m, i) => (m.sender === "bot" ? i : acc), -1);

  return (
    <>
      {isOpen && (
        <div
          role="dialog"
          aria-label={t.assistantLabel}
          className="fixed bottom-24 right-5 z-50 flex h-[min(560px,calc(100vh-140px))] w-[min(360px,calc(100vw-2.5rem))] flex-col border border-steel-soft/40 bg-paper shadow-2xl"
        >
          <div className="flex items-center justify-between bg-blueprint px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-copper">
                <Bot size={16} className="text-white" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white">{t.assistantLabel}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-steel-soft">
                  {t.instantReplies}
                </p>
              </div>
            </div>
            <button
              aria-label={t.close}
              onClick={close}
              className="p-1.5 text-steel-soft hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="thin-scroll flex-1 space-y-3 overflow-y-auto bg-mist px-4 py-4">
            {messages.map((m, i) => (
              <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[85%]">
                  <div
                    className={`whitespace-pre-line px-3 py-2 text-sm leading-relaxed ${
                      m.sender === "user"
                        ? "bg-blueprint text-white"
                        : "border border-steel-soft/30 bg-paper text-ink"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.sender === "bot" && m.options && i === lastBotIndex && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.options.map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => selectOption(opt)}
                          className="border border-copper px-2.5 py-1.5 text-left text-xs font-medium text-copper transition-colors hover:bg-copper hover:text-white"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-steel-soft/30 bg-paper p-3">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 border border-steel-soft/40 bg-mist px-3 py-2 text-sm focus:border-blueprint focus:outline-none"
            />
            <button
              type="submit"
              aria-label={t.send}
              className="flex items-center justify-center border border-copper bg-copper p-2.5 text-white hover:bg-copper-2"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={toggle}
        aria-label={isOpen ? t.closeAssistant : t.openAssistant}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-copper text-white shadow-lg transition-transform hover:scale-105 hover:bg-copper-2"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && hasUnread && (
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-paper bg-verdigris" />
        )}
      </button>
    </>
  );
}
