import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ProductActions } from "@/components/catalogue/ProductActions";
import { products, getProduct } from "@/lib/data/products";
import { getBrand } from "@/lib/data/brands";
import { getCategory } from "@/lib/data/categories";
import { getSector } from "@/lib/data/sectors";

const availabilityLabel = {
  stock: "En stock",
  "sur-commande": "Sur commande",
  import: "Import",
} as const;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const brand = getBrand(product.brandSlug);
  const category = getCategory(product.categorySlug);

  return (
    <Container className="py-12">
      <Link href="/catalogue" className="flex items-center gap-1.5 text-sm font-medium text-steel hover:text-copper">
        <ArrowLeft size={15} /> Retour au catalogue
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="blueprint-corners flex aspect-[4/3] items-center justify-center border border-steel-soft/30 bg-mist-2 bg-[linear-gradient(0deg,transparent_24%,var(--color-steel-soft)_25%,var(--color-steel-soft)_26%,transparent_27%,transparent_74%,var(--color-steel-soft)_75%,var(--color-steel-soft)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,var(--color-steel-soft)_25%,var(--color-steel-soft)_26%,transparent_27%,transparent_74%,var(--color-steel-soft)_75%,var(--color-steel-soft)_76%,transparent_77%,transparent)] bg-[length:32px_32px]">
          <span className="font-display text-5xl font-semibold text-blueprint/25">
            {brand?.logoInitials ?? "GAT"}
          </span>
        </div>

        <div>
          <div className="flex items-center justify-between">
            {brand && <Eyebrow>{brand.name}</Eyebrow>}
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Réf. {product.reference}
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold text-blueprint">{product.name}</h1>
          <p className="mt-3 text-base leading-relaxed text-steel">{product.description}</p>

          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-copper">
            {availabilityLabel[product.availability]}
            {category && <span className="text-steel"> · {category.name}</span>}
          </p>

          <div className="mt-6 border border-steel-soft/30">
            <p className="border-b border-steel-soft/20 bg-mist-2 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
              Fiche technique
            </p>
            <dl>
              {product.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex justify-between px-4 py-2.5 text-sm ${i % 2 === 0 ? "bg-paper" : "bg-mist"}`}
                >
                  <dt className="text-steel">{s.label}</dt>
                  <dd className="font-mono text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-7">
            <ProductActions productSlug={product.slug} />
          </div>

          <button className="mt-4 flex items-center gap-2 text-sm font-medium text-steel hover:text-copper" disabled>
            <FileDown size={15} /> Fiche PDF — bientôt disponible
          </button>
        </div>
      </div>

      {product.sectorSlugs.length > 0 && (
        <div className="mt-12">
          <SectionDivider label="Secteurs concernés" />
          <div className="mt-4 flex flex-wrap gap-2">
            {product.sectorSlugs.map((s) => {
              const sector = getSector(s);
              if (!sector) return null;
              return (
                <Link
                  key={s}
                  href={`/secteurs#${s}`}
                  className="border border-steel-soft/40 px-3 py-1.5 text-sm text-blueprint hover:border-copper hover:text-copper"
                >
                  {sector.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
}
