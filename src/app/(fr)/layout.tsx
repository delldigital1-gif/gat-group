import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteProvider } from "@/lib/quote-context";
import { ChatProvider } from "@/lib/chat-context";
import { ChatWidget } from "@/components/chat/ChatWidget";

export default function FrLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QuoteProvider>
      <ChatProvider locale="fr">
        <Header locale="fr" />
        <main className="flex-1">{children}</main>
        <Footer locale="fr" />
        <ChatWidget locale="fr" />
      </ChatProvider>
    </QuoteProvider>
  );
}
