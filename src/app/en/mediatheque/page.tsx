import { FileDown, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { assetPath } from "@/lib/asset-path";

// Brochures officielles des marques distribuées par GAT. Documents
// fournis directement par GAT hébergés sur ce site (public/docs/) ;
// les gros catalogues disponibles sur le site de la marque pointent
// vers l'URL officielle pour rester à jour sans alourdir le dépôt.
const documents = [
  {
    title: "Xylem Flygt Catalogue — Submersible Pumps",
    type: "PDF",
    url: "https://www.xylem.com/siteassets/brand/flygt/resources/brochure/flygt_submersible_brochure_us23.pdf",
  },
  {
    title: "Sedis Catalogue — Chains, Transmission & Lifting",
    type: "PDF",
    url: "https://www.sedis.com/fichiers/uploads/sedis-catalogue-principales-fabrications.pdf",
  },
  {
    title: "Castrol Catalogue — Industrial Lubricants",
    type: "PDF",
    url: "https://www.castrol.com/content/dam/castrol/business-sites-new/en/global/corporate/documents/industries/industrial-product-catalogue/castrol-industrial-product-catalogue-english.pdf",
  },
  {
    title: "OMICRON — Products & Solutions Overview",
    type: "PDF",
    url: "https://www.alectrix.co.za/wp/wp-content/uploads/2025/02/OMICRON-Products-Solutions-Overview-ENU-02.2025.pdf",
  },
  {
    title: "Xylem Service Solutions — Custom Fabrication",
    type: "PDF",
    url: "/docs/xylem-service-solutions-custom-fabrication.pdf",
  },
  {
    title: "Xylem — Industrial Water Solutions",
    type: "PDF",
    url: "/docs/xylem-industrial-solutions-catalogue.pdf",
  },
  {
    title: "Xylem — Wastewater Range Accessories Catalogue",
    type: "PDF",
    url: "/docs/xylem-catalogue-accessoires-eaux-usees.pdf",
  },
  {
    title: "Bell & Gossett Series 1510 — Catalogue",
    type: "PDF",
    url: "/docs/bell-gossett-series-1510-catalogue.pdf",
  },
  {
    title: "Sedis — Public Works",
    type: "PDF",
    url: "/docs/sedis-brochure-travaux-publics.pdf",
  },
  {
    title: "Sedis — Handling Chains Catalogue",
    type: "PDF",
    url: "https://www.sedis.com/fichiers/uploads/sedis-catalogue-manutention.pdf",
  },
  {
    title: "ebro (Xylem) — EBI 12-EX Data Logger Manual",
    type: "PDF",
    url: "/docs/ebro-manuel-ebi-12-ex.pdf",
  },
];

export default function MediaLibraryPage() {
  return (
    <Container className="py-12">
      <Eyebrow>Media library</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-blueprint sm:text-3xl">
        Brochures &amp; technical sheets
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
        Download presentation documents from GAT and its partner brands.
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
              href={assetPath(doc.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 whitespace-nowrap border border-copper px-3 py-1.5 text-xs font-medium text-copper hover:bg-copper hover:text-white"
            >
              <FileDown size={14} /> Download
            </a>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[11px] text-steel-soft">
        Documentation provided by GAT and its partner brands. Links open in a new tab.
      </p>
    </Container>
  );
}
