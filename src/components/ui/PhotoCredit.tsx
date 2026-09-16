import { getPhotoCredit } from "@/lib/data/photo-credits";
import { cn } from "@/utils/cn";

/**
 * Editorial caption for a large photograph: where it was taken, then the
 * photographer and license. Doubles as the on-page attribution the CC BY /
 * CC BY-SA images require (see `photo-credits.ts`).
 *
 * Deliberately styled as a magazine credit line — small caps, low
 * contrast, set apart from the image's own headline — so it reads as part
 * of the editorial language rather than as a disclaimer.
 */
export function PhotoCredit({
  src,
  place,
  tone = "inverted",
  className,
}: {
  src: string;
  /** Where the photo was taken, e.g. "Serra da Leba, Huíla". */
  place: string;
  tone?: "default" | "inverted";
  className?: string;
}) {
  const credit = getPhotoCredit(src);

  return (
    <p
      className={cn(
        "text-caption tracking-[0.12em] uppercase",
        tone === "inverted" ? "text-cream/55" : "text-ink-muted/80",
        className,
      )}
    >
      <span className={tone === "inverted" ? "text-cream/80" : "text-ink-muted"}>{place}</span>
      {credit ? (
        <>
          <span aria-hidden="true"> · </span>
          <span className="normal-case tracking-normal">
            Foto {credit.author} / {credit.license}
          </span>
        </>
      ) : null}
    </p>
  );
}
