import { Realisation } from "@/lib/types";

export const realisations: Realisation[] = [
  {
    slug: "boad-eclairage-anniversaire",
    title: "Rénovation de l'éclairage du siège",
    client: "BOAD",
    location: "Lomé",
    year: "2024",
    sectorSlug: "energie",
    description:
      "Remplacement des plots et lampadaires du siège de la BOAD à l'occasion de son 40ᵉ anniversaire.",
  },
  {
    slug: "scantogo-hangars-latrines",
    title: "Hangars et latrines publiques",
    client: "ScanTogo",
    location: "Tabligbo",
    year: "2024",
    sectorSlug: "btp-electrification",
    description:
      "Construction de deux hangars pour le marché aux villageois et de latrines publiques à Tabligbo, pour ScanTogo.",
  },
  {
    slug: "cnss-menuiserie-aluminium",
    title: "Travaux de menuiserie aluminium",
    client: "CNSS",
    location: "Lomé",
    year: "2023",
    sectorSlug: "btp-electrification",
    description: "Réalisation de travaux d'aluminium sur un bâtiment de la CNSS.",
  },
  {
    slug: "tova-amenagement",
    title: "Travaux d'aménagement",
    client: "TOVA",
    location: "Lomé",
    year: "2023",
    sectorSlug: "btp-electrification",
    description: "Travaux d'aménagement et de menuiserie réalisés sur le site de TOVA.",
  },
  {
    slug: "voirie-dos-ane",
    title: "Construction d'un dos d'âne",
    client: "Collectivité locale",
    location: "Lomé",
    year: "2023",
    sectorSlug: "btp-electrification",
    description: "Travaux de construction d'un ralentisseur routier (dos d'âne).",
  },
];

export function getRealisation(slug: string) {
  return realisations.find((r) => r.slug === slug);
}
