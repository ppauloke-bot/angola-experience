import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConversionBand } from "@/components/layout/ConversionBand";
import { ExploreModeToggle } from "@/components/discovery/ExploreModeToggle";
import { ProvinceGrid } from "@/components/discovery/ProvinceGrid";
import { getSortedProvinces } from "@/lib/data/provinces";

export const metadata: Metadata = {
  title: "Explorar Angola",
  description:
    "As 21 províncias de Angola, num só lugar — seis com guias completos, as restantes já representadas e a caminho do guia completo.",
};

export default function ExplorarPage() {
  const provinces = getSortedProvinces();

  return (
    <>
      <SectionContainer className="pt-16 pb-8 md:pt-24">
        <PageShell>
          <SectionHeading
            level="h1"
            eyebrow="Explorar Angola"
            title="As 21 províncias, num só lugar"
            supporting="Angola tem 21 províncias atuais. Seis já têm um guia completo; as restantes estão representadas com uma introdução real, a caminho do guia completo."
          />
          <div className="mt-8">
            <ExploreModeToggle active="provincia" />
          </div>
        </PageShell>
      </SectionContainer>
      <SectionContainer className="pt-0">
        <PageShell>
          <ProvinceGrid provinces={provinces} />
        </PageShell>
      </SectionContainer>
      <ConversionBand />
    </>
  );
}
