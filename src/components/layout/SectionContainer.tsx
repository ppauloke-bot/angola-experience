import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * Consistent vertical rhythm between homepage/page sections (§4.1).
 * Whitespace is a deliberate tool, not an afterthought (§2.4) — every
 * section gets the same breathing room rather than ad hoc padding.
 */
export function SectionContainer({
  children,
  as: Component = "section",
  className,
  tone = "cream",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  tone?: "cream" | "ink";
}) {
  return (
    <Component
      className={cn(
        "py-16 md:py-24",
        tone === "ink" ? "bg-ink text-cream" : "bg-cream text-ink",
        className,
      )}
    >
      {children}
    </Component>
  );
}
