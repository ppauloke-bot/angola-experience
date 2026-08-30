import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * Consistent page padding/max-width wrapper (Website-Design.md §2.4, §4.1).
 * ~1280px max width for text-heavy content. Hero/gallery imagery bypasses
 * this and goes full-bleed instead of being wrapped in it.
 */
export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}
