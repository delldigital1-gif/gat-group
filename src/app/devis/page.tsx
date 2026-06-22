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

export default function DevisPage() {
  const { items, removeItem, setQuantity, clear } = useQuote();
  const [submitted, setSubmitted] = useState(false);

  const lines = items
    .map((item) => ({ item, product: getProduct(item.productSlug) }))
    .filter((l) => l.product);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO (mise en production) : brancher ce formulaire sur Formspree ou
    // une fonction Supabase (table quote_requests + quote_request_items)
    // au lieu de cette simulation locale.
    setSubmitted(true);
    clear();
  };

  if (submitted) {
    return (
      <Container className="py-20 text-center">
        <CheckCircle2 size={40} className="mx-auto text-verdigris" />
        <h1 className="mt-5 font-display text-2xl font-semibold text-blueprint">Demande envoyée</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-steel">
          Votre demande de devis a bien été enregistrée. Un commercial GAT vous recontactera sous
          peu pour confirmer les disponibilités, délais et prix.
        </p>
        <Link
          href="/catalogue"
          className="mt-6 inline-flex items-center gap-2 border border-blueprint px-5 py-2.5 text-sm font-medium text-blueprint hover:bg-blueprint hover:text-white"
        >
          Retour au catalogue
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-12">
      <Eyebrow>Liste de devis</Eyebrow>
      <h1 className="mt-3 font-display text-3xl font-semibold text-blueprint sm:text-4xl">
        Votre demande de devis
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">
        Vérifiez les quantités, puis envoyez votre demande en un seul message. Aucun paiement
        n&apos;est requis à cette étape — GAT vous recontacte avec un devis détaillé.
      </p>

      <SectionDivider label={`${lines.length} article${lines.length > 1 ? "s" : ""}`} />

      {lines.length === 0 ? (
        <div className="mt-10 border border-dashed border-steel-soft/50 p-10 text-center">
          <FileText size={28} className="mx-auto text-steel-soft" />
          <p className="mt-4 font-display text-lg font-semibold text-blueprint">
            Votre liste de devis est vide
          </p>
          <p className="mt-2 text-sm text-steel">
            Parcourez le catalogue et ajoutez les produits qui vous intéressent.
          </p>
          <Link
            href="/catalogue"
            className="mt-5 inline-flex items-center gap-2 border border-copper bg-copper px-5 py-2.5 text-sm font-medium text-white hover:bg-copper-2"
          >
            Voir le catalogue
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
                    <Link href={`/catalogue/${product.slug}`} className="block font-display text-sm font-semibold text-blueprint hover:text-copper">
                      {product.name}
                    </Link>
                    <span className="font-mono text-[11px] text-steel">Réf. {product.reference}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-steel-soft/40">
                      <button
                        aria-label="Diminuer la quantité"
                        onClick={() => setQuantity(item.productSlug, item.quantity - 1)}
                        className="p-2 text-blueprint hover:text-copper"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-9 text-center font-mono text-sm">{item.quantity}</span>
                      <button
                        aria-label="Augmenter la quantité"
                        onClick={() => setQuantity(item.productSlug, item.quantity + 1)}
                        className="p-2 text-blueprint hover:text-copper"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      aria-label="Retirer de la liste"
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
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel">Vos coordonnées</p>
            <div className="mt-4 space-y-3">
              <input
                required
                placeholder="Nom et prénom *"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <input
                placeholder="Entreprise / institution"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <input
                required
                type="tel"
                placeholder="Téléphone *"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <textarea
                rows={3}
                placeholder="Précisions sur votre besoin (délai, lieu de livraison...)"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full border border-copper bg-copper px-5 py-2.5 text-sm font-medium text-white hover:bg-copper-2"
            >
              Envoyer ma demande de devis
            </button>
            <p className="mt-3 text-center text-[11px] text-steel-soft">
              Aucune information bancaire n&apos;est demandée à cette étape.
            </p>
          </form>
        </div>
      )}
    </Container>
  );
}
