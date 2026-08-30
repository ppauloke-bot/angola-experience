import { cn } from "@/utils/cn";
import { INTEREST_TAGS, type InterestTag } from "@/lib/data/types";

interface FilterGroupProps<T extends string> {
  label: string;
  options: { value: T; label: string }[];
  active: T | null;
  onChange: (value: T | null) => void;
}

function FilterGroup<T extends string>({ label, options, active, onChange }: FilterGroupProps<T>) {
  return (
    <div>
      <p className="text-caption font-medium uppercase tracking-[0.1em] text-ink-muted">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = active === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(isActive ? null : option.value)}
              aria-pressed={isActive}
              className={cn(
                "inline-flex min-h-11 items-center rounded-[var(--radius-pill)] px-4 text-caption font-medium transition-colors",
                isActive ? "bg-gold text-ink" : "bg-ink-faint text-ink-muted hover:bg-ink/10",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Province/interest/duration filter bar (§3.5, §4.3). Real, working filters — lightweight local state, no network round-trip (§7.1). */
export function ExperienceFilterBar({
  provinces,
  province,
  onProvinceChange,
  interest,
  onInterestChange,
  durations,
  duration,
  onDurationChange,
}: {
  provinces: { slug: string; name: string }[];
  province: string | null;
  onProvinceChange: (value: string | null) => void;
  interest: InterestTag | null;
  onInterestChange: (value: InterestTag | null) => void;
  durations: string[];
  duration: string | null;
  onDurationChange: (value: string | null) => void;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-ink/10 bg-cream-muted p-6">
      <FilterGroup
        label="Província"
        options={provinces.map((p) => ({ value: p.slug, label: p.name }))}
        active={province}
        onChange={onProvinceChange}
      />
      <FilterGroup
        label="Interesse"
        options={interestTagOptions}
        active={interest}
        onChange={onInterestChange}
      />
      <FilterGroup
        label="Duração"
        options={durations.map((d) => ({ value: d, label: d }))}
        active={duration}
        onChange={onDurationChange}
      />
    </div>
  );
}

const interestTagOptions: { value: InterestTag; label: InterestTag }[] = INTEREST_TAGS.map(
  (tag) => ({ value: tag, label: tag }),
);
