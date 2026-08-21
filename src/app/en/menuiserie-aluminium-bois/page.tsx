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

const process = [
  {
    step: "Manufacturing",
    text: "Alustar profiles are shaped at the factory before being packaged for export.",
    image: "/images/alustar-usine-profiles.jpg",
  },
  {
    step: "Transport",
    text: "Profiles and glazing are loaded and shipped to the worksite.",
    image: "/images/alustar-livraison-profiles.jpg",
  },
  {
    step: "Installation",
    text: "Doors, bays and façades are installed by our teams, indoors as well as at height.",
    image: "/images/menuiserie-facade-vitree-pose.jpg",
  },
];

export default function CarpentryPage() {
  const carpentryProducts = products.filter((p) => p.categorySlug === "menuiserie-aluminium");
  const carpentryProjects = realisations.filter((r) => r.sectorSlug === "btp-electrification");

  return (
    <Container className="py-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Dedicated service</Eyebrow>
          <h1 className="mt-3 font-display text-2xl font-semibold text-blueprint sm:text-3xl">
            Aluminium &amp; Wood Joinery
          </h1>
          <p className="mt-3 text-base leading-relaxed text-steel">
            GAT designs and builds aluminium and wood joinery for residential, commercial and
            public buildings: windows, doors, façades and verandas — with{" "}
            <strong className="text-blueprint">Alustar</strong> profiles.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden border border-steel-soft/30 lg:aspect-[3/4]">
          <Image
            src={assetPath("/images/menuiserie-facade-exterieure.jpg")}
            alt="A GAT team installing a glazed façade in Lomé"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { title: "Windows & bays", text: "Sliding and tilt-and-turn systems, single or double glazing." },
          { title: "Doors", text: "Interior and exterior hinged doors, anodised or lacquered finishes." },
          { title: "Façades & verandas", text: "Modular structures for verandas, canopies and glazed extensions." },
        ].map((s) => (
          <div key={s.title} className="border border-steel-soft/30 bg-paper p-6">
            <h3 className="font-display text-base font-semibold text-blueprint">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <SectionDivider label="Our process" />
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {process.map((p, i) => (
            <div key={p.step} className="border border-steel-soft/30 bg-paper">
              <div className="relative aspect-[4/3]">
                <Image src={assetPath(p.image)} alt={p.step} fill className="object-cover" />
                <span className="absolute left-0 top-0 bg-copper px-2.5 py-1 font-mono text-[11px] text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm font-semibold text-blueprint">{p.step}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <SectionDivider label="Alustar range" />
        {carpentryProducts.length > 0 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {carpentryProducts.map((p) => (
              <ProductCard key={p.slug} product={p} locale="en" />
            ))}
          </div>
        )}
      </div>

      {carpentryProjects.length > 0 && (
        <div className="mt-14">
          <SectionDivider label="Projects" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {carpentryProjects.map((r) => (
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

      <div className="mt-14">
        <SectionDivider label="Worksite gallery" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden border border-steel-soft/30">
            <Image src={assetPath("/images/menuiserie-echafaudage-facade.jpg")} alt="Glazed façade being installed on scaffolding" fill className="object-cover" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-steel-soft/30">
            <Image src={assetPath("/images/menuiserie-facade-jour.jpg")} alt="Completed glazed façade" fill className="object-cover" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-steel-soft/30">
            <Image src={assetPath("/images/menuiserie-pose-porte-vitree.jpg")} alt="GAT team installing an aluminium glazed door" fill className="object-cover" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-steel-soft/30">
            <Image src={assetPath("/images/menuiserie-equipe-celebration.jpg")} alt="GAT team after completing an aluminium joinery installation" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border border-steel-soft/30 bg-mist-2 p-8">
        <div>
          <h2 className="font-display text-xl font-semibold text-blueprint">Have a project to quote?</h2>
          <p className="mt-1 text-sm text-steel">Send us your dimensions, and we&apos;ll get back to you with a detailed quote.</p>
        </div>
        <Button href="/en/contact" variant="copper">
          Request a quote <ArrowRight size={16} />
        </Button>
      </div>
    </Container>
  );
}
