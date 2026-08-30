import Link from "next/link";
import { cn } from "@/utils/cn";

/** "inverted" is for placement directly on Ink/photography backgrounds (e.g. province hero) — same convention as `Button`'s `tone`. */
type Tone = "default" | "inverted";

export interface BreadcrumbItem {
  label: string;
  /** Omit on the last item — it renders as the current page, not a link. */
  href?: string;
}

/**
 * Wayfinding trail for `/experiencias/[slug]` and `/explorar/[provincia]`
 * only (Website-Design.md §4.1). Deliberately not used on `/sobre` or
 * `/contacto` — those aren't nested under a listing page the way detail
 * pages are.
 */
export function Breadcrumb({
  items,
  tone = "default",
  className,
}: {
  items: BreadcrumbItem[];
  tone?: Tone;
  className?: string;
}) {
  return (
    <nav aria-label="Trilho de navegação" className={cn("flex flex-wrap items-center gap-x-1.5 text-caption", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-x-1.5">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors duration-[var(--duration-fast)]",
                  tone === "inverted" ? "text-cream/70 hover:text-cream" : "text-ink-muted hover:text-terracotta",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current={isLast ? "page" : undefined} className={tone === "inverted" ? "text-cream/90" : "text-ink"}>
                {item.label}
              </span>
            )}
            {!isLast ? (
              <span aria-hidden="true" className={tone === "inverted" ? "text-cream/40" : "text-ink-muted/50"}>
                /
              </span>
            ) : null}
          </span>
        );
      })}
    </nav>
  );
}
