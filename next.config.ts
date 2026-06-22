import type { NextConfig } from "next";

// GITHUB_PAGES=true active un export statique servi sous /gat-group
// (utilisé uniquement pour la prévisualisation publique sur
// delldigital1-gif.github.io/gat-group). La config par défaut (sans cette
// variable) reste un projet Next.js normal, prête pour Vercel à la racine
// du domaine définitif.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/gat-group",
        assetPrefix: "/gat-group/",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
