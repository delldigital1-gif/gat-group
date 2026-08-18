import Link from "next/link";
import { Pillar } from "@/lib/data/pillars";

export function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <Link
      href={pillar.href}
      className="group flex flex-col border border-steel-soft/30 bg-paper p-6 transition-colors hover:border-copper"
    >
      <span className="h-1.5 w-7 bg-copper" aria-hidden />
      <h3 className="mt-3 font-display text-base font-semibold text-blueprint group-hover:text-copper">
        {pillar.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">{pillar.description}</p>
    </Link>
  );
}
