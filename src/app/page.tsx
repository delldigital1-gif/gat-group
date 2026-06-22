import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { NetworkDiagram } from "@/components/home/NetworkDiagram";
import { Nameplate } from "@/components/home/Nameplate";
import { SectorCard } from "@/components/ui/SectorCard";
import { BrandCard } from "@/components/catalogue/BrandCard";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { sectors } from "@/lib/data/sectors";
import { brands } from "@/lib/data/brands";
import { products } from "@/lib/data/products";

export default function HomePage() {
  const featuredSectors = sectors.slice(0, 6);
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* HERO — diagramme réseau, la thèse de GAT en une image */}
      <section className="border-b border-steel-soft/30 bg-paper pt-12 pb-16 sm:pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>Global African Trading · depuis 2007</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-blueprint sm:text-5xl">
                Le nœud qui relie l&apos;industrie africaine aux grandes marques mondiales.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-steel">
                GAT fournit, distribue et installe les équipements industriels et solutions de
                menuiserie aluminium &amp; bois pour l&apos;énergie, l&apos;eau, le BTP, le
                pétrolier et l&apos;agro-industrie — au Togo et en Côte d&apos;Ivoire.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/catalogue" variant="copper">
                  Parcourir le catalogue <ArrowRight size={16} />
                </Button>
                <Button href="/contact" variant="outline">
                  Demander un devis
                </Button>
              </div>
            </div>
            <NetworkDiagram />
          </div>
        </Container>
      </section>

      {/* PLAQUE SIGNALETIQUE — chiffres clés */}
      <section className="py-12">
        <Container>
          <Nameplate />
        </Container>
      </section>

      {/* SECTEURS */}
      <section className="py-12">
        <Container>
          <SectionDivider label="Nos secteurs" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-blueprint sm:text-3xl">
              Une réponse spécialisée, secteur par secteur
            </h2>
            <Link href="/secteurs" className="flex items-center gap-1.5 text-sm font-medium text-copper hover:underline">
              Voir tous les secteurs <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSectors.map((s) => (
              <SectorCard key={s.slug} sector={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* MARQUES PARTENAIRES */}
      <section className="bg-blueprint py-16 text-mist">
        <Container>
          <SectionDivider label="Marques couvertes" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Partenaire officiel de marques mondiales de référence
            </h2>
            <Link href="/marques" className="flex items-center gap-1.5 text-sm font-medium text-copper hover:underline">
              Toutes les marques <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <BrandCard key={b.slug} brand={b} />
            ))}
          </div>
        </Container>
      </section>

      {/* CATALOGUE PRODUITS */}
      <section className="py-16">
        <Container>
          <SectionDivider label="Catalogue" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-blueprint sm:text-3xl">
              Constituez votre liste de devis
            </h2>
            <Link href="/catalogue" className="flex items-center gap-1.5 text-sm font-medium text-copper hover:underline">
              Catalogue complet <ArrowRight size={15} />
            </Link>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-steel">
            Parcourez les familles de produits, ajoutez ce qu&apos;il vous faut à votre liste, et
            envoyez une seule demande de devis groupée — sans paiement en ligne.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* POURQUOI GAT */}
      <section className="bg-mist-2 py-16">
        <Container>
          <SectionDivider label="Pourquoi GAT" />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Conformité & qualité",
                text: "Matériels conformes aux normes européennes et internationales, issus de fabricants reconnus.",
              },
              {
                icon: Truck,
                title: "Logistique maîtrisée",
                text: "Départ usine, FCA, DDU, CFR, CIF, franco magasin — tous modes d'expédition à des prix compétitifs.",
              },
              {
                icon: FileText,
                title: "Devis sans engagement",
                text: "Constituez votre liste, recevez un devis détaillé, décidez en toute transparence.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-steel-soft/30 bg-paper p-6">
                <item.icon size={20} className="text-copper" />
                <h3 className="mt-4 font-display text-base font-semibold text-blueprint">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 border border-steel-soft/30 bg-paper p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-blueprint">
                Un projet à équiper ? Parlons-en.
              </h2>
              <p className="mt-2 max-w-md text-sm text-steel">
                Nos commerciaux vous conseillent sur le choix des fournisseurs, des marques et des
                délais — au bureau ou sur le terrain.
              </p>
            </div>
            <Button href="/contact" variant="copper" className="shrink-0">
              Nous contacter <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
