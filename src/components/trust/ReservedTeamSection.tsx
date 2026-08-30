import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ReservedContentBanner } from "@/components/trust/ReservedContentBanner";

/**
 * About page founder/team slot, built on `ReservedContentBanner` (§4.4,
 * §9.1). No invented names, roles, photos, or biographies — the client
 * decision (Website-Strategy.md §9) is explicit that this stays an empty,
 * clearly-labeled structural slot until real, approved content exists.
 * Framing line is the exact example copy given in that section.
 */
export function ReservedTeamSection() {
  return (
    <SectionContainer>
      <PageShell>
        <ReservedContentBanner size="large" className="max-w-2xl">
          <p className="text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
            Fundador &amp; Equipa
          </p>
          <p className="mt-3 text-body italic text-ink-muted">
            Esta secção está reservada para apresentar a equipa e o(s) fundador(es) da Angola
            Experience.
          </p>
        </ReservedContentBanner>
      </PageShell>
    </SectionContainer>
  );
}
