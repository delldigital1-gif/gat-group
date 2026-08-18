import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { sectors } from "@/lib/data/sectors";
import { pillars, getPillar } from "@/lib/data/pillars";
import { brands } from "@/lib/data/brands";

export default function SectorsPage() {
  const centraleAchatSectors = sectors.filter((s) => s.pillar === "centrale-achat");
  const btpSector = sectors.find((s) => s.pillar === "btp");
  const menuiserie = getPillar("menuiserie")!;
  const centraleAchat = getPillar("centrale-achat")!;

  return (
    <Container className="py-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Nos secteurs</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold text-blueprint sm:text-4xl">
            Trois pôles d&apos;activité, une réponse spécialisée pour chacun
          </h1>
          <p className="mt-3 text-base leading-relaxed text-steel">
            GAT s&apos;organise autour de trois métiers : la Menuiserie, le BTP, et la Centrale
            d&apos;achat — qui représente les grandes marques internationales au service des
            secteurs suivants.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-steel-soft/30 lg:aspect-[16/11]">
          <Image
            src={assetPath("/images/eau-bassin-reservoir.jpg")}
            alt="Bassin de rétention d'eau — projet eau & assainissement suivi par GAT"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <SectionDivider />

      {/* PÔLE 1 — MENUISERIE (autonome, page dédiée) */}
      <div id={menuiserie.slug} className="scroll-mt-24 border border-steel-soft/30 bg-paper p-6">
        <h2 className="font-display text-lg font-semibold text-blueprint">{menuiserie.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-steel">{menuiserie.description}</p>
        <Link
          href={menuiserie.href}
          className="mt-4 flex items-center gap-1.5 text-sm font-medium text-blueprint hover:text-copper"
        >
          Découvrir ce pôle <ArrowRight size={14} />
        </Link>
      </div>

      {/* PÔLE 2 — BTP (autonome) */}
      {btpSector && (
        <div id="btp" className="mt-6 scroll-mt-24 border border-steel-soft/30 bg-paper p-6">
          <h2 className="font-display text-lg font-semibold text-blueprint">BTP</h2>
          <p className="mt-2 text-sm leading-relaxed text-steel">{btpSector.description}</p>
          <Link
            href={`/catalogue?secteur=${btpSector.slug}`}
            className="mt-4 flex items-center gap-1.5 text-sm font-medium text-blueprint hover:text-copper"
          >
            Voir les produits du secteur <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {/* PÔLE 3 — CENTRALE D'ACHAT (regroupe les secteurs clients) */}
      <div id={centraleAchat.slug} className="mt-10 scroll-mt-24">
        <SectionDivider label="Centrale d'achat" />
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">{centraleAchat.description}</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {centraleAchatSectors.map((sector) => {
            const relatedBrands = brands.filter((b) => b.sectors.includes(sector.slug));
            return (
              <div
                key={sector.slug}
                id={sector.slug}
                className="border border-steel-soft/30 bg-paper p-6 scroll-mt-24"
              >
                <h3 className="font-display text-lg font-semibold text-blueprint">{sector.name}</h3>
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
      </div>
    </Container>
  );
}
