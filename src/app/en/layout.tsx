import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteProvider } from "@/lib/quote-context";
import { ChatProvider } from "@/lib/chat-context";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";

export const metadata: Metadata = {
  title: "GAT — Global African Trading | Industrial Supplies & Aluminium Joinery",
  description:
    "GAT distributes industrial equipment (Xylem, Sedis, Castrol, LOUKIL) and designs aluminium & wood joinery solutions across West Africa since 2007.",
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
