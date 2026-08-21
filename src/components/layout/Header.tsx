"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
import { Locale, getDictionary, localizedPath } from "@/lib/i18n/dictionary";

type NavLink = { href: string; label: string };

function withLocale(path: string, locale: Locale): string {
  return locale === "en" ? `/en${path}` : path;
}

function buildNavData(locale: Locale) {
  const dict = getDictionary(locale);
  const l = (path: string) => withLocale(path, locale);

  const sectorLinks: NavLink[] = [
    { href: l("/secteurs"), label: dict.header.centraleAchat },
    { href: l("/menuiserie-aluminium-bois"), label: dict.header.menuiserie },
    { href: l("/btp"), label: dict.header.btp },
  ];

  const catalogueLinks: NavLink[] = categories.map((c) => ({
    href: l(`/catalogue/categorie/${c.slug}`),
    label: locale === "en" ? c.nameEn : c.name,
  }));

  const brandLinks: NavLink[] = brands.map((b) => ({ href: l(`/marques/${b.slug}`), label: b.name }));

  const resourceLinks: NavLink[] = [
    { href: l("/mediatheque"), label: dict.header.mediatheque },
    { href: l("/realisations"), label: dict.header.realisations },
    { href: l("/contact"), label: dict.header.contact },
  ];

  const aboutLinks: NavLink[] = [{ href: l("/qui-sommes-nous"), label: dict.header.quiSommesNous }];

  return { sectorLinks, catalogueLinks, brandLinks, resourceLinks, aboutLinks };
}

type SearchItem = { href: string; label: string; type: string; hint?: string };

function buildSearchIndex(locale: Locale): SearchItem[] {
  const dict = getDictionary(locale);
  const l = (path: string) => withLocale(path, locale);

  const staticPageResults: SearchItem[] = [
    { href: l("/qui-sommes-nous"), label: dict.header.quiSommesNous, type: dict.header.typePage },
    { href: l("/contact"), label: dict.header.contact, type: dict.header.typePage },
    { href: l("/mediatheque"), label: dict.header.mediatheque, type: dict.header.typePage },
    { href: l("/realisations"), label: dict.header.realisations, type: dict.header.typePage },
    { href: l("/catalogue"), label: dict.header.navCatalogue, type: dict.header.typePage },
    { href: l("/devis"), label: dict.header.myQuoteList, type: dict.header.typePage },
  ];

  return [
    ...pillars.map((p) => ({
      href: l(p.href),
      label: locale === "en" ? p.nameEn : p.name,
      type: dict.header.typePillar,
    })),
    ...sectors.map((s) => ({
      href: s.pillar === "btp" ? l("/btp") : l(`/secteurs#${s.slug}`),
      label: locale === "en" ? s.nameEn : s.name,
      type: dict.header.typeSector,
    })),
    ...brands.map((b) => ({ href: l(`/marques/${b.slug}`), label: b.name, type: dict.header.typeBrand })),
    ...categories.map((c) => ({
      href: l(`/catalogue/categorie/${c.slug}`),
      label: locale === "en" ? c.nameEn : c.name,
      type: dict.header.typeCategory,
    })),
    ...products.map((p) => ({
      href: l(`/catalogue/${p.slug}`),
      label: locale === "en" ? p.nameEn : p.name,
      type: dict.header.typeProduct,
      hint: p.reference,
    })),
    ...staticPageResults,
  ];
}

function searchSite(query: string, index: SearchItem[]): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return index
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

