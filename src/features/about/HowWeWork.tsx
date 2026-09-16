import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { WhatsAppCTAButton } from "@/components/conversion/WhatsAppCTAButton";

/**
 * Replaces the About page's reserved founder/team banner for the demo.
 *
 * The reason is not that the reserved slot was wrong — no names, photos,
 * roles, or biographies may be invented (Website-Strategy.md §9), and none
 * are invented here either. It is that an empty, clearly-labeled slot is
 * the right answer for a site in production and the wrong one for a page
 * being presented: it draws the eye to what is missing.
 *
 * What replaces it is the only thing about the company this project can
 * state without inventing anything: how contact actually works on this
 * site — the WhatsApp-first flow that is genuinely built, described in
 * `lib/data/faq.ts`'s booking answer and implemented by
 * `BookingInquiryForm`. No response-time promise, no office hours, no
 * guarantee: those would be exactly the fabricated operational claims the
 * rest of the build has refused throughout.
 */
const steps = [
  {
    title: "Diz-nos o que procura",
    body: "Uma experiência do catálogo, uma província, ou apenas uma ideia de viagem e as datas possíveis. Pelo WhatsApp ou pelo formulário de contacto.",
  },
  {
    title: "Construímos o roteiro consigo",
    body: "Respondemos com os detalhes disponíveis e ajustamos o percurso — destinos, duração e o que faz sentido incluir em cada etapa.",
  },
  {
    title: "Confirmação direta com a equipa",
    body: "Não há reserva automática nem pagamento online: cada viagem é confirmada diretamente connosco, para que nada fique por esclarecer.",
  },
];

export function HowWeWork() {
  return (
    <SectionContainer>
      <PageShell>
        <div className="max-w-xl">
          <p className="text-caption font-medium tracking-[0.2em] text-terracotta uppercase">
            Como trabalhamos
          </p>
          <h2 className="mt-5 font-display text-h2 font-semibold text-balance">
            Uma conversa, não um carrinho de compras
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <RevealOnScroll delay={index * 70}>
                <p className="font-display text-h2 font-semibold text-gold tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-h3 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{step.body}</p>
              </RevealOnScroll>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <WhatsAppCTAButton message="Olá! Gostaria de falar sobre uma viagem por Angola." />
        </div>
      </PageShell>
    </SectionContainer>
  );
}
