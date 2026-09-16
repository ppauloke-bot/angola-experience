"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { INTEREST_TAGS, type InterestTag } from "@/lib/data/types";
import { cn } from "@/utils/cn";

/**
 * Interest mode, promoted from a filter on a secondary route to a moment
 * on the homepage: "Como quer viver Angola?" — a question, answered by
 * eight real tags that drive real filtering (`/explorar/interesses`
 * receives the choice through `?interesse=`).
 *
 * On pointer devices, hovering an answer brings up the photograph behind
 * the list. That is the whole interaction — no scroll hijacking, no
 * per-frame work: eight `next/image`s crossfading by opacity alone.
 *
 * Each photograph is a real, credited place, and the `alt` text describes
 * what is actually in the frame rather than the interest it illustrates.
 * On touch widths, where there is no hover, the same images appear as
 * thumbnails inside each row instead — the content is identical, the
 * interaction is not faked.
 */
interface InterestVisual {
  tag: InterestTag;
  src: string;
  alt: string;
}

const VISUALS: InterestVisual[] = [
  {
    tag: "Natureza",
    src: "/images/quedas-de-calandula-malanje.jpg",
    alt: "As quedas de Calandula, no rio Lucala, em Malanje",
  },
  {
    tag: "Praia",
    src: "/images/cabo-ledo-icolo-e-bengo.jpg",
    alt: "A costa de Cabo Ledo, em Icolo e Bengo",
  },
  {
    tag: "Cultura",
    src: "/images/jardim-palacio-governador-luena-moxico.jpg",
    alt: "O jardim do Palácio do Governador, no Luena, Moxico",
  },
  {
    tag: "História",
    src: "/images/fortaleza-sao-miguel-luanda.jpg",
    alt: "A Fortaleza de São Miguel, em Luanda, ao fim da tarde",
  },
  {
    tag: "Aventura",
    src: "/images/deserto-do-namibe.jpg",
    alt: "Um canhão desértico a sul do Namibe",
  },
  {
    tag: "Gastronomia",
    src: "/images/restinga-do-lobito.jpg",
    alt: "Barcos de pesca na restinga do Lobito, em Benguela",
  },
  {
    tag: "Fotografia",
    src: "/images/serra-da-leba-huila.jpg",
    alt: "A estrada em ziguezague da Serra da Leba, na Huíla",
  },
  {
    tag: "Relaxamento",
    src: "/images/lagoa-da-quiminha-icolo-e-bengo.jpg",
    alt: "A Lagoa da Quiminha, em Icolo e Bengo",
  },
];

function interestHref(tag: InterestTag) {
  return `/explorar/interesses?interesse=${encodeURIComponent(tag)}`;
}

export function InterestInvitation() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-cream md:py-28">
      {/* Backdrop layer: pointer devices only. */}
      <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
        {VISUALS.map((visual, index) => (
          <Image
            key={visual.tag}
            src={visual.src}
            alt=""
            fill
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-[900ms] ease-[var(--ease-settle)] motion-reduce:transition-none",
              index === active ? "opacity-40" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      </div>

      <PageShell className="relative z-10">
        <p className="text-caption font-medium tracking-[0.2em] text-gold uppercase">Descobrir</p>
        <h2 className="mt-5 max-w-2xl font-display text-h1 font-semibold text-balance">
          Como quer viver Angola?
        </h2>
        <p className="mt-5 max-w-lg text-body text-cream/75">
          Escolha a forma de viajar e mostramos-lhe onde — experiências e províncias filtradas pelo
          que realmente procura.
        </p>

        <ul className="mt-12 flex flex-col border-t border-cream/15">
          {VISUALS.map((visual, index) => (
            <li key={visual.tag} className="border-b border-cream/15">
              <Link
                href={interestHref(visual.tag)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className="group flex items-center gap-5 py-5 transition-colors md:py-6"
              >
                <span className="w-8 shrink-0 text-caption tracking-[0.15em] text-cream/40 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="relative h-14 w-14 shrink-0 overflow-hidden lg:hidden">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>

                <span className="flex-1 font-display text-h2 font-semibold text-cream transition-colors duration-[var(--duration-fast)] group-hover:text-gold">
                  {visual.tag}
                </span>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-body text-cream/40 transition-all duration-[var(--duration-medium)] ease-[var(--ease-settle)] group-hover:translate-x-1 group-hover:text-gold"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-caption text-cream/50">
          {INTEREST_TAGS.length} interesses, aplicados a todas as experiências e províncias do
          catálogo.
        </p>
      </PageShell>
    </section>
  );
}
