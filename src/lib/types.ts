// Modèle de données du site GAT.
// En phase locale, ces types sont nourris par des données factices
// (src/lib/data/*). Au passage en production, les mêmes formes
// correspondront aux tables Supabase : brands, categories, products,
// sectors, realisations, quote_requests, quote_request_items.

export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  country: string;
  website?: string;
  logoInitials: string; // tant qu'on n'a pas les vrais logos, on affiche un monogramme
  logoUrl?: string; // logo officiel réel, quand disponible
  photoUrls?: string[]; // photos terrain réelles (auto-hébergées), quand disponibles
  sectors: string[]; // slugs de secteurs couverts
};

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  brandSlug: string;
  categorySlug: string;
  sectorSlugs: string[];
  reference: string; // code article façon fiche technique
  shortDescription: string;
  description: string;
  specs: { label: string; value: string }[];
  availability: "stock" | "sur-commande" | "import";
  datasheetUrl?: string;
  imageUrl?: string; // photo réelle, quand disponible
};

// Les 9 secteurs "métier" ci-dessous se regroupent tous sous l'un des 3
// pôles d'activité de GAT (voir src/lib/data/pillars.ts) : BTP est
// autonome, les 8 autres relèvent de la Centrale d'achat (représentation
// des marques internationales pour ces industries) ; Menuiserie est le
// 3e pôle, avec sa propre page dédiée (pas dans cette liste de secteurs).
export type PillarSlug = "menuiserie" | "btp" | "centrale-achat";

export type Sector = {
  slug: string;
  name: string;
  description: string;
  pillar: PillarSlug;
};

export type Realisation = {
  slug: string;
  title: string;
  client: string;
  location: string;
  year: string;
  sectorSlug: string;
  description: string;
  imageUrl?: string;
};

export type QuoteItem = {
  productSlug: string;
  quantity: number;
};
