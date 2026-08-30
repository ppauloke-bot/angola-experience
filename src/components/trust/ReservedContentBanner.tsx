import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * Generic "this space is reserved for X" shell (§4.4, §9.1) — reused by
 * `StoryPlaceholderCard`, `TestimonialSlot`, and (About page)
 * `ReservedTeamSection`. Editorial card design: muted duotone gradient in
 * Ink/Cream/Gold, an abstract arc mark drawn loosely from the logo's
 * spiral (never a human silhouette or stock headshot — §9.1) — the shell
 * is deliberately the same everywhere so "reserved for real content"
 * reads as one consistent, intentional pattern, not an empty-state bug.
 */
export function ReservedContentBanner({
  children,
  size = "default",
  className,
}: {
  children: ReactNode;
  size?: "default" | "large";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] border border-ink/10",
        size === "large" ? "p-12" : "p-8",
        className,
      )}
      style={{
        background:
          "radial-gradient(120% 140% at 0% 0%, color-mix(in oklab, var(--color-gold) 14%, transparent), transparent 55%), radial-gradient(120% 140% at 100% 100%, color-mix(in oklab, var(--color-terracotta) 12%, transparent), transparent 55%), var(--color-cream-muted)",
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className={cn("opacity-70", size === "large" ? "h-14 w-14" : "h-10 w-10")}
      >
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--color-gold)" strokeWidth="6" strokeDasharray="170 90" />
      </svg>
      <div className="mt-6">{children}</div>
    </div>
  );
}
