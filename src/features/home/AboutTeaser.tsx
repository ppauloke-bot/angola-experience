import Link from "next/link";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageShell } from "@/components/layout/PageShell";

/**
 * Human-side teaser (§3.2.6), linking to `/sobre`. Kept at brand/company
 * level only — no invented founder or team content (Website-Strategy.md §9).
 */
export function AboutTeaser() {
  return (
    <SectionContainer>
      <PageShell className="grid items-center gap-10 lg:grid-cols-2">
        <MediaPlaceholder label="Equipa Angola Experience (fotografia a confirmar)" aspect="4/5" />
        <div>
          <p className="text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
            Quem está por trás
          </p>
          <h2 className="mt-3 text-h2 font-display font-semibold text-ink">
            Uma equipa dedicada a mostrar Angola
          </h2>
          <p className="mt-4 max-w-md text-body text-ink-muted">
            Especialistas comprometidos com a qualidade e a sustentabilidade de cada viagem, com o
            objetivo de mostrar Angola como ela merece ser vista.
          </p>
          <Link href="/sobre" className="mt-6 inline-block text-body font-medium text-terracotta hover:text-gold">
            Conhecer a Angola Experience →
          </Link>
        </div>
      </PageShell>
    </SectionContainer>
  );
}
