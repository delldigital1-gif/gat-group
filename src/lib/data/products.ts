import { Product } from "@/lib/types";

// Produits Xylem, Sedis, Castrol, LOUKIL et OMICRON : gammes et
// références réelles (recherchées sur les sites officiels des marques,
// GAT étant distributeur agréé). Références internes GAT (GAT-XX-...)
// conservées quand la marque n'a pas de référence produit publique.
// Produits Alustar : marque confirmée par le client (visible sur les
// profilés en usine sur les photos GAT) ; noms de produits toujours
// génériques en attendant le catalogue Alustar détaillé.

export const products: Product[] = [
  {
    slug: "pompe-immergee-flygt",
    name: "Pompe immergée Flygt N-Technology",
    nameEn: "Flygt N-Technology Submersible Pump",
    brandSlug: "xylem",
    categorySlug: "pompes-traitement-eau",
    sectorSlugs: ["eau-assainissement", "petrolier-industrie-lourde"],
    reference: "GAT-XY-PMP-014",
    shortDescription: "Pompe submersible auto-nettoyante pour relevage d'eaux usées et eaux chargées.",
    shortDescriptionEn: "Self-cleaning submersible pump for pumping wastewater and heavily loaded water.",
    description:
      "Pompe immergée de la gamme Flygt N-Technology (Xylem) : roue N auto-nettoyante à passage libre, conçue pour les eaux usées non tamisées jusqu'à 8 % de matières solides. Près de 100 ans d'expérience Flygt dans le pompage d'eaux usées, plus d'un million de pompes installées dans le monde. Moteur étanche IP68, adaptée aux postes de relevage et fosses de collecte.",
    descriptionEn:
      "Submersible pump from the Flygt N-Technology range (Xylem): self-cleaning N-impeller with free passage, designed for unscreened wastewater with up to 8% solids content. Nearly 100 years of Flygt experience in wastewater pumping, over a million pumps installed worldwide. IP68-rated motor, suited to lift stations and collection pits.",
    specs: [
      { label: "Débit max.", value: "180 m³/h" },
      { label: "HMT max.", value: "22 m" },
      { label: "Indice de protection", value: "IP68" },
      { label: "Alimentation", value: "Tri 380V" },
    ],
    specsEn: [
      { label: "Max. flow rate", value: "180 m³/h" },
      { label: "Max. head", value: "22 m" },
      { label: "Protection rating", value: "IP68" },
      { label: "Power supply", value: "3-phase 380V" },
    ],
    availability: "import",
    imageUrl: "/images/xylem-flygt-n-technology.jpg",
    datasheetUrl: "/docs/xylem-industrial-solutions-catalogue.pdf",
  },
  {
    slug: "station-traitement-compacte",
    name: "Station compacte de traitement d'eau potable",
    nameEn: "Compact Drinking Water Treatment Station",
    brandSlug: "xylem",
    categorySlug: "pompes-traitement-eau",
    sectorSlugs: ["eau-assainissement"],
    reference: "GAT-XY-TRT-022",
    shortDescription: "Unité compacte de filtration et désinfection pour petits réseaux.",
    shortDescriptionEn: "Compact filtration and disinfection unit for small networks.",
    description:
      "Station modulaire combinant filtration, dosage de réactifs et désinfection UV, pensée pour les réseaux d'adduction d'eau de taille moyenne en zone urbaine ou périurbaine.",
    descriptionEn:
      "Modular station combining filtration, reagent dosing and UV disinfection, designed for medium-sized water supply networks in urban or peri-urban areas.",
    specs: [
      { label: "Capacité", value: "50 m³/j" },
      { label: "Désinfection", value: "UV + chlore" },
      { label: "Encombrement", value: "2,4 × 1,1 m" },
    ],
    specsEn: [
      { label: "Capacity", value: "50 m³/day" },
      { label: "Disinfection", value: "UV + chlorine" },
      { label: "Footprint", value: "2.4 × 1.1 m" },
    ],
    availability: "sur-commande",
    datasheetUrl: "/docs/xylem-industrial-solutions-catalogue.pdf",
  },
  {
    slug: "pompe-centrifuge-bell-gossett-1510",
    name: "Pompe centrifuge Bell & Gossett Series 1510",
    nameEn: "Bell & Gossett Series 1510 Centrifugal Pump",
    brandSlug: "xylem",
    categorySlug: "pompes-traitement-eau",
    sectorSlugs: ["petrolier-industrie-lourde", "btp-electrification"],
    reference: "B&G Series 1510",
    shortDescription: "Pompe centrifuge à aspiration axiale, référence du marché pour les circuits industriels et CVC.",
    shortDescriptionEn: "End-suction centrifugal pump, a market reference for industrial and HVAC circuits.",
    description:
      "La Series 1510 de Bell & Gossett (marque Xylem) est une pompe centrifuge end-suction conçue pour limiter les arrêts de maintenance : démontage sans déplacer la tuyauterie (True Back Pullout), garniture mécanique auto-nettoyante, volute à pied intégral et accouplement à dégagement central. Monitoring vibratoire i-ALERT™ disponible en option.",
    descriptionEn:
      "The Bell & Gossett Series 1510 (a Xylem brand) is an end-suction centrifugal pump designed to minimise maintenance downtime: True Back Pullout design (no need to disturb piping), self-cleaning mechanical seal, integral foot volute and spacer coupling. i-ALERT™ vibration monitoring available as an option.",
    specs: [
      { label: "Marque", value: "Bell & Gossett — a Xylem brand" },
      { label: "Conception", value: "True Back Pullout" },
      { label: "Garniture", value: "Mécanique auto-nettoyante" },
      { label: "Monitoring (option)", value: "i-ALERT™ vibration & température" },
    ],
    specsEn: [
      { label: "Brand", value: "Bell & Gossett — a Xylem brand" },
      { label: "Design", value: "True Back Pullout" },
      { label: "Seal", value: "Self-cleaning mechanical" },
      { label: "Monitoring (option)", value: "i-ALERT™ vibration & temperature" },
    ],
    availability: "import",
    imageUrl: "/images/xylem-bell-gossett-1510.jpg",
    datasheetUrl: "/docs/bell-gossett-series-1510-catalogue.pdf",
  },
  {
    slug: "compteur-eau-volumetrique",
    name: "Compteur d'eau Sensus iPERL+, une marque Xylem",
    nameEn: "Sensus iPERL+ Water Meter, a Xylem Brand",
    brandSlug: "xylem",
    categorySlug: "pompes-traitement-eau",
    sectorSlugs: ["eau-assainissement"],
    reference: "GAT-XY-CPT-008",
    shortDescription: "Compteur d'eau intelligent Sensus pour branchements particuliers et collectifs.",
    shortDescriptionEn: "Smart Sensus water meter for individual and collective connections.",
    description:
      "Compteur d'eau Sensus iPERL+ (Xylem) à technologie électromagnétique, sans pièces mécaniques mobiles à l'usure. Journalisation de données intégrée, boîtier polymère ou métal selon le besoin. Sensus équipe aussi GAT pour des solutions de comptage intelligent et de télérelève (réseau FlexNet) sur les projets qui le nécessitent.",
    descriptionEn:
      "Sensus iPERL+ water meter (Xylem) with electromagnetic technology and no moving mechanical parts to wear out. Built-in data logging, polymer or metal housing depending on the need. Sensus also equips GAT for smart metering and remote meter reading solutions (FlexNet network) on projects that require it.",
    specs: [
      { label: "Gamme", value: "Sensus iPERL+" },
      { label: "Diamètres", value: "DN15 à DN40" },
      { label: "Technologie", value: "Électromagnétique, sans pièces mobiles" },
    ],
    specsEn: [
      { label: "Range", value: "Sensus iPERL+" },
      { label: "Diameters", value: "DN15 to DN40" },
      { label: "Technology", value: "Electromagnetic, no moving parts" },
    ],
    availability: "stock",
    imageUrl: "/images/xylem-sensus-compteur.jpg",
    datasheetUrl: "/docs/xylem-industrial-solutions-catalogue.pdf",
  },
  {
    slug: "chaine-transmission-delta",
    name: "Chaîne de transmission Delta® HR 20B-1",
    nameEn: "Delta® HR 20B-1 Transmission Chain",
    brandSlug: "sedis",
    categorySlug: "chaines-transmission-levage",
    sectorSlugs: ["petrolier-industrie-lourde", "btp-electrification"],
    reference: "20B-1 / 17TD",
    shortDescription: "Chaîne à rouleaux traitement Delta®, pour milieux abrasifs (travaux publics, cimenterie).",
    shortDescriptionEn: "Delta®-treated roller chain, for abrasive environments (public works, cement plants).",
    description:
      "Chaîne à rouleaux de la gamme Delta® HR, dont le traitement thermochimique exclusif Sedis confère une dureté de surface de 1800 Vickers — contre 700 pour une cémentation classique. Recommandée pour les centrales d'enrobé, convoyeurs et environnements très abrasifs.",
    descriptionEn:
      "Roller chain from the Delta® HR range, whose exclusive Sedis thermochemical treatment gives it a surface hardness of 1800 Vickers — versus 700 for conventional case-hardening. Recommended for asphalt plants, conveyors and highly abrasive environments.",
    specs: [
      { label: "Référence ISO 606 / SEDIS", value: "20B-1 / 17TD" },
      { label: "Pas (norme 20B)", value: "31,75 mm" },
      { label: "Traitement", value: "Delta®" },
      { label: "Dureté de surface", value: "1800 HV (vs 700 HV cémentation classique)" },
    ],
    specsEn: [
      { label: "ISO 606 / SEDIS reference", value: "20B-1 / 17TD" },
      { label: "Pitch (20B standard)", value: "31.75 mm" },
      { label: "Treatment", value: "Delta®" },
      { label: "Surface hardness", value: "1800 HV (vs 700 HV conventional case-hardening)" },
    ],
    availability: "stock",
    imageUrl: "/images/sedis-chaine-delta.jpg",
    datasheetUrl: "/docs/sedis-brochure-travaux-publics.pdf",
  },
  {
    slug: "chaine-levage-grade-80",
    name: "Chaîne de levage Sedis série LH (BL)",
    nameEn: "Sedis LH (BL) Series Lifting Chain",
    brandSlug: "sedis",
    categorySlug: "chaines-transmission-levage",
    sectorSlugs: ["marine-levage", "petrolier-industrie-lourde"],
    reference: "GAT-SD-LEV-080",
    shortDescription: "Chaîne calibrée pour élingues et systèmes de levage certifiés, conforme ISO 4347.",
    shortDescriptionEn: "Calibrated chain for slings and certified lifting systems, ISO 4347 compliant.",
    description:
      "Chaîne de levage de la série LH (BL) Sedis, conforme à la norme ISO 4347, calibrée pour les opérations de levage portuaire et industriel. Sedis propose aussi les séries J (LL, plaques type européen B) et AL (plaques type ANSI A) selon les accessoires et normes du client.",
    descriptionEn:
      "Sedis LH (BL) series lifting chain, compliant with ISO 4347, calibrated for port and industrial lifting operations. Sedis also offers the J series (LL, European type B fittings) and AL series (ANSI type A fittings) depending on the customer's accessories and standards.",
    specs: [
      { label: "Diamètre", value: "10 mm" },
      { label: "CMU", value: "3,2 t" },
      { label: "Norme", value: "ISO 4347 / EN 818-2" },
    ],
    specsEn: [
      { label: "Diameter", value: "10 mm" },
      { label: "WLL", value: "3.2 t" },
      { label: "Standard", value: "ISO 4347 / EN 818-2" },
    ],
    availability: "stock",
    imageUrl: "/images/sedis-chaine-levage.jpg",
    datasheetUrl: "/docs/sedis-brochure-travaux-publics.pdf",
  },
  {
    slug: "roue-pignon-transmission",
    name: "Roue à chaîne / pignon de transmission",
    nameEn: "Chain Wheel / Transmission Sprocket",
    brandSlug: "sedis",
    categorySlug: "chaines-transmission-levage",
    sectorSlugs: ["agro-industrie", "petrolier-industrie-lourde"],
    reference: "GAT-SD-PIG-045",
    shortDescription: "Pignons compatibles avec les gammes de chaînes à rouleaux Sedis.",
    shortDescriptionEn: "Sprockets compatible with the Sedis roller chain ranges.",
    description:
      "Roues à chaîne et pignons disponibles en plusieurs nombres de dents, à monter avec les chaînes de transmission de la même gamme.",
    descriptionEn:
      "Chain wheels and sprockets available in several tooth counts, to be fitted with transmission chains from the same range.",
    specs: [
      { label: "Compatibilité", value: "ASA 40 à ASA 80" },
      { label: "Matière", value: "Acier traité" },
    ],
    specsEn: [
      { label: "Compatibility", value: "ASA 40 to ASA 80" },
      { label: "Material", value: "Treated steel" },
    ],
    availability: "sur-commande",
    imageUrl: "/images/sedis-roue-pignon.jpg",
    datasheetUrl: "/docs/sedis-brochure-travaux-publics.pdf",
  },
  {
    slug: "huile-moteur-castrol",
    name: "Castrol Vecton Long Drain 10W-40 E6/E9",
    nameEn: "Castrol Vecton Long Drain 10W-40 E6/E9",
    brandSlug: "castrol",
    categorySlug: "lubrifiants",
    sectorSlugs: ["btp-electrification", "petrolier-industrie-lourde"],
    reference: "GAT-CA-LUB-15W40",
    shortDescription: "Huile moteur diesel longue durée pour groupes électrogènes et engins de chantier.",
    shortDescriptionEn: "Long-drain diesel engine oil for generators and construction machinery.",
    description:
      "Huile moteur diesel Castrol Vecton Long Drain 10W-40, formulée avec la System Pro Technology™ pour une réserve de performance prolongée : contrôle de l'oxydation, réduction des dépôts, neutralisation des acides. Adaptée aux moteurs sollicités en continu — groupes électrogènes, engins de chantier, flottes utilitaires.",
    descriptionEn:
      "Castrol Vecton Long Drain 10W-40 diesel engine oil, formulated with System Pro Technology™ for extended performance reserve: oxidation control, reduced deposits, acid neutralisation. Suited to engines under continuous duty — generators, construction machinery, utility fleets.",
    specs: [
      { label: "Viscosité", value: "10W-40" },
      { label: "Spécification ACEA", value: "E6/E9" },
      { label: "Conditionnement", value: "Bidon 20 L / fût 200 L" },
    ],
    specsEn: [
      { label: "Viscosity", value: "10W-40" },
      { label: "ACEA specification", value: "E6/E9" },
      { label: "Packaging", value: "20 L drum / 200 L barrel" },
    ],
    availability: "stock",
    imageUrl: "/images/castrol-vecton.jpg",
    datasheetUrl:
      "https://www.castrol.com/content/dam/castrol/business-sites-new/en/global/corporate/documents/industries/industrial-product-catalogue/castrol-industrial-product-catalogue-english.pdf",
  },
  {
    slug: "graisse-multiusage",
    name: "Castrol Hyspin AWS 46",
    nameEn: "Castrol Hyspin AWS 46",
    brandSlug: "castrol",
    categorySlug: "lubrifiants",
    sectorSlugs: ["petrolier-industrie-lourde", "marine-levage"],
    reference: "GAT-CA-HYS-046",
    shortDescription: "Huile hydraulique anti-usure pour circuits de pompes, treuils et engins.",
    shortDescriptionEn: "Anti-wear hydraulic oil for pump, winch and machinery circuits.",
    description:
      "Huile hydraulique Castrol Hyspin AWS 46, formulée pour une bonne résistance à l'usure et une stabilité thermique élevée — adaptée aux circuits hydrauliques de pompes, treuils, convoyeurs et engins de chantier sollicités en continu.",
    descriptionEn:
      "Castrol Hyspin AWS 46 hydraulic oil, formulated for good wear resistance and high thermal stability — suited to the hydraulic circuits of pumps, winches, conveyors and construction machinery under continuous duty.",
    specs: [
      { label: "Gamme", value: "Hyspin AWS" },
      { label: "Viscosité ISO", value: "VG 46" },
      { label: "Conditionnement", value: "Bidon 20 L" },
    ],
    specsEn: [
      { label: "Range", value: "Hyspin AWS" },
      { label: "ISO viscosity", value: "VG 46" },
      { label: "Packaging", value: "20 L drum" },
    ],
    availability: "stock",
    imageUrl: "/images/castrol-hyspin.jpg",
    datasheetUrl:
      "https://www.castrol.com/content/dam/castrol/business-sites-new/en/global/corporate/documents/industries/industrial-product-catalogue/castrol-industrial-product-catalogue-english.pdf",
  },
  {
    slug: "huile-reducteur-alphasyn",
    name: "Castrol Alphasyn EP",
    nameEn: "Castrol Alphasyn EP",
    brandSlug: "castrol",
    categorySlug: "lubrifiants",
    sectorSlugs: ["petrolier-industrie-lourde", "agro-industrie"],
    reference: "GAT-CA-ALP-EP",
    shortDescription: "Huile synthétique pour réducteurs, additifs Extrême Pression.",
    shortDescriptionEn: "Synthetic gear oil with Extreme Pressure additives.",
    description:
      "Huile pour réducteurs Castrol Alphasyn EP, synthétique, avec additifs Extrême Pression soufre/phosphore — recommandée pour les réducteurs exposés au micro-piqûrage et aux environnements sévères (cimenteries, convoyeurs, machinisme agricole).",
    descriptionEn:
      "Castrol Alphasyn EP synthetic gear oil, with sulphur/phosphorus Extreme Pressure additives — recommended for gearboxes exposed to micro-pitting and severe environments (cement plants, conveyors, agricultural machinery).",
    specs: [
      { label: "Gamme", value: "Alphasyn EP" },
      { label: "Type", value: "Huile synthétique" },
      { label: "Additifs", value: "Extrême Pression (S/P)" },
    ],
    specsEn: [
      { label: "Range", value: "Alphasyn EP" },
      { label: "Type", value: "Synthetic oil" },
      { label: "Additives", value: "Extreme Pressure (S/P)" },
    ],
    availability: "sur-commande",
    imageUrl: "/images/castrol-alphasyn.jpg",
    datasheetUrl:
      "https://www.castrol.com/content/dam/castrol/business-sites-new/en/global/corporate/documents/industries/industrial-product-catalogue/castrol-industrial-product-catalogue-english.pdf",
  },
  {
    slug: "profile-alu-fenetre-coulissante",
    name: "Profilé aluminium fenêtre coulissante",
    nameEn: "Aluminium Sliding Window Profile",
    brandSlug: "alustar",
    categorySlug: "menuiserie-aluminium",
    sectorSlugs: ["btp-electrification"],
    reference: "GAT-AS-FEN-060",
    shortDescription: "Système coulissant 2 rails pour fenêtres et baies vitrées.",
    shortDescriptionEn: "2-rail sliding system for windows and glazed bays.",
    description:
      "Profilé aluminium thermolaqué pour fenêtres coulissantes, compatible vitrage simple et double, avec accessoires de quincaillerie assortis.",
    descriptionEn:
      "Powder-coated aluminium profile for sliding windows, compatible with single and double glazing, with matching hardware accessories.",
    specs: [
      { label: "Système", value: "Coulissant 2 rails" },
      { label: "Épaisseur vitrage", value: "4 à 24 mm" },
      { label: "Finition", value: "Thermolaquage RAL" },
    ],
    specsEn: [
      { label: "System", value: "2-rail sliding" },
      { label: "Glazing thickness", value: "4 to 24 mm" },
      { label: "Finish", value: "RAL powder coating" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "profile-alu-porte-battante",
    name: "Profilé aluminium porte battante",
    nameEn: "Aluminium Hinged Door Profile",
    brandSlug: "alustar",
    categorySlug: "menuiserie-aluminium",
    sectorSlugs: ["btp-electrification"],
    reference: "GAT-AS-PRT-045",
    shortDescription: "Profilé robuste pour portes battantes intérieures et extérieures.",
    shortDescriptionEn: "Sturdy profile for interior and exterior hinged doors.",
    description:
      "Système de porte battante en aluminium, conçu pour les accès à fort passage — bureaux, commerces, bâtiments publics.",
    descriptionEn:
      "Aluminium hinged door system, designed for high-traffic entrances — offices, retail premises, public buildings.",
    specs: [
      { label: "Ouvrant", value: "Simple ou double" },
      { label: "Finition", value: "Anodisé ou laqué" },
    ],
    specsEn: [
      { label: "Opening", value: "Single or double" },
      { label: "Finish", value: "Anodised or lacquered" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "veranda-aluminium-modulaire",
    name: "Système véranda aluminium modulaire",
    nameEn: "Modular Aluminium Veranda System",
    brandSlug: "alustar",
    categorySlug: "menuiserie-aluminium",
    sectorSlugs: ["btp-electrification"],
    reference: "GAT-AS-VER-030",
    shortDescription: "Structure modulaire pour vérandas et auvents en aluminium.",
    shortDescriptionEn: "Modular structure for aluminium verandas and canopies.",
    description: "Structure aluminium modulaire pour la réalisation de vérandas, auvents et extensions vitrées.",
    descriptionEn: "Modular aluminium structure for building verandas, canopies and glazed extensions.",
    specs: [
      { label: "Portée max.", value: "6 m sans poteau intermédiaire" },
      { label: "Toiture", value: "Polycarbonate ou verre" },
    ],
    specsEn: [
      { label: "Max. span", value: "6 m without intermediate post" },
      { label: "Roofing", value: "Polycarbonate or glass" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "generateur-solaire-loukil",
    name: "Générateur solaire autonome",
    nameEn: "Standalone Solar Generator",
    brandSlug: "loukil",
    categorySlug: "energie-eclairage",
    sectorSlugs: ["energie", "telecommunications"],
    reference: "GAT-LK-SOL-3K",
    shortDescription: "Kit solaire autonome pour sites isolés et stations relais.",
    shortDescriptionEn: "Standalone solar kit for remote sites and relay stations.",
    description:
      "Générateur solaire complet (panneaux, batteries, régulateur) pour l'alimentation de sites isolés, stations relais télécom ou éclairage public.",
    descriptionEn:
      "Complete solar generator (panels, batteries, regulator) for powering remote sites, telecom relay stations or public lighting.",
    specs: [
      { label: "Puissance", value: "3 kWc" },
      { label: "Autonomie", value: "48 h sans soleil" },
      { label: "Stockage", value: "Batteries lithium ou plomb" },
    ],
    specsEn: [
      { label: "Power", value: "3 kWp" },
      { label: "Autonomy", value: "48 h without sun" },
      { label: "Storage", value: "Lithium or lead-acid batteries" },
    ],
    availability: "import",
  },
  {
    slug: "pylone-eclairage-public",
    name: "Pylône d'éclairage public",
    nameEn: "Public Lighting Pylon",
    brandSlug: "loukil",
    categorySlug: "energie-eclairage",
    sectorSlugs: ["energie", "btp-electrification"],
    reference: "GAT-LK-PYL-012",
    shortDescription: "Pylône galvanisé pour éclairage de voirie et espaces publics.",
    shortDescriptionEn: "Galvanised pylon for street and public space lighting.",
    description: "Pylône en acier galvanisé à chaud, livré avec platine de fixation et accessoires de pose.",
    descriptionEn: "Hot-dip galvanised steel pylon, supplied with a mounting base plate and installation accessories.",
    specs: [
      { label: "Hauteur", value: "6 à 12 m" },
      { label: "Traitement", value: "Galvanisation à chaud" },
    ],
    specsEn: [
      { label: "Height", value: "6 to 12 m" },
      { label: "Treatment", value: "Hot-dip galvanising" },
    ],
    availability: "sur-commande",
  },
  {
    slug: "tracteur-agricole-loukil",
    name: "Tracteur Kubota M7040, distribué par LOUKIL",
    nameEn: "Kubota M7040 Tractor, Distributed by LOUKIL",
    brandSlug: "loukil",
    categorySlug: "materiel-agricole",
    sectorSlugs: ["agro-industrie"],
    reference: "GAT-LK-TRC-075",
    shortDescription: "Tracteur agricole polyvalent avec gamme d'attachements — marque représentée par LOUKIL.",
    shortDescriptionEn: "Versatile agricultural tractor with a range of attachments — brand represented by LOUKIL.",
    description:
      "Tracteur Kubota M7040, l'une des marques agricoles historiquement représentées par le Groupe LOUKIL (aux côtés de SAME, Gaspardo et Maschio pour le machinisme agricole). Conçu pour les exploitations de taille moyenne, livrable avec charrue, herse et remorque selon les besoins du projet.",
    descriptionEn:
      "Kubota M7040 tractor, one of the agricultural brands historically represented by Groupe LOUKIL (alongside SAME, Gaspardo and Maschio for agricultural machinery). Designed for medium-sized farms, available with plough, harrow and trailer depending on project needs.",
    specs: [
      { label: "Puissance moteur", value: "74 ch" },
      { label: "Attachements disponibles", value: "Charrue, herse, remorque" },
    ],
    specsEn: [
      { label: "Engine power", value: "74 hp" },
      { label: "Available attachments", value: "Plough, harrow, trailer" },
    ],
    imageUrl: "/images/loukil-kubota-m7040.jpg",
    availability: "import",
  },
  {
    slug: "omicron-cmc500",
    name: "OMICRON CMC 500 — Système de test universel",
    nameEn: "OMICRON CMC 500 — Universal Test System",
    brandSlug: "omicron",
    categorySlug: "cables-appareillage",
    sectorSlugs: ["energie", "automatisme"],
    reference: "OMICRON CMC 500",
    shortDescription: "Système de test portable pour relais de protection et équipements de réseau électrique.",
    shortDescriptionEn: "Portable test system for protection relays and power network equipment.",
    description:
      "Le CMC 500 génère et mesure tension et courant pour tester relais de protection, transformateurs de mesure et disjoncteurs. Boîtier robuste avec entrées binaires/analogiques, trois sorties voltage/courant indépendantes, et connectique réseau pour pilotage PC.",
    descriptionEn:
      "The CMC 500 generates and measures voltage and current to test protection relays, instrument transformers and circuit breakers. Rugged housing with binary/analogue inputs, three independent voltage/current outputs, and network connectivity for PC control.",
    specs: [
      { label: "Entrées Binaire/Analogique", value: "10 voies" },
      { label: "Sorties", value: "3 voies voltage/courant (A, B, C)" },
      { label: "Connectivité", value: "3× ETH, USB, 4× ports d'extension" },
    ],
    specsEn: [
      { label: "Binary/Analogue inputs", value: "10 channels" },
      { label: "Outputs", value: "3 voltage/current channels (A, B, C)" },
      { label: "Connectivity", value: "3× ETH, USB, 4× expansion ports" },
    ],
    availability: "import",
    imageUrl: "/images/omicron-cmc500.png",
    imageUrls: ["/images/omicron-cmc500.png", "/images/omicron-cmc500-application.jpg"],
    datasheetUrl: "https://www.alectrix.co.za/wp/wp-content/uploads/2025/02/OMICRON-Products-Solutions-Overview-ENU-02.2025.pdf",
  },
  {
    slug: "omicron-cmc256plus",
    name: "OMICRON CMC 256plus",
    nameEn: "OMICRON CMC 256plus",
    brandSlug: "omicron",
    categorySlug: "cables-appareillage",
    sectorSlugs: ["energie", "automatisme"],
    reference: "OMICRON CMC 256plus",
    shortDescription: "Système de test relais haute précision et calibrateur universel.",
    shortDescriptionEn: "High-precision relay test system and universal calibrator.",
    description:
      "Le CMC 256plus combine test de relais de protection et calibrateur universel : sa précision permet aussi l'étalonnage de compteurs d'énergie, transducteurs de mesure, appareils de qualité d'énergie et PMU — pour les applications exigeant la plus haute exactitude.",
    descriptionEn:
      "The CMC 256plus combines protection relay testing with a universal calibrator: its precision also allows the calibration of energy meters, measuring transducers, power quality devices and PMUs — for applications requiring the highest accuracy.",
    specs: [
      { label: "Usage", value: "Test relais + calibrateur universel" },
      { label: "Précision", value: "Haute exactitude (étalonnage compteurs/PMU)" },
    ],
    specsEn: [
      { label: "Use", value: "Relay testing + universal calibrator" },
      { label: "Accuracy", value: "High accuracy (meter/PMU calibration)" },
    ],
    availability: "import",
    imageUrl: "/images/omicron-cmc256plus.jpg",
    imageUrls: ["/images/omicron-cmc256plus.jpg", "/images/omicron-cmc256plus-panel.jpg"],
    datasheetUrl: "https://www.alectrix.co.za/wp/wp-content/uploads/2025/02/OMICRON-Products-Solutions-Overview-ENU-02.2025.pdf",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
