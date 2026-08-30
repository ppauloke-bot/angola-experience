/**
 * Static, honest map treatment (§3.6's "map" module). No live embed and
 * no pinned address: the audit flagged the real site's map as generically
 * pinned to "Luanda" rather than the actual office, and the only address
 * this project has is from one unverified automated fetch — repeating a
 * precise-looking pin here would be a bigger version of the same
 * inaccuracy, not a fix. City-level only, explicitly labeled as pending,
 * same placeholder visual language as the rest of the site (no external
 * request, no API key).
 */
export function LocationMapPlaceholder() {
  return (
    <div
      className="relative flex aspect-[16/9] items-end overflow-hidden rounded-[var(--radius-card)] border border-ink/10"
      style={{
        background:
          "radial-gradient(120% 90% at 30% 20%, color-mix(in oklab, var(--color-gold) 18%, transparent), transparent 60%), radial-gradient(140% 100% at 80% 100%, color-mix(in oklab, var(--color-terracotta) 14%, transparent), transparent 65%), var(--color-cream-muted)",
      }}
    >
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute right-6 top-6 h-16 w-16 opacity-40">
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--color-gold)" strokeWidth="6" strokeDasharray="170 90" />
      </svg>
      <div className="relative z-10 w-full p-6">
        <p className="text-h3 font-display font-semibold text-ink">Luanda, Angola</p>
        <p className="mt-1 text-body text-ink-muted">Localização exata a confirmar</p>
      </div>
    </div>
  );
}
