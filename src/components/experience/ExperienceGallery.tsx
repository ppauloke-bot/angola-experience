import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Experience } from "@/lib/data/types";

/**
 * Image gallery on the detail page (§4.3). Reuses the experience's own
 * highlights as gallery captions rather than inventing separate image
 * copy — each highlight is already unique and specific per experience.
 */
export function ExperienceGallery({ experience }: { experience: Experience }) {
  const secondaryLabels = experience.highlights.slice(0, 2);

  return (
    <div className="grid grid-cols-2 gap-3">
      <MediaPlaceholder
        label={experience.heroImageAlt}
        aspect="4/5"
        className="col-span-2"
        animated
      />
      {secondaryLabels.map((label) => (
        <MediaPlaceholder key={label} label={label} aspect="4/5" />
      ))}
    </div>
  );
}
