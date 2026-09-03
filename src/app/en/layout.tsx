import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteProvider } from "@/lib/quote-context";
import { ChatProvider } from "@/lib/chat-context";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";

const SITE_URL = "https://delldigital1-gif.github.io/gat-group/en/";
const OG_TITLE = "GAT — Global African Trading | Industrial Supplies & Aluminium Joinery";
const OG_DESCRIPTION =
  "GAT distributes industrial equipment (Xylem, Sedis, Castrol, Maxwell, Prevost, LOUKIL, OMICRON) and designs aluminium & wood joinery solutions across West Africa since 2007.";

export const metadata: Metadata = {
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    locale: "en_US",
    images: [{ url: "https://delldigital1-gif.github.io/gat-group/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["https://delldigital1-gif.github.io/gat-group/og-image.jpg"],
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QuoteProvider>
      <ChatProvider locale="en">
        <SetHtmlLang lang="en" />
        <Header locale="en" />
        <main className="flex-1">{children}</main>
        <Footer locale="en" />
        <ChatWidget locale="en" />
      </ChatProvider>
    </QuoteProvider>
  );
}
