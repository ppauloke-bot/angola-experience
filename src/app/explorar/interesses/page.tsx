import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConversionBand } from "@/components/layout/ConversionBand";
import { ExploreModeToggle } from "@/components/discovery/ExploreModeToggle";
import { InterestExplorer } from "@/features/explore/InterestExplorer";

export const metadata: Metadata = {
  title: "Explorar por Interesse",
  description:
    "Escolha o tipo de experiência que procura — natureza, praia, cultura, história, aventura, gastronomia, fotografia ou relaxamento — e descubra experiências e províncias relacionadas.",
};

export default function ExplorarPorInteressePage() {
  return (
    <>
      <SectionContainer className="pt-16 pb-8 md:pt-24">
        <PageShell>
          <SectionHeading
            level="h1"
            eyebrow="Explorar Angola"
            title="Que tipo de experiência procura?"
            supporting="Escolha um interesse e veja experiências reais e províncias relacionadas — um filtro real, não uma recomendação personalizada."
          />
          <div className="mt-8">
            <ExploreModeToggle active="interesse" />
          </div>
        </PageShell>
      </SectionContainer>
      <SectionContainer className="pt-0">
        <PageShell>
          <InterestExplorer />
        </PageShell>
      </SectionContainer>
      <ConversionBand />
    </>
  );
}
