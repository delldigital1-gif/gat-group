import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { products } from "@/lib/data/products";
import { realisations } from "@/lib/data/realisations";
import { getSector } from "@/lib/data/sectors";

const services = [
  {
    title: "Génie civil",
    text: "Fournitures et matériaux pour ouvrages en béton, maçonnerie et gros œuvre.",
  },
  {
    title: "Électrification",
    text: "Équipements et accessoires pour l'électrification rurale et urbaine.",
  },
  {
    title: "Ouvrages publics",
    text: "Voirie, assainissement et infrastructures pour collectivités et bailleurs.",
  },
];

export default function BtpPage() {
  const btpSector = getSector("btp-electrification");
  const btpProducts = products.filter((p) => p.sectorSlugs.includes("btp-electrification"));
  const btpProjects = realisations.filter((r) => r.sectorSlug === "btp-electrification");

  return (
    <Container className="py-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Pôle d&apos;activité</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold text-blueprint sm:text-4xl">BTP</h1>
          <p className="mt-3 text-base leading-relaxed text-steel">
            {btpSector?.description}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-steel-soft/30 lg:aspect-[16/11]">
          <Image
            src={assetPath("/images/realisation-latrines-construction.jpg")}
            alt="Chantier de construction suivi par GAT"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="border border-steel-soft/30 bg-paper p-6">
            <h3 className="font-display text-base font-semibold text-blueprint">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel">{s.text}</p>
          </div>
        ))}
      </div>

      {btpProducts.length > 0 && (
        <div className="mt-14">
          <SectionDivider label="Produits pour ce secteur" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {btpProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}

      {btpProjects.length > 0 && (
        <div className="mt-14">
          <SectionDivider label="Réalisations" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {btpProjects.map((r) => (
              <div key={r.slug} className="flex gap-4 border border-steel-soft/30 bg-paper p-5">
                {r.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element -- photo externe hotlinkée (ancien site GAT), temporaire en attendant l'auto-hébergement
                  <img
                    src={assetPath(r.imageUrl)}
                    alt={r.title}
                    className="h-24 w-24 shrink-0 object-cover"
                    loading="lazy"
                  />
                )}
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-copper">
                    {r.client} · {r.location} · {r.year}
                  </p>
                  <h3 className="mt-1.5 font-display text-base font-semibold text-blueprint">{r.title}</h3>
                  <p className="mt-2 text-sm text-steel">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border border-steel-soft/30 bg-mist-2 p-8">
        <div>
          <h2 className="font-display text-xl font-semibold text-blueprint">Un projet à chiffrer ?</h2>
          <p className="mt-1 text-sm text-steel">Envoyez vos besoins, nous revenons avec un devis détaillé.</p>
        </div>
        <Button href="/contact" variant="copper">
          Demander un devis <ArrowRight size={16} />
        </Button>
      </div>
    </Container>
  );
}
