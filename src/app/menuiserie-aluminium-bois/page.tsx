import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { products } from "@/lib/data/products";
import { realisations } from "@/lib/data/realisations";

export default function CarpentryPage() {
  const carpentryProducts = products.filter((p) => p.categorySlug === "menuiserie-aluminium");
  const carpentryProjects = realisations.filter((r) => r.sectorSlug === "btp-electrification");

  return (
    <Container className="py-12">
      <Eyebrow>Service dédié</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-blueprint sm:text-4xl">
        Menuiserie Aluminium &amp; Bois
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
        GAT conçoit et réalise des ouvrages de menuiserie aluminium et bois pour le résidentiel,
        le tertiaire et les bâtiments publics : fenêtres, portes, façades et vérandas — avec les
        profilés <strong className="text-blueprint">Maxwill</strong>.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
