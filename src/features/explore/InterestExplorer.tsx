"use client";

import { useState } from "react";
import { InterestPicker } from "@/components/discovery/InterestPicker";
import { InterestResultsGrid } from "@/components/discovery/InterestResultsGrid";
import type { InterestTag } from "@/lib/data/types";

/**
 * Owns Interest mode's single piece of state (§3.3, §4.2) — which tag is
 * selected. Real, working filter via simple tag-matching, no
 * personalization/scoring/ML (§5.1). Same client-boundary pattern as
 * `ExperienceCatalog`: the picker and results themselves stay simple,
 * mostly server-renderable components.
 */
export function InterestExplorer() {
  const [selected, setSelected] = useState<InterestTag | null>(null);

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
