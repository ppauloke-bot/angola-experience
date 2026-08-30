import { ReservedContentBanner } from "@/components/trust/ReservedContentBanner";

/**
 * Traveler-story reserved slot (§4.4, §9.1). Names the *shape* of future
 * content (a province/interest tag and a short framing line) rather than
 * an invented narrative presented as if a real traveler wrote it.
 */
export function StoryPlaceholderCard({
  tag,
  framingLine,
}: {
  tag: string;
  framingLine: string;
}) {
  return (
    <ReservedContentBanner>
      <p className="text-caption font-medium uppercase tracking-[0.1em] text-terracotta">{tag}</p>
      <p className="mt-3 text-body italic text-ink-muted">{framingLine}</p>
    </ReservedContentBanner>
  );
}
