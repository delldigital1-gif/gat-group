"use client";

import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { useQuote } from "@/lib/quote-context";
import { Locale, getDictionary } from "@/lib/i18n/dictionary";

export function ProductActions({ productSlug, locale = "fr" }: { productSlug: string; locale?: Locale }) {
  const dict = getDictionary(locale);
  const { addItem } = useQuote();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(productSlug, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center border border-steel-soft/40">
        <button
          aria-label={locale === "en" ? "Decrease quantity" : "Diminuer la quantité"}
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="p-2.5 text-blueprint hover:text-copper"
        >
          <Minus size={15} />
        </button>
        <span className="w-10 text-center font-mono text-sm text-ink">{quantity}</span>
        <button
          aria-label={locale === "en" ? "Increase quantity" : "Augmenter la quantité"}
          onClick={() => setQuantity((q) => q + 1)}
          className="p-2.5 text-blueprint hover:text-copper"
        >
          <Plus size={15} />
        </button>
      </div>
      <button
        onClick={handleAdd}
        className={`flex items-center gap-2 rounded-[2px] border px-5 py-2.5 text-sm font-medium transition-colors ${
          added
            ? "border-verdigris bg-verdigris/10 text-verdigris"
            : "border-copper bg-copper text-white hover:bg-copper-2"
        }`}
      >
        {added ? <Check size={16} /> : null}
        {added ? dict.common.addedToQuoteLong : dict.common.addToQuoteLong}
      </button>
    </div>
  );
}
