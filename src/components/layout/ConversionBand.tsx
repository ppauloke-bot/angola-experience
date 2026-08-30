import { Button } from "@/components/ui/Button";
import { PageShell } from "@/components/layout/PageShell";
import { WhatsAppCTAButton } from "@/components/conversion/WhatsAppCTAButton";

/**
 * Reusable closing CTA band (§4.1) — the "Precisa de assistência?" pattern
 * from the live site, preserved and reused across major pages (§3.2,
 * §10): WhatsApp CTA + contact link, so a visitor is never more than one
 * module away from a way to reach out.
 */
export function ConversionBand({
  heading = "Precisa de ajuda a planear a sua viagem?",
  supporting = "Fale connosco diretamente pelo WhatsApp ou envie os seus detalhes através do formulário de contacto.",
}: {
  heading?: string;
  supporting?: string;
}) {
  return (
    <div className="bg-ink text-cream">
      <PageShell className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-h2 font-semibold">{heading}</h2>
          <p className="mt-3 text-body text-cream/75">{supporting}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <WhatsAppCTAButton message="Olá! Gostaria de saber mais sobre as experiências da Angola Experience." />
          <Button href="/contacto" variant="secondary" tone="inverted">
            Ir para Contacto
          </Button>
        </div>
      </PageShell>
    </div>
  );
}
