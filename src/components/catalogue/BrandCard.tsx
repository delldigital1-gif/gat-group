import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/lib/types";
import { assetPath } from "@/lib/asset-path";
import { Locale } from "@/lib/i18n/dictionary";

export function BrandCard({ brand, locale = "fr" }: { brand: Brand; locale?: Locale }) {
  const href = locale === "en" ? `/en/marques/${brand.slug}` : `/marques/${brand.slug}`;
  const tagline = locale === "en" ? brand.taglineEn : brand.tagline;
  const description = locale === "en" ? brand.descriptionEn : brand.description;
  const country = locale === "en" ? brand.countryEn : brand.country;
  const originLabel = locale === "en" ? "Origin" : "Origine";

  return (
    <Link
      href={href}
      className="blueprint-corners group flex flex-col gap-4 border border-steel-soft/30 bg-paper p-6 transition-colors hover:border-blueprint"
    >
      <div className="flex items-start justify-between">
        {brand.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- logo externe hotlinké, pas d'optimisation next/image nécessaire pour ce visuel temporaire
          <img
            src={assetPath(brand.logoUrl)}
            alt={`Logo ${brand.name}`}
            className="h-12 w-auto max-w-[110px] object-contain"
          />
        ) : (
          <span className="flex h-12 w-12 items-center justify-center border border-steel-soft/40 font-display text-sm font-semibold text-blueprint">
            {brand.logoInitials}
          </span>
        )}
        <ArrowUpRight size={18} className="text-steel-soft transition-colors group-hover:text-copper" />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-blueprint">{brand.name}</h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-copper">{tagline}</p>
      </div>
      <p className="text-sm leading-relaxed text-steel">{description}</p>
      <span className="mt-auto font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
        {originLabel} — {country}
      </span>
    </Link>
  );
}
