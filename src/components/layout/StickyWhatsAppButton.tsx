import { buildWhatsAppLink } from "@/lib/site-config";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

/**
 * Persistent WhatsApp affordance (§4.1, §10 of the strategy doc — WhatsApp
 * is a first-class, always-available conversion channel, not just a
 * Contact-page feature). 44×44px+ touch target, safe-area aware on mobile
 * (§5.2). Reuses `RevealOnScroll` for its one-time entrance (§6.2) since a
 * fixed element intersects the viewport immediately on mount.
 */
export function StickyWhatsAppButton() {
  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50">
      <RevealOnScroll>
        <a
          href={buildWhatsAppLink("Olá! Gostaria de saber mais sobre as experiências da Angola Experience.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale connosco no WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition-transform duration-[var(--duration-fast)] ease-[var(--ease-feedback)] hover:-translate-y-0.5 active:scale-95"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.36a9.9 9.9 0 0 0 4.64 1.15h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.83 14.19c-.25.7-1.24 1.29-2.03 1.46-.54.11-1.25.2-3.63-.78-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4.002.57.01.19.01.43-.07.67.5.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.09.2-.14.32-.28.5-.14.17-.29.38-.42.5-.14.14-.28.29-.12.57.16.28.72 1.18 1.54 1.91 1.06.94 1.94 1.24 2.23 1.38.29.14.46.12.63-.07.17-.2.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.18 1.38Z" />
          </svg>
        </a>
      </RevealOnScroll>
    </div>
  );
}
