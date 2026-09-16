import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { PriceSlot } from "@/components/experience/PriceSlot";
import { getExperienceBySlug } from "@/lib/data/experiences";
import { provinces } from "@/lib/data/provinces";
import { siteConfig } from "@/lib/site-config";

/**
 * Trust without invented social proof (Website-Strategy.md §7.1): no
 * testimonials, no ratings, no "X viajantes felizes." Every item below is
 * something a visitor can verify on this site within one click, and the
 * strongest one is shown rather than described — the two services that
 * genuinely have a published price appear here with that real price, in
 * Kwanzas, pulled from the same data the catalog uses.
 */
const commitments = [
  {
    title: "Preço quando existe, conversa quando não",
    body: "Os serviços com preço publicado mostram-no em Kwanzas. Onde o valor depende do roteiro, dizemo-lo — em vez de mostrar um número que não se aplicaria à sua viagem.",
  },
  {
    title: "Resposta no WhatsApp, não num formulário",
    body: `Fala diretamente com a equipa no ${siteConfig.whatsappNumberDisplay} — o mesmo canal que usamos todos os dias, sem esperar por um e-mail de confirmação.`,
  },
  {
    title: "Informação prática antes de perguntar",
    body: "Cada experiência indica a melhor época, a dificuldade, o tamanho do grupo e o que levar. Cada província diz como se chega lá e o que esperar.",
  },
];

export function TrustEditorial() {
  const services = ["consultoria-roteiro-personalizado", "servicos-de-concierge"]
    .map(getExperienceBySlug)
    .filter((service) => service !== undefined);

  return (
    <SectionContainer className="pt-0">
      <PageShell>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="text-caption font-medium tracking-[0.2em] text-terracotta uppercase">
              Como trabalhamos
            </p>
            <h2 className="mt-5 max-w-md font-display text-h1 font-semibold text-balance">
              Sem letras pequenas.
            </h2>
            <p className="mt-6 max-w-sm text-body text-ink-muted text-pretty">
              Cobrimos as {provinces.length} províncias do país e dizemos com clareza o que já está
              montado e o que se constrói consigo.
            </p>
          </div>

          <ul className="flex flex-col">
            {commitments.map((commitment, index) => (
              <li key={commitment.title} className="border-t border-ink/10 py-6 first:pt-0">
                <RevealOnScroll delay={index * 60}>
                  <h3 className="font-display text-h3 font-semibold text-ink">
                    {commitment.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-body text-ink-muted">{commitment.body}</p>
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </div>

        {services.length > 0 ? (
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/experiencias/${service.slug}`}
                className="group flex flex-col justify-between gap-6 border border-ink/10 bg-cream-muted p-8 transition-colors duration-[var(--duration-fast)] hover:border-gold/60"
              >
                <div>
                  <p className="text-caption font-medium tracking-[0.2em] text-terracotta uppercase">
                    Serviço com preço publicado
                  </p>
                  <h3 className="mt-3 font-display text-h3 font-semibold text-ink transition-colors group-hover:text-gold">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-body text-ink-muted">{service.summary}</p>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-ink/10 pt-4">
                  <PriceSlot experience={service} />
                  <span
                    aria-hidden="true"
                    className="text-body text-terracotta transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </PageShell>
    </SectionContainer>
  );
}
