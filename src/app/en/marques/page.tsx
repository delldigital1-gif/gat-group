import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { BrandCard } from "@/components/catalogue/BrandCard";
import { brands } from "@/lib/data/brands";

export default function BrandsPage() {
  return (
    <Container className="py-12">
      <Eyebrow>Partner brands</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-blueprint sm:text-3xl">
        Official partner of leading global brands
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
        GAT represents and distributes internationally recognised brands, selected for their
        reliability in demanding industrial environments.
      </p>

      <SectionDivider />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => (
          <BrandCard key={b.slug} brand={b} locale="en" />
        ))}
      </div>

      <div className="mt-14 border border-steel-soft/30 bg-mist-2 p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
          Also covered — spare parts (Motopart network)
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
