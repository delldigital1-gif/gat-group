// En mode export GitHub Pages (GITHUB_PAGES=true au build), le site est
// servi sous /gat-group au lieu de la racine. next/image et les balises
// <img> ne préfixent pas automatiquement les chemins locaux ("/images/...")
// avec ce basePath quand l'optimisation est désactivée (export statique).
// Cette fonction corrige ça partout où une image locale est affichée.
// Les URLs externes (http/https, ex. anciennes photos hotlinkées) ne sont
// jamais modifiées.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_PATH}${path}`;
}
