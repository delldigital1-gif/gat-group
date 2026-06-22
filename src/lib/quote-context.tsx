"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { QuoteItem } from "@/lib/types";

const STORAGE_KEY = "gat-quote-list";

type QuoteContextValue = {
  items: QuoteItem[];
  addItem: (productSlug: string, quantity?: number) => void;
  removeItem: (productSlug: string) => void;
  setQuantity: (productSlug: string, quantity: number) => void;
  clear: () => void;
  count: number;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Lecture volontairement différée à l'after-mount : window.localStorage
  // n'existe pas côté serveur, et lire/écrire l'état au rendu créerait un
  // décalage d'hydratation entre le HTML serveur (liste vide) et le client.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydratation unique depuis localStorage après montage, comportement voulu
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // localStorage indisponible (navigation privée, etc.) — on continue sans.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // silencieux : la persistance n'est qu'un confort, pas une nécessité.
    }
  }, [items, hydrated]);

  const addItem = (productSlug: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productSlug === productSlug);
      if (existing) {
        return prev.map((i) =>
          i.productSlug === productSlug ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { productSlug, quantity }];
    });
  };

  const removeItem = (productSlug: string) => {
    setItems((prev) => prev.filter((i) => i.productSlug !== productSlug));
  };

  const setQuantity = (productSlug: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) => (i.productSlug === productSlug ? { ...i, quantity: Math.max(1, quantity) } : i))
    );
  };

  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);

  return (
    <QuoteContext.Provider value={{ items, addItem, removeItem, setQuantity, clear, count }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote doit être utilisé sous QuoteProvider");
  return ctx;
}
