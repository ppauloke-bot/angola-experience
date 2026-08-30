import { ExperienceGrid } from "@/components/experience/ExperienceGrid";
import { ProvinceCard } from "@/components/discovery/ProvinceCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getExperiencesByInterest } from "@/lib/data/experiences";
import { getProvincesByInterest } from "@/lib/data/provinces";
import type { InterestTag } from "@/lib/data/types";

/**
 * Filtered results after an interest is picked (§4.2) — real tag-matching
 * against the same experience/province data used everywhere else on the
 * site (§5.1), drawn from the full 21-province set, not just the 6
 * flagship provinces.
 */
export function InterestResultsGrid({ interest }: { interest: InterestTag }) {
  const experiences = getExperiencesByInterest(interest);
  const relatedProvinces = getProvincesByInterest(interest);

  return (
    <RevealOnScroll className="flex flex-col gap-12">
      <div>
        <h2 className="text-h2 font-display font-semibold text-ink">
          Experiências de {interest}
        </h2>
        <p className="mt-2 text-caption text-ink-muted">
          {experiences.length} {experiences.length === 1 ? "experiência" : "experiências"}
        </p>
        <div className="mt-8">
          <ExperienceGrid experiences={experiences} />
        </div>
      </div>

      {relatedProvinces.length > 0 ? (
        <div>
          <h2 className="text-h2 font-display font-semibold text-ink">
            Províncias relacionadas com {interest}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {relatedProvinces.map((province) => (
              <ProvinceCard key={province.slug} province={province} />
            ))}
          </div>
        </div>
      ) : null}
    </RevealOnScroll>
  );
}
