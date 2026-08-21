import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Nameplate } from "@/components/home/Nameplate";

const timeline = [
  {
    year: "2007",
    title: "GAT is founded",
    text: "Global African Trading is founded in Lomé, specialising in the supply of industrial equipment.",
  },
  {
    year: "2010",
    title: "Partnership with Groupe LOUKIL",
    text: "GAT becomes a partner of the Tunisian industrial giant LOUKIL, manufacturer and distributor of certified products for the African market.",
  },
  {
    year: "2017",
    title: "Expansion into construction",
    text: "GAT extends its scope to project execution: construction, rural and urban electrification in LV, MV and HV.",
  },
  {
    year: "Today",
    title: "A regional network",
    text: "GAT operates across all of West Africa, with a dedicated store for genuine Toyota parts in Lomé.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-stretch">
        <div>
          <Eyebrow>About us</Eyebrow>
          <h1 className="mt-3 font-display text-2xl font-semibold text-blueprint sm:text-3xl">
            Specialist in industrial equipment supply and aluminium, wood &amp; metal joinery
          </h1>
          <p className="mt-5 text-base leading-relaxed text-steel">
            Global African Trading (GAT) is a company incorporated under Togolese law,
            specialising in the supply of industrial equipment. Backed by its experience since
            2007 and its international partners, GAT is present across diverse sectors ranging
            from electricity to agriculture, including sanitation, drinking water supply,
            construction, energy, telecommunications and the environment.
          </p>
          <p className="mt-4 text-base leading-relaxed text-steel">
            GAT distributes solar generators and lighting pylons, agricultural machinery,
            sanitation and water supply equipment, chemical fertilizers, Castrol lubricants, as
            well as medical equipment and laboratory chemicals. A dedicated network — Motopart —
            completes the offering with spare parts for heavy equipment (Caterpillar, Volvo,
            Komatsu, JCB, Cummins, Perkins, Hitachi, Doosan...) and light vehicles.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden border border-steel-soft/30 lg:aspect-auto lg:h-full lg:min-h-[360px]">
          <Image
            src={assetPath("/images/sedis-atelier-pignons.jpg")}
            alt="Quality control of sprockets and chains in a partner workshop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-10">
        <Nameplate locale="en" />
      </div>

      <div className="mt-14">
        <SectionDivider label="Our history" />
        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {timeline.map((step) => (
            <div key={step.year} className="border border-steel-soft/30 bg-paper p-5">
              <span className="block h-1.5 w-7 bg-copper" aria-hidden />
              <p className="mt-3 font-mono text-sm font-medium text-copper">{step.year}</p>
              <h3 className="mt-2 font-display text-base font-semibold text-blueprint">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center border border-steel-soft/30 p-6">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden border border-steel-soft/40">
          <Image
            src={assetPath("/images/equipe-site-industriel.jpg")}
            alt="GAT manager visiting a partner industrial site"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-display text-base font-semibold text-blueprint">Gérald TONA</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-copper">Managing Director</p>
          <p className="mt-2 text-sm text-steel">
            Visiting a partner industrial site — staying close to the equipment GAT recommends to
            its clients.
          </p>
        </div>
      </div>
      <div className="mt-14">
        <SectionDivider label="Our team" />
        <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_1.1fr] sm:items-center">
          <p className="text-base leading-relaxed text-steel">
            Technicians, installers and sales staff work daily on worksites and at our clients&apos;
            premises — anywhere in West Africa — to deliver, install and maintain the equipment
            GAT distributes.
          </p>
          <div className="relative aspect-[4/3] overflow-hidden border border-steel-soft/30 sm:aspect-[16/10]">
            <Image
              src={assetPath("/images/equipe-gat-chantier.jpg")}
              alt="GAT Group team on an aluminium joinery worksite"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden border border-steel-soft/30">
            <Image
              src={assetPath("/images/gat-reunion-projet.jpg")}
              alt="Project follow-up meeting with the GAT team"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-steel-soft/30">
            <Image
              src={assetPath("/images/realisation-chantier-reunion.jpg")}
              alt="Site visit with the GAT team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
