import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { categories, getCategory } from "@/lib/data/categories";
import { products } from "@/lib/data/products";
import { getBrand } from "@/lib/data/brands";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.categorySlug === category.slug);
  const brandSlugs = Array.from(new Set(categoryProducts.map((p) => p.brandSlug)));
  const categoryBrands = brandSlugs.map((s) => getBrand(s)).filter((b) => b !== undefined);

  return (
    <Container className="py-12">
      <Link href="/catalogue" className="flex items-center gap-1.5 text-sm font-medium text-steel hover:text-copper">
        <ArrowLeft size={15} /> Tout le catalogue
      </Link>

      <div className="mt-6 max-w-2xl">
        <Eyebrow>Rubrique catalogue</Eyebrow>
        <h1 className="mt-3 font-display text-2xl font-semibold text-blueprint sm:text-3xl">
          {category.name}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-steel">{category.description}</p>

        {categoryBrands.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {categoryBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/marques/${b.slug}`}
                className="border border-steel-soft/40 px-3 py-1.5 text-sm text-blueprint hover:border-copper hover:text-copper"
              >
                {b.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
        {categoryProducts.length.toString().padStart(2, "0")} produit
        {categoryProducts.length > 1 ? "s" : ""}
      </p>

      {categoryProducts.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-10 border border-dashed border-steel-soft/50 p-10 text-center">
          <p className="font-display text-lg font-semibold text-blueprint">
            Catalogue en cours de constitution
          </p>
          <p className="mt-2 text-sm text-steel">
            Contactez-nous directement pour un produit spécifique de cette rubrique.
          </p>
        </div>
      )}
    </Container>
  );
}
