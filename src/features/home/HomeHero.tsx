import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/layout/PageShell";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

/**
 * Full-viewport opening frame (§3.2.1, rebuilt). Three deliberate choices:
 *
 * - **A real photograph, not a placeholder.** Serra da Leba is the highest
 *   resolution image in the library (2944×1536) and the only one whose
 *   composition survives a full-bleed 16:9+ crop on a projector — which is
 *   what this will actually be shown on.
 * - **`sizes="100vw"`.** The shared `MediaPlaceholder` default
 *   (`(min-width:1024px) 50vw`) makes every full-bleed hero fetch a
 *   half-width source and upscale it; at 1920px that is visibly soft.
 *   This hero addresses `next/image` directly for that reason.
 * - **Staggered entrance, not a carousel.** Eyebrow → headline → line →
 *   CTAs, ~120ms apart, while the image settles out of a 12% overscan.
 *   One brand moment, on load, per §6.2's motion budget.
 */
const HERO_IMAGE = "/images/serra-da-leba-huila.jpg";

export function HomeHero() {
  return (
    // Deliberately just under a full viewport: at exactly 100svh the credit
    // line and scroll cue at the bottom edge fall below the fold in browsers
    // whose reported svh runs ahead of the real visible height (measured at
    // 644px against a 588px viewport during QA). The few percent of headroom
    // also lets the next section peek in, which is the cue to keep scrolling.
    <section className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-ink text-cream md:min-h-[92svh]">
      <Image
        src={HERO_IMAGE}
        alt="A estrada em ziguezague da Serra da Leba a descer a escarpa, na Huíla"
        fill
        priority
        sizes="100vw"
        className="animate-hero-settle object-cover object-[55%_50%] motion-reduce:animate-none"
      />

      {/* Two crossed gradients rather than one flat scrim: the lower one
          carries the headline, the upper one keeps the overlaid navigation
          legible without darkening the middle of the photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-transparent to-transparent"
      />

      <PageShell className="relative z-10 pt-36 pb-10 md:pt-44 md:pb-14">
        <p
          className="animate-rise text-caption font-medium tracking-[0.3em] text-gold uppercase"
          style={{ animationDelay: "120ms" }}
        >
          Viagens por Angola
        </p>
        <h1
          className="animate-rise mt-6 max-w-4xl font-display text-display font-bold text-balance"
          style={{ animationDelay: "240ms" }}
        >
          Angola ainda está por descobrir.
        </h1>
        <p
          className="animate-rise mt-6 max-w-xl text-body text-cream/85 text-pretty"
          style={{ animationDelay: "380ms" }}
        >
          Da Serra da Leba ao deserto do Namibe, das quedas de Calandula às praias do Mussulo —
          viagens desenhadas à medida, em todo o país.
        </p>
        <div
          className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          style={{ animationDelay: "520ms" }}
        >
          <Button href="/explorar">Explorar destinos</Button>
          <Button href="/explorar/interesses" variant="secondary" tone="inverted">
            Como quer viver Angola?
          </Button>
        </div>
      </PageShell>

      <PageShell className="animate-fade relative z-10 flex items-end justify-between gap-6 pb-8">
        <span
          aria-hidden="true"
          className="hidden items-center gap-3 text-caption tracking-[0.2em] text-cream/50 uppercase sm:flex"
        >
          <span className="animate-scroll-cue block h-8 w-px bg-cream motion-reduce:animate-none" />
          Descer
        </span>
        <PhotoCredit src={HERO_IMAGE} place="Serra da Leba, Huíla" className="ml-auto text-right" />
      </PageShell>
    </section>
  );
}
