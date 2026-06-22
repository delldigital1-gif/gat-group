import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Mail, MapPin, Phone } from "lucide-react";

const siteLinks = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/secteurs", label: "Nos secteurs" },
  { href: "/marques", label: "Marques partenaires" },
  { href: "/catalogue", label: "Catalogue" },
];

const moreLinks = [
  { href: "/menuiserie-aluminium-bois", label: "Menuiserie Alu & Bois" },
  { href: "/realisations", label: "Nos réalisations" },
  { href: "/mediatheque", label: "Médiathèque" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-blueprint text-mist">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-mist font-mono text-[13px] text-blueprint">
                GAT
              </span>
              Global African Trading
            </div>
            <p className="mt-4 max-w-xs text-sm text-steel-soft">
              Fournitures industrielles et menuiserie aluminium &amp; bois — au
              service de l&apos;industrie togolaise et ouest-africaine depuis 2007.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-soft">Le site</p>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-soft">Ressources</p>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-soft">Siège — Lomé</p>
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
          </div>
        </div>

        {/* Cartouche façon plan technique */}
        <div className="mt-12 grid grid-cols-2 gap-4 border border-steel-soft/30 p-4 font-mono text-[11px] uppercase tracking-[0.1em] text-steel-soft sm:grid-cols-4">
          <div className="title-block-cell">
            <p className="text-steel-soft/70">Désignation</p>
            <p className="mt-1 text-mist">Site web GAT Group</p>
          </div>
          <div className="title-block-cell">
            <p className="text-steel-soft/70">Échelle</p>
            <p className="mt-1 text-mist">Togo — Côte d&apos;Ivoire</p>
          </div>
          <div className="title-block-cell">
            <p className="text-steel-soft/70">Révision</p>
            <p className="mt-1 text-mist">Refonte {new Date().getFullYear()}</p>
          </div>
          <div className="title-block-cell">
            <p className="text-steel-soft/70">Statut</p>
            <p className="mt-1 text-mist">Catalogue &amp; devis</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-steel-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global African Trading SARL — Tous droits réservés.</p>
          <p>RC Lomé · Djidjolé, Togo</p>
        </div>
      </Container>
    </footer>
  );
}
