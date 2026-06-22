import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { BrandCard } from "@/components/catalogue/BrandCard";
import { brands } from "@/lib/data/brands";

export default function BrandsPage() {
  return (
    <Container className="py-12">
      <Eyebrow>Marques partenaires</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-blueprint sm:text-4xl">
        Partenaire officiel de marques mondiales de référence
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
        GAT représente et distribue des marques reconnues internationalement, sélectionnées pour
        leur fiabilité dans des environnements industriels exigeants.
      </p>

      <SectionDivider />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => (
          <BrandCard key={b.slug} brand={b} />
        ))}
      </div>

      <div className="mt-14 border border-steel-soft/30 bg-mist-2 p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
          Également couvertes — pièces de rechange (réseau Motopart)
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-display text-sm font-medium text-blueprint">
          {["Caterpillar", "Volvo", "Komatsu", "JCB", "Cummins", "Perkins", "Hitachi", "Doosan", "Iveco", "Toyota"].map(
            (name) => (
              <span key={name}>{name}</span>
            )
          )}
        </div>
      </div>
    </Container>
  );
}
