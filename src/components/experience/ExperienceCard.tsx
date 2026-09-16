import Link from "next/link";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { HoverLift } from "@/components/motion/HoverLift";
import { StatusBadge } from "@/components/experience/StatusBadge";
import { PriceSlot } from "@/components/experience/PriceSlot";
import { getProvinceBySlug } from "@/lib/data/provinces";
import type { Experience } from "@/lib/data/types";

/** Catalog/grid card (§4.3). Verified and conceptual experiences share this one component, differing only by badge/price slot. */
export function ExperienceCard({ experience }: { experience: Experience }) {
  const province = experience.provinceSlug ? getProvinceBySlug(experience.provinceSlug) : undefined;

  return (
    <HoverLift>
      <Link href={`/experiencias/${experience.slug}`} className="group block">
        <div className="relative">
          <MediaPlaceholder label={experience.heroImageAlt} aspect="4/5" />
          <div className="absolute left-3 top-3">
            <StatusBadge status={experience.status} />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
            {province ? province.name : "Angola"} · {experience.duration}
          </p>
          <h3 className="mt-1 text-h3 font-display font-semibold text-ink group-hover:text-gold transition-colors">
            {experience.title}
          </h3>
          <p className="mt-2 text-body text-ink-muted">{experience.summary}</p>
          <div className="mt-3">
            <PriceSlot experience={experience} />
          </div>
        </div>
      </Link>
    </HoverLift>
  );
}
