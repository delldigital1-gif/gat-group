"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Check,
  Eye,
  Globe,
  Mail,
  MapPin,
  Menu,
  Search,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY } from "@/lib/site-config";
import { assetPath } from "@/lib/asset-path";
import { categories } from "@/lib/data/categories";
import { brands } from "@/lib/data/brands";
import { products } from "@/lib/data/products";
import { sectors } from "@/lib/data/sectors";
import { pillars } from "@/lib/data/pillars";

type NavLink = { href: string; label: string };

const sectorLinks: NavLink[] = [
  { href: "/secteurs", label: "Centrale d'achat" },
  { href: "/menuiserie-aluminium-bois", label: "Menuiserie Aluminium, Bois & Métallique" },
  { href: "/btp", label: "BTP" },
];

const catalogueLinks: NavLink[] = categories.map((c) => ({
  href: `/catalogue?categorie=${c.slug}`,
  label: c.name,
}));

const brandLinks: NavLink[] = brands.map((b) => ({ href: `/marques/${b.slug}`, label: b.name }));

const resourceLinks: NavLink[] = [
  { href: "/mediatheque", label: "Médiathèque" },
  { href: "/realisations", label: "Nos réalisations" },
  { href: "/contact", label: "Contact" },
];

const aboutLinks: NavLink[] = [{ href: "/qui-sommes-nous", label: "Qui sommes-nous" }];

type SearchItem = { href: string; label: string; type: string; hint?: string };

const staticPageResults: SearchItem[] = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous", type: "Page" },
  { href: "/contact", label: "Contact", type: "Page" },
  { href: "/mediatheque", label: "Médiathèque", type: "Page" },
  { href: "/realisations", label: "Nos réalisations", type: "Page" },
  { href: "/catalogue", label: "Catalogue", type: "Page" },
  { href: "/devis", label: "Ma liste de devis", type: "Page" },
];

const searchIndex: SearchItem[] = [
  ...pillars.map((p) => ({ href: p.href, label: p.name, type: "Pôle d'activité" })),
  ...sectors.map((s) => ({
    href: s.pillar === "btp" ? "/btp" : `/secteurs#${s.slug}`,
    label: s.name,
    type: "Secteur",
  })),
  ...brands.map((b) => ({ href: `/marques/${b.slug}`, label: b.name, type: "Marque" })),
  ...categories.map((c) => ({ href: `/catalogue?categorie=${c.slug}`, label: c.name, type: "Catégorie" })),
  ...products.map((p) => ({ href: `/catalogue/${p.slug}`, label: p.name, type: "Produit", hint: p.reference })),
  ...staticPageResults,
];

function searchSite(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return searchIndex
    .filter((item) => item.label.toLowerCase().includes(q) || item.hint?.toLowerCase().includes(q))
    .slice(0, 8);
}

