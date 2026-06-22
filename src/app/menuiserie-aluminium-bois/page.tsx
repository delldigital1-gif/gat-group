import Image from "next/image";
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
    step: "Transport",
    text: "Les vitrages et profilés sont conditionnés et acheminés jusqu'au chantier.",
    image: "/images/menuiserie-livraison-vitrage.jpg",
  },
  {
    step: "Pose",
    text: "Portes, baies et façades sont posées par nos équipes, à l'intérieur comme en hauteur.",
    image: "/images/menuiserie-pose-interieur.jpg",
  },
  {
    step: "Finition",
    text: "Façade vitrée terminée, prête à l'usage — ici sur un bâtiment tertiaire à Lomé.",
    image: "/images/menuiserie-facade-exterieure.jpg",
  },
];

export default function CarpentryPage() {
  const carpentryProducts = products.filter((p) => p.categorySlug === "menuiserie-aluminium");
  const carpentryProjects = realisations.filter((r) => r.sectorSlug === "btp-electrification");

  return (
    <Container className="py-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Service dédié</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold text-blueprint sm:text-4xl">
            Menuiserie Aluminium &amp; Bois
          </h1>
          <p className="mt-3 text-base leading-relaxed text-steel">
            GAT conçoit et réalise des ouvrages de menuiserie aluminium et bois pour le
            résidentiel, le tertiaire et les bâtiments publics : fenêtres, portes, façades et
            vérandas — avec les profilés <strong className="text-blueprint">Maxwill</strong>.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden border border-steel-soft/30 lg:aspect-[3/4]">
          <Image
            src="/images/menuiserie-facade-exterieure.jpg"
            alt="Pose d'une façade vitrée par une équipe GAT à Lomé"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { title: "Fenêtres & baies", text: "Systèmes coulissants et oscillo-battants, simple ou double vitrage." },
          { title: "Portes", text: "Portes battantes intérieures et extérieures, finitions anodisées ou laquées." },
          { title: "Façades & vérandas", text: "Structures modulaires pour vérandas, auvents et extensions vitrées." },
        ].map((s) => (
          <div key={s.title} className="border border-steel-soft/30 bg-paper p-6">
            <h3 className="font-display text-base font-semibold text-blueprint">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <SectionDivider label="Notre process" />
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {process.map((p, i) => (
            <div key={p.step} className="border border-steel-soft/30 bg-paper">
              <div className="relative aspect-[4/3]">
                <Image src={p.image} alt={p.step} fill className="object-cover" />
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
        <SectionDivider label="Gamme Maxwill" />
        {carpentryProducts.length > 0 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {carpentryProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>

      {carpentryProjects.length > 0 && (
        <div className="mt-14">
          <SectionDivider label="Réalisations" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {carpentryProjects.map((r) => (
              <div key={r.slug} className="flex gap-4 border border-steel-soft/30 bg-paper p-5">
                {r.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element -- photo externe hotlinkée (ancien site GAT), temporaire en attendant l'auto-hébergement
                  <img
                    src={r.imageUrl}
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

      <div className="mt-14">
        <SectionDivider label="Galerie chantiers" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden border border-steel-soft/30">
            <Image src="/images/menuiserie-facade-immeuble.jpg" alt="Façade vitrée en cours de pose" fill className="object-cover" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-steel-soft/30">
            <Image src="/images/menuiserie-chantier-soir.jpg" alt="Pose de baies vitrées en fin de chantier" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border border-steel-soft/30 bg-mist-2 p-8">
        <div>
          <h2 className="font-display text-xl font-semibold text-blueprint">Un ouvrage à chiffrer ?</h2>
          <p className="mt-1 text-sm text-steel">Envoyez vos dimensions, nous revenons avec un devis détaillé.</p>
        </div>
        <Button href="/contact" variant="copper">
          Demander un devis <ArrowRight size={16} />
        </Button>
      </div>
    </Container>
  );
}
