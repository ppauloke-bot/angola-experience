import { INTEREST_TAGS, type InterestTag } from "@/lib/data/types";
import { cn } from "@/utils/cn";

/**
 * 8-tag interest tile grid (§3.3, §4.2). Large, tappable tiles rather than
 * an icon set — deliberately typographic rather than reaching for a
 * generic icon pack for eight abstract concepts (§2.5, Anti-AI-Design.md).
 * Single-select, same active/inactive visual language as the catalog's
 * interest filter (§2's consistency principle: don't invent a second
 * pattern for the same idea).
 */
export function InterestPicker({
  selected,
  onSelect,
}: {
  selected: InterestTag | null;
  onSelect: (tag: InterestTag) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Escolha um interesse"
      className="grid grid-cols-2 gap-3 sm:grid-cols-4"
    >
      {INTEREST_TAGS.map((tag) => {
        const isActive = selected === tag;
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onSelect(tag)}
            aria-pressed={isActive}
            className={cn(
              "rounded-[var(--radius-card)] border px-6 py-8 text-center text-h3 font-display font-semibold transition-colors",
              isActive
                ? "border-gold bg-gold text-ink"
                : "border-ink/15 bg-cream text-ink hover:border-gold/60 hover:bg-ink-faint",
            )}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
