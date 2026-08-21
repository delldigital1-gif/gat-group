// Chatbot à arbre de décision — aucune IA externe, fonctionne entièrement
// côté client. Pensé comme un assistant commercial : chaque réponse met en
// avant un argument GAT et propose une action concrète (catalogue, devis,
// contact) plutôt qu'une simple réponse informative.

import { COMMERCIAL_EMAIL, WHATSAPP_NUMBER_DISPLAY } from "@/lib/site-config";
import { Locale } from "@/lib/i18n/dictionary";

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

function withLocale(path: string, locale: Locale): string {
  return locale === "en" ? `/en${path}` : path;
}

export function getChatNodes(locale: Locale): Record<string, ChatNode> {
  const l = (path: string) => withLocale(path, locale);

  if (locale === "en") {
    return {
      root: {
        id: "root",
        message:
          "Hello 👋 I'm the GAT assistant. I can introduce our products, our sectors, or help you start a quote request — no commitment. What would you like to know?",
        options: [
          { label: "Your products & brands", action: { type: "node", nodeId: "products" } },
          { label: "Your business sectors", action: { type: "node", nodeId: "sectors" } },
          { label: "Alu & Wood Joinery", action: { type: "node", nodeId: "carpentry" } },
          { label: "Request a quote", action: { type: "node", nodeId: "quote" } },
          { label: "Contact you", action: { type: "node", nodeId: "contact" } },
        ],
      },

      products: {
        id: "products",
        message:
          "GAT is the official partner of well-known industrial brands: Xylem (water pumping & treatment), Sedis (transmission and lifting chains), Castrol (lubricants), LOUKIL (solar energy & agro) and OMICRON (power network testing). Which brand interests you?",
        options: [
          { label: "Xylem (water)", action: { type: "node", nodeId: "brand-xylem" } },
          { label: "Sedis (chains)", action: { type: "node", nodeId: "brand-sedis" } },
          { label: "See the full catalogue", action: { type: "navigate", href: l("/catalogue") } },
          { label: "All brands", action: { type: "navigate", href: l("/marques") } },
          { label: "⬅ Back to menu", action: { type: "node", nodeId: "root" } },
        ],
      },

      "brand-xylem": {
        id: "brand-xylem",
        message:
          "Xylem is our partner for water across all of West Africa: submersible pumps, treatment stations, meters, Flygt accessories. Ideal for your water supply or sanitation projects. Shall I add it to your quote list?",
        options: [
          { label: "See Xylem products", action: { type: "navigate", href: l("/marques/xylem") } },
          { label: "Go to the catalogue", action: { type: "navigate", href: l("/catalogue") } },
          { label: "⬅ Back to menu", action: { type: "node", nodeId: "root" } },
        ],
      },

      "brand-sedis": {
        id: "brand-sedis",
        message:
          "Sedis has been manufacturing industrial chains for 70 years — transmission, lifting, handling, and the Delta® HR range for abrasive environments (public works, cement plants). Perfect for your production lines or worksites.",
        options: [
          { label: "See Sedis products", action: { type: "navigate", href: l("/marques/sedis") } },
          { label: "Go to the catalogue", action: { type: "navigate", href: l("/catalogue") } },
          { label: "⬅ Back to menu", action: { type: "node", nodeId: "root" } },
        ],
      },

      sectors: {
        id: "sectors",
        message:
          "GAT serves 9 sectors: Energy, Water & sanitation, Construction & electrification, Telecommunications, Oil & heavy industry, Agro-industry, Healthcare, Marine & lifting, Automation. Any sector in particular?",
        options: [
          { label: "Energy", action: { type: "navigate", href: l("/secteurs#energie") } },
          { label: "Water & sanitation", action: { type: "navigate", href: l("/secteurs#eau-assainissement") } },
          { label: "Construction & electrification", action: { type: "navigate", href: l("/btp") } },
          { label: "See all sectors", action: { type: "navigate", href: l("/secteurs") } },
          { label: "⬅ Back to menu", action: { type: "node", nodeId: "root" } },
        ],
      },

      carpentry: {
        id: "carpentry",
        message:
          "Our Aluminium & Wood Joinery business covers windows, doors, façades and verandas with Alustar profiles. Our teams handle transport, installation and finishing right up to the worksite — anywhere in West Africa.",
        options: [
          { label: "See projects", action: { type: "navigate", href: l("/menuiserie-aluminium-bois") } },
          { label: "Request a quote", action: { type: "node", nodeId: "quote" } },
          { label: "⬅ Back to menu", action: { type: "node", nodeId: "root" } },
        ],
      },

      quote: {
        id: "quote",
        message:
          "It's simple and risk-free: browse the catalogue, add what interests you to your list, then send a single grouped request — no online payment. A GAT sales rep will get back to you shortly with a detailed quote.",
        options: [
          { label: "Go to the catalogue", action: { type: "navigate", href: l("/catalogue") } },
          { label: "See my quote list", action: { type: "navigate", href: l("/devis") } },
          { label: "I'd rather talk to someone", action: { type: "node", nodeId: "contact" } },
          { label: "⬅ Back to menu", action: { type: "node", nodeId: "root" } },
        ],
      },

      contact: {
        id: "contact",
        message: `You can reach GAT directly:\n📍 Djidjolé, Lomé, Togo\n📞 +228 90 14 12 01\n💬 Sales WhatsApp: ${WHATSAPP_NUMBER_DISPLAY}\n✉️ ${COMMERCIAL_EMAIL}\n\nOr use our form — a sales rep will respond quickly.`,
        options: [
          { label: "Open the contact form", action: { type: "navigate", href: l("/contact") } },
          { label: "⬅ Back to menu", action: { type: "node", nodeId: "root" } },
        ],
      },

      fallback: {
        id: "fallback",
        message:
          "I don't have a precise answer for that yet 😅 — but I can point you to our products, our sectors, or straight to a quote or a GAT sales rep.",
        options: [
          { label: "Your products & brands", action: { type: "node", nodeId: "products" } },
          { label: "Request a quote", action: { type: "node", nodeId: "quote" } },
          { label: "Contact you", action: { type: "node", nodeId: "contact" } },
        ],
      },
    };
  }

  return {
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
        { label: "Voir le catalogue complet", action: { type: "navigate", href: l("/catalogue") } },
        { label: "Toutes les marques", action: { type: "navigate", href: l("/marques") } },
        { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
      ],
    },

    "brand-xylem": {
      id: "brand-xylem",
      message:
        "Xylem est notre partenaire pour l'eau partout en Afrique de l'Ouest : pompes immergées, stations de traitement, compteurs, accessoires Flygt. Idéal pour vos projets d'adduction d'eau ou d'assainissement. Je vous mets ça dans votre liste de devis ?",
      options: [
        { label: "Voir les produits Xylem", action: { type: "navigate", href: l("/marques/xylem") } },
        { label: "Aller au catalogue", action: { type: "navigate", href: l("/catalogue") } },
        { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
      ],
    },

    "brand-sedis": {
      id: "brand-sedis",
      message:
        "Sedis fabrique des chaînes industrielles depuis 70 ans — transmission, levage, manutention, et la gamme Delta® HR pour les environnements abrasifs (travaux publics, cimenterie). Parfait pour vos lignes de production ou vos chantiers.",
      options: [
        { label: "Voir les produits Sedis", action: { type: "navigate", href: l("/marques/sedis") } },
        { label: "Aller au catalogue", action: { type: "navigate", href: l("/catalogue") } },
        { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
      ],
    },

    sectors: {
      id: "sectors",
      message:
        "GAT répond à 9 secteurs : Énergie, Eau & assainissement, BTP & électrification, Télécommunications, Pétrolier & industrie lourde, Agro-industrie, Médical, Marine & levage, Automatisme. Un secteur en particulier ?",
      options: [
        { label: "Énergie", action: { type: "navigate", href: l("/secteurs#energie") } },
        { label: "Eau & assainissement", action: { type: "navigate", href: l("/secteurs#eau-assainissement") } },
        { label: "BTP & électrification", action: { type: "navigate", href: l("/btp") } },
        { label: "Voir tous les secteurs", action: { type: "navigate", href: l("/secteurs") } },
        { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
      ],
    },

    carpentry: {
      id: "carpentry",
      message:
        "Notre activité Menuiserie Aluminium & Bois couvre fenêtres, portes, façades et vérandas avec les profilés Alustar. Nos équipes gèrent le transport, la pose et la finition jusqu'au chantier — partout en Afrique de l'Ouest.",
      options: [
        { label: "Voir des réalisations", action: { type: "navigate", href: l("/menuiserie-aluminium-bois") } },
        { label: "Demander un devis", action: { type: "node", nodeId: "quote" } },
        { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
      ],
    },

    quote: {
      id: "quote",
      message:
        "C'est simple et sans risque : parcourez le catalogue, ajoutez ce qui vous intéresse à votre liste, puis envoyez une seule demande groupée — aucun paiement en ligne. Un commercial GAT revient vers vous avec un devis détaillé sous peu.",
      options: [
        { label: "Aller au catalogue", action: { type: "navigate", href: l("/catalogue") } },
        { label: "Voir ma liste de devis", action: { type: "navigate", href: l("/devis") } },
        { label: "Plutôt parler à quelqu'un", action: { type: "node", nodeId: "contact" } },
        { label: "⬅ Retour au menu", action: { type: "node", nodeId: "root" } },
      ],
    },

    contact: {
      id: "contact",
      message: `Vous pouvez joindre GAT directement :\n📍 Djidjolé, Lomé, Togo\n📞 +228 90 14 12 01\n💬 WhatsApp commercial : ${WHATSAPP_NUMBER_DISPLAY}\n✉️ ${COMMERCIAL_EMAIL}\n\nOu passez par notre formulaire — un commercial vous répond rapidement.`,
      options: [
        { label: "Ouvrir le formulaire de contact", action: { type: "navigate", href: l("/contact") } },
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
}

// Reconnaissance de mots-clés pour le texte libre (pas d'IA — simple
// correspondance de sous-chaînes, suffisant pour orienter vers le bon nœud).
function getKeywordGroups(locale: Locale): { nodeId: string; keywords: string[] }[] {
  if (locale === "en") {
    return [
      { nodeId: "root", keywords: ["hello", "hi", "hey", "good morning", "good evening"] },
      {
        nodeId: "products",
        keywords: ["product", "catalogue", "catalog", "buy", "purchase", "pump", "chain", "lubricant", "brand"],
      },
      { nodeId: "brand-xylem", keywords: ["xylem", "flygt"] },
      { nodeId: "brand-sedis", keywords: ["sedis"] },
      {
        nodeId: "sectors",
        keywords: [
          "sector",
          "field",
          "activity",
          "energy",
          "water",
          "sanitation",
          "telecom",
          "agro",
          "medical",
          "healthcare",
          "marine",
          "oil",
          "industry",
        ],
      },
      {
        nodeId: "carpentry",
        keywords: ["joinery", "aluminium", "aluminum", "window", "door", "facade", "façade", "veranda", "wood", "alustar"],
      },
      { nodeId: "quote", keywords: ["quote", "price", "cost", "order", "how much"] },
      {
        nodeId: "contact",
        keywords: ["contact", "phone", "email", "mail", "address", "call", "reach", "lome", "lomé"],
      },
    ];
  }

  return [
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
      keywords: ["menuiserie", "aluminium", "fenetre", "fenêtre", "porte", "facade", "façade", "veranda", "véranda", "bois", "alustar"],
    },
    { nodeId: "quote", keywords: ["devis", "prix", "tarif", "cout", "coût", "commande", "combien"] },
    {
      nodeId: "contact",
      keywords: ["contact", "telephone", "téléphone", "email", "mail", "adresse", "appeler", "joindre", "lome", "lomé"],
    },
  ];
}

export function matchKeyword(input: string, locale: Locale): string {
  const normalized = input.toLowerCase();
  for (const group of getKeywordGroups(locale)) {
    if (group.keywords.some((k) => normalized.includes(k))) {
      return group.nodeId;
    }
  }
  return "fallback";
}
