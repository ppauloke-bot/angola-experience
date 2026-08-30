import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConversionBand } from "@/components/layout/ConversionBand";
import { TrustSignals } from "@/features/trust/TrustSignals";
import { StoriesGrid } from "@/features/trust/StoriesGrid";
import { MediaWallPlaceholder } from "@/components/trust/MediaWallPlaceholder";

export const metadata: Metadata = {
  title: "Histórias",
  description:
    "Onde as histórias reais de quem viaja com a Angola Experience vão viver — e o que já pode confiar hoje, mesmo antes de existirem.",
};

/** Trust Hub (§3.6): intro framing → real trust signals → reserved stories/testimonials grid → media wall placeholder → conversion band. */
export default function HistoriasPage() {
  return (
    <>
      <SectionContainer className="pt-16 pb-8 md:pt-24">
        <PageShell>
          <SectionHeading
            level="h1"
            eyebrow="Histórias"
            title="Aqui vão viver as histórias reais"
            supporting="Ainda não temos autorização para publicar histórias, fotografias ou testemunhos reais de viajantes. Por isso, mostramos aqui — com transparência — a forma como esse conteúdo vai ganhar vida assim que estiver disponível."
          />
        </PageShell>
      </SectionContainer>

      <TrustSignals />
      <StoriesGrid />

      <SectionContainer>
        <PageShell>
          <SectionHeading
            eyebrow="Fotografias e vídeos"
            title="Uma parede de imagens, a caminho"
            supporting="Esta grelha já está pronta para receber fotografias e vídeos reais de viagens. Por agora, mostramos apenas o espaço reservado — nunca fotografias de pessoas que não são clientes reais da Angola Experience."
          />
          <div className="mt-10">
            <MediaWallPlaceholder />
          </div>
        </PageShell>
      </SectionContainer>

      <ConversionBand
        heading="Quer ser a próxima história real?"
        supporting="Fale connosco pelo WhatsApp e comece a planear a sua viagem — a sua experiência pode ser a primeira a aparecer aqui."
      />
    </>
  );
}
