import Image from "next/image";
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
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Nos secteurs</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold text-blueprint sm:text-4xl">
            Une réponse spécialisée, secteur par secteur
          </h1>
          <p className="mt-3 text-base leading-relaxed text-steel">
            La bonne connaissance de son métier et sa capacité à fournir une réponse spécialisée
            ont permis à GAT de satisfaire une clientèle industrielle dans les secteurs suivants.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-steel-soft/30 lg:aspect-[16/11]">
          <Image
            src="/images/eau-bassin-reservoir.jpg"
            alt="Bassin de rétention d'eau — projet eau & assainissement suivi par GAT"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

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
