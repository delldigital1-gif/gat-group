"use client";

import { useEffect } from "react";

// Le root layout fixe lang="fr" sur <html> (seul layout racine autorisé
// avec l'App Router). Corrige côté client pour les pages /en/*.
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "fr";
    };
  }, [lang]);
  return null;
}
