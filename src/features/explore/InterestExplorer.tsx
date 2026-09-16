"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { InterestPicker } from "@/components/discovery/InterestPicker";
import { InterestResultsGrid } from "@/components/discovery/InterestResultsGrid";
import { INTEREST_TAGS, type InterestTag } from "@/lib/data/types";

function parseInterest(value: string | null): InterestTag | null {
  if (!value) return null;
  return (INTEREST_TAGS as readonly string[]).includes(value) ? (value as InterestTag) : null;
}

/**
 * Owns Interest mode's single piece of state (§3.3, §4.2) — which tag is
 * selected. Real, working filter via simple tag-matching, no
 * personalization/scoring/ML (§5.1). Same client-boundary pattern as
 * `ExperienceCatalog`: the picker and results themselves stay simple,
 * mostly server-renderable components.
 *
 * The selection can also arrive in the URL (`?interesse=Natureza`), which
 * is what the homepage's "Como quer viver Angola?" section links into, so
 * choosing an interest there lands on its results rather than on an empty
 * picker. Unknown or absent values simply fall back to no selection, and
 * reading the query string client-side (rather than through the page's
 * `searchParams`) keeps this route statically prerendered.
 *
 * The URL is read once, as the initial value, deliberately: every link
 * carrying `?interesse=` arrives from another route, so this component
 * mounts fresh each time. Once it is on screen, the picker owns the
 * selection — no effect syncing state back and forth with the URL.
 */
export function InterestExplorer() {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<InterestTag | null>(() =>
    parseInterest(searchParams.get("interesse")),
  );

  return (
    <div className="flex flex-col gap-12">
      <InterestPicker selected={selected} onSelect={setSelected} />
      {selected ? (
        <InterestResultsGrid key={selected} interest={selected} />
      ) : (
        <p className="text-body text-ink-muted">
          Escolha um interesse acima para ver experiências e províncias relacionadas.
        </p>
      )}
    </div>
  );
}
