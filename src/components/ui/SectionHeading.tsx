import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * Consistent heading + optional supporting line pattern (§4.7).
 * `level` controls the semantic tag (accessibility: strict heading order,
 * §8) independently of the visual scale, which callers rarely need to
 * change but occasionally do (e.g. an H2 that should read at H3 size).
 */
export function SectionHeading({
  eyebrow,
  title,
  supporting,
  level = "h2",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  supporting?: ReactNode;
  level?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
}) {
  const Heading = level;
  const scale = level === "h1" ? "text-h1" : level === "h2" ? "text-h2" : "text-h3";

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
          {eyebrow}
        </p>
      ) : null}
      <Heading className={cn(scale, "font-display font-semibold text-balance")}>{title}</Heading>
      {supporting ? (
        <p className="mt-4 text-body text-ink-muted text-pretty">{supporting}</p>
      ) : null}
    </div>
  );
}
