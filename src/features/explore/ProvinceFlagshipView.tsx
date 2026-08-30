import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { ExperienceGrid } from "@/components/experience/ExperienceGrid";
import { getExperiencesByProvince } from "@/lib/data/experiences";
import type { Province } from "@/lib/data/types";

/**
 * Flagship province template (§3.4, §8): full destination-guide content.
 * Shares the identical hero component, heading scale, photography
 * treatment and card styling as the light template — content depth is the
 * only difference between the two, not visual quality (§3.4 hard constraint).
 */
export function ProvinceFlagshipView({ province }: { province: Province }) {
  const guide = province.destinationGuide;
  const relatedExperiences = getExperiencesByProvince(province.slug);

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-ink text-cream">
        <MediaPlaceholder
          label={province.heroImageAlt}
          aspect="16/9"
          animated
          className="absolute inset-0 h-full w-full rounded-none"
          src={province.heroImageSrc}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <PageShell className="relative z-10 pb-12">
          <Breadcrumb
            tone="inverted"
            className="mb-4"
            items={[{ label: "Explorar Angola", href: "/explorar" }, { label: province.name }]}
          />
          <h1 className="font-display text-display font-bold text-balance">{province.name}</h1>
          <p className="mt-4 max-w-lg text-body text-cream/85">{province.shortHook}</p>
        </PageShell>
      </section>

      <SectionContainer>
        <PageShell className="flex flex-col gap-16">
          {province.keyPlaces && province.keyPlaces.length > 0 ? (
            <div>
              <h2 className="text-h2 font-display font-semibold text-ink">O que ver</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {province.keyPlaces.map((place) => (
                  <li key={place} className="text-body text-ink-muted">
                    · {place}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {guide ? (
            <>
              <div>
                <h2 className="text-h2 font-display font-semibold text-ink">O que fazer</h2>
                <p className="mt-4 max-w-2xl text-body text-ink-muted">{guide.whatToDo}</p>
              </div>

              <div className="grid gap-10 sm:grid-cols-3">
                <div>
                  <h3 className="text-h3 font-display font-semibold text-ink">Cultura</h3>
                  <p className="mt-3 text-body text-ink-muted">{guide.culture}</p>
                </div>
                <div>
                  <h3 className="text-h3 font-display font-semibold text-ink">Paisagens</h3>
                  <p className="mt-3 text-body text-ink-muted">{guide.landscapes}</p>
                </div>
                <div>
                  <h3 className="text-h3 font-display font-semibold text-ink">Gastronomia</h3>
                  <p className="mt-3 text-body text-ink-muted">{guide.gastronomy}</p>
                </div>
              </div>

              <div>
                <h2 className="text-h2 font-display font-semibold text-ink">Informação prática</h2>
                <div className="mt-4">
                  <InfoGrid
                    fields={[
                      { label: "Como chegar", value: guide.practicalInfo.gettingThere },
                      { label: "Segurança", value: guide.practicalInfo.safety },
                      { label: "O que levar", value: guide.practicalInfo.whatToPack },
                      { label: "Melhor época", value: guide.bestTimeToVisit },
                    ]}
                  />
                </div>
              </div>
            </>
          ) : null}

          {relatedExperiences.length > 0 ? (
            <div>
              <h2 className="text-h2 font-display font-semibold text-ink">Experiências em {province.name}</h2>
              <div className="mt-8">
                <ExperienceGrid experiences={relatedExperiences} />
              </div>
            </div>
          ) : null}
        </PageShell>
      </SectionContainer>
    </>
  );
}
