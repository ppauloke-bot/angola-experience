import Link from "next/link";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageShell } from "@/components/layout/PageShell";
import { flagshipProvinces } from "@/lib/data/provinces";

/**
 * "A Angola em números e paisagens"-style strip (§3.2.2) — a visual proof
 * of range across the flagship provinces, not a claims-driven stat
 * counter (Website-Strategy.md §3: "not stats we don't have"). Each tile
 * links to its `/explorar/[provincia]` guide, now that it exists.
 */
export function VisualStrip() {
  return (
    <SectionContainer className="py-12 md:py-16">
      <PageShell>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {flagshipProvinces.map((province) => (
            <Link key={province.slug} href={`/explorar/${province.slug}`}>
              <MediaPlaceholder
                label={province.heroImageSrc ? province.heroImageAlt : province.name}
                aspect="4/5"
                src={province.heroImageSrc}
              />
            </Link>
          ))}
        </div>
      </PageShell>
    </SectionContainer>
  );
}
