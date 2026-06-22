import { FileDown, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";

const documents = [
  { title: "Brochure institutionnelle GAT", type: "PDF", size: "—" },
  { title: "Catalogue Xylem — pompage & traitement de l'eau", type: "PDF", size: "—" },
  { title: "Catalogue Sedis — chaînes & levage", type: "PDF", size: "—" },
  { title: "Gamme Maxwill — menuiserie aluminium", type: "PDF", size: "—" },
  { title: "Présentation Groupe LOUKIL", type: "PDF", size: "—" },
];

export default function MediaLibraryPage() {
  return (
    <Container className="py-12">
      <Eyebrow>Médiathèque</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-blueprint sm:text-4xl">
        Brochures &amp; fiches techniques
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
        Téléchargez les documents de présentation de GAT et de ses marques partenaires.
      </p>

      <SectionDivider />

      <div className="mt-8 border border-steel-soft/30">
        {documents.map((doc, i) => (
          <div
            key={doc.title}
            className={`flex items-center justify-between gap-4 px-5 py-4 ${
              i % 2 === 0 ? "bg-paper" : "bg-mist-2"
            } ${i !== documents.length - 1 ? "border-b border-steel-soft/20" : ""}`}
          >
            <div className="flex items-center gap-3">
              <FileText size={18} className="shrink-0 text-copper" />
              <div>
                <p className="font-display text-sm font-semibold text-blueprint">{doc.title}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-steel">{doc.type}</p>
              </div>
            </div>
            <button
              disabled
              className="flex items-center gap-1.5 whitespace-nowrap border border-steel-soft/40 px-3 py-1.5 text-xs font-medium text-steel"
              title="Document à venir"
            >
              <FileDown size={14} /> Bientôt
            </button>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[11px] text-steel-soft">
        Les fichiers PDF seront mis en ligne dès leur finalisation.
      </p>
    </Container>
  );
}
