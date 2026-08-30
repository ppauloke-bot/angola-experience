"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { MainNav } from "@/components/layout/MainNav";
import { MobileNav } from "@/components/layout/MobileNav";

/**
 * Logo lockup + mobile menu trigger, composing `MainNav`/`MobileNav` (§4.1).
 * Sits on an Ink background deliberately: the real Angola Experience logo
 * file (Website-Strategy.md §11.2 tier 1) has a white wordmark baked in
 * and must never be cropped, recolored, or distorted — the header's
 * background is chosen to fit the asset, not the other way around.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink text-cream">
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
