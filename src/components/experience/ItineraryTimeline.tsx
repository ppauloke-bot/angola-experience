import type { ItineraryStep } from "@/lib/data/types";

/**
 * Sample itinerary display (§4.3). Always labeled "itinerário exemplo"
 * (§6.1) — never presented as the confirmed plan, since none of this
 * content is the client's own published wording (§6.2).
 */
export function ItineraryTimeline({ steps }: { steps: ItineraryStep[] }) {
  return (
    <div>
      <h2 className="text-h2 font-display font-semibold text-ink">Itinerário (exemplo)</h2>
      <ol className="mt-6 flex flex-col gap-6 border-l border-ink/15 pl-6">
        {steps.map((step) => (
          <li key={step.label} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
            <p className="text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
              {step.label}
            </p>
            <p className="mt-1 text-body text-ink-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