function NavDropdown({
  label,
  items,
  footerLink,
  width = "w-56",
}: {
  label: string;
  items: NavLink[];
  footerLink?: NavLink;
  width?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink hover:text-copper">
        {label} <ChevronDown size={14} />
      </button>
      {open && (
        <div className={`absolute left-0 top-full ${width} border border-steel-soft/30 bg-paper py-2 shadow-lg`}>
          {items.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-4 py-2 text-sm text-ink hover:bg-mist-2 hover:text-copper"
            >
              {l.label}
            </Link>
          ))}
          {footerLink && (
            <Link
              href={footerLink.href}
              className="mt-1 block border-t border-steel-soft/20 px-4 pt-2.5 text-sm font-medium text-copper hover:underline"
            >
              {footerLink.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function MobileNavGroup({
  label,
  items,
  footerLink,
  onNavigate,
}: {
  label: string;
  items: NavLink[];
  footerLink?: NavLink;
  onNavigate: () => void;
}) {
  return (
    <>
      <span className="px-2 pt-2 pb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">{label}</span>
      {items.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="px-2 py-2 text-sm text-ink hover:text-copper"
          onClick={onNavigate}
        >
          {l.label}
        </Link>
      ))}
      {footerLink && (
        <Link
          href={footerLink.href}
          className="px-2 py-2 text-sm font-medium text-copper"
          onClick={onNavigate}
        >
          {footerLink.label}
        </Link>
      )}
    </>
  );
}

function MobileSection({ children }: { children: ReactNode }) {
  return <div className="flex flex-col border-t border-steel-soft/20 pt-2 mt-2 first:mt-0 first:border-t-0 first:pt-0">{children}</div>;
}

type Lang = "fr" | "en";

function ContrastToggle({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
        on ? "bg-copper" : "bg-mist/30"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 translate-x-0.5 rounded-full bg-white transition-transform ${
          on ? "translate-x-[18px]" : ""
        }`}
      />
    </span>
  );
}

function SearchPanel() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  const results = searchSite(query);

  return (
    <div className="relative">
      <button
        aria-label={open ? "Fermer la recherche" : "Rechercher"}
        className="p-2 text-blueprint hover:text-copper"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={20} /> : <Search size={20} />}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={close} />
          <div className="absolute right-0 top-full z-50 w-[min(22rem,calc(100vw-2rem))] border border-steel-soft/30 bg-paper shadow-lg">
            <div className="flex items-center gap-2 border-b border-steel-soft/20 px-3 py-2.5">
              <Search size={16} className="shrink-0 text-steel-soft" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un produit, une marque, un secteur…"
                className="w-full bg-transparent text-sm text-ink placeholder:text-steel-soft focus:outline-none"
              />
            </div>
            {query.trim().length >= 2 && (
              <div className="max-h-80 overflow-y-auto py-1">
                {results.length > 0 ? (
                  results.map((r) => (
                    <Link
                      key={`${r.type}-${r.href}-${r.label}`}
                      href={r.href}
                      onClick={close}
                      className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-mist-2"
                    >
                      <span className="text-ink">{r.label}</span>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.08em] text-copper">
                        {r.type}
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-4 text-sm text-steel">Aucun résultat pour « {query} ».</p>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function UtilityPanel() {
  const [open, setOpen] = useState(false);
  const [contrastOn, setContrastOn] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const savedContrast = localStorage.getItem("gat-contrast") === "1";
    setContrastOn(savedContrast);
    document.documentElement.classList.toggle("contrast-high", savedContrast);
    const savedLang = localStorage.getItem("gat-lang");
    if (savedLang === "en" || savedLang === "fr") setLang(savedLang);
  }, []);

  const toggleContrast = () => {
    const next = !contrastOn;
    setContrastOn(next);
    document.documentElement.classList.toggle("contrast-high", next);
    localStorage.setItem("gat-contrast", next ? "1" : "0");
  };

  const chooseLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("gat-lang", l);
    // NOTE : sélection persistée, mais le contenu du site n'est pas
    // encore traduit — bascule fonctionnelle en attendant le chantier
    // de traduction complète (voir échange avec le client).
  };

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button aria-label="Plus d'options" className="p-2 text-blueprint hover:text-copper">
        <Menu size={20} />
      </button>
      {open && (
        <div className="absolute right-0 top-full w-72 border border-blueprint-2 bg-blueprint py-2 text-mist shadow-lg">
          <Link href="/contact" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blueprint-2">
            <Mail size={16} /> Demande d&apos;information
          </Link>
          <Link href="/contact" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blueprint-2">
            <MapPin size={16} /> Rechercher une agence
          </Link>
          <button
            onClick={toggleContrast}
            className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-blueprint-2"
          >
            <span className="flex items-center gap-3">
              <Eye size={16} /> Activer le mode contraste élevé
            </span>
            <ContrastToggle on={contrastOn} />
          </button>
          <div className="mt-1 border-t border-mist/15 pt-1">
            <button
              onClick={() => chooseLang("fr")}
              className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-blueprint-2"
            >
              <span className="flex items-center gap-3">
                <Globe size={16} /> Français
              </span>
              {lang === "fr" && <Check size={15} className="text-copper" />}
            </button>
            <button
              onClick={() => chooseLang("en")}
              className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-blueprint-2"
            >
              <span className="flex items-center gap-3 pl-[26px]">English</span>
              {lang === "en" && <Check size={15} className="text-copper" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileUtilitySection({ onNavigate }: { onNavigate: () => void }) {
  const [contrastOn, setContrastOn] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    setContrastOn(localStorage.getItem("gat-contrast") === "1");
    const savedLang = localStorage.getItem("gat-lang");
    if (savedLang === "en" || savedLang === "fr") setLang(savedLang);
  }, []);

  const toggleContrast = () => {
    const next = !contrastOn;
    setContrastOn(next);
    document.documentElement.classList.toggle("contrast-high", next);
    localStorage.setItem("gat-contrast", next ? "1" : "0");
  };

  const chooseLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("gat-lang", l);
  };

  return (
    <MobileSection>
      <span className="px-2 pt-2 pb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">Options</span>
      <Link href="/contact" className="flex items-center gap-2 px-2 py-2 text-sm text-ink hover:text-copper" onClick={onNavigate}>
        <Mail size={15} className="text-copper" /> Demande d&apos;information
      </Link>
      <Link href="/contact" className="flex items-center gap-2 px-2 py-2 text-sm text-ink hover:text-copper" onClick={onNavigate}>
        <MapPin size={15} className="text-copper" /> Rechercher une agence
      </Link>
      <button
        onClick={toggleContrast}
        className="flex w-full items-center justify-between gap-2 px-2 py-2 text-sm text-ink hover:text-copper"
      >
        <span className="flex items-center gap-2">
          <Eye size={15} className="text-copper" /> Contraste élevé
        </span>
        <ContrastToggle on={contrastOn} />
      </button>
      <div className="flex items-center gap-2 px-2 py-2 text-sm text-ink">
        <Globe size={15} className="text-copper" />
        <button
          onClick={() => chooseLang("fr")}
          className={lang === "fr" ? "font-semibold text-copper" : "text-ink hover:text-copper"}
        >
          Français
        </button>
        <span className="text-steel-soft">/</span>
        <button
          onClick={() => chooseLang("en")}
          className={lang === "en" ? "font-semibold text-copper" : "text-ink hover:text-copper"}
        >
          English
        </button>
      </div>
    </MobileSection>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

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
              GAT — Afrique de l&apos;Ouest
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
          <NavDropdown label="Nos secteurs" items={sectorLinks} width="w-64" />
          <NavDropdown
            label="Catalogue"
            items={catalogueLinks}
            footerLink={{ href: "/catalogue", label: "Tout le catalogue" }}
            width="w-72"
          />
          <NavDropdown
            label="Marques"
            items={brandLinks}
            footerLink={{ href: "/marques", label: "Toutes les marques" }}
          />
          <NavDropdown label="Ressources" items={resourceLinks} />
          <NavDropdown label="À propos" items={aboutLinks} />
        </nav>

        <div className="flex items-center gap-3">
          <SearchPanel />
          <div className="hidden lg:block">
            <UtilityPanel />
          </div>
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
            <MobileSection>
              <MobileNavGroup label="Nos secteurs" items={sectorLinks} onNavigate={closeMobile} />
            </MobileSection>
            <MobileSection>
              <MobileNavGroup
                label="Catalogue"
                items={catalogueLinks}
                footerLink={{ href: "/catalogue", label: "Tout le catalogue" }}
                onNavigate={closeMobile}
              />
            </MobileSection>
            <MobileSection>
              <MobileNavGroup
                label="Marques"
                items={brandLinks}
                footerLink={{ href: "/marques", label: "Toutes les marques" }}
                onNavigate={closeMobile}
              />
            </MobileSection>
            <MobileSection>
              <MobileNavGroup label="Ressources" items={resourceLinks} onNavigate={closeMobile} />
            </MobileSection>
            <MobileSection>
              <MobileNavGroup label="À propos" items={aboutLinks} onNavigate={closeMobile} />
            </MobileSection>
            <MobileUtilitySection onNavigate={closeMobile} />
          </Container>
        </div>
      )}
    </header>
  );
}
