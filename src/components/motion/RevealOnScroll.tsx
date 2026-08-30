"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * One-time scroll-triggered fade/slide reveal (§4.6). Uses
 * `IntersectionObserver`, never a `scroll` event listener (§7.2) — this is
 * the exact pattern the audit flagged the live site's parallax plugins for
 * getting wrong.
 */
export function RevealOnScroll({
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
      // Fires while the element is still up to 150px below the viewport, not
      // only once it's already on screen — gives the reveal a head start so
      // it's finished (not caught mid-transition) by the time it's actually
      // visible during normal scrolling.
      { threshold: 0, rootMargin: "0px 0px 150px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-[opacity,transform] duration-[var(--duration-reveal)] ease-[var(--ease-settle)] motion-reduce:transition-opacity",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 motion-reduce:translate-y-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
