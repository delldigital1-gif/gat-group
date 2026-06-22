import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { brands, getBrand } from "@/lib/data/brands";
import { products } from "@/lib/data/products";
import { getSector } from "@/lib/data/sectors";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const brandProducts = products.filter((p) => p.brandSlug === brand.slug);

  return (
    <Container className="py-12">
      <Link href="/marques" className="flex items-center gap-1.5 text-sm font-medium text-steel hover:text-copper">
        <ArrowLeft size={15} /> Toutes les marques
      </Link>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
        <div>
          <Eyebrow>{brand.country}</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold text-blueprint sm:text-4xl">
            {brand.name}
          </h1>
          <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.08em] text-copper">{brand.tagline}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-steel">{brand.description}</p>
          {brand.website && (
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-1.5 text-sm font-medium text-blueprint hover:text-copper"
            >
              Site officiel {brand.name} <ExternalLink size={14} />
            </a>
          )}
        </div>
        <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-steel-soft/40 p-2">
          {brand.logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- logo externe hotlinké, pas d'optimisation next/image nécessaire pour ce visuel temporaire
            <img src={brand.logoUrl} alt={`Logo ${brand.name}`} className="h-full w-full object-contain" />
          ) : (
            <span className="font-display text-2xl font-semibold text-blueprint">{brand.logoInitials}</span>
          )}
        </div>
      </div>

      {brand.sectors.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {brand.sectors.map((s) => {
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
      )}

      <div className="mt-12">
        <SectionDivider label={`Produits ${brand.name}`} />
        {brandProducts.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brandProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-steel">
            Le catalogue détaillé de cette marque est en cours de constitution — contactez-nous
            pour un produit spécifique.
          </p>
        )}
      </div>
    </Container>
  );
}
