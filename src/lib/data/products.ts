import { Product } from "@/lib/types";

// Produits Xylem, Sedis, Castrol, LOUKIL et OMICRON : gammes et
// références réelles (recherchées sur les sites officiels des marques,
// GAT étant distributeur agréé). Références internes GAT (GAT-XX-...)
// conservées quand la marque n'a pas de référence produit publique.
// Produits Maxwill : noms de démonstration en attendant la confirmation
// du vrai fabricant représenté par GAT pour la menuiserie aluminium.

export const products: Product[] = [
  {
    slug: "pompe-immergee-flygt",
    name: "Pompe immergée Flygt N-Technology",
    brandSlug: "xylem",
    categorySlug: "pompes-traitement-eau",
    sectorSlugs: ["eau-assainissement", "petrolier-industrie-lourde"],
    reference: "GAT-XY-PMP-014",
    shortDescription: "Pompe submersible auto-nettoyante pour relevage d'eaux usées et eaux chargées.",
    description:
      "Pompe immergée de la gamme Flygt N-Technology (Xylem) : roue N auto-nettoyante à passage libre, conçue pour les eaux usées non tamisées jusqu'à 8 % de matières solides. Près de 100 ans d'expérience Flygt dans le pompage d'eaux usées, plus d'un million de pompes installées dans le monde. Moteur étanche IP68, adaptée aux postes de relevage et fosses de collecte.",
    specs: [
      { label: "Débit max.", value: "180 m³/h" },
      { label: "HMT max.", value: "22 m" },
      { label: "Indice de protection", value: "IP68" },
      { label: "Alimentation", value: "Tri 380V" },
    ],
    availability: "import",
    imageUrl: "/images/xylem-pompe-immergee.jpg",
  },
  {
    slug: "station-traitement-compacte",
    name: "Station compacte de traitement d'eau potable",
    brandSlug: "xylem",
    categorySlug: "pompes-traitement-eau",
    sectorSlugs: ["eau-assainissement"],
    reference: "GAT-XY-TRT-022",
    shortDescription: "Unité compacte de filtration et désinfection pour petits réseaux.",
    description:
      "Station modulaire combinant filtration, dosage de réactifs et désinfection UV, pensée pour les réseaux d'adduction d'eau de taille moyenne en zone urbaine ou périurbaine.",
    specs: [
      { label: "Capacité", value: "50 m³/j" },
      { label: "Désinfection", value: "UV + chlore" },
      { label: "Encombrement", value: "2,4 × 1,1 m" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "pompe-centrifuge-bell-gossett-1510",
    name: "Pompe centrifuge Bell & Gossett Series 1510",
    brandSlug: "xylem",
    categorySlug: "pompes-traitement-eau",
    sectorSlugs: ["petrolier-industrie-lourde", "btp-electrification"],
    reference: "B&G Series 1510",
    shortDescription: "Pompe centrifuge à aspiration axiale, référence du marché pour les circuits industriels et CVC.",
    description:
      "La Series 1510 de Bell & Gossett (marque Xylem) est une pompe centrifuge end-suction conçue pour limiter les arrêts de maintenance : démontage sans déplacer la tuyauterie (True Back Pullout), garniture mécanique auto-nettoyante, volute à pied intégral et accouplement à dégagement central. Monitoring vibratoire i-ALERT™ disponible en option.",
    specs: [
      { label: "Marque", value: "Bell & Gossett — a Xylem brand" },
      { label: "Conception", value: "True Back Pullout" },
      { label: "Garniture", value: "Mécanique auto-nettoyante" },
      { label: "Monitoring (option)", value: "i-ALERT™ vibration & température" },
    ],
    availability: "import",
  },
  {
    slug: "compteur-eau-volumetrique",
    name: "Compteur d'eau Sensus, une marque Xylem",
    brandSlug: "xylem",
    categorySlug: "pompes-traitement-eau",
    sectorSlugs: ["eau-assainissement"],
    reference: "GAT-XY-CPT-008",
    shortDescription: "Compteur d'eau froide Sensus pour branchements particuliers et collectifs.",
    description:
      "Compteur volumétrique à piston rotatif de la marque Sensus (Xylem), classe métrologique C, livré avec accessoires de branchement et pièces de raccord. Sensus équipe aussi GAT pour des solutions de comptage intelligent et de télérelève (réseau FlexNet) pour les projets qui le nécessitent.",
    specs: [
      { label: "Diamètres", value: "DN15 à DN40" },
      { label: "Classe métrologique", value: "C" },
      { label: "Pression max.", value: "16 bar" },
    ],
    availability: "stock",
  },
  {
    slug: "chaine-transmission-delta",
    name: "Chaîne de transmission Delta® HR 20B-1",
    brandSlug: "sedis",
    categorySlug: "chaines-transmission-levage",
    sectorSlugs: ["petrolier-industrie-lourde", "btp-electrification"],
    reference: "20B-1 / 17TD",
    shortDescription: "Chaîne à rouleaux traitement Delta®, pour milieux abrasifs (travaux publics, cimenterie).",
    description:
      "Chaîne à rouleaux de la gamme Delta® HR, dont le traitement thermochimique exclusif Sedis confère une dureté de surface de 1800 Vickers — contre 700 pour une cémentation classique. Recommandée pour les centrales d'enrobé, convoyeurs et environnements très abrasifs.",
    specs: [
      { label: "Référence ISO 606 / SEDIS", value: "20B-1 / 17TD" },
      { label: "Pas (norme 20B)", value: "31,75 mm" },
      { label: "Traitement", value: "Delta®" },
      { label: "Dureté de surface", value: "1800 HV (vs 700 HV cémentation classique)" },
    ],
    availability: "stock",
  },
  {
    slug: "chaine-levage-grade-80",
    name: "Chaîne de levage Sedis série LH (BL)",
    brandSlug: "sedis",
    categorySlug: "chaines-transmission-levage",
    sectorSlugs: ["marine-levage", "petrolier-industrie-lourde"],
    reference: "GAT-SD-LEV-080",
    shortDescription: "Chaîne calibrée pour élingues et systèmes de levage certifiés, conforme ISO 4347.",
    description:
      "Chaîne de levage de la série LH (BL) Sedis, conforme à la norme ISO 4347, calibrée pour les opérations de levage portuaire et industriel. Sedis propose aussi les séries J (LL, plaques type européen B) et AL (plaques type ANSI A) selon les accessoires et normes du client.",
    specs: [
      { label: "Diamètre", value: "10 mm" },
      { label: "CMU", value: "3,2 t" },
      { label: "Norme", value: "ISO 4347 / EN 818-2" },
    ],
    availability: "stock",
  },
  {
    slug: "roue-pignon-transmission",
    name: "Roue à chaîne / pignon de transmission",
    brandSlug: "sedis",
    categorySlug: "chaines-transmission-levage",
    sectorSlugs: ["agro-industrie", "petrolier-industrie-lourde"],
    reference: "GAT-SD-PIG-045",
    shortDescription: "Pignons compatibles avec les gammes de chaînes à rouleaux Sedis.",
    description:
      "Roues à chaîne et pignons disponibles en plusieurs nombres de dents, à monter avec les chaînes de transmission de la même gamme.",
    specs: [
      { label: "Compatibilité", value: "ASA 40 à ASA 80" },
      { label: "Matière", value: "Acier traité" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "huile-moteur-castrol",
    name: "Castrol Vecton 15W-40 CK-4",
    brandSlug: "castrol",
    categorySlug: "lubrifiants",
    sectorSlugs: ["btp-electrification", "petrolier-industrie-lourde"],
    reference: "GAT-CA-LUB-15W40",
    shortDescription: "Huile moteur diesel longue durée pour groupes électrogènes et engins de chantier.",
    description:
      "Huile moteur diesel Castrol Vecton 15W-40 CK-4, formulée avec la System Pro Technology™ pour une réserve de performance prolongée : contrôle de l'oxydation, réduction des dépôts, neutralisation des acides. Adaptée aux moteurs sollicités en continu — groupes électrogènes, engins de chantier, flottes utilitaires.",
    specs: [
      { label: "Viscosité", value: "15W-40" },
      { label: "Spécification API", value: "CK-4" },
      { label: "Conditionnement", value: "Bidon 20 L / fût 200 L" },
    ],
    availability: "stock",
  },
  {
    slug: "graisse-multiusage",
    name: "Castrol Hyspin AWS 46",
    brandSlug: "castrol",
    categorySlug: "lubrifiants",
    sectorSlugs: ["petrolier-industrie-lourde", "marine-levage"],
    reference: "GAT-CA-HYS-046",
    shortDescription: "Huile hydraulique anti-usure pour circuits de pompes, treuils et engins.",
    description:
      "Huile hydraulique Castrol Hyspin AWS 46, formulée pour une bonne résistance à l'usure et une stabilité thermique élevée — adaptée aux circuits hydrauliques de pompes, treuils, convoyeurs et engins de chantier sollicités en continu.",
    specs: [
      { label: "Gamme", value: "Hyspin AWS" },
      { label: "Viscosité ISO", value: "VG 46" },
      { label: "Conditionnement", value: "Fût 200 L" },
    ],
    availability: "stock",
  },
  {
    slug: "huile-reducteur-alphasyn",
    name: "Castrol Alphasyn EP",
    brandSlug: "castrol",
    categorySlug: "lubrifiants",
    sectorSlugs: ["petrolier-industrie-lourde", "agro-industrie"],
    reference: "GAT-CA-ALP-EP",
    shortDescription: "Huile synthétique pour réducteurs, additifs Extrême Pression.",
    description:
      "Huile pour réducteurs Castrol Alphasyn EP, synthétique, avec additifs Extrême Pression soufre/phosphore — recommandée pour les réducteurs exposés au micro-piqûrage et aux environnements sévères (cimenteries, convoyeurs, machinisme agricole).",
    specs: [
      { label: "Gamme", value: "Alphasyn EP" },
      { label: "Type", value: "Huile synthétique" },
      { label: "Additifs", value: "Extrême Pression (S/P)" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "profile-alu-fenetre-coulissante",
    name: "Profilé aluminium fenêtre coulissante",
    brandSlug: "maxwill",
    categorySlug: "menuiserie-aluminium",
    sectorSlugs: ["btp-electrification"],
    reference: "GAT-MX-FEN-060",
    shortDescription: "Système coulissant 2 rails pour fenêtres et baies vitrées.",
    description:
      "Profilé aluminium thermolaqué pour fenêtres coulissantes, compatible vitrage simple et double, avec accessoires de quincaillerie assortis.",
    specs: [
      { label: "Système", value: "Coulissant 2 rails" },
      { label: "Épaisseur vitrage", value: "4 à 24 mm" },
      { label: "Finition", value: "Thermolaquage RAL" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "profile-alu-porte-battante",
    name: "Profilé aluminium porte battante",
    brandSlug: "maxwill",
    categorySlug: "menuiserie-aluminium",
    sectorSlugs: ["btp-electrification"],
    reference: "GAT-MX-PRT-045",
    shortDescription: "Profilé robuste pour portes battantes intérieures et extérieures.",
    description:
      "Système de porte battante en aluminium, conçu pour les accès à fort passage — bureaux, commerces, bâtiments publics.",
    specs: [
      { label: "Ouvrant", value: "Simple ou double" },
      { label: "Finition", value: "Anodisé ou laqué" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "veranda-aluminium-modulaire",
    name: "Système véranda aluminium modulaire",
    brandSlug: "maxwill",
    categorySlug: "menuiserie-aluminium",
    sectorSlugs: ["btp-electrification"],
    reference: "GAT-MX-VER-030",
    shortDescription: "Structure modulaire pour vérandas et auvents en aluminium.",
    description: "Structure aluminium modulaire pour la réalisation de vérandas, auvents et extensions vitrées.",
    specs: [
      { label: "Portée max.", value: "6 m sans poteau intermédiaire" },
      { label: "Toiture", value: "Polycarbonate ou verre" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "generateur-solaire-loukil",
    name: "Générateur solaire autonome",
    brandSlug: "loukil",
    categorySlug: "energie-eclairage",
    sectorSlugs: ["energie", "telecommunications"],
    reference: "GAT-LK-SOL-3K",
    shortDescription: "Kit solaire autonome pour sites isolés et stations relais.",
    description:
      "Générateur solaire complet (panneaux, batteries, régulateur) pour l'alimentation de sites isolés, stations relais télécom ou éclairage public.",
    specs: [
      { label: "Puissance", value: "3 kWc" },
      { label: "Autonomie", value: "48 h sans soleil" },
      { label: "Stockage", value: "Batteries lithium ou plomb" },
    ],
    availability: "import",
  },
  {
    slug: "pylone-eclairage-public",
    name: "Pylône d'éclairage public",
    brandSlug: "loukil",
    categorySlug: "energie-eclairage",
    sectorSlugs: ["energie", "btp-electrification"],
    reference: "GAT-LK-PYL-012",
    shortDescription: "Pylône galvanisé pour éclairage de voirie et espaces publics.",
    description: "Pylône en acier galvanisé à chaud, livré avec platine de fixation et accessoires de pose.",
    specs: [
      { label: "Hauteur", value: "6 à 12 m" },
      { label: "Traitement", value: "Galvanisation à chaud" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "tracteur-agricole-loukil",
    name: "Tracteur Kubota, distribué par LOUKIL",
    brandSlug: "loukil",
    categorySlug: "materiel-agricole",
    sectorSlugs: ["agro-industrie"],
    reference: "GAT-LK-TRC-075",
    shortDescription: "Tracteur agricole polyvalent avec gamme d'attachements — marque représentée par LOUKIL.",
    description:
      "Tracteur Kubota, l'une des marques agricoles historiquement représentées par le Groupe LOUKIL (aux côtés de SAME, Gaspardo et Maschio pour le machinisme agricole). Conçu pour les exploitations de taille moyenne, livrable avec charrue, herse et remorque selon les besoins du projet.",
    specs: [
      { label: "Puissance moteur", value: "75 ch" },
      { label: "Attachements disponibles", value: "Charrue, herse, remorque" },
    ],
    availability: "import",
  },
  {
    slug: "cable-electrique-multibrin",
    name: "Câble électrique multibrin U-1000 R2V",
    brandSlug: "loukil",
    categorySlug: "cables-appareillage",
    sectorSlugs: ["btp-electrification", "energie"],
    reference: "GAT-CB-ELC-016",
    shortDescription: "Câble électrique pour installations basse et moyenne tension.",
    description: "Câble électrique multibrin pour distribution basse tension, conforme aux normes en vigueur.",
    specs: [
      { label: "Section", value: "1,5 à 95 mm²" },
      { label: "Tension assignée", value: "1000 V" },
    ],
    availability: "stock",
  },
  {
    slug: "omicron-cmc500",
    name: "OMICRON CMC 500 — Système de test universel",
    brandSlug: "omicron",
    categorySlug: "cables-appareillage",
    sectorSlugs: ["energie", "automatisme"],
    reference: "OMICRON CMC 500",
    shortDescription: "Système de test portable pour relais de protection et équipements de réseau électrique.",
    description:
      "Le CMC 500 génère et mesure tension et courant pour tester relais de protection, transformateurs de mesure et disjoncteurs. Boîtier robuste avec entrées binaires/analogiques, trois sorties voltage/courant indépendantes, et connectique réseau pour pilotage PC.",
    specs: [
      { label: "Entrées Binaire/Analogique", value: "10 voies" },
      { label: "Sorties", value: "3 voies voltage/courant (A, B, C)" },
      { label: "Connectivité", value: "3× ETH, USB, 4× ports d'extension" },
    ],
    availability: "import",
    imageUrl: "/images/omicron-cmc500.png",
  },
  {
    slug: "omicron-cmc256plus",
    name: "OMICRON CMC 256plus",
    brandSlug: "omicron",
    categorySlug: "cables-appareillage",
    sectorSlugs: ["energie", "automatisme"],
    reference: "OMICRON CMC 256plus",
    shortDescription: "Système de test relais haute précision et calibrateur universel.",
    description:
      "Le CMC 256plus combine test de relais de protection et calibrateur universel : sa précision permet aussi l'étalonnage de compteurs d'énergie, transducteurs de mesure, appareils de qualité d'énergie et PMU — pour les applications exigeant la plus haute exactitude.",
    specs: [
      { label: "Usage", value: "Test relais + calibrateur universel" },
      { label: "Précision", value: "Haute exactitude (étalonnage compteurs/PMU)" },
    ],
    availability: "import",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
