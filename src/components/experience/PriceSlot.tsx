import type { Experience } from "@/lib/data/types";

function formatAOA(value: number) {
  return new Intl.NumberFormat("pt-PT").format(value) + " Kz";
}

/** Real price or "Preço mediante consulta" — no fabricated numbers, ever (§6.3, §9.4). */
export function PriceSlot({ experience }: { experience: Experience }) {
  if (experience.priceType === "real" && experience.priceAOA) {
    const { min, max } = experience.priceAOA;
    return (
      <p className="text-body font-medium text-ink">
        {formatAOA(min)}
        {max ? ` – ${formatAOA(max)}` : ""}
      </p>
    );
  }

  return <p className="text-body font-medium text-ink-muted">Preço mediante consulta</p>;
}
