import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Parallax } from "@/components/motion/Parallax";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { PhotoCredit } from "@/components/ui/PhotoCredit";
import { provinces } from "@/lib/data/provinces";
import { experiences } from "@/lib/data/experiences";
import { INTEREST_TAGS } from "@/lib/data/types";

const MANIFESTO_IMAGE = "/images/morro-do-moco-huambo.jpg";

/**
 * Bridges the hero into the page: still Ink, still the hero's register,
 * but already content. Counts are read from the data layer rather than
 * written by hand, so they can never drift from what the site actually
 * contains — and none of them is a claim about the business (visitors,
 * bookings, years of operation), only about what is on this site.
 */
export function HomeIndexBar() {
  const facts = [
    { value: String(provinces.length), label: "províncias" },
    { value: String(experiences.length), label: "experiências" },
    { value: String(INTEREST_TAGS.length), label: "formas de viajar" },
  ];

  return (
    <section className="border-t border-cream/10 bg-ink text-cream">
      <PageShell className="flex flex-wrap items-baseline gap-x-10 gap-y-4 py-6">
        {facts.map((fact) => (
          <p key={fact.label} className="flex items-baseline gap-2">
            <span className="font-display text-h3 font-semibold text-gold">{fact.value}</span>
            <span className="text-caption tracking-[0.18em] text-cream/60 uppercase">
              {fact.label}
            </span>
          </p>
        ))}
      </PageShell>
    </section>
  );
}

/**
 * The "curiosity" beat of the journey. Asymmetric by construction: a wide
 * type column against a tall portrait frame, with the two set at different
 * vertical offsets so the composition reads as a spread rather than as two
 * balanced halves of a card.
 */
export function Manifesto() {
  return (
    <SectionContainer className="overflow-x-clip">
      <PageShell className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <RevealOnScroll>
          <p className="text-caption font-medium tracking-[0.2em] text-terracotta uppercase">
            O país
          </p>
          <h2 className="mt-5 max-w-xl font-display text-h1 font-semibold text-balance">
            Não é um destino. São vinte e um.
          </h2>
          <div className="mt-6 flex max-w-lg flex-col gap-4 text-body text-ink-muted">
            <p>
              Angola tem 21 províncias: litoral tropical a norte, planalto fresco no centro, deserto
              a sul e quedas de água no interior. A maior parte dos roteiros nunca sai de Luanda.
            </p>
            <p>
              Este guia começa pelo país inteiro — província a província, com o que há para ver,
              como chegar e quando ir.
            </p>
          </div>
        </RevealOnScroll>

        <figure className="lg:mt-16">
          <ImageReveal className="relative aspect-[3/4]" delay={120}>
            <div className="absolute inset-[-7%]">
              <Parallax strength={28} className="relative">
                <Image
                  src={MANIFESTO_IMAGE}
                  alt="O Morro do Moco, o ponto mais alto de Angola, no Huambo"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </Parallax>
            </div>
          </ImageReveal>
          <figcaption className="mt-3">
            <PhotoCredit src={MANIFESTO_IMAGE} place="Morro do Moco, Huambo" tone="default" />
          </figcaption>
        </figure>
      </PageShell>
    </SectionContainer>
  );
}
