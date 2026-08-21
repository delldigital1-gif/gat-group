import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { NetworkDiagram } from "@/components/home/NetworkDiagram";
import { Nameplate } from "@/components/home/Nameplate";
import { PillarCard } from "@/components/ui/PillarCard";
import { BrandCard } from "@/components/catalogue/BrandCard";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { pillars } from "@/lib/data/pillars";
import { brands } from "@/lib/data/brands";
import { products } from "@/lib/data/products";
import { realisations } from "@/lib/data/realisations";
import { assetPath } from "@/lib/asset-path";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* HERO — network diagram, GAT's positioning in one image */}
      <section className="border-b border-steel-soft/30 bg-paper pt-12 pb-16 sm:pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>Global African Trading · since 2007</Eyebrow>
              <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.15] text-blueprint sm:text-4xl">
                From supply to finished worksite: GAT drives African industry forward.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-steel">
                GAT supplies, distributes and installs industrial equipment and aluminium &amp;
                wood joinery solutions for energy, water, construction, oil & gas and
                agro-industry — anywhere in West Africa.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/en/catalogue" variant="copper">
                  Browse the catalogue <ArrowRight size={16} />
                </Button>
                <Button href="/en/contact" variant="outline">
                  Request a quote
                </Button>
              </div>
            </div>
            <NetworkDiagram locale="en" />
          </div>
        </Container>
      </section>

      {/* PLAQUE SIGNALETIQUE — key figures */}
      <section className="py-12">
        <Container>
          <Nameplate locale="en" />
        </Container>
      </section>

      {/* OUR 3 BUSINESS UNITS */}
      <section className="py-12">
        <Container>
          <SectionDivider label="Our business units" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-blueprint sm:text-3xl">
              Three trades, one specialised answer for each
            </h2>
            <Link href="/en/secteurs" className="flex items-center gap-1.5 text-sm font-medium text-copper hover:underline">
              See all sectors <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <PillarCard key={p.slug} pillar={p} locale="en" />
            ))}
          </div>
        </Container>
      </section>

      {/* ON THE GROUND — real project photos */}
      <section className="py-4">
        <Container>
          <SectionDivider label="On the ground" />
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {realisations.slice(0, 4).map((r) => (
              <Link
                key={r.slug}
                href="/en/realisations"
                className="group relative block aspect-[4/3] overflow-hidden border border-steel-soft/30"
              >
                {r.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element -- photo externe hotlinkée (ancien site GAT), temporaire en attendant l'auto-hébergement
                  <img
                    src={assetPath(r.imageUrl)}
                    alt={r.titleEn}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-mist-2" />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-blueprint/85 px-2.5 py-1.5">
                  <p className="truncate font-mono text-[10px] uppercase tracking-[0.06em] text-mist">
                    {r.client}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* PARTNER BRANDS */}
      <section className="bg-blueprint py-16 text-mist">
        <Container>
          <SectionDivider label="Brands we carry" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Official partner of leading global brands
            </h2>
            <Link href="/en/marques" className="flex items-center gap-1.5 text-sm font-medium text-copper hover:underline">
              All brands <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <BrandCard key={b.slug} brand={b} locale="en" />
            ))}
          </div>
        </Container>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section className="py-16">
        <Container>
          <SectionDivider label="Catalogue" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-blueprint sm:text-3xl">
              Build your quote list
            </h2>
            <Link href="/en/catalogue" className="flex items-center gap-1.5 text-sm font-medium text-copper hover:underline">
              Full catalogue <ArrowRight size={15} />
            </Link>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-steel">
            Browse product families, add what you need to your list, and send a single grouped
            quote request — no online payment.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} locale="en" />
            ))}
          </div>
        </Container>
      </section>

      {/* WHY GAT */}
      <section className="bg-mist-2 py-16">
        <Container>
          <SectionDivider label="Why GAT" />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Compliance & quality",
                text: "Equipment compliant with European and international standards, from recognised manufacturers.",
              },
              {
                icon: Truck,
                title: "Reliable logistics",
                text: "Ex-works, FCA, DDU, CFR, CIF, free to warehouse — every shipping mode at competitive prices.",
              },
              {
                icon: FileText,
                title: "No-commitment quotes",
                text: "Build your list, receive a detailed quote, decide with full transparency.",
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

      {/* FINAL CTA */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 border border-steel-soft/30 bg-paper p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-blueprint">
                A project to equip? Let&apos;s talk.
              </h2>
              <p className="mt-2 max-w-md text-sm text-steel">
                Our sales team advises you on suppliers, brands and lead times — at the office or
                on site.
              </p>
            </div>
            <Button href="/en/contact" variant="copper" className="shrink-0">
              Contact us <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
