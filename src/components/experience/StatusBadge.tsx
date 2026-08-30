import { Badge } from "@/components/ui/Badge";
import type { ExperienceStatus } from "@/lib/data/types";

/** Verified vs. Conceptual badge (§9.3) — informational metadata, never a warning label. */
export function StatusBadge({ status }: { status: ExperienceStatus }) {
  if (status === "verified") {
    return <Badge tone="gold-solid">Oferta Atual da Angola Experience</Badge>;
  }
  return <Badge tone="terracotta-outline">Conceito de Demonstração</Badge>;
}
