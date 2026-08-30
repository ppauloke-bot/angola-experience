import { ReservedContentBanner } from "@/components/trust/ReservedContentBanner";

/**
 * Quote-card reserved slot (§4.4, §9.1). A designed quote *shape*
 * (decorative quotation mark, framing line, attribution placeholder) —
 * never filled with an invented quote or a fabricated name. The
 * attribution line names the category of content that will go there
 * (§7.3 of the strategy doc), not a persona.
 */
export function TestimonialSlot({ context }: { context: string }) {
  return (
    <ReservedContentBanner>
      <span aria-hidden="true" className="block font-display text-h1 leading-none text-gold/50">
        &ldquo;
      </span>
      <p className="mt-2 text-body italic text-ink-muted">
        Aqui viverá um testemunho real de um viajante — {context}.
      </p>
      <p className="mt-4 text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
        Atribuição reservada
      </p>
    </ReservedContentBanner>
  );
}
