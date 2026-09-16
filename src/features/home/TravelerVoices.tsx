import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StoryPlaceholderCard } from "@/components/trust/StoryPlaceholderCard";
import { TestimonialSlot } from "@/components/trust/TestimonialSlot";

/**
 * Homepage preview of the `/historias` trust hub (§3.2.5): shows where
 * traveler testimonials and stories will live, using the same reserved
 * slots as the hub itself (§9.1). Every card names the *category* of
 * future content — no invented quote, name, or photograph of a person
 * (Website-Strategy.md §7).
 */
export function TravelerVoices() {
  return (
    <SectionContainer className="pt-0">
      <PageShell>
        <div className="max-w-xl">
          <p className="text-caption font-medium tracking-[0.2em] text-terracotta uppercase">
            Histórias e testemunhos
          </p>
          <h2 className="mt-5 font-display text-h1 font-semibold text-balance">
            O lugar das vozes reais
          </h2>
          <p className="mt-6 text-body text-ink-muted text-pretty">
            Este espaço já está desenhado para os testemunhos de quem viaja connosco. Só vamos
            publicá-los com autorização de cada viajante — até lá, mostramos onde vão ficar, em vez
            de inventar frases.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <RevealOnScroll>
            <TestimonialSlot context="sobre um dia na Serra da Leba" />
          </RevealOnScroll>
          <RevealOnScroll delay={60}>
            <StoryPlaceholderCard
              tag="Malanje · Natureza"
              framingLine="Aqui viverá a história real de um viajante nas Quedas de Calandula."
            />
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <TestimonialSlot context="sobre o planeamento da viagem com a equipa" />
          </RevealOnScroll>
        </div>

        <Link
          href="/historias"
          className="group mt-10 inline-flex items-center gap-2 text-body font-medium text-terracotta transition-colors hover:text-gold"
        >
          Ver Histórias
          <span
            aria-hidden="true"
            className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </PageShell>
    </SectionContainer>
  );
}
