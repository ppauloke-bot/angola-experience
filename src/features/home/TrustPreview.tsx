import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoryPlaceholderCard } from "@/components/trust/StoryPlaceholderCard";

/**
 * Trust preview (§3.2.5): traveler-story cards linking to `/historias`,
 * clearly framed as illustrative — never a simulated-real testimonial
 * (Website-Strategy.md §7).
 */
export function TrustPreview() {
  return (
    <SectionContainer>
      <PageShell>
        <SectionHeading
          eyebrow="Histórias"
          title="Espaço reservado para histórias reais"
          supporting="Ainda não temos autorização para publicar histórias e fotografias de viajantes reais — por isso mostramos, com honestidade, onde esse espaço vai viver."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <StoryPlaceholderCard
            tag="Huíla · Fotografia"
            framingLine="Aqui viverá a história real de um viajante na Serra da Leba."
          />
          <StoryPlaceholderCard
            tag="Luanda · Praia"
            framingLine="Aqui viverá a história real de um viajante na Ilha do Mussulo."
          />
        </div>
        <Link href="/historias" className="mt-8 inline-block text-body font-medium text-terracotta hover:text-gold">
          Ver Histórias →
        </Link>
      </PageShell>
    </SectionContainer>
  );
}
