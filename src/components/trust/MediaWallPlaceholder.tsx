import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

const slots = [
  "Fotografia de viagem reservada",
  "Vídeo de viagem reservado",
  "Fotografia de viagem reservada",
  "Fotografia de viagem reservada",
  "Vídeo de viagem reservado",
  "Fotografia de viagem reservada",
];

/**
 * Photo/video wall structure (§4.4, §7.2 of the strategy doc) — a real,
 * working gallery layout, populated with non-human, non-customer
 * imagery (the same abstract placeholder treatment used everywhere else
 * on the site, not stock photography of people that could be mistaken
 * for a real client).
 */
export function MediaWallPlaceholder() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {slots.map((label, index) => (
        <MediaPlaceholder key={`${label}-${index}`} label={label} aspect="4/5" />
      ))}
    </div>
  );
}
