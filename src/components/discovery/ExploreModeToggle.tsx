import Link from "next/link";
import { cn } from "@/utils/cn";

/**
 * Province/Interest mode switch (§4.2). The two modes are separate routes
 * (`/explorar`, `/explorar/interesses` — Website-Strategy.md §2) sharing
 * this same toggle. Interest mode is a later build stage; the tab links
 * to it regardless, consistent with how other not-yet-built routes have
 * been linked ahead of their own stage throughout this build.
 */
export function ExploreModeToggle({ active }: { active: "provincia" | "interesse" }) {
  const tabs = [
    { key: "provincia" as const, label: "Por Província", href: "/explorar" },
    { key: "interesse" as const, label: "Por Interesse", href: "/explorar/interesses" },
  ];

  return (
    <div className="inline-flex rounded-[var(--radius-pill)] border border-ink/15 p-1">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          href={tab.href}
          className={cn(
            "inline-flex min-h-11 items-center rounded-[var(--radius-pill)] px-5 text-body font-medium transition-colors",
            active === tab.key ? "bg-gold text-ink" : "text-ink-muted hover:text-ink",
          )}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
