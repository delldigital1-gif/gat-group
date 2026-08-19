import { PillarSlug } from "@/lib/types";

export type Pillar = {
  slug: PillarSlug;
  name: string;
  description: string;
  href: string;
};

export const pillars: Pillar[] = [
  {
    slug: "menuiserie",
    name: "Menuiserie Aluminium, Bois & Métallique",
    description:
      "Conception et réalisation d'ouvrages sur-mesure — fenêtres, portes, façades, vérandas et structures métalliques — avec les profilés Alustar.",
    href: "/menuiserie-aluminium-bois",
  },
  {
    slug: "btp",
    name: "BTP",
    description:
      "Travaux et fournitures pour l'électrification rurale et urbaine, le génie civil et les ouvrages publics.",
    href: "/btp",
  },
  {
    slug: "centrale-achat",
    name: "Centrale d'achat",
    description:
      "La représentation de grandes marques internationales (Xylem, Sedis, Castrol, LOUKIL, OMICRON...) au service de l'énergie, l'eau, les télécoms, le pétrolier, l'agro-industrie et plus.",
    href: "/secteurs",
  },
];

export function getPillar(slug: PillarSlug) {
  return pillars.find((p) => p.slug === slug);
}
