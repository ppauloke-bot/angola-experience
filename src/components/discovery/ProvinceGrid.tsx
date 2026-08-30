import { ProvinceCard } from "@/components/discovery/ProvinceCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import type { Province } from "@/lib/data/types";

/** Renders all 21 ProvinceCards in one unified grid (§3.3) — no separate "featured" zone and "the rest" zone. */
export function ProvinceGrid({ provinces }: { provinces: Province[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {provinces.map((province, index) => (
        <RevealOnScroll key={province.slug} delay={(index % 4) * 35}>
          <ProvinceCard province={province} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
