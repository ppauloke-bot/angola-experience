import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationMapPlaceholder } from "@/components/ui/LocationMapPlaceholder";
import { BookingInquiryForm } from "@/components/conversion/BookingInquiryForm";
import { FAQAccordion } from "@/components/conversion/FAQAccordion";
import { WhatsAppCTAButton } from "@/components/conversion/WhatsAppCTAButton";
import { ContactChannels } from "@/features/contact/ContactChannels";
import { faqItems } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Fale com a Angola Experience pelo WhatsApp, e-mail ou formulário — e encontre respostas às perguntas mais comuns antes de viajar.",
};

/** Contact (§3.6): contact channels → BookingInquiryForm → FAQAccordion → WhatsAppCTAButton (persistent) → map. */
export default function ContactoPage() {
  return (
    <>
      <SectionContainer className="pt-16 pb-8 md:pt-24">
        <PageShell>
          <SectionHeading
            level="h1"
            eyebrow="Contacto"
            title="Vamos planear a sua viagem"
            supporting="Fale connosco diretamente ou envie os seus detalhes através do formulário — respondemos pelo mesmo canal que a equipa usa no dia a dia."
          />
        </PageShell>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <PageShell>
          <ContactChannels />
        </PageShell>
      </SectionContainer>

      <SectionContainer>
        <PageShell className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-h2 font-display font-semibold text-ink">Envie os seus detalhes</h2>
            <p className="mt-3 max-w-md text-body text-ink-muted">
              Preencha o formulário e abrimos o WhatsApp com tudo já preenchido — não é preciso
              escrever tudo outra vez.
            </p>
            <div className="mt-8">
              <BookingInquiryForm />
            </div>
          </div>

          <div>
            <h2 className="text-h2 font-display font-semibold text-ink">Perguntas frequentes</h2>
            <div className="mt-6">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </PageShell>
      </SectionContainer>

      <SectionContainer tone="ink">
        <PageShell className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-h2 font-display font-semibold">Prefere falar diretamente?</h2>
            <p className="mt-2 text-body text-cream/75">
              O WhatsApp é a forma mais rápida de chegar até nós.
            </p>
          </div>
          <WhatsAppCTAButton message="Olá! Gostaria de mais informações sobre viagens com a Angola Experience." />
        </PageShell>
      </SectionContainer>

      <SectionContainer>
        <PageShell>
          <h2 className="text-h2 font-display font-semibold text-ink">Onde estamos</h2>
          <div className="mt-6">
            <LocationMapPlaceholder />
          </div>
        </PageShell>
      </SectionContainer>
    </>
  );
}
