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
    <footer className="mt-16 bg-blueprint text-mist">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist/75">{dict.footer.siteSection}</p>
            <ul className="mt-2.5 space-y-1.5 text-sm">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-mist hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist/75">{dict.footer.resourcesSection}</p>
            <ul className="mt-2.5 space-y-1.5 text-sm">
              {moreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-mist hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist/75">{dict.footer.hq}</p>
            <ul className="mt-2.5 space-y-2 text-sm text-mist">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white" />
                Djidjolé, rue Bristrot — Lomé, Togo
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-white" />
                <a href="tel:+22890141201" className="hover:text-white">
                  +228 90 14 12 01
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-white" />
                <a href="mailto:gat@gatgroup.org" className="hover:text-white">
                  gat@gatgroup.org
                </a>
              </li>
            </ul>

            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-mist/75">
              {dict.footer.commercial}
            </p>
            <ul className="mt-2.5 space-y-2 text-sm text-mist">
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="shrink-0 text-white" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {WHATSAPP_NUMBER_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-white" />
                <a href={`mailto:${COMMERCIAL_EMAIL}`} className="hover:text-white">
                  {COMMERCIAL_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cartouche façon plan technique */}
        <div className="mt-8 grid grid-cols-2 gap-3 border border-mist/25 p-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-mist/75 sm:grid-cols-4">
          <div className="title-block-cell">
            <p className="text-mist/60">{dict.footer.designation}</p>
            <p className="mt-1 text-mist">{dict.footer.designationValue}</p>
          </div>
          <div className="title-block-cell">
            <p className="text-mist/60">{dict.footer.scale}</p>
            <p className="mt-1 text-mist">{dict.footer.scaleValue}</p>
          </div>
          <div className="title-block-cell">
            <p className="text-mist/60">{dict.footer.revision}</p>
            <p className="mt-1 text-mist">
              {dict.footer.revisionValue} {new Date().getFullYear()}
            </p>
          </div>
          <div className="title-block-cell">
            <p className="text-mist/60">{dict.footer.status}</p>
            <p className="mt-1 text-mist">{dict.footer.statusValue}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 text-xs text-mist/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global African Trading SARL — {dict.footer.rightsReserved}</p>
          <p>RC Lomé · Djidjolé, Togo</p>
        </div>
      </Container>
    </footer>
  );
}
