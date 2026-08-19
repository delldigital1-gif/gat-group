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
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteProvider } from "@/lib/quote-context";
import { ChatProvider } from "@/lib/chat-context";
import { ChatWidget } from "@/components/chat/ChatWidget";

export const metadata: Metadata = {
  title: "GAT — Global African Trading | Fournitures industrielles & Menuiserie Aluminium",
  description:
    "GAT distribue des équipements industriels (Xylem, Sedis, Castrol, LOUKIL) et conçoit des solutions de menuiserie aluminium & bois en Afrique de l'Ouest depuis 2007.",
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
          <ChatProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidget />
          </ChatProvider>
        </QuoteProvider>
      </body>
    </html>
  );
}
