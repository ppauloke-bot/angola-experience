import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * Generic metadata pill (Website-Design.md §4.7 `Badge`/`Tag`).
 * Feature-specific badges (StatusBadge, the light-province "Guia em
 * Expansão" badge) build on this rather than styling pills ad hoc, so the
 * badge language stays visually consistent site-wide (§9.2, §9.3).
 */
type BadgeTone = "gold-solid" | "terracotta-outline" | "ink-outline" | "neutral";

const tones: Record<BadgeTone, string> = {
  "gold-solid": "bg-gold text-ink",
  // bg-cream/90 (not fully transparent): these badges sit on top of real
  // photography now as well as the abstract placeholder — an outline-only
  // pill with no backing would have unpredictable contrast against an
  // actual photo, unlike the other tones which are already opaque fills.
  "terracotta-outline": "border border-terracotta text-terracotta bg-cream/90",
  "ink-outline": "border border-ink/30 text-ink-muted bg-cream/90",
  neutral: "bg-ink-faint text-ink-muted",
};

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-pill)] px-3 py-1 text-caption font-medium font-body tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
