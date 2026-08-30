"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Trash2, FileText, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useQuote } from "@/lib/quote-context";
import { getProduct } from "@/lib/data/products";
import { getBrand } from "@/lib/data/brands";
import { buildQuoteWhatsAppUrl } from "@/lib/whatsapp-quote";

export default function QuotePage() {
  const { items, removeItem, setQuantity, clear } = useQuote();
  const [submitted, setSubmitted] = useState(false);

  const lines = items
    .map((item) => ({ item, product: getProduct(item.productSlug) }))
    .filter((l) => l.product);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = buildQuoteWhatsAppUrl(
      items,
      {
        name: String(formData.get("name") ?? ""),
        company: String(formData.get("company") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        email: String(formData.get("email") ?? ""),
        notes: String(formData.get("notes") ?? ""),
      },
      "en"
    );
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    clear();
  };

  if (submitted) {
    return (
      <Container className="py-20 text-center">
        <CheckCircle2 size={40} className="mx-auto text-verdigris" />
        <h1 className="mt-5 font-display text-2xl font-semibold text-blueprint">
          WhatsApp opened in a new tab
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-steel">
          Your list and details are pre-filled in the message — just hit send in WhatsApp so a
          GAT sales rep can get back to you. Nothing is sent until you press send in WhatsApp.
        </p>
        <Link
          href="/en/catalogue"
          className="mt-6 inline-flex items-center gap-2 border border-blueprint px-5 py-2.5 text-sm font-medium text-blueprint hover:bg-blueprint hover:text-white"
        >
          Back to catalogue
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-12">
      <Eyebrow>Quote list</Eyebrow>
      <h1 className="mt-3 font-display text-2xl font-semibold text-blueprint sm:text-3xl">
        Your quote request
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">
        Check the quantities, then send your request in a single message. No payment is required
        at this stage — GAT will get back to you with a detailed quote.
      </p>

      <SectionDivider label={`${lines.length} item${lines.length !== 1 ? "s" : ""}`} />

      {lines.length === 0 ? (
        <div className="mt-10 border border-dashed border-steel-soft/50 p-10 text-center">
          <FileText size={28} className="mx-auto text-steel-soft" />
          <p className="mt-4 font-display text-lg font-semibold text-blueprint">
            Your quote list is empty
          </p>
          <p className="mt-2 text-sm text-steel">
            Browse the catalogue and add the products you&apos;re interested in.
          </p>
          <Link
            href="/en/catalogue"
            className="mt-5 inline-flex items-center gap-2 border border-copper bg-copper px-5 py-2.5 text-sm font-medium text-white hover:bg-copper-2"
          >
            Browse the catalogue
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="border border-steel-soft/30">
            {lines.map(({ item, product }) => {
              if (!product) return null;
              const brand = getBrand(product.brandSlug);
              return (
                <div
                  key={item.productSlug}
                  className="flex flex-wrap items-center justify-between gap-4 border-b border-steel-soft/20 px-4 py-4 last:border-b-0"
                >
                  <div>
                    {brand && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-copper">
                        {brand.name}
                      </span>
                    )}
                    <Link href={`/en/catalogue/${product.slug}`} className="block font-display text-sm font-semibold text-blueprint hover:text-copper">
                      {product.nameEn}
                    </Link>
                    <span className="font-mono text-[11px] text-steel">Ref. {product.reference}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-steel-soft/40">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => setQuantity(item.productSlug, item.quantity - 1)}
                        className="p-2 text-blueprint hover:text-copper"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-9 text-center font-mono text-sm">{item.quantity}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => setQuantity(item.productSlug, item.quantity + 1)}
                        className="p-2 text-blueprint hover:text-copper"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      aria-label="Remove from list"
                      onClick={() => removeItem(item.productSlug)}
                      className="p-2 text-steel hover:text-copper"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="border border-steel-soft/30 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel">Your details</p>
            <div className="mt-4 space-y-3">
              <input
                required
                name="name"
                placeholder="Full name *"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <input
                name="company"
                placeholder="Company / institution"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone *"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <textarea
                rows={3}
                name="notes"
                placeholder="Details about your needs (timeline, delivery location...)"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full border border-copper bg-copper px-5 py-2.5 text-sm font-medium text-white hover:bg-copper-2"
            >
              Send my request via WhatsApp
            </button>
            <p className="mt-3 text-center text-[11px] text-steel-soft">
              Opens WhatsApp with your list and details pre-filled — just send the message. No
              banking information is requested at this stage.
            </p>
          </form>
        </div>
      )}
    </Container>
  );
}
