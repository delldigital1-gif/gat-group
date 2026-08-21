"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { products } from "@/lib/data/products";

export default function CataloguePage() {
  return (
    <Suspense fallback={null}>
      <CatalogueContent />
    </Suspense>
  );
}

function CatalogueContent() {
  const searchParams = useSearchParams();
  const [brand] = useState(() => searchParams.get("marque") ?? "all");
  const [category] = useState(() => searchParams.get("categorie") ?? "all");
  const [sector] = useState(() => searchParams.get("secteur") ?? "all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (brand !== "all" && p.brandSlug !== brand) return false;
      if (category !== "all" && p.categorySlug !== category) return false;
      if (sector !== "all" && !p.sectorSlugs.includes(sector)) return false;
      return true;
    });
  }, [brand, category, sector]);

  return (
    <Container className="py-12">
      <Eyebrow>Product catalogue</Eyebrow>
      <h1 className="mt-3 font-display text-2xl font-semibold text-blueprint sm:text-3xl">
        Find the equipment, add it to your quote
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">
        A selection of ranges actually distributed by GAT — Xylem, Sedis, Castrol, LOUKIL and
        OMICRON. No online payment: build your list, we&apos;ll send you a quote.
      </p>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
        {filtered.length.toString().padStart(2, "0")} result{filtered.length !== 1 ? "s" : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} locale="en" />
          ))}
        </div>
      ) : (
        <div className="mt-10 border border-dashed border-steel-soft/50 p-10 text-center">
          <p className="font-display text-lg font-semibold text-blueprint">No results</p>
          <p className="mt-2 text-sm text-steel">
            Contact us directly for a specific product not yet listed.
          </p>
        </div>
      )}
    </Container>
  );
}
