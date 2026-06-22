import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { sectors } from "@/lib/data/sectors";
import { brands } from "@/lib/data/brands";

export default function SectorsPage() {
  return (
    <Container className="py-12">
      <Eyebrow>Nos secteurs</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-blueprint sm:text-4xl">
        Une réponse spécialisée, secteur par secteur
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
        La bonne connaissance de son métier et sa capacité à fournir une réponse spécialisée ont
        permis à GAT de satisfaire une clientèle industrielle dans les secteurs suivants.
      </p>

      <SectionDivider />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {sectors.map((sector) => {
          const relatedBrands = brands.filter((b) => b.sectors.includes(sector.slug));
          return (
            <div
              key={sector.slug}
              id={sector.slug}
              className="border border-steel-soft/30 bg-paper p-6 scroll-mt-24"
            >
              <h2 className="font-display text-lg font-semibold text-blueprint">{sector.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel">{sector.description}</p>
              {relatedBrands.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {relatedBrands.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/marques/${b.slug}`}
                      className="font-mono text-[11px] uppercase tracking-[0.06em] text-copper hover:underline"
                    >
                      {b.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href={`/catalogue?secteur=${sector.slug}`}
                className="mt-4 flex items-center gap-1.5 text-sm font-medium text-blueprint hover:text-copper"
              >
                Voir les produits du secteur <ArrowRight size={14} />
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
