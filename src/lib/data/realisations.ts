import { Realisation } from "@/lib/types";

// Toutes les photos sont auto-hébergées (public/images/) — plus de
// dépendance à l'ancien site gatgroup.org.
export const realisations: Realisation[] = [
  {
    slug: "boad-eclairage-anniversaire",
    title: "Rénovation de l'éclairage du siège",
    titleEn: "Headquarters lighting renovation",
    client: "BOAD",
    location: "Lomé",
    year: "2024",
    sectorSlug: "energie",
    description:
      "Remplacement des plots et lampadaires du siège de la BOAD à l'occasion de son 40ᵉ anniversaire.",
    descriptionEn:
      "Replacement of bollards and streetlights at BOAD's headquarters for its 40th anniversary.",
    imageUrl: "/images/realisation-boad-eclairage.jpg",
  },
  {
    slug: "scantogo-hangars-latrines",
    title: "Hangars et latrines publiques",
    titleEn: "Hangars and public latrines",
    client: "ScanTogo",
    location: "Tabligbo",
    year: "2024",
    sectorSlug: "btp-electrification",
    description:
      "Construction de deux hangars pour le marché aux villageois et de latrines publiques à Tabligbo, pour ScanTogo.",
    descriptionEn:
      "Construction of two market hangars for the village market and public latrines in Tabligbo, for ScanTogo.",
    imageUrl: "/images/realisation-latrines-construction.jpg",
  },
  {
    slug: "cnss-menuiserie-aluminium",
    title: "Travaux de menuiserie aluminium",
    titleEn: "Aluminium joinery work",
    client: "CNSS",
    location: "Lomé",
    year: "2023",
    sectorSlug: "btp-electrification",
    description: "Réalisation de travaux d'aluminium sur un bâtiment de la CNSS.",
    descriptionEn: "Aluminium work carried out on a CNSS building.",
    imageUrl: "/images/realisation-cnss-menuiserie.jpg",
  },
  {
    slug: "tova-amenagement",
    title: "Travaux d'aménagement",
    titleEn: "Fit-out work",
    client: "TOVA",
    location: "Lomé",
    year: "2023",
    sectorSlug: "btp-electrification",
    description: "Travaux d'aménagement et de menuiserie réalisés sur le site de TOVA.",
    descriptionEn: "Fit-out and joinery work carried out on the TOVA site.",
    imageUrl: "/images/realisation-tova-amenagement.jpg",
  },
  {
    slug: "voirie-dos-ane",
    title: "Construction d'un dos d'âne",
    titleEn: "Speed bump construction",
    client: "Collectivité locale",
    location: "Lomé",
    year: "2023",
    sectorSlug: "btp-electrification",
    description: "Travaux de construction d'un ralentisseur routier (dos d'âne).",
    descriptionEn: "Construction of a road speed bump.",
    imageUrl: "/images/realisation-dos-ane.jpg",
  },
];

export function getRealisation(slug: string) {
  return realisations.find((r) => r.slug === slug);
}
