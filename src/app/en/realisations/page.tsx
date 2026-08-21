import { Container } from "@/components/layout/Container";
import { assetPath } from "@/lib/asset-path";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { realisations } from "@/lib/data/realisations";
import { getSector } from "@/lib/data/sectors";

export default function RealisationsPage() {
  return (
    <Container className="py-12">
      <Eyebrow>Our projects</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-blueprint sm:text-3xl">
        Projects completed on the ground
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
        A look at the worksites and supplies delivered by GAT for its institutional and private
        clients.
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
                  src={assetPath(r.imageUrl)}
                  alt={r.titleEn}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
                  <span>{r.year}</span>
                  <span>{r.location}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-blueprint">{r.titleEn}</h3>
                <p className="mt-1 text-sm font-medium text-copper">{r.client}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{r.descriptionEn}</p>
                {sector && (
                  <p className="mt-4 border-t border-dashed border-steel-soft/40 pt-3 font-mono text-[11px] text-steel-soft">
                    Sector — {sector.nameEn}
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
