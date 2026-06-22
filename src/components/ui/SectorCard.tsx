import Link from "next/link";
import { Sector } from "@/lib/types";

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link
      href={`/secteurs#${sector.slug}`}
      className="group flex flex-col border border-steel-soft/30 bg-paper p-6 transition-colors hover:border-copper"
    >
      <span className="h-1.5 w-7 bg-copper" aria-hidden />
      <h3 className="mt-3 font-display text-base font-semibold text-blueprint group-hover:text-copper">
        {sector.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">{sector.description}</p>
    </Link>
  );
}
