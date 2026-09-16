"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { MainNav } from "@/components/layout/MainNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/utils/cn";

/**
 * Logo lockup + mobile menu trigger, composing `MainNav`/`MobileNav` (§4.1).
 *
 * Sits on an Ink background deliberately: the real Angola Experience logo
 * file (Website-Strategy.md §11.2 tier 1) has a white wordmark baked in
 * and must never be cropped, recolored, or distorted — the header's
 * background is chosen to fit the asset, not the other way around.
 *
 * On the homepage only, the header overlays the hero photograph instead of
 * sitting above it: transparent at the top of the page, settling into the
 * solid Ink bar as soon as the visitor scrolls (or opens the mobile menu,
 * which needs the opaque background to stay legible). Every other route
 * keeps the original sticky solid header, so this adds a scroll listener
 * to exactly one page.
 */
/**
 * Scroll position as an external store rather than effect-managed state:
 * the listener is passive, the snapshot is a plain boolean (so React
 * re-renders only on the two frames where it actually flips), and the
 * server snapshot is `false`, matching the top-of-page first paint.
 */
function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange, { passive: true });
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

const isScrolled = () => window.scrollY > 24;
const isScrolledOnServer = () => false;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeToScroll, isScrolled, isScrolledOnServer);
  const pathname = usePathname();
  const overlay = pathname === "/";

  const solid = !overlay || scrolled || open;

  return (
    <header
      className={cn(
        "z-40 text-cream transition-colors duration-[var(--duration-medium)] ease-[var(--ease-settle)]",
        overlay ? "fixed inset-x-0 top-0" : "sticky top-0",
        solid ? "bg-ink" : "bg-transparent",
      )}
    >
      <PageShell className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/angola-experience-logo.png"
            alt="Angola Experience"
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Angola Experience
          </span>
        </Link>

        <MainNav />

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-pill)] lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 stroke-cream stroke-2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" fill="none" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </PageShell>

      <MobileNav open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}
