import { Realisation } from "@/lib/types";

// Toutes les photos sont auto-hébergées (public/images/) — plus de
// dépendance à l'ancien site gatgroup.org.
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
    imageUrl: "/images/realisation-boad-eclairage.jpg",
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
    imageUrl: "/images/realisation-latrines-construction.jpg",
  },
  {
    slug: "cnss-menuiserie-aluminium",
    title: "Travaux de menuiserie aluminium",
    client: "CNSS",
    location: "Lomé",
    year: "2023",
    sectorSlug: "btp-electrification",
    description: "Réalisation de travaux d'aluminium sur un bâtiment de la CNSS.",
    imageUrl: "/images/realisation-cnss-menuiserie.jpg",
  },
  {
    slug: "tova-amenagement",
    title: "Travaux d'aménagement",
    client: "TOVA",
    location: "Lomé",
    year: "2023",
    sectorSlug: "btp-electrification",
    description: "Travaux d'aménagement et de menuiserie réalisés sur le site de TOVA.",
    imageUrl: "/images/realisation-tova-amenagement.jpg",
  },
  {
    slug: "voirie-dos-ane",
    title: "Construction d'un dos d'âne",
    client: "Collectivité locale",
    location: "Lomé",
    year: "2023",
    sectorSlug: "btp-electrification",
    description: "Travaux de construction d'un ralentisseur routier (dos d'âne).",
    imageUrl: "/images/realisation-dos-ane.jpg",
  },
];

export function getRealisation(slug: string) {
  return realisations.find((r) => r.slug === slug);
}
