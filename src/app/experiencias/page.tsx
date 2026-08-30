import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConversionBand } from "@/components/layout/ConversionBand";
import { ExperienceCatalog } from "@/features/experiences/ExperienceCatalog";
import { experiences } from "@/lib/data/experiences";

export const metadata: Metadata = {
  title: "Experiências",
  description:
    "Explore experiências por Angola, filtradas por província, interesse ou duração — ofertas reais e conceitos de demonstração, claramente identificados.",
};

export default function ExperienciasPage() {
  return (
    <>
      <SectionContainer className="pt-16 pb-8 md:pt-24">
        <PageShell>
          <SectionHeading
            level="h1"
            eyebrow="Experiências"
            title="Um catálogo para descobrir Angola"
            supporting="Filtre por província, interesse ou duração. Cada experiência está identificada como oferta real da Angola Experience ou conceito de demonstração — nunca escondido."
          />
        </PageShell>
      </SectionContainer>
      <SectionContainer className="pt-0">
        <PageShell>
          <ExperienceCatalog experiences={experiences} />
        </PageShell>
      </SectionContainer>
      <ConversionBand />
    </>
  );
}
