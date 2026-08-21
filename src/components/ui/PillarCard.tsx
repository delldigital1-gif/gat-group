import Link from "next/link";
import { Pillar } from "@/lib/data/pillars";
import { Locale } from "@/lib/i18n/dictionary";

export function PillarCard({ pillar, locale = "fr" }: { pillar: Pillar; locale?: Locale }) {
  const href = locale === "en" ? `/en${pillar.href}` : pillar.href;
  const name = locale === "en" ? pillar.nameEn : pillar.name;
  const description = locale === "en" ? pillar.descriptionEn : pillar.description;

  return (
    <Link
      href={href}
      className="group flex flex-col border border-steel-soft/30 bg-paper p-6 transition-colors hover:border-copper"
    >
      <span className="h-1.5 w-7 bg-copper" aria-hidden />
      <h3 className="mt-3 font-display text-base font-semibold text-blueprint group-hover:text-copper">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">{description}</p>
    </Link>
  );
}
