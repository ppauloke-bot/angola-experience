"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Expandable Q&A, reused pattern from the current site (§4.5). Button +
 * `aria-expanded`/`aria-controls` rather than a native `<details>`, so the
 * open/close motion can use the same grid-rows collapse technique as
 * `MobileNav` — fully keyboard operable (each header is a real `<button>`,
 * reachable and triggerable via Tab/Enter/Space) and screen-reader
 * correct (`role="region"` panel labelled by its button, per the WAI-ARIA
 * accordion pattern).
 */
export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-body font-medium text-ink"
              >
                {item.question}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className={cn(
                    "h-5 w-5 shrink-0 stroke-gold stroke-2 transition-transform duration-[var(--duration-fast)]",
                    isOpen && "rotate-45",
                  )}
                >
                  <path d="M10 4v12M4 10h12" fill="none" strokeLinecap="round" />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows] duration-[var(--duration-medium)] ease-[var(--ease-settle)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0">
                <p className="pb-5 text-body text-ink-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
