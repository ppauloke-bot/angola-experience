import Image from "next/image";
import { cn } from "@/utils/cn";

/**
 * Photography slot for the site's card/hero imagery (Website-Strategy.md
 * §11.2, §7.2; Website-Design.md §9.1, §9.4). Two modes, same component:
 *
 * - No `src`: the honest gradient-and-mark placeholder for content we
 *   don't have the rights to yet (trust/testimonial/team slots, and any
 *   destination we haven't sourced a licensed photo for). `label` renders
 *   as a visible caption naming what will eventually live there.
 * - `src` provided: a real, properly-licensed photo (see
 *   `IMAGE_CREDITS.md` for source/license per image) — no decorative
 *   arc-mark or gradient (a real photo doesn't need placeholder styling),
 *   `label` becomes the image's `alt` text instead of a visible caption.
 *
 * Aspect ratio is fixed per usage (§2.5 discipline, §7.1 CLS) via the
 * `aspect` prop rather than left to intrinsic image dimensions, in both modes.
 */
export function MediaPlaceholder({
  label,
  aspect = "16/9",
  className,
  animated = false,
  src,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  zoomOnHover = false,
}: {
  label: string;
  aspect?: "16/9" | "4/5" | "1/1" | "3/4";
  className?: string;
  /** Applies the Ken Burns pan/zoom treatment (§4.6, §7.2). */
  animated?: boolean;
  /** A real, locally-hosted photo path (e.g. "/images/serra-da-leba-huila.jpg"). Omit to use the abstract placeholder. */
  src?: string;
  priority?: boolean;
  /**
   * How wide this image actually renders, for `next/image`'s srcset
   * selection. The default suits the two-column content blocks this
   * component was first written for; **full-bleed heroes must pass
   * `"100vw"`** or they fetch a half-width source and upscale it, which is
   * visibly soft from about 1440px up. Grid cards should pass their real
   * column width so they stop over-fetching.
   */
  sizes?: string;
  /** Slow scale-up while an ancestor marked `group` is hovered (cards). */
  zoomOnHover?: boolean;
}) {
  // `cn()` does plain concatenation (no Tailwind conflict resolution — see
  // its own doc comment), so a caller-supplied `className` that sets its own
  // position (e.g. the full-bleed hero usage's `absolute inset-0 ...`) must
  // not collide with this base's own `relative`, or both land in the DOM and
  // the cascade can silently keep `relative`, breaking the full-bleed layout.
  const hasOwnPosition = className ? /\b(absolute|fixed|sticky|static)\b/.test(className) : false;

  return (
    <div
      className={cn(
        "flex items-end overflow-hidden rounded-[var(--radius-card)] bg-ink",
        !hasOwnPosition && "relative",
        className,
      )}
      style={{ aspectRatio: aspect.replace("/", " / ") }}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover",
            animated && "animate-ken-burns motion-reduce:animate-none",
            zoomOnHover &&
              "transition-transform duration-[900ms] ease-[var(--ease-settle)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          )}
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className={cn("absolute inset-0", animated && "animate-ken-burns motion-reduce:animate-none")}
            style={{
              background:
                "radial-gradient(120% 90% at 20% 15%, color-mix(in oklab, var(--color-gold) 55%, transparent), transparent 60%), radial-gradient(140% 100% at 85% 100%, color-mix(in oklab, var(--color-terracotta) 45%, transparent), transparent 65%), var(--color-ink)",
            }}
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="absolute -right-10 -top-10 h-40 w-40 opacity-25"
          >
            <circle cx="100" cy="100" r="80" fill="none" stroke="var(--color-gold)" strokeWidth="10" strokeDasharray="330 200" />
          </svg>
          <p className="relative z-10 w-full bg-gradient-to-t from-ink/80 to-transparent px-4 py-3 text-caption text-cream/80">
            {label}
          </p>
        </>
      )}
    </div>
  );
}
