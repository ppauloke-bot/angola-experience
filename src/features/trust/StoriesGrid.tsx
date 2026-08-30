import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StoryPlaceholderCard } from "@/components/trust/StoryPlaceholderCard";
import { TestimonialSlot } from "@/components/trust/TestimonialSlot";

/**
 * Mixed grid of `StoryPlaceholderCard`/`TestimonialSlot` (§3.6, §9.1).
 * All copy names the *category* of future content, never an invented
 * narrative or persona (§7.3 of the strategy doc).
 */
const items = [
  { type: "story" as const, tag: "Huíla · Fotografia", framingLine: "Aqui viverá a história real de um viajante na Serra da Leba." },
  { type: "testimonial" as const, context: "sobre uma experiência em Benguela" },
  { type: "story" as const, tag: "Luanda · Praia", framingLine: "Aqui viverá a história real de um viajante na Ilha do Mussulo." },
  { type: "story" as const, tag: "Malanje · Natureza", framingLine: "Aqui viverá a história real de um viajante nas Quedas de Calandula." },
  { type: "testimonial" as const, context: "sobre o processo de planeamento com a equipa" },
  { type: "story" as const, tag: "Namibe · Aventura", framingLine: "Aqui viverá a história real de um viajante no deserto do Namibe." },
];

export function StoriesGrid() {
  return (
    <SectionContainer>
      <PageShell>
        <SectionHeading
          eyebrow="Histórias e testemunhos"
          title="Espaço reservado para vozes reais"
          supporting="Cada um destes espaços já tem o desenho pronto — falta apenas a autorização e o conteúdo real de quem viajou connosco."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <RevealOnScroll key={index} delay={(index % 3) * 40}>
              {item.type === "story" ? (
                <StoryPlaceholderCard tag={item.tag} framingLine={item.framingLine} />
              ) : (
                <TestimonialSlot context={item.context} />
              )}
            </RevealOnScroll>
          ))}
        </div>
      </PageShell>
    </SectionContainer>
  );
}
