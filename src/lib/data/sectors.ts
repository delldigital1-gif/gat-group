import { Sector } from "@/lib/types";

export const sectors: Sector[] = [
  {
    slug: "energie",
    name: "Énergie",
    description:
      "Production, distribution et éclairage : générateurs solaires, pylônes, postes et appareillage BT-MT-HT.",
    pillar: "centrale-achat",
  },
  {
    slug: "btp-electrification",
    name: "BTP & Électrification",
    description:
      "Travaux et fournitures pour l'électrification rurale et urbaine, le génie civil et les ouvrages publics.",
    pillar: "btp",
  },
  {
    slug: "eau-assainissement",
    name: "Eau & Assainissement",
    description:
      "Adduction d'eau potable, comptage, pompage et traitement — compteurs, raccords, stations et pompes.",
    pillar: "centrale-achat",
  },
  {
    slug: "telecommunications",
    name: "Télécommunications",
    description: "Pylônes, infrastructures réseau et accessoires de ligne pour les opérateurs télécom.",
    pillar: "centrale-achat",
  },
  {
    slug: "petrolier-industrie-lourde",
    name: "Pétrolier & Industrie lourde",
    description:
      "Projets clés en main, cimenterie et fournitures techniques pour les environnements industriels exigeants.",
    pillar: "centrale-achat",
  },
  {
    slug: "agro-industrie",
    name: "Agro-industrie & Agroalimentaire",
    description: "Machinisme agricole, engrais et accessoires pour machines textiles et égreneuses.",
    pillar: "centrale-achat",
  },
  {
    slug: "medical",
    name: "Médical",
    description: "Équipements médicaux et produits chimiques de laboratoire pour structures de santé.",
    pillar: "centrale-achat",
  },
  {
    slug: "marine-levage",
    name: "Marine & Levage",
    description: "Chaînes, élingues, manilles et solutions de manutention pour le portuaire et le levage.",
    pillar: "centrale-achat",
  },
  {
    slug: "automatisme",
    name: "Automatisme",
    description: "Capteurs, détecteurs, variateurs et solutions de mesure et de contrôle industriel.",
    pillar: "centrale-achat",
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
