"use client";

import { useState } from "react";
import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { Locale } from "@/lib/i18n/dictionary";

export function ProductGallery({
  images,
  alt,
  fallbackInitials,
  locale = "fr",
}: {
  images: string[];
  alt: string;
  fallbackInitials: string;
  locale?: Locale;
}) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="blueprint-corners relative aspect-[4/3] overflow-hidden border border-steel-soft/30">
        <div className="flex h-full items-center justify-center bg-mist-2 bg-[linear-gradient(0deg,transparent_24%,var(--color-steel-soft)_25%,var(--color-steel-soft)_26%,transparent_27%,transparent_74%,var(--color-steel-soft)_75%,var(--color-steel-soft)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,var(--color-steel-soft)_25%,var(--color-steel-soft)_26%,transparent_27%,transparent_74%,var(--color-steel-soft)_75%,var(--color-steel-soft)_76%,transparent_77%,transparent)] bg-[length:32px_32px]">
          <span className="font-display text-5xl font-semibold text-blueprint/25">{fallbackInitials}</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="blueprint-corners relative aspect-[4/3] overflow-hidden border border-steel-soft/30">
        <Image src={assetPath(images[active])} alt={alt} fill className="object-cover" priority />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={locale === "en" ? `View photo ${i + 1}` : `Voir la photo ${i + 1}`}
              className={`relative h-16 w-16 shrink-0 overflow-hidden border ${
                i === active ? "border-copper" : "border-steel-soft/30 hover:border-steel"
              }`}
            >
              <Image src={assetPath(src)} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
