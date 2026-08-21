import { Sector } from "@/lib/types";

export const sectors: Sector[] = [
  {
    slug: "energie",
    name: "Énergie",
    nameEn: "Energy",
    description:
      "Production, distribution et éclairage : générateurs solaires, pylônes, postes et appareillage BT-MT-HT.",
    descriptionEn:
      "Generation, distribution and lighting: solar generators, pylons, substations and LV-MV-HV switchgear.",
    pillar: "centrale-achat",
  },
  {
    slug: "btp-electrification",
    name: "BTP & Électrification",
    nameEn: "Construction & Electrification",
    description:
      "Travaux et fournitures pour l'électrification rurale et urbaine, le génie civil et les ouvrages publics.",
    descriptionEn:
      "Works and supplies for rural and urban electrification, civil engineering and public infrastructure.",
    pillar: "btp",
  },
  {
    slug: "eau-assainissement",
    name: "Eau & Assainissement",
    nameEn: "Water & Sanitation",
    description:
      "Adduction d'eau potable, comptage, pompage et traitement — compteurs, raccords, stations et pompes.",
    descriptionEn:
      "Drinking water supply, metering, pumping and treatment — meters, fittings, stations and pumps.",
    pillar: "centrale-achat",
  },
  {
    slug: "telecommunications",
    name: "Télécommunications",
    nameEn: "Telecommunications",
    description: "Pylônes, infrastructures réseau et accessoires de ligne pour les opérateurs télécom.",
    descriptionEn: "Pylons, network infrastructure and line accessories for telecom operators.",
    pillar: "centrale-achat",
  },
  {
    slug: "petrolier-industrie-lourde",
    name: "Pétrolier & Industrie lourde",
    nameEn: "Oil & Heavy Industry",
    description:
      "Projets clés en main, cimenterie et fournitures techniques pour les environnements industriels exigeants.",
    descriptionEn:
      "Turnkey projects, cement plants and technical supplies for demanding industrial environments.",
    pillar: "centrale-achat",
  },
  {
    slug: "agro-industrie",
    name: "Agro-industrie & Agroalimentaire",
    nameEn: "Agro-industry & Food Processing",
    description: "Machinisme agricole, engrais et accessoires pour machines textiles et égreneuses.",
    descriptionEn: "Agricultural machinery, fertilizers and accessories for textile machines and ginners.",
    pillar: "centrale-achat",
  },
  {
    slug: "medical",
    name: "Médical",
    nameEn: "Healthcare",
    description: "Équipements médicaux et produits chimiques de laboratoire pour structures de santé.",
    descriptionEn: "Medical equipment and laboratory chemicals for healthcare facilities.",
    pillar: "centrale-achat",
  },
  {
    slug: "marine-levage",
    name: "Marine & Levage",
    nameEn: "Marine & Lifting",
    description: "Chaînes, élingues, manilles et solutions de manutention pour le portuaire et le levage.",
    descriptionEn: "Chains, slings, shackles and handling solutions for ports and lifting operations.",
    pillar: "centrale-achat",
  },
  {
    slug: "automatisme",
    name: "Automatisme",
    nameEn: "Automation",
    description: "Capteurs, détecteurs, variateurs et solutions de mesure et de contrôle industriel.",
    descriptionEn: "Sensors, detectors, drives and industrial measurement and control solutions.",
    pillar: "centrale-achat",
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
