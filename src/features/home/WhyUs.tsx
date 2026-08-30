import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Evolved "Porquê Viajar Connosco" (§3.2.4) — a list, not four identical
 * icon-cards (§2.7, Anti-AI-Design.md), tied to specific, demonstrable
 * things rather than generic icon+adjective pairs.
 */
const reasons = [
  {
    title: "Resposta pelo WhatsApp, não um formulário perdido",
    body: "Fale diretamente com a equipa pelo mesmo canal que já usa todos os dias — sem esperar por um e-mail de confirmação.",
  },
  {
    title: "Preços claros quando existem, nunca inventados quando não",
    body: "Os serviços de consultoria e concierge têm preço público em Kwanzas. Onde ainda não há um preço fixo, dizemos isso — em vez de mostrar um número que não é real.",
  },
  {
    title: "Conhecimento de quem já percorreu estas estradas",
    body: "De Luanda à Serra da Leba, o roteiro é pensado por quem conhece o percurso, não apenas o destino.",
  },
];

export function WhyUs() {
  return (
    <SectionContainer>
      <PageShell className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <SectionHeading eyebrow="Porquê a Angola Experience" title="Coisas concretas, não adjetivos" />
        <ul className="flex flex-col gap-8">
          {reasons.map((reason) => (
            <li key={reason.title} className="border-t border-ink/10 pt-6 first:border-t-0 first:pt-0">
              <h3 className="text-h3 font-display font-semibold text-ink">{reason.title}</h3>
              <p className="mt-2 text-body text-ink-muted">{reason.body}</p>
            </li>
          ))}
        </ul>
      </PageShell>
    </SectionContainer>
  );
}
