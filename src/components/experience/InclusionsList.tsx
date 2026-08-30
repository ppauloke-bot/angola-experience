interface InclusionsListProps {
  included: string[];
  notIncluded: string[];
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 fill-gold">
      <path d="M8.3 13.3 4.7 9.7l1.4-1.4 2.2 2.2 5.6-5.6 1.4 1.4z" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 fill-ink-muted">
      <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** What's included / not included (§4.3). */
export function InclusionsList({ included, notIncluded }: InclusionsListProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div>
        <h3 className="text-h3 font-display font-semibold text-ink">Incluído</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2 text-body text-ink-muted">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-h3 font-display font-semibold text-ink">Não incluído</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {notIncluded.map((item) => (
            <li key={item} className="flex items-start gap-2 text-body text-ink-muted">
              <CrossIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
