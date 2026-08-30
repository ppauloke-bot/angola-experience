import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConversionBand } from "@/components/layout/ConversionBand";
import { BrandStorySection } from "@/components/trust/BrandStorySection";
import { ReservedTeamSection } from "@/components/trust/ReservedTeamSection";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Quem é a Angola Experience: uma equipa dedicada a mostrar Angola como ela merece ser vista.",
};

/** About (§3.6): brand/company story → mission/connection-to-Angola → ReservedTeamSection → conversion band. */
export default function SobrePage() {
  return (
    <>
      <SectionContainer className="pt-16 pb-8 md:pt-24">
        <PageShell>
          <SectionHeading
            level="h1"
            eyebrow="Sobre"
            title="Quem está por trás da Angola Experience"
            supporting="Uma equipa dedicada a mostrar Angola como ela merece ser vista — com atenção à qualidade de cada viagem."
          />
        </PageShell>
      </SectionContainer>

      <BrandStorySection />
      <ReservedTeamSection />

      <ConversionBand />
    </>
  );
}
