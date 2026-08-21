import { PillarSlug } from "@/lib/types";

export type Pillar = {
  slug: PillarSlug;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  href: string;
};

export const pillars: Pillar[] = [
  {
    slug: "menuiserie",
    name: "Menuiserie Aluminium, Bois & Métallique",
    nameEn: "Aluminium, Wood & Metal Joinery",
    description:
      "Conception et réalisation d'ouvrages sur-mesure — fenêtres, portes, façades, vérandas et structures métalliques — avec les profilés Alustar.",
    descriptionEn:
      "Design and construction of custom-built work — windows, doors, façades, verandas and metal structures — using Alustar profiles.",
    href: "/menuiserie-aluminium-bois",
  },
  {
    slug: "btp",
    name: "BTP",
    nameEn: "Construction",
    description:
      "Travaux et fournitures pour l'électrification rurale et urbaine, le génie civil et les ouvrages publics.",
    descriptionEn:
      "Works and supplies for rural and urban electrification, civil engineering and public infrastructure.",
    href: "/btp",
  },
  {
    slug: "centrale-achat",
    name: "Centrale d'achat",
    nameEn: "Equipment Distribution",
    description:
      "La représentation de grandes marques internationales (Xylem, Sedis, Castrol, LOUKIL, OMICRON...) au service de l'énergie, l'eau, les télécoms, le pétrolier, l'agro-industrie et plus.",
    descriptionEn:
      "Representing major international brands (Xylem, Sedis, Castrol, LOUKIL, OMICRON...) serving energy, water, telecommunications, oil & gas, agro-industry and more.",
    href: "/secteurs",
  },
];

export function getPillar(slug: PillarSlug) {
  return pillars.find((p) => p.slug === slug);
}
