"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionDivider } from "@/components/ui/SectionDivider";

const offices = [
  {
    name: "GAT Togo — Siège",
    address: "Djidjolé, Lomé, Togo",
    phone: "+228 90 14 12 01",
    email: "gat@gatgroup.org",
  },
  {
    name: "GAT Côte d'Ivoire — GESEC",
    address: "Abidjan, Côte d'Ivoire",
    phone: "—",
    email: "gesec@gatgroup.org",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO (mise en production) : brancher sur Formspree (cf. landing BAFE)
    // ou un endpoint dédié, une fois l'identifiant de formulaire disponible.
    setSubmitted(true);
  };

  return (
    <Container className="py-12">
      <Eyebrow>Contact</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-blueprint sm:text-4xl">
        Parlons de votre projet
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
        Une question sur un produit, un devis ou un chantier ? Nos équipes au Togo et en Côte
        d&apos;Ivoire vous répondent.
      </p>

      <SectionDivider />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          {offices.map((office) => (
            <div key={office.name} className="border border-steel-soft/30 bg-paper p-6">
              <h2 className="font-display text-base font-semibold text-blueprint">{office.name}</h2>
              <ul className="mt-3 space-y-2.5 text-sm text-steel">
                <li className="flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-copper" /> {office.address}
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={15} className="shrink-0 text-copper" />
                  {office.phone !== "—" ? (
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-copper">
                      {office.phone}
                    </a>
                  ) : (
                    office.phone
                  )}
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={15} className="shrink-0 text-copper" />
                  <a href={`mailto:${office.email}`} className="hover:text-copper">
                    {office.email}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="border border-steel-soft/30 p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 size={36} className="text-verdigris" />
              <p className="mt-4 font-display text-lg font-semibold text-blueprint">Message envoyé</p>
              <p className="mt-2 max-w-sm text-sm text-steel">
                Merci, votre message a bien été reçu. Nous revenons vers vous rapidement.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  required
                  placeholder="Nom et prénom *"
                  className="border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
                />
                <input
                  required
                  type="tel"
                  placeholder="Téléphone *"
                  className="border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <input
                placeholder="Entreprise / institution"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <textarea
                required
                rows={5}
                placeholder="Votre message *"
                className="w-full border border-steel-soft/40 bg-paper px-3 py-2.5 text-sm focus:border-blueprint"
              />
              <button
                type="submit"
                className="w-full border border-copper bg-copper px-5 py-2.5 text-sm font-medium text-white hover:bg-copper-2"
              >
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
