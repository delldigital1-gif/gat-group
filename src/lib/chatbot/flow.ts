// Chatbot à arbre de décision — aucune IA externe, fonctionne entièrement
// côté client. Pensé comme un assistant commercial : chaque réponse met en
// avant un argument GAT et propose une action concrète (catalogue, devis,
// contact) plutôt qu'une simple réponse informative.

export type ChatAction =
  | { type: "node"; nodeId: string }
  | { type: "navigate"; href: string };

export type ChatOption = {
  label: string;
  action: ChatAction;
};

export type ChatNode = {
  id: string;
  message: string;
  options: ChatOption[];
};

export const ROOT_NODE_ID = "root";

export const chatNodes: Record<string, ChatNode> = {
  root: {
    id: "root",
    message:
      "Bonjour 👋 Je suis l'assistant GAT. Je peux vous présenter nos produits, nos secteurs ou vous aider à démarrer une demande de devis — sans engagement. Que souhaitez-vous savoir ?",
    options: [
      { label: "Vos produits & marques", action: { type: "node", nodeId: "products" } },
      { label: "Vos secteurs d'activité", action: { type: "node", nodeId: "sectors" } },
      { label: "Menuiserie Alu & Bois", action: { type: "node", nodeId: "carpentry" } },
      { label: "Demander un devis", action: { type: "node", nodeId: "quote" } },
      { label: "Vous contacter", action: { type: "node", nodeId: "contact" } },
    ],
  },

  products: {
    id: "products",
    message:
      "GAT est partenaire officiel de marques industrielles reconnues : Xylem (pompage & traitement de l'eau), Sedis (chaînes de transmission et de levage), Castrol (lubrifiants), LOUKIL (énergie solaire & agro) et OMICRON (test de réseaux électriques). Quelle marque vous intéresse ?",
    options: [
      { label: "Xylem (eau)", action: { type: "node", nodeId: "brand-xylem" } },
      { label: "Sedis (chaînes)", action: { type: "node", nodeId: "brand-sedis" } },
      { label: "Voir le catalogue complet", action: { type: "navigate", href: "/catalogue" } },
      { label: "Toutes les marques", action: { type: "navigate", href: "/marques" } },
      { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
    ],
  },

  "brand-xylem": {
    id: "brand-xylem",
    message:
      "Xylem est notre partenaire pour l'eau au Togo et au Bénin : pompes immergées, stations de traitement, compteurs, accessoires Flygt. Idéal pour vos projets d'adduction d'eau ou d'assainissement. Je vous mets ça dans votre liste de devis ?",
    options: [
      { label: "Voir les produits Xylem", action: { type: "navigate", href: "/marques/xylem" } },
      { label: "Aller au catalogue", action: { type: "navigate", href: "/catalogue" } },
      { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
    ],
  },

  "brand-sedis": {
    id: "brand-sedis",
    message:
      "Sedis fabrique des chaînes industrielles depuis 70 ans — transmission, levage, manutention, et la gamme Delta® HR pour les environnements abrasifs (travaux publics, cimenterie). Parfait pour vos lignes de production ou vos chantiers.",
    options: [
      { label: "Voir les produits Sedis", action: { type: "navigate", href: "/marques/sedis" } },
      { label: "Aller au catalogue", action: { type: "navigate", href: "/catalogue" } },
      { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
    ],
  },

  sectors: {
    id: "sectors",
    message:
      "GAT répond à 9 secteurs : Énergie, Eau & assainissement, BTP & électrification, Télécommunications, Pétrolier & industrie lourde, Agro-industrie, Médical, Marine & levage, Automatisme. Un secteur en particulier ?",
    options: [
      { label: "Énergie", action: { type: "navigate", href: "/secteurs#energie" } },
      { label: "Eau & assainissement", action: { type: "navigate", href: "/secteurs#eau-assainissement" } },
      { label: "BTP & électrification", action: { type: "navigate", href: "/secteurs#btp-electrification" } },
      { label: "Voir tous les secteurs", action: { type: "navigate", href: "/secteurs" } },
      { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
    ],
  },

  carpentry: {
    id: "carpentry",
    message:
      "Notre activité Menuiserie Aluminium & Bois couvre fenêtres, portes, façades et vérandas avec les profilés Maxwill. Nos équipes gèrent le transport, la pose et la finition jusqu'au chantier — au Togo comme en Côte d'Ivoire.",
    options: [
      { label: "Voir des réalisations", action: { type: "navigate", href: "/menuiserie-aluminium-bois" } },
      { label: "Demander un devis", action: { type: "node", nodeId: "quote" } },
      { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
    ],
  },

  quote: {
    id: "quote",
    message:
      "C'est simple et sans risque : parcourez le catalogue, ajoutez ce qui vous intéresse à votre liste, puis envoyez une seule demande groupée — aucun paiement en ligne. Un commercial GAT revient vers vous avec un devis détaillé sous peu.",
    options: [
      { label: "Aller au catalogue", action: { type: "navigate", href: "/catalogue" } },
      { label: "Voir ma liste de devis", action: { type: "navigate", href: "/devis" } },
      { label: "Plutôt parler à quelqu'un", action: { type: "node", nodeId: "contact" } },
      { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
    ],
  },

  contact: {
    id: "contact",
    message:
      "Vous pouvez joindre GAT directement :\n📍 Djidjolé, Lomé, Togo\n📞 +228 90 14 12 01\n✉️ gat@gatgroup.org\n\nOu passez par notre formulaire — un commercial vous répond rapidement.",
    options: [
      { label: "Ouvrir le formulaire de contact", action: { type: "navigate", href: "/contact" } },
      { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
    ],
  },

  fallback: {
    id: "fallback",
    message:
      "Je n'ai pas encore de réponse précise à ça 😅 — mais je peux vous orienter vers nos produits, nos secteurs, ou directement vers un devis ou un commercial GAT.",
    options: [
      { label: "Vos produits & marques", action: { type: "node", nodeId: "products" } },
      { label: "Demander un devis", action: { type: "node", nodeId: "quote" } },
      { label: "Vous contacter", action: { type: "node", nodeId: "contact" } },
    ],
  },
};

// Reconnaissance de mots-clés pour le texte libre (pas d'IA — simple
// correspondance de sous-chaînes, suffisant pour orienter vers le bon nœud).
const keywordGroups: { nodeId: string; keywords: string[] }[] = [
  { nodeId: "root", keywords: ["bonjour", "salut", "bonsoir", "hello", "coucou"] },
  {
    nodeId: "products",
    keywords: ["produit", "catalogue", "achat", "acheter", "pompe", "chaine", "chaîne", "lubrifiant", "marque"],
  },
  { nodeId: "brand-xylem", keywords: ["xylem", "flygt"] },
  { nodeId: "brand-sedis", keywords: ["sedis"] },
  {
    nodeId: "sectors",
    keywords: [
      "secteur",
      "domaine",
      "activite",
      "activité",
      "energie",
      "énergie",
      "eau",
      "assainissement",
      "telecom",
      "agro",
      "medical",
      "médical",
      "marine",
      "petrolier",
      "pétrolier",
      "industrie",
    ],
  },
  {
    nodeId: "carpentry",
    keywords: ["menuiserie", "aluminium", "fenetre", "fenêtre", "porte", "facade", "façade", "veranda", "véranda", "bois", "maxwill"],
  },
  { nodeId: "quote", keywords: ["devis", "prix", "tarif", "cout", "coût", "commande", "combien"] },
  {
    nodeId: "contact",
    keywords: ["contact", "telephone", "téléphone", "email", "mail", "adresse", "appeler", "joindre", "lome", "lomé"],
  },
];

export function matchKeyword(input: string): string {
  const normalized = input.toLowerCase();
  for (const group of keywordGroups) {
    if (group.keywords.some((k) => normalized.includes(k))) {
      return group.nodeId;
    }
  }
  return "fallback";
}
