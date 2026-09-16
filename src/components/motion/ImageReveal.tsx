"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * One-time image entrance: the photograph settles out of a slight
 * overscan while fading in, inside a fixed frame that never moves
 * (§4.6/§7.2 — transform/opacity only, `IntersectionObserver`, never a
 * scroll listener).
 *
 * Distinct from `RevealOnScroll`, which moves a whole block of content a
 * few pixels: this one is specifically for photography, is slower, and
 * scales rather than translates — the difference between "content
 * arrived" and "this image is worth looking at."
 *
 * The frame clips the overscan, so the layout box is stable from first
 * paint and the reveal can never cause layout shift (§7.1). Under
 * `prefers-reduced-motion` the image is simply present, not animated.
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Same anticipatory margin as RevealOnScroll: start before the frame
      // is actually on screen so the (slower) settle is most of the way
      // through by the time it's being looked at.
      { threshold: 0, rootMargin: "0px 0px 120px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
        className={cn(
          "h-full w-full transition-[opacity,transform] duration-[1100ms] ease-[var(--ease-settle)] motion-reduce:transition-none",
          visible ? "scale-100 opacity-100" : "scale-[1.12] opacity-0",
          "motion-reduce:scale-100 motion-reduce:opacity-100",
        )}
      >
        {children}
      </div>
    </div>
  );
}
