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
    title: "Civil engineering",
    text: "Supplies and materials for concrete works, masonry and shell construction.",
  },
  {
    title: "Electrification",
    text: "Equipment and accessories for rural and urban electrification.",
  },
  {
    title: "Public infrastructure",
    text: "Roads, sanitation and infrastructure for local authorities and funding agencies.",
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
          <Eyebrow>Business unit</Eyebrow>
          <h1 className="mt-3 font-display text-2xl font-semibold text-blueprint sm:text-3xl">Construction</h1>
          <p className="mt-3 text-base leading-relaxed text-steel">
            {btpSector?.descriptionEn}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-steel-soft/30 lg:aspect-[16/11]">
          <Image
            src={assetPath("/images/realisation-latrines-construction.jpg")}
            alt="Construction site overseen by GAT"
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
          <SectionDivider label="Products for this sector" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {btpProducts.map((p) => (
              <ProductCard key={p.slug} product={p} locale="en" />
            ))}
          </div>
        </div>
      )}

      {btpProjects.length > 0 && (
        <div className="mt-14">
          <SectionDivider label="Projects" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {btpProjects.map((r) => (
              <div key={r.slug} className="flex gap-4 border border-steel-soft/30 bg-paper p-5">
                {r.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element -- photo externe hotlinkée (ancien site GAT), temporaire en attendant l'auto-hébergement
                  <img
                    src={assetPath(r.imageUrl)}
                    alt={r.titleEn}
                    className="h-24 w-24 shrink-0 object-cover"
                    loading="lazy"
                  />
                )}
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-copper">
                    {r.client} · {r.location} · {r.year}
                  </p>
                  <h3 className="mt-1.5 font-display text-base font-semibold text-blueprint">{r.titleEn}</h3>
                  <p className="mt-2 text-sm text-steel">{r.descriptionEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border border-steel-soft/30 bg-mist-2 p-8">
        <div>
          <h2 className="font-display text-xl font-semibold text-blueprint">Have a project to quote?</h2>
          <p className="mt-1 text-sm text-steel">Send us your requirements, and we&apos;ll get back to you with a detailed quote.</p>
        </div>
        <Button href="/en/contact" variant="copper">
          Request a quote <ArrowRight size={16} />
        </Button>
      </div>
    </Container>
  );
}
