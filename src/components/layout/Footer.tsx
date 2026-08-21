import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMMERCIAL_EMAIL, WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY } from "@/lib/site-config";
import { assetPath } from "@/lib/asset-path";
import { Locale, getDictionary } from "@/lib/i18n/dictionary";

function withLocale(path: string, locale: Locale): string {
  return locale === "en" ? `/en${path}` : path;
}

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const l = (path: string) => withLocale(path, locale);

  const siteLinks = [
    { href: l("/qui-sommes-nous"), label: dict.footer.quiSommesNous },
    { href: l("/secteurs"), label: dict.footer.secteurs },
    { href: l("/marques"), label: dict.footer.marques },
    { href: l("/catalogue"), label: dict.footer.catalogue },
  ];

  const moreLinks = [
    { href: l("/menuiserie-aluminium-bois"), label: dict.footer.menuiserie },
    { href: l("/realisations"), label: dict.footer.realisations },
    { href: l("/mediatheque"), label: dict.footer.mediatheque },
    { href: l("/contact"), label: dict.footer.contact },
  ];

  return (
    <footer className="mt-24 bg-blueprint text-mist">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-white">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-mist p-1">
                <Image
                  src={assetPath("/images/logo-gat.png")}
                  alt="GAT Group"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </span>
              Global African Trading Group
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-soft">{dict.footer.siteSection}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-mist/90 hover:text-copper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-soft">{dict.footer.resourcesSection}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {moreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-mist/90 hover:text-copper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-soft">{dict.footer.hq}</p>
            <ul className="mt-3 space-y-2.5 text-sm text-mist/90">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-copper" />
                Djidjolé, rue Bristrot — Lomé, Togo
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-copper" />
                <a href="tel:+22890141201" className="hover:text-copper">
                  +228 90 14 12 01
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-copper" />
                <a href="mailto:gat@gatgroup.org" className="hover:text-copper">
                  gat@gatgroup.org
                </a>
              </li>
            </ul>

            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-soft">
              {dict.footer.commercial}
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-mist/90">
              <li className="flex items-center gap-2">
                <MessageCircle size={15} className="shrink-0 text-copper" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-copper">
                  {WHATSAPP_NUMBER_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-copper" />
                <a href={`mailto:${COMMERCIAL_EMAIL}`} className="hover:text-copper">
                  {COMMERCIAL_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cartouche façon plan technique */}
        <div className="mt-12 grid grid-cols-2 gap-4 border border-steel-soft/30 p-4 font-mono text-[11px] uppercase tracking-[0.1em] text-steel-soft sm:grid-cols-4">
          <div className="title-block-cell">
            <p className="text-steel-soft/70">{dict.footer.designation}</p>
            <p className="mt-1 text-mist">{dict.footer.designationValue}</p>
          </div>
          <div className="title-block-cell">
            <p className="text-steel-soft/70">{dict.footer.scale}</p>
            <p className="mt-1 text-mist">{dict.footer.scaleValue}</p>
          </div>
          <div className="title-block-cell">
            <p className="text-steel-soft/70">{dict.footer.revision}</p>
            <p className="mt-1 text-mist">
              {dict.footer.revisionValue} {new Date().getFullYear()}
            </p>
          </div>
          <div className="title-block-cell">
            <p className="text-steel-soft/70">{dict.footer.status}</p>
            <p className="mt-1 text-mist">{dict.footer.statusValue}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-steel-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global African Trading SARL — {dict.footer.rightsReserved}</p>
          <p>RC Lomé · Djidjolé, Togo</p>
        </div>
      </Container>
    </footer>
  );
}
