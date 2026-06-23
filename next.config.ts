import type { NextConfig } from "next";

// GITHUB_PAGES=true active un export statique servi sous /gat-group
// (utilisé uniquement pour la prévisualisation publique sur
// delldigital1-gif.github.io/gat-group). La config par défaut (sans cette
// variable) reste un projet Next.js normal, prête pour Vercel à la racine
// du domaine définitif.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/gat-group" : "";

const nextConfig: NextConfig = {
  // Exposé au code client pour préfixer manuellement les chemins d'images
  // locales (voir src/lib/asset-path.ts) — nécessaire car next/image et les
  // balises <img> ne le font pas automatiquement en export statique.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: "/gat-group/",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
