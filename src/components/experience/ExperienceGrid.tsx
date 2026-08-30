import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import type { Experience } from "@/lib/data/types";

/** Renders filtered experience cards (§4.3). No segregation by status — verified and conceptual share one grid (§3.5). */
export function ExperienceGrid({ experiences }: { experiences: Experience[] }) {
  if (experiences.length === 0) {
    return (
      <p className="py-16 text-center text-body text-ink-muted">
        Nenhuma experiência corresponde a estes filtros. Experimente remover um filtro ou{" "}
        <a href="/contacto" className="font-medium text-terracotta hover:text-gold">
          fale connosco
        </a>{" "}
        diretamente.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {experiences.map((experience, index) => (
        <RevealOnScroll key={experience.slug} delay={(index % 3) * 40}>
          <ExperienceCard experience={experience} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
