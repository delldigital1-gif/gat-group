import { FileDown, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";

// Brochures officielles des marques distribuées par GAT (liens directs
// vers les sites des marques — pas de copie hébergée sur ce site, pour
// rester à jour et éviter d'alourdir le dépôt de gros PDF).
const documents = [
  {
    title: "Catalogue Xylem Flygt — pompes submersibles",
    type: "PDF",
    url: "https://www.xylem.com/siteassets/brand/flygt/resources/brochure/flygt_submersible_brochure_us23.pdf",
  },
  {
    title: "Catalogue Sedis — chaînes, transmission & levage",
    type: "PDF",
    url: "https://www.sedis.com/fichiers/uploads/sedis-catalogue-principales-fabrications.pdf",
  },
  {
    title: "Catalogue Castrol — lubrifiants industriels",
    type: "PDF",
    url: "https://www.castrol.com/content/dam/castrol/business-sites-new/en/global/corporate/documents/industries/industrial-product-catalogue/castrol-industrial-product-catalogue-english.pdf",
  },
  {
    title: "OMICRON — présentation produits & solutions",
    type: "PDF",
    url: "https://www.alectrix.co.za/wp/wp-content/uploads/2025/02/OMICRON-Products-Solutions-Overview-ENU-02.2025.pdf",
  },
  {
    title: "Xylem Service Solutions — Custom Fabrication",
    type: "PDF",
    url: "/docs/xylem-service-solutions-custom-fabrication.pdf",
  },
];

export default function MediaLibraryPage() {
  return (
    <Container className="py-12">
      <Eyebrow>Médiathèque</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-blueprint sm:text-3xl">
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
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 whitespace-nowrap border border-copper px-3 py-1.5 text-xs font-medium text-copper hover:bg-copper hover:text-white"
            >
              <FileDown size={14} /> Télécharger
            </a>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[11px] text-steel-soft">
        Ces brochures sont fournies par les sites officiels des marques partenaires et
        s&apos;ouvrent dans un nouvel onglet.
      </p>
    </Container>
  );
}
