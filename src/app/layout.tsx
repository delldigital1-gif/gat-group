import type { Metadata } from "next";
// Polices auto-hébergées via Fontsource (fichiers bundlés au build, aucun
// appel réseau vers fonts.googleapis.com requis). Seuls les poids
// réellement utilisés par la charte GAT sont importés.
import "@fontsource/ibm-plex-serif/500.css";
import "@fontsource/ibm-plex-serif/600.css";
import "@fontsource/ibm-plex-serif/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

const SITE_URL = "https://delldigital1-gif.github.io/gat-group/";
const OG_TITLE = "GAT — Global African Trading | Fournitures industrielles & Menuiserie Aluminium";
const OG_DESCRIPTION =
  "GAT distribue des équipements industriels (Xylem, Sedis, Castrol, Maxwell, Prevost, LOUKIL, OMICRON) et conçoit des solutions de menuiserie aluminium & bois en Afrique de l'Ouest depuis 2007.";

export const metadata: Metadata = {
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    locale: "fr_FR",
    images: [{ url: `${SITE_URL}og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [`${SITE_URL}og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-mist text-ink">{children}</body>
    </html>
  );
}
