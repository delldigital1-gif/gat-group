import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileDown } from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ProductActions } from "@/components/catalogue/ProductActions";
import { ProductGallery } from "@/components/catalogue/ProductGallery";
import { products, getProduct } from "@/lib/data/products";
import { getBrand } from "@/lib/data/brands";
import { getCategory } from "@/lib/data/categories";
import { getSector } from "@/lib/data/sectors";

const availabilityLabel = {
  stock: "In stock",
  "sur-commande": "Made to order",
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
      <Link href="/en/catalogue" className="flex items-center gap-1.5 text-sm font-medium text-steel hover:text-copper">
        <ArrowLeft size={15} /> Back to catalogue
      </Link>

      <div className="mt-6 max-w-2xl">
        <div className="flex items-center justify-between">
          {brand && <Eyebrow>{brand.name}</Eyebrow>}
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            Ref. {product.reference}
          </span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-semibold text-blueprint">{product.nameEn}</h1>
        <p className="mt-3 text-base leading-relaxed text-steel">{product.descriptionEn}</p>

        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.08em] text-copper">
          {availabilityLabel[product.availability]}
          {category && <span className="text-steel"> · {category.nameEn}</span>}
        </p>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <ProductGallery
          images={product.imageUrls ?? (product.imageUrl ? [product.imageUrl] : [])}
          alt={product.nameEn}
          fallbackInitials={brand?.logoInitials ?? "GAT"}
          locale="en"
        />

        <div>
          <div className="border border-steel-soft/30">
            <p className="border-b border-steel-soft/20 bg-mist-2 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
              Technical sheet
            </p>
            <dl>
              {product.specsEn.map((s, i) => (
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
            <ProductActions productSlug={product.slug} locale="en" />
          </div>

          {product.datasheetUrl ? (
            <a
              href={assetPath(product.datasheetUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-sm font-medium text-copper hover:underline"
            >
              <FileDown size={15} /> {brand?.name} catalogue (PDF)
            </a>
          ) : (
            <button className="mt-4 flex items-center gap-2 text-sm font-medium text-steel hover:text-copper" disabled>
              <FileDown size={15} /> PDF datasheet — coming soon
            </button>
          )}
        </div>
      </div>

      {product.sectorSlugs.length > 0 && (
        <div className="mt-12">
          <SectionDivider label="Related sectors" />
          <div className="mt-4 flex flex-wrap gap-2">
            {product.sectorSlugs.map((s) => {
              const sector = getSector(s);
              if (!sector) return null;
              return (
                <Link
                  key={s}
                  href={`/en/secteurs#${s}`}
                  className="border border-steel-soft/40 px-3 py-1.5 text-sm text-blueprint hover:border-copper hover:text-copper"
                >
                  {sector.nameEn}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
}
