import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { realisations } from "@/lib/data/realisations";
import { getSector } from "@/lib/data/sectors";

export default function RealisationsPage() {
  return (
    <Container className="py-12">
      <Eyebrow>Nos réalisations</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-blueprint sm:text-4xl">
        Des projets exécutés sur le terrain
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
        Un aperçu des chantiers et fournitures réalisés par GAT pour ses clients institutionnels
        et privés.
      </p>

      <SectionDivider />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {realisations.map((r) => {
          const sector = getSector(r.sectorSlug);
          return (
            <div key={r.slug} className="blueprint-corners border border-steel-soft/30 bg-paper">
              {r.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element -- photo externe hotlinkée (ancien site GAT), temporaire en attendant l'auto-hébergement
                <img
                  src={r.imageUrl}
                  alt={r.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
                  <span>{r.year}</span>
                  <span>{r.location}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-blueprint">{r.title}</h3>
                <p className="mt-1 text-sm font-medium text-copper">{r.client}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{r.description}</p>
                {sector && (
                  <p className="mt-4 border-t border-dashed border-steel-soft/40 pt-3 font-mono text-[11px] text-steel-soft">
                    Secteur — {sector.name}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
