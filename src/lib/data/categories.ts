import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "pompes-traitement-eau",
    name: "Pompage & traitement de l'eau",
    description: "Pompes, systèmes de traitement et de désinfection, comptage.",
  },
  {
    slug: "chaines-transmission-levage",
    name: "Chaînes, transmission & levage",
    description: "Chaînes de transmission, de levage, de manutention, roues et pignons.",
  },
  {
    slug: "lubrifiants",
    name: "Lubrifiants & graisses",
    description: "Huiles moteur, lubrifiants industriels et graisses techniques.",
  },
  {
    slug: "menuiserie-aluminium",
    name: "Menuiserie aluminium",
    description: "Profilés, quincaillerie et systèmes pour fenêtres, portes, façades et vérandas.",
  },
  {
    slug: "energie-eclairage",
    name: "Énergie & éclairage",
    description: "Générateurs solaires, pylônes d'éclairage et de télécom, appareillage électrique.",
  },
  {
    slug: "materiel-agricole",
    name: "Machinisme agricole",
    description: "Tracteurs, attachements et intrants pour l'agro-industrie.",
  },
  {
    slug: "cables-appareillage",
    name: "Câbles & appareillage électrique",
    description: "Câbles électriques et téléphoniques, protection, distribution et mesure.",
  },
  {
    slug: "pieces-rechange-engins",
    name: "Pièces de rechange engins",
    description: "Pièces pour matériels lourds et légers — réseau Motopart.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
