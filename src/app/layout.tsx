import type { Metadata } from "next";
// Polices auto-hébergées via Fontsource (fichiers bundlés au build, aucun
// appel réseau vers fonts.googleapis.com requis). Seuls les poids
// réellement utilisés par la charte GAT sont importés.
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteProvider } from "@/lib/quote-context";

export const metadata: Metadata = {
  title: "GAT — Global African Trading | Fournitures industrielles & Menuiserie Aluminium",
  description:
    "GAT distribue des équipements industriels (Xylem, Sedis, Castrol, LOUKIL) et conçoit des solutions de menuiserie aluminium & bois au Togo et en Côte d'Ivoire depuis 2007.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-mist text-ink">
        <QuoteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
