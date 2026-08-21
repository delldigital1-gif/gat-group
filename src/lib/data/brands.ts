import { Brand } from "@/lib/types";

export const brands: Brand[] = [
  {
    slug: "xylem",
    name: "Xylem",
    tagline: "Solutions globales pour l'eau",
    taglineEn: "Global water solutions",
    description:
      "GAT est partenaire de Xylem en Afrique de l'Ouest pour le pompage, le traitement et la mesure de l'eau — du point de captage au réseau de distribution. Au-delà de la fourniture d'équipements (gammes Flygt, Bell & Gossett et Sensus pour le comptage), GAT s'appuie sur les services Xylem Service Solutions : conception, installation/mise en service et exploitation/maintenance.",
    descriptionEn:
      "GAT is Xylem's partner across West Africa for water pumping, treatment and metering — from the intake point to the distribution network. Beyond supplying equipment (Flygt, Bell & Gossett and Sensus metering ranges), GAT draws on Xylem Service Solutions: design, installation/commissioning and operation/maintenance.",
    country: "États-Unis",
    countryEn: "United States",
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
    taglineEn: "Industrial chains for 70 years",
    description:
      "1ᵉʳ fabricant français de chaînes industrielles : transmission, levage, manutention et agricole. GAT distribue la gamme Sedis en Afrique de l'Ouest, dont les chaînes traitement Delta®, conçues pour les travaux publics en milieu abrasif (dureté de surface jusqu'à 1800 Vickers).",
    descriptionEn:
      "France's #1 manufacturer of industrial chains: transmission, lifting, handling and agricultural. GAT distributes the Sedis range across West Africa, including Delta® treated chains, engineered for public works in abrasive environments (surface hardness up to 1800 Vickers).",
    country: "France",
    countryEn: "France",
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
    taglineEn: "Industrial and automotive lubricants",
    description:
      "GAT distribue les gammes industrielles Castrol : Vecton (huiles moteur diesel longue durée pour groupes électrogènes et engins de chantier), Hyspin (huiles hydrauliques) et Alphasyn (huiles synthétiques pour réducteurs) — pour les parcs automobiles, engins lourds et installations industrielles.",
    descriptionEn:
      "GAT distributes Castrol's industrial ranges: Vecton (long-drain diesel engine oils for generators and construction machinery), Hyspin (hydraulic oils) and Alphasyn (synthetic gear oils) — for vehicle fleets, heavy equipment and industrial installations.",
    country: "Royaume-Uni",
    countryEn: "United Kingdom",
    website: "https://www.castrol.com",
    logoInitials: "CA",
    sectors: ["btp-electrification", "petrolier-industrie-lourde"],
  },
  {
    slug: "alustar",
    name: "Alustar",
    tagline: "Profilés & panneaux composites aluminium",
    taglineEn: "Aluminium profiles & composite panels",
    description:
      "Profilés et panneaux composites aluminium (ACP) utilisés par GAT pour ses ouvrages de menuiserie — fenêtres, portes, façades vitrées et vérandas. Livrés directement d'usine et posés par les équipes GAT partout en Afrique de l'Ouest.",
    descriptionEn:
      "Aluminium profiles and aluminium composite panels (ACP) used by GAT for its joinery work — windows, doors, glazed façades and verandas. Shipped directly from the factory and installed by GAT's own teams across West Africa.",
    country: "Chine",
    countryEn: "China",
    logoInitials: "AS",
    photoUrls: ["/images/alustar-usine-profiles.jpg", "/images/alustar-usine-moustiquaires.jpg", "/images/alustar-livraison-profiles.jpg"],
    sectors: ["btp-electrification"],
  },
  {
    slug: "loukil",
    name: "Groupe LOUKIL",
    tagline: "Industriel tunisien, partenaire GAT depuis 2010",
    taglineEn: "Tunisian industrial group, GAT partner since 2010",
    description:
      "Industriel tunisien fondé en 1976, présent dans une trentaine de sociétés : générateurs solaires, pylônes télécom, machinisme agricole (représentant notamment Kubota, SAME, Gaspardo et Maschio) et engrais — partenaire historique de GAT en Afrique de l'Ouest.",
    descriptionEn:
      "Tunisian industrial group founded in 1976, present across some thirty companies: solar generators, telecom pylons, agricultural machinery (representing Kubota, SAME, Gaspardo and Maschio among others) and fertilizers — GAT's long-standing partner across West Africa.",
    country: "Tunisie",
    countryEn: "Tunisia",
    logoInitials: "LK",
    sectors: ["energie", "telecommunications", "agro-industrie"],
  },
  {
    slug: "omicron",
    name: "OMICRON",
    tagline: "Solutions de test pour réseaux électriques",
    taglineEn: "Testing solutions for power networks",
    description:
      "Fabricant autrichien d'équipements de test et de diagnostic pour les réseaux électriques — relais de protection, transformateurs, disjoncteurs. GAT distribue la gamme OMICRON pour les exploitants et bureaux d'études togolais.",
    descriptionEn:
      "Austrian manufacturer of testing and diagnostic equipment for power networks — protection relays, transformers, circuit breakers. GAT distributes the OMICRON range to Togolese utilities and engineering firms.",
    country: "Autriche",
    countryEn: "Austria",
    website: "https://www.omicronenergy.com",
    logoInitials: "OM",
    photoUrls: ["/images/omicron-cmc500.png"],
    sectors: ["energie", "automatisme"],
  },
];

export function getBrand(slug: string) {
  return brands.find((b) => b.slug === slug);
}