function SearchPanel({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const index = buildSearchIndex(locale);

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

  const results = searchSite(query, index);

  return (
    <div className="relative">
      <button
        aria-label={open ? (locale === "en" ? "Close search" : "Fermer la recherche") : dict.header.search}
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
                placeholder={dict.header.searchPlaceholder}
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
                  <p className="px-4 py-4 text-sm text-steel">
                    {locale === "en" ? `No results for "${query}".` : `Aucun résultat pour « ${query} ».`}
                  </p>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function LangLinks({ pathname, className }: { pathname: string; className: string }) {
  const frHref = localizedPath(pathname, "fr");
  const enHref = localizedPath(pathname, "en");
  const isEn = pathname.startsWith("/en");
  return (
    <div className={className}>
      <Link href={frHref} className={isEn ? "text-ink hover:text-copper" : "font-semibold text-copper"}>
        Français
      </Link>
      <span className="text-steel-soft">/</span>
      <Link href={enHref} className={isEn ? "font-semibold text-copper" : "text-ink hover:text-copper"}>
        English
      </Link>
    </div>
  );
}

function UtilityPanel({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [contrastOn, setContrastOn] = useState(false);

  useEffect(() => {
    const savedContrast = localStorage.getItem("gat-contrast") === "1";
    setContrastOn(savedContrast);
    document.documentElement.classList.toggle("contrast-high", savedContrast);
  }, []);

  const toggleContrast = () => {
    const next = !contrastOn;
    setContrastOn(next);
    document.documentElement.classList.toggle("contrast-high", next);
    localStorage.setItem("gat-contrast", next ? "1" : "0");
  };

  const contactHref = withLocale("/contact", locale);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button aria-label={dict.header.moreOptions} className="p-2 text-blueprint hover:text-copper">
        <Menu size={20} />
      </button>
      {open && (
        <div className="absolute right-0 top-full w-72 border border-blueprint-2 bg-blueprint py-2 text-mist shadow-lg">
          <Link href={contactHref} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blueprint-2">
            <Mail size={16} /> {dict.header.requestInfo}
          </Link>
          <Link href={contactHref} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blueprint-2">
            <MapPin size={16} /> {dict.header.findAgency}
          </Link>
          <button
            onClick={toggleContrast}
            className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-blueprint-2"
          >
            <span className="flex items-center gap-3">
              <Eye size={16} /> {dict.header.highContrast}
            </span>
            <ContrastToggle on={contrastOn} />
          </button>
          <div className="mt-1 flex items-center gap-3 border-t border-mist/15 px-4 pt-2.5 pb-1 text-sm">
            <Globe size={16} className="shrink-0" />
            <LangLinks pathname={pathname} className="flex items-center gap-2" />
          </div>
        </div>
      )}
    </div>
  );
}

function MobileUtilitySection({ locale, onNavigate }: { locale: Locale; onNavigate: () => void }) {
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const [contrastOn, setContrastOn] = useState(false);

  useEffect(() => {
    setContrastOn(localStorage.getItem("gat-contrast") === "1");
  }, []);

  const toggleContrast = () => {
    const next = !contrastOn;
    setContrastOn(next);
    document.documentElement.classList.toggle("contrast-high", next);
    localStorage.setItem("gat-contrast", next ? "1" : "0");
  };

  const contactHref = withLocale("/contact", locale);

  return (
    <MobileSection>
      <span className="px-2 pt-2 pb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
        {locale === "en" ? "Options" : "Options"}
      </span>
      <Link href={contactHref} className="flex items-center gap-2 px-2 py-2 text-sm text-ink hover:text-copper" onClick={onNavigate}>
        <Mail size={15} className="text-copper" /> {dict.header.requestInfo}
      </Link>
      <Link href={contactHref} className="flex items-center gap-2 px-2 py-2 text-sm text-ink hover:text-copper" onClick={onNavigate}>
        <MapPin size={15} className="text-copper" /> {dict.header.findAgency}
      </Link>
      <button
        onClick={toggleContrast}
        className="flex w-full items-center justify-between gap-2 px-2 py-2 text-sm text-ink hover:text-copper"
      >
        <span className="flex items-center gap-2">
          <Eye size={15} className="text-copper" /> {dict.header.highContrast}
        </span>
        <ContrastToggle on={contrastOn} />
      </button>
      <div className="flex items-center gap-2 px-2 py-2 text-sm text-ink">
        <Globe size={15} className="text-copper" />
        <LangLinks pathname={pathname} className="flex items-center gap-2" />
      </div>
    </MobileSection>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  const { sectorLinks, catalogueLinks, brandLinks, resourceLinks, aboutLinks } = buildNavData(locale);
  const homeHref = locale === "en" ? "/en" : "/";
  const catalogueHref = withLocale("/catalogue", locale);
  const brandsHref = withLocale("/marques", locale);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-soft/30 bg-paper/95 backdrop-blur-sm">
      <div className="hidden border-b border-steel-soft/20 bg-blueprint text-mist md:block">
        <Container className="flex h-9 items-center justify-between text-[12px]">
          <div className="flex items-center gap-4">
            <a href="tel:+22890141201" className="flex items-center gap-1.5 hover:text-copper">
              <Phone size={12} /> {dict.header.phoneLabel}
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
            <Link href={withLocale("/contact", locale)} className="hover:text-white">
              {dict.header.langSwitch}
            </Link>
          </div>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-2.5 font-display text-lg font-semibold text-blueprint">
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
          <NavDropdown label={dict.header.navSectors} items={sectorLinks} width="w-64" />
          <NavDropdown
            label={dict.header.navCatalogue}
            items={catalogueLinks}
            footerLink={{ href: catalogueHref, label: dict.header.allCatalogue }}
            width="w-72"
          />
          <NavDropdown
            label={dict.header.navBrands}
            items={brandLinks}
            footerLink={{ href: brandsHref, label: dict.header.allBrands }}
          />
          <NavDropdown label={dict.header.navResources} items={resourceLinks} />
          <NavDropdown label={dict.header.navAbout} items={aboutLinks} />
        </nav>

        <div className="flex items-center gap-3">
          <SearchPanel locale={locale} />
          <div className="hidden lg:block">
            <UtilityPanel locale={locale} />
          </div>
          <button
            aria-label={locale === "en" ? "Open menu" : "Ouvrir le menu"}
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
              <MobileNavGroup label={dict.header.navSectors} items={sectorLinks} onNavigate={closeMobile} />
            </MobileSection>
            <MobileSection>
              <MobileNavGroup
                label={dict.header.navCatalogue}
                items={catalogueLinks}
                footerLink={{ href: catalogueHref, label: dict.header.allCatalogue }}
                onNavigate={closeMobile}
              />
            </MobileSection>
            <MobileSection>
              <MobileNavGroup
                label={dict.header.navBrands}
                items={brandLinks}
                footerLink={{ href: brandsHref, label: dict.header.allBrands }}
                onNavigate={closeMobile}
              />
            </MobileSection>
            <MobileSection>
              <MobileNavGroup label={dict.header.navResources} items={resourceLinks} onNavigate={closeMobile} />
            </MobileSection>
            <MobileSection>
              <MobileNavGroup label={dict.header.navAbout} items={aboutLinks} onNavigate={closeMobile} />
            </MobileSection>
            <MobileUtilitySection locale={locale} onNavigate={closeMobile} />
          </Container>
        </div>
      )}
    </header>
  );
}
