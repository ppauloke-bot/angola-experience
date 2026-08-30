import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * Card hover elevation/scale wrapper (§4.6). `transform`/`opacity` only —
 * no layout-triggering properties (§7.2). Pure CSS, no client JS needed.
 */
export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "transition-transform duration-[var(--duration-fast)] ease-[var(--ease-feedback)] hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
