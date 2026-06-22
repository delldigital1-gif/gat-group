import { Sector } from "@/lib/types";

export const sectors: Sector[] = [
  {
    slug: "energie",
    name: "Énergie",
    description:
      "Production, distribution et éclairage : générateurs solaires, pylônes, postes et appareillage BT-MT-HT.",
  },
  {
    slug: "btp-electrification",
    name: "BTP & Électrification",
    description:
      "Travaux et fournitures pour l'électrification rurale et urbaine, le génie civil et les ouvrages publics.",
  },
  {
    slug: "eau-assainissement",
    name: "Eau & Assainissement",
    description:
      "Adduction d'eau potable, comptage, pompage et traitement — compteurs, raccords, stations et pompes.",
  },
  {
    slug: "telecommunications",
    name: "Télécommunications",
    description: "Pylônes, infrastructures réseau et accessoires de ligne pour les opérateurs télécom.",
  },
  {
    slug: "petrolier-industrie-lourde",
    name: "Pétrolier & Industrie lourde",
    description:
      "Projets clés en main, cimenterie et fournitures techniques pour les environnements industriels exigeants.",
  },
  {
    slug: "agro-industrie",
    name: "Agro-industrie & Agroalimentaire",
    description: "Machinisme agricole, engrais et accessoires pour machines textiles et égreneuses.",
  },
  {
    slug: "medical",
    name: "Médical",
    description: "Équipements médicaux et produits chimiques de laboratoire pour structures de santé.",
  },
  {
    slug: "marine-levage",
    name: "Marine & Levage",
    description: "Chaînes, élingues, manilles et solutions de manutention pour le portuaire et le levage.",
  },
  {
    slug: "automatisme",
    name: "Automatisme",
    description: "Capteurs, détecteurs, variateurs et solutions de mesure et de contrôle industriel.",
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
