"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X, FileText, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { useQuote } from "@/lib/quote-context";
import { WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY } from "@/lib/site-config";
import { assetPath } from "@/lib/asset-path";

const aboutLinks = [{ href: "/qui-sommes-nous", label: "Qui sommes-nous" }];

const sectorLinks = [
  { href: "/secteurs", label: "Centrale d'achat" },
  { href: "/menuiserie-aluminium-bois", label: "Menuiserie Aluminium, Bois & Métallique" },
  { href: "/btp", label: "BTP" },
];

const navLinks = [
  { href: "/marques", label: "Marques partenaires" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/mediatheque", label: "Médiathèque" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const { count } = useQuote();

  return (
    <header className="sticky top-0 z-50 border-b border-steel-soft/30 bg-paper/95 backdrop-blur-sm">
      <div className="hidden border-b border-steel-soft/20 bg-blueprint text-mist md:block">
        <Container className="flex h-9 items-center justify-between text-[12px]">
          <div className="flex items-center gap-4">
            <a href="tel:+22890141201" className="flex items-center gap-1.5 hover:text-copper">
              <Phone size={12} /> +228 90 14 12 01 — Lomé, Togo
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-copper"
            >
              <MessageCircle size={12} /> {WHATSAPP_NUMBER_DISPLAY}
            </a>
          </div>
          <div className="flex items-center gap-4 font-mono uppercase tracking-[0.12em] text-steel-soft">
            <Link href="/contact" className="hover:text-white">
              GAT Togo
            </Link>
            <span aria-hidden>·</span>
            <Link href="/contact" className="hover:text-white">
              GAT Côte d&apos;Ivoire — GESEC
            </Link>
            <span aria-hidden>·</span>
            <Link href="/contact" className="hover:text-white">
              GAT Bénin
            </Link>
          </div>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold text-blueprint">
          <Image
            src={assetPath("/images/logo-gat.png")}
            alt="GAT Group"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="hidden leading-tight sm:block">
            Global African
            <br />
            <span className="text-copper">Trading Group</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink hover:text-copper">
              À propos <ChevronDown size={14} />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-full w-56 border border-steel-soft/30 bg-paper py-2 shadow-lg">
                {aboutLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2 text-sm text-ink hover:bg-mist-2 hover:text-copper"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setSectorsOpen(true)}
            onMouseLeave={() => setSectorsOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink hover:text-copper">
              Nos secteurs <ChevronDown size={14} />
            </button>
            {sectorsOpen && (
              <div className="absolute left-0 top-full w-64 border border-steel-soft/30 bg-paper py-2 shadow-lg">
                {sectorLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2 text-sm text-ink hover:bg-mist-2 hover:text-copper"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-ink hover:text-copper"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/devis"
            className="relative flex items-center gap-2 border border-blueprint px-3 py-2 text-sm font-medium text-blueprint hover:bg-blueprint hover:text-white"
          >
            <FileText size={16} />
            <span className="hidden sm:inline">Ma liste de devis</span>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-copper font-mono text-[11px] text-white">
                {count}
              </span>
            )}
          </Link>
          <button
            aria-label="Ouvrir le menu"
            className="p-2 text-blueprint lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-steel-soft/30 bg-paper lg:hidden">
          <Container className="flex flex-col py-3">
            <span className="px-2 pt-1 pb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
              À propos
            </span>
            {aboutLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-2 py-2 text-sm text-ink hover:text-copper"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <span className="px-2 pt-2 pb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
              Nos secteurs
            </span>
            {sectorLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-2 py-2 text-sm text-ink hover:text-copper"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-steel-soft/20 pt-2">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block px-2 py-2 text-sm text-ink hover:text-copper"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
