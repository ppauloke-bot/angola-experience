"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/lib/site-config";
import { cn } from "@/utils/cn";

/** Six-item top nav, desktop (§4.1). Preserved exactly at six items per §1's brand-evolution anchor. */
export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block" aria-label="Navegação principal">
      <ul className="flex items-center gap-8">
        {mainNavItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "border-b pb-1 text-body transition-colors",
                  isActive ? "border-gold text-gold" : "border-transparent text-cream/85 hover:text-gold",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
