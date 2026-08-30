/** Shared label/value grid used by both PracticalInfoPanel (experiences) and the province destination guide's practical-info block. */
export function InfoGrid({ fields }: { fields: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-6 rounded-[var(--radius-card)] border border-ink/10 bg-cream-muted p-6 sm:grid-cols-2">
      {fields.map((field) => (
        <div key={field.label}>
          <p className="text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
            {field.label}
          </p>
          <p className="mt-1 text-body text-ink">{field.value}</p>
        </div>
      ))}
    </div>
  );
}
