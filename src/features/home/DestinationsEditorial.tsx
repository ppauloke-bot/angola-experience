import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { getProvinceBySlug } from "@/lib/data/provinces";
import type { Province } from "@/lib/data/types";
import { cn } from "@/utils/cn";

/**
 * Destinations as a magazine spread instead of a uniform card grid: one
 * dominant frame, two supporting ones, then a quieter row of three — the
 * flagship provinces, ordered for composition (photograph strength and
 * aspect), not alphabetically.
 *
 * This is presentation only. It never replaces `/explorar`: all 21
 * provinces stay one click away through the closing link, and each tile
 * leads to the same province guide `ProvinceCard` leads to. Every tile
 * here has a real photograph — a province without one is represented on
 * `/explorar`, not on the homepage.
 */
const FEATURE_ORDER = ["malanje", "huila", "namibe"] as const;
const SECONDARY_ORDER = ["luanda", "benguela", "cuanza-sul"] as const;

function ProvinceFrame({
  province,
  className,
  imageSizes,
  scale = "default",
}: {
  province: Province;
  className?: string;
  imageSizes: string;
  scale?: "default" | "hero";
}) {
  return (
    <Link
      href={`/explorar/${province.slug}`}
      className={cn("group relative block overflow-hidden bg-ink", className)}
    >
      <Image
        src={province.heroImageSrc as string}
        alt={province.heroImageAlt}
        fill
        sizes={imageSizes}
        className="object-cover transition-transform duration-[900ms] ease-[var(--ease-settle)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
        <h3
          className={cn(
            "font-display font-semibold text-cream",
            scale === "hero" ? "text-h1" : "text-h3",
          )}
        >
          {province.name}
        </h3>
        {/* Collapsed to zero height until hover/focus so the resting state
            stays a clean photograph with a name on it — and expanded
            unconditionally on touch-first widths, where there is no hover. */}
        <p className="mt-2 max-w-sm text-body text-cream/80 md:grid md:grid-rows-[0fr] md:overflow-hidden md:opacity-0 md:transition-all md:duration-[var(--duration-medium)] md:ease-[var(--ease-settle)] md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100">
          <span className="md:min-h-0">{province.shortHook}</span>
        </p>
      </div>
    </Link>
  );
}

export function DestinationsEditorial() {
  const featured = FEATURE_ORDER.map(getProvinceBySlug).filter((p) => p !== undefined);
  const secondary = SECONDARY_ORDER.map(getProvinceBySlug).filter((p) => p !== undefined);
  const [lead, ...support] = featured;

  if (!lead) return null;

  return (
    <SectionContainer className="pt-0">
      <PageShell>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-caption font-medium tracking-[0.2em] text-terracotta uppercase">
              Destinos
            </p>
            <h2 className="mt-5 font-display text-h1 font-semibold text-balance">
              Seis regiões para começar
            </h2>
          </div>
          <Link
            href="/explorar"
            className="group text-body font-medium text-terracotta transition-colors hover:text-gold"
          >
            Ver as 21 províncias
            <span
              aria-hidden="true"
              className="ml-2 inline-block transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:grid-rows-2 md:[grid-auto-rows:1fr] lg:h-[680px]">
          <ImageReveal className="relative aspect-[4/5] md:col-span-7 md:row-span-2 md:aspect-auto md:h-full">
            <ProvinceFrame
              province={lead}
              scale="hero"
              className="h-full w-full"
              imageSizes="(min-width: 768px) 58vw, 100vw"
            />
          </ImageReveal>

          {support.map((province, index) => (
            <ImageReveal
              key={province.slug}
              delay={120 + index * 100}
              className="relative aspect-[16/10] md:col-span-5 md:aspect-auto md:h-full"
            >
              <ProvinceFrame
                province={province}
                className="h-full w-full"
                imageSizes="(min-width: 768px) 42vw, 100vw"
              />
            </ImageReveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {secondary.map((province, index) => (
            <ImageReveal
              key={province.slug}
              delay={index * 90}
              className="relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3]"
            >
              <ProvinceFrame
                province={province}
                className="h-full w-full"
                imageSizes="(min-width: 640px) 31vw, 100vw"
              />
            </ImageReveal>
          ))}
        </div>
      </PageShell>
    </SectionContainer>
  );
}
