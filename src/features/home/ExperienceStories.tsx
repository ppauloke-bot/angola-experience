import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Parallax } from "@/components/motion/Parallax";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getExperienceBySlug, experiences } from "@/lib/data/experiences";
import { getProvinceBySlug } from "@/lib/data/provinces";
import { cn } from "@/utils/cn";

/**
 * Four experiences as alternating editorial spreads rather than a row of
 * identical cards (§2.7's card discipline, applied at page level).
 *
 * The selection rule is explicit: every one of these four is a **real,
 * currently-offered** Angola Experience tour *and* has its own real
 * photograph. Experiences whose only illustration would be the abstract
 * placeholder are not shown here at all — they remain in the full catalog,
 * where the verified/conceptual badges give them their proper context.
 * That is why no status badge appears in this section: there is nothing
 * here that needs qualifying.
 */
const FEATURED_SLUGS = [
  "luanda-historica-comunitaria",
  "cabo-ledo",
  "malanje-city-tour",
  "lobito-city-tour",
];

export function ExperienceStories() {
  const featured = FEATURED_SLUGS.map(getExperienceBySlug).filter((e) => e !== undefined);

  return (
    <SectionContainer className="overflow-x-clip pt-0">
      <PageShell>
        <div className="max-w-xl">
          <p className="text-caption font-medium tracking-[0.2em] text-terracotta uppercase">
            Experiências
          </p>
          <h2 className="mt-5 font-display text-h1 font-semibold text-balance">
            Quatro formas de começar
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {featured.map((experience, index) => {
            const province = experience.provinceSlug
              ? getProvinceBySlug(experience.provinceSlug)
              : undefined;
            const isReversed = index % 2 === 1;

            return (
              <article
                key={experience.slug}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20"
              >
                <ImageReveal
                  className={cn(
                    // Portrait on phones, but capped to a fixed height from
                    // `lg` up: at a ~630px column a 4:5 frame is ~790px tall,
                    // which overshoots a 900px laptop viewport and turns each
                    // row into a full screen of its own.
                    "relative aspect-[4/5] lg:aspect-auto lg:h-[600px]",
                    isReversed ? "md:order-2" : undefined,
                    // A slight vertical offset per row, so the sequence
                    // reads as a spread rather than as four equal bands.
                    index % 2 === 0 ? "lg:-mt-8" : "lg:mt-8",
                  )}
                >
                  <div className="absolute inset-[-6%]">
                    <Parallax strength={24} className="relative">
                      <Image
                        src={experience.heroImageSrc as string}
                        alt={experience.heroImageAlt}
                        fill
                        sizes="(min-width: 768px) 46vw, 100vw"
                        className="object-cover"
                      />
                    </Parallax>
                  </div>
                </ImageReveal>

                <RevealOnScroll delay={80}>
                  <p className="flex items-center gap-3 text-caption font-medium tracking-[0.2em] text-terracotta uppercase">
                    <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    <span aria-hidden="true" className="h-px w-8 bg-terracotta/40" />
                    {province ? province.name : "Angola"} · {experience.duration}
                  </p>

                  <h3 className="mt-4 font-display text-h2 font-semibold text-ink text-balance">
                    {experience.title}
                  </h3>

                  <p className="mt-4 max-w-md text-body text-ink-muted text-pretty">
                    {experience.summary}
                  </p>

                  <ul className="mt-6 flex max-w-md flex-col gap-2">
                    {experience.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-body text-ink-muted">
                        <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/experiencias/${experience.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 text-body font-medium text-terracotta transition-colors hover:text-gold"
                  >
                    Ver experiência
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </RevealOnScroll>
              </article>
            );
          })}
        </div>

        <div className="mt-20 border-t border-ink/10 pt-8">
          <Link
            href="/experiencias"
            className="group inline-flex items-center gap-3 font-display text-h3 font-semibold text-ink transition-colors hover:text-gold"
          >
            Ver as {experiences.length} experiências
            <span
              aria-hidden="true"
              className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </PageShell>
    </SectionContainer>
  );
}
