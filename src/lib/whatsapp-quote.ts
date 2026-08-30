import { QuoteItem } from "@/lib/types";
import { getProduct } from "@/lib/data/products";
import { getBrand } from "@/lib/data/brands";
import { WHATSAPP_LINK } from "@/lib/site-config";

export type QuoteContactInfo = {
  name: string;
  company: string;
  phone: string;
  email: string;
  notes: string;
};

const LABELS = {
  fr: {
    title: "Nouvelle demande de devis — site GAT",
    qty: "Qté",
    ref: "Réf.",
    name: "Nom",
    company: "Entreprise",
    phone: "Téléphone",
    email: "Email",
    notes: "Précisions",
  },
  en: {
    title: "New quote request — GAT website",
    qty: "Qty",
    ref: "Ref.",
    name: "Name",
    company: "Company",
    phone: "Phone",
    email: "Email",
    notes: "Notes",
  },
} as const;

// Construit un lien wa.me pré-rempli avec le récapitulatif de la liste de
// devis + les coordonnées saisies — remplace l'ancienne simulation locale
// (le formulaire ne transmettait rien nulle part, voir historique git).
// Choix de WhatsApp plutôt qu'un vrai backend (Formspree/Supabase) : le site
// est exporté statiquement (GitHub Pages, pas de serveur), et GAT a déjà un
// numéro WhatsApp commercial actif utilisé ailleurs sur le site (chatbot,
// pied de page) — cohérent avec l'existant, aucun compte/coût supplémentaire.
export function buildQuoteWhatsAppUrl(
  items: QuoteItem[],
  contact: QuoteContactInfo,
  locale: "fr" | "en"
): string {
  const t = LABELS[locale];

  const lines = items
    .map((item) => ({ item, product: getProduct(item.productSlug) }))
    .filter((l): l is { item: QuoteItem; product: NonNullable<ReturnType<typeof getProduct>> } => Boolean(l.product));

  const productLines = lines.map(({ item, product }) => {
    const brand = getBrand(product.brandSlug);
    const name = locale === "en" ? product.nameEn : product.name;
    const prefix = brand ? `${brand.name} — ` : "";
    return `• ${prefix}${name} (${t.ref} ${product.reference}) — ${t.qty} ${item.quantity}`;
  });

  const messageParts = [
    `*${t.title}*`,
    "",
    ...productLines,
    "",
    `${t.name}: ${contact.name}`,
    contact.company ? `${t.company}: ${contact.company}` : null,
    `${t.phone}: ${contact.phone}`,
    contact.email ? `${t.email}: ${contact.email}` : null,
    contact.notes ? `${t.notes}: ${contact.notes}` : null,
  ].filter((line): line is string => line !== null);

  return `${WHATSAPP_LINK}?text=${encodeURIComponent(messageParts.join("\n"))}`;
}
