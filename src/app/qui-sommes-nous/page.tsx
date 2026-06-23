import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Nameplate } from "@/components/home/Nameplate";

const timeline = [
  {
    year: "2007",
    title: "Création de GAT",
    text: "Global African Trading est fondée à Lomé, spécialisée dans la fourniture d'équipements industriels.",
  },
  {
    year: "2010",
    title: "Partenariat avec le Groupe LOUKIL",
    text: "GAT devient partenaire du géant industriel tunisien LOUKIL, fabricant et distributeur de produits certifiés pour le marché africain.",
  },
  {
    year: "2017",
    title: "Élargissement vers le BTP",
    text: "GAT étend son champ d'action à l'exécution de travaux : BTP, électrification rurale et urbaine en BT, MT et HT.",
  },
  {
    year: "Aujourd'hui",
    title: "Un réseau régional",
    text: "GAT opère au Togo et en Côte d'Ivoire (GESEC), avec un magasin dédié aux pièces d'origine Toyota à Lomé.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-12">
      <Eyebrow>Qui sommes-nous</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-blueprint sm:text-4xl">
        Spécialiste de la fourniture d&apos;équipements industriels et de la menuiserie aluminium &amp; bois
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel">
        Global African Trading (GAT) est une société de droit togolais spécialisée dans la
        fourniture d&apos;équipements industriels. Forte de son expérience depuis 2007 et de ses
        partenaires internationaux, GAT est présente dans des secteurs diversifiés qui vont de
        l&apos;électricité à l&apos;agriculture, en passant par l&apos;assainissement, l&apos;adduction
        d&apos;eau potable, le BTP, l&apos;énergie, les télécommunications et l&apos;environnement.
      </p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
        GAT distribue notamment des générateurs solaires et pylônes d&apos;éclairage, du machinisme
        agricole, des équipements d&apos;assainissement et d&apos;adduction d&apos;eau, des engrais
        chimiques, des lubrifiants Castrol, ainsi que des équipements médicaux et produits
        chimiques de laboratoire. Un réseau dédié — Motopart — complète l&apos;offre en pièces de
        rechange pour matériels lourds (Caterpillar, Volvo, Komatsu, JCB, Cummins, Perkins,
        Hitachi, Doosan...) et légers.
      </p>

      <div className="mt-10">
        <Nameplate />
      </div>

      <div className="mt-14">
        <SectionDivider label="Notre histoire" />
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
            alt="Responsable GAT sur un site industriel partenaire"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-display text-base font-semibold text-blueprint">Gérald TONA</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-copper">Directeur Général</p>
          <p className="mt-2 text-sm text-steel">
            En visite sur un site industriel partenaire — au plus près des fournitures que GAT
            recommande à ses clients.
          </p>
        </div>
      </div>
      <div className="mt-14">
        <SectionDivider label="Notre équipe" />
        <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_1.1fr] sm:items-center">
          <p className="text-base leading-relaxed text-steel">
            Techniciens, poseurs et commerciaux interviennent au quotidien sur les chantiers et
            chez nos clients — au Togo comme en Côte d&apos;Ivoire — pour livrer, installer et
            entretenir les équipements que GAT distribue.
          </p>
          <div className="relative aspect-[4/3] overflow-hidden border border-steel-soft/30 sm:aspect-[16/10]">
            <Image
              src={assetPath("/images/equipe-gat-chantier.jpg")}
              alt="Équipe GAT Group sur un chantier de menuiserie aluminium"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
