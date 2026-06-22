"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { products } from "@/lib/data/products";
import { brands } from "@/lib/data/brands";
import { categories } from "@/lib/data/categories";
import { sectors } from "@/lib/data/sectors";
import { Search } from "lucide-react";

export default function CataloguePage() {
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState("all");
  const [sector, setSector] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (brand !== "all" && p.brandSlug !== brand) return false;
      if (category !== "all" && p.categorySlug !== category) return false;
      if (sector !== "all" && !p.sectorSlugs.includes(sector)) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.reference.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [brand, category, sector, query]);

  const selectClass =
    "border border-steel-soft/40 bg-paper px-3 py-2 text-sm text-ink focus:border-blueprint";

  return (
    <Container className="py-12">
      <Eyebrow>Catalogue produits</Eyebrow>
      <h1 className="mt-3 font-display text-3xl font-semibold text-blueprint sm:text-4xl">
        Trouvez l&apos;équipement, ajoutez-le à votre devis
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">
        Catalogue de démonstration construit sur les familles générales des marques distribuées
        par GAT. Aucun paiement en ligne : constituez votre liste, nous vous envoyons un devis.
      </p>

      <SectionDivider label="Filtres" />

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="flex items-center gap-2 border border-steel-soft/40 bg-paper px-3 py-2 sm:w-64">
          <Search size={15} className="text-steel-soft" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher (nom, référence)"
            className="w-full bg-transparent text-sm text-ink placeholder:text-steel-soft focus:outline-none"
          />
        </div>
        <select value={brand} onChange={(e) => setBrand(e.target.value)} className={selectClass}>
          <option value="all">Toutes les marques</option>
          {brands.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.name}
            </option>
          ))}
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClass}>
          <option value="all">Toutes les catégories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
        <select value={sector} onChange={(e) => setSector(e.target.value)} className={selectClass}>
          <option value="all">Tous les secteurs</option>
          {sectors.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
        {filtered.length.toString().padStart(2, "0")} résultat{filtered.length > 1 ? "s" : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-10 border border-dashed border-steel-soft/50 p-10 text-center">
          <p className="font-display text-lg font-semibold text-blueprint">Aucun résultat</p>
          <p className="mt-2 text-sm text-steel">
            Essayez d&apos;élargir vos filtres, ou contactez-nous directement pour un produit
            spécifique non encore référencé.
          </p>
        </div>
      )}
    </Container>
  );
}
