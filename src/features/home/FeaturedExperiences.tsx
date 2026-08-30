import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { getExperienceBySlug } from "@/lib/data/experiences";

/**
 * 3–4 ExperienceCards, mixed verified/conceptual (§3.2.3) — proof that
 * "discovery" leads to something concrete and bookable, not just mood.
 * One real-priced service is included deliberately, to surface the
 * transparent-pricing strength the audit flagged directly on the homepage.
 */
const featuredSlugs = [
  "ilha-do-mussulo",
  "quedas-de-calandula",
  "serra-da-leba",
  "consultoria-roteiro-personalizado",
];

export function FeaturedExperiences() {
  const featured = featuredSlugs.map(getExperienceBySlug).filter((e) => e !== undefined);

  return (
    <SectionContainer>
      <PageShell>
        <SectionHeading
          eyebrow="Experiências"
          title="Do litoral às quedas de água do interior"
          supporting="Uma amostra do que está a caminho de um catálogo completo — algumas já são ofertas reais da Angola Experience, outras demonstram para onde o catálogo pode crescer."
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((experience, index) => (
            <RevealOnScroll key={experience.slug} delay={index * 40}>
              <ExperienceCard experience={experience} />
            </RevealOnScroll>
          ))}
        </div>
      </PageShell>
    </SectionContainer>
  );
}
