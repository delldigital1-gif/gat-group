import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "pompes-traitement-eau",
    name: "Pompage & traitement de l'eau",
    nameEn: "Pumping & Water Treatment",
    description: "Pompes, systèmes de traitement et de désinfection, comptage.",
    descriptionEn: "Pumps, treatment and disinfection systems, metering.",
  },
  {
    slug: "chaines-transmission-levage",
    name: "Chaînes, transmission & levage",
    nameEn: "Chains, Transmission & Lifting",
    description: "Chaînes de transmission, de levage, de manutention, roues et pignons.",
    descriptionEn: "Transmission, lifting and handling chains, wheels and sprockets.",
  },
  {
    slug: "lubrifiants",
    name: "Lubrifiants & graisses",
    nameEn: "Lubricants & Greases",
    description: "Huiles moteur, lubrifiants industriels et graisses techniques.",
    descriptionEn: "Engine oils, industrial lubricants and technical greases.",
  },
  {
    slug: "menuiserie-aluminium",
    name: "Menuiserie aluminium",
    nameEn: "Aluminium Joinery",
    description: "Profilés, quincaillerie et systèmes pour fenêtres, portes, façades et vérandas.",
    descriptionEn: "Profiles, hardware and systems for windows, doors, façades and verandas.",
  },
  {
    slug: "energie-eclairage",
    name: "Énergie & éclairage",
    nameEn: "Energy & Lighting",
    description: "Générateurs solaires, pylônes d'éclairage et de télécom, appareillage électrique.",
    descriptionEn: "Solar generators, lighting and telecom pylons, electrical switchgear.",
  },
  {
    slug: "materiel-agricole",
    name: "Machinisme agricole",
    nameEn: "Agricultural Machinery",
    description: "Tracteurs, attachements et intrants pour l'agro-industrie.",
    descriptionEn: "Tractors, attachments and inputs for agro-industry.",
  },
  {
    slug: "cables-appareillage",
    name: "Câbles & appareillage électrique",
    nameEn: "Cables & Electrical Switchgear",
    description: "Câbles électriques et téléphoniques, protection, distribution et mesure.",
    descriptionEn: "Electrical and telephone cables, protection, distribution and measurement.",
  },
  {
    slug: "pieces-rechange-engins",
    name: "Pièces de rechange engins",
    nameEn: "Heavy Equipment Spare Parts",
    description: "Pièces pour matériels lourds et légers — réseau Motopart.",
    descriptionEn: "Parts for heavy and light equipment — Motopart network.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
