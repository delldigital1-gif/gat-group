import { Brand } from "@/lib/types";

export const brands: Brand[] = [
  {
    slug: "xylem",
    name: "Xylem",
    tagline: "Solutions globales pour l'eau",
    description:
      "GAT est partenaire de Xylem au Togo et au Bénin pour le pompage, le traitement et la mesure de l'eau — du point de captage au réseau de distribution. Au-delà de la fourniture d'équipements (gammes Flygt, Bell & Gossett et Sensus pour le comptage), GAT s'appuie sur les services Xylem Service Solutions : conception, installation/mise en service et exploitation/maintenance.",
    country: "États-Unis",
    website: "https://www.xylem.com",
    logoInitials: "XY",
    logoUrl: "/images/xylem-logo.jpg",
    photoUrls: [
      "/images/xylem-godwin-groupe-diesel.jpg",
      "/images/xylem-equipe-site-cimenterie.jpg",
      "/images/xylem-installation-pompe-quai.jpg",
      "/images/xylem-installation-pompe-canal.jpg",
      "/images/xylem-salle-pompes-inondee.jpg",
      "/images/xylem-maintenance-pompe.jpg",
      "/images/xylem-visite-site-industriel.jpg",
    ],
    sectors: ["eau-assainissement", "petrolier-industrie-lourde", "medical"],
  },
  {
    slug: "sedis",
    name: "Sedis",
    tagline: "Chaînes industrielles depuis 70 ans",
    description:
      "1ᵉʳ fabricant français de chaînes industrielles : transmission, levage, manutention et agricole. GAT distribue la gamme Sedis au Togo et au Bénin, dont les chaînes traitement Delta®, conçues pour les travaux publics en milieu abrasif (dureté de surface jusqu'à 1800 Vickers).",
    country: "France",
    website: "https://www.sedis.com",
    logoInitials: "SD",
    logoUrl: "/images/sedis-logo.png",
    photoUrls: ["/images/sedis-atelier-pignons.jpg", "/images/sedis-visite-usine.jpg"],
    sectors: ["marine-levage", "agro-industrie", "petrolier-industrie-lourde"],
  },
  {
    slug: "castrol",
    name: "Castrol",
    tagline: "Lubrifiants industriels et automobiles",
    description:
      "GAT distribue les gammes industrielles Castrol : Vecton (huiles moteur diesel longue durée pour groupes électrogènes et engins de chantier), Hyspin (huiles hydrauliques) et Alphasyn (huiles synthétiques pour réducteurs) — pour les parcs automobiles, engins lourds et installations industrielles.",
    country: "Royaume-Uni",
    website: "https://www.castrol.com",
    logoInitials: "CA",
    sectors: ["btp-electrification", "petrolier-industrie-lourde"],
  },
  {
    slug: "alustar",
    name: "Alustar",
    tagline: "Profilés & panneaux composites aluminium",
    description:
      "Profilés et panneaux composites aluminium (ACP) utilisés par GAT pour ses ouvrages de menuiserie — fenêtres, portes, façades vitrées et vérandas. Livrés directement d'usine et posés par les équipes GAT au Togo et en Côte d'Ivoire.",
    country: "Chine",
    logoInitials: "AS",
    photoUrls: ["/images/alustar-usine-profiles.jpg", "/images/alustar-usine-moustiquaires.jpg", "/images/alustar-livraison-profiles.jpg"],
    sectors: ["btp-electrification"],
  },
  {
    slug: "loukil",
    name: "Groupe LOUKIL",
    tagline: "Industriel tunisien, partenaire GAT depuis 2010",
    description:
      "Industriel tunisien fondé en 1976, présent dans une trentaine de sociétés : générateurs solaires, pylônes télécom, machinisme agricole (représentant notamment Kubota, SAME, Gaspardo et Maschio) et engrais — partenaire historique de GAT en Afrique de l'Ouest.",
    country: "Tunisie",
    logoInitials: "LK",
    sectors: ["energie", "telecommunications", "agro-industrie"],
  },
  {
    slug: "omicron",
    name: "OMICRON",
    tagline: "Solutions de test pour réseaux électriques",
    description:
      "Fabricant autrichien d'équipements de test et de diagnostic pour les réseaux électriques — relais de protection, transformateurs, disjoncteurs. GAT distribue la gamme OMICRON pour les exploitants et bureaux d'études togolais.",
    country: "Autriche",
    website: "https://www.omicronenergy.com",
    logoInitials: "OM",
    photoUrls: ["/images/omicron-cmc500.png"],
    sectors: ["energie", "automatisme"],
  },
];

export function getBrand(slug: string) {
  return brands.find((b) => b.slug === slug);
}
