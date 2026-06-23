"use client";

import Link from "next/link";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { Product } from "@/lib/types";
import { getBrand } from "@/lib/data/brands";
import { useQuote } from "@/lib/quote-context";
import { assetPath } from "@/lib/asset-path";

const availabilityLabel: Record<Product["availability"], string> = {
  stock: "En stock",
  "sur-commande": "Sur commande",
  import: "Import",
};

const availabilityClass: Record<Product["availability"], string> = {
  stock: "text-verdigris border-verdigris/40",
  "sur-commande": "text-copper border-copper/40",
  import: "text-steel border-steel/40",
};

export function ProductCard({ product }: { product: Product }) {
  const brand = getBrand(product.brandSlug);
  const { addItem } = useQuote();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.slug);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="blueprint-corners flex flex-col border border-steel-soft/30 bg-paper transition-colors hover:border-steel">
      <div className="flex items-center justify-between border-b border-steel-soft/20 px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel">
          Réf. {product.reference}
        </span>
        <span
          className={`rounded-[2px] border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] ${availabilityClass[product.availability]}`}
        >
          {availabilityLabel[product.availability]}
        </span>
      </div>

      <Link href={`/catalogue/${product.slug}`} className="block">
        {product.imageUrl ? (
          <div className="relative h-32 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element -- image locale rendue dans une carte de taille variable, fill+next/image ajouterait peu ici */}
            <img src={assetPath(product.imageUrl)} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ) : (
          <div className="flex h-32 items-center justify-center bg-mist-2 bg-[linear-gradient(0deg,transparent_24%,var(--color-steel-soft)_25%,var(--color-steel-soft)_26%,transparent_27%,transparent_74%,var(--color-steel-soft)_75%,var(--color-steel-soft)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,var(--color-steel-soft)_25%,var(--color-steel-soft)_26%,transparent_27%,transparent_74%,var(--color-steel-soft)_75%,var(--color-steel-soft)_76%,transparent_77%,transparent)] bg-[length:24px_24px] opacity-90">
            <span className="font-display text-2xl font-semibold text-blueprint/30">
              {brand?.logoInitials ?? "GAT"}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col px-4 py-4">
        {brand && (
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-copper">{brand.name}</span>
        )}
        <Link href={`/catalogue/${product.slug}`}>
          <h3 className="mt-1 font-display text-base font-semibold text-blueprint hover:text-copper">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-sm leading-snug text-steel">{product.shortDescription}</p>

        <dl className="mt-3 space-y-1 border-t border-dashed border-steel-soft/40 pt-3">
          {product.specs.slice(0, 2).map((s) => (
            <div key={s.label} className="flex justify-between gap-2 font-mono text-[11px]">
              <dt className="text-steel">{s.label}</dt>
              <dd className="text-ink">{s.value}</dd>
            </div>
          ))}
        </dl>

        <button
          onClick={handleAdd}
          className={`mt-4 flex items-center justify-center gap-2 rounded-[2px] border px-3 py-2 text-sm font-medium transition-colors ${
            added
              ? "border-verdigris bg-verdigris/10 text-verdigris"
              : "border-blueprint text-blueprint hover:bg-blueprint hover:text-white"
          }`}
        >
          {added ? <Check size={15} /> : <Plus size={15} />}
          {added ? "Ajouté au devis" : "Ajouter au devis"}
        </button>
      </div>
    </div>
  );
}
