import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Real, already-verified trust signals — not proof-filling, evidence
 * (Business-Specific/Travel.md's "Trust Building: transparent pricing,
 * company experience" applied honestly to what this project actually has
 * verified rather than what a generic travel site would claim). Distinct
 * angle from the homepage's "Why Angola Experience" list: this section is
 * specifically about how to tell what's real, not a general pitch.
 */
const signals = [
  {
    title: "Transparência nos preços",
    body: "Os dois serviços com preço já publicado — consultoria de roteiro e concierge — aparecem aqui em Kwanzas, tal como no site atual. Para as restantes experiências, sem preço fixo publicado, dizemos isso diretamente em vez de mostrar um número inventado.",
  },
  {
    title: "Ofertas reais, claramente identificadas",
    body: "Cada experiência tem uma etiqueta visível — \"Oferta Atual da Angola Experience\" ou \"Conceito de Demonstração\" — para que saiba sempre se está a ver algo que já pode reservar hoje ou uma demonstração do que o catálogo pode vir a ser.",
  },
  {
    title: "Um canal direto para confirmar tudo",
    body: "Qualquer dúvida sobre uma experiência, um preço ou um roteiro pode ser esclarecida diretamente pelo WhatsApp, no mesmo número usado pela equipa no dia a dia — não um formulário genérico.",
  },
];

export function TrustSignals() {
  return (
    <SectionContainer>
      <PageShell className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <SectionHeading eyebrow="Já pode confiar nisto" title="O que já é verificável hoje" />
        <ul className="flex flex-col gap-8">
          {signals.map((signal) => (
            <li key={signal.title} className="border-t border-ink/10 pt-6 first:border-t-0 first:pt-0">
              <h3 className="text-h3 font-display font-semibold text-ink">{signal.title}</h3>
              <p className="mt-2 text-body text-ink-muted">{signal.body}</p>
            </li>
          ))}
        </ul>
      </PageShell>
    </SectionContainer>
  );
}
