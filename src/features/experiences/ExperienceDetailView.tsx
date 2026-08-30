import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { StatusBadge } from "@/components/experience/StatusBadge";
import { PriceSlot } from "@/components/experience/PriceSlot";
import { ExperienceGallery } from "@/components/experience/ExperienceGallery";
import { ItineraryTimeline } from "@/components/experience/ItineraryTimeline";
import { InclusionsList } from "@/components/experience/InclusionsList";
import { PracticalInfoPanel } from "@/components/experience/PracticalInfoPanel";
import { ExperienceGrid } from "@/components/experience/ExperienceGrid";
import { BookingInquiryForm } from "@/components/conversion/BookingInquiryForm";
import { WhatsAppCTAButton } from "@/components/conversion/WhatsAppCTAButton";
import { getProvinceBySlug } from "@/lib/data/provinces";
import { getRelatedExperiences } from "@/lib/data/experiences";
import type { Experience } from "@/lib/data/types";

/** Detail-page module order per Website-Design.md §3.5. */
export function ExperienceDetailView({ experience }: { experience: Experience }) {
  const province = experience.provinceSlug ? getProvinceBySlug(experience.provinceSlug) : undefined;
  const related = getRelatedExperiences(experience);

  return (
    <>
      <SectionContainer className="pt-12 pb-16 md:pt-20" tone="cream">
        <PageShell className="mb-6">
          <Breadcrumb
            items={[
              { label: "Experiências", href: "/experiencias" },
              ...(province ? [{ label: province.name, href: `/explorar/${province.slug}` }] : []),
              { label: experience.title },
            ]}
          />
        </PageShell>
        <PageShell className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div>
            <ExperienceGallery experience={experience} />

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <StatusBadge status={experience.status} />
              <p className="text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
                {province ? province.name : "Angola"} · {experience.duration}
              </p>
            </div>
            <h1 className="mt-3 text-h1 font-display font-semibold text-ink">{experience.title}</h1>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="text-body text-ink-muted">
                  · {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-4">
              {experience.descriptionParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <ItineraryTimeline steps={experience.itinerary} />
            </div>

            <div className="mt-12">
              <InclusionsList included={experience.included} notIncluded={experience.notIncluded} />
            </div>

            <div className="mt-12">
              <h3 className="mb-4 text-h3 font-display font-semibold text-ink">Informação prática</h3>
              <PracticalInfoPanel info={experience.practicalInfo} />
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-6 rounded-[var(--radius-card)] border border-ink/10 p-6 lg:sticky lg:top-28">
            <PriceSlot experience={experience} />
            <WhatsAppCTAButton
              message={`Olá! Gostaria de saber mais sobre: ${experience.title}.`}
              className="w-full"
            />
            <BookingInquiryForm context={experience.title} />
          </aside>
        </PageShell>
      </SectionContainer>

      {related.length > 0 ? (
        <SectionContainer tone="cream" className="pt-0">
          <PageShell>
            <h2 className="text-h2 font-display font-semibold text-ink">Experiências relacionadas</h2>
            <div className="mt-8">
              <ExperienceGrid experiences={related} />
            </div>
          </PageShell>
        </SectionContainer>
      ) : null}
    </>
  );
}
