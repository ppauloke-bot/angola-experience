"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/lib/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { cn } from "@/utils/cn";

/** Drawer/sheet variant of MainNav (§4.1), below the 1024px breakpoint (§5.2). */
export function MobileNav({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const pathname = usePathname();

  return (
    <nav
      id="mobile-nav"
      aria-label="Navegação móvel"
      className={cn(
        "grid overflow-hidden transition-[grid-template-rows] duration-[var(--duration-medium)] ease-[var(--ease-settle)] lg:hidden",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      )}
    >
      <div className="min-h-0">
        <PageShell>
          <ul className="flex flex-col gap-1 border-t border-cream/15 py-4">
            {mainNavItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded-[var(--radius-card)] border-l-2 px-3 py-3 text-body transition-colors",
                      isActive
                        ? "border-gold text-gold"
                        : "border-transparent text-cream/90 hover:bg-cream/10",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </PageShell>
      </div>
    </nav>
  );
}
