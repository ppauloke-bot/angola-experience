"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * Subtle scroll-linked offset for a photograph inside a clipping frame.
 *
 * The rules this follows are the ones §7.2 sets for motion generally, and
 * the ones the audit found the live site's parallax plugins breaking:
 * - the scroll handler is passive and does nothing but schedule one
 *   `requestAnimationFrame`; all reads/writes happen inside that frame,
 *   so it never causes layout thrash on the scroll thread;
 * - it only runs while the element is actually in view
 *   (`IntersectionObserver`), not for the whole page's scroll;
 * - it moves `transform` only, capped at `strength` pixels, so it reads
 *   as depth rather than as "the page is sliding apart";
 * - `prefers-reduced-motion` disables it entirely, leaving the static
 *   composition, which is the reason the child is expected to be scaled
 *   slightly larger than its frame by the caller.
 */
export function Parallax({
  children,
  className,
  strength = 36,
}: {
  children: ReactNode;
  className?: string;
  /** Maximum offset in px, applied at the extremes of the viewport pass. */
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let inView = false;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      // -1 when the element's centre is a full viewport above the centre
      // of the screen, +1 when it's a full viewport below.
      const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      const clamped = Math.max(-1, Math.min(1, progress));
      node.style.transform = `translate3d(0, ${(clamped * strength).toFixed(2)}px, 0)`;
    };

    const schedule = () => {
      if (!inView || frame) return;
      frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) schedule();
      },
      { threshold: 0, rootMargin: "100px 0px 100px 0px" },
    );

    observer.observe(node);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
      node.style.transform = "";
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn("h-full w-full will-change-transform", className)}>
      {children}
    </div>
  );
}
