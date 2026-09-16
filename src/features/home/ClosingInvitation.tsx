import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { PhotoCredit } from "@/components/ui/PhotoCredit";
import { WhatsAppCTAButton } from "@/components/conversion/WhatsAppCTAButton";

const CLOSING_IMAGE = "/images/lagoa-da-quiminha-icolo-e-bengo.jpg";

/**
 * The closing conversion moment, as a full-bleed photographic band rather
 * than the flat Ink `ConversionBand` used on every inner page — the
 * homepage opens on a photograph and should close on one.
 *
 * The CTAs themselves are unchanged: the same `WhatsAppCTAButton` that
 * builds every `wa.me` link on the site, and the same `/contacto` route.
 * Nothing about the conversion flow was rebuilt, only its setting.
 */
export function ClosingInvitation() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden bg-ink text-cream">
      <Image
        src={CLOSING_IMAGE}
        alt="A Lagoa da Quiminha, em Icolo e Bengo, ao fim do dia"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30"
      />

      <PageShell className="relative z-10 py-20 md:py-28">
        <h2 className="max-w-2xl font-display text-h1 font-semibold text-balance">
          Vamos planear a sua viagem.
        </h2>
        <p className="mt-5 max-w-lg text-body text-cream/80 text-pretty">
          Diga-nos o que procura e respondemos pelo WhatsApp — com o roteiro, as datas possíveis e o
          que está incluído.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <WhatsAppCTAButton message="Olá! Gostaria de planear uma viagem por Angola com a Angola Experience." />
          <Button href="/contacto" variant="secondary" tone="inverted">
            Ir para Contacto
          </Button>
        </div>
        <PhotoCredit
          src={CLOSING_IMAGE}
          place="Lagoa da Quiminha, Icolo e Bengo"
          className="mt-12"
        />
      </PageShell>
    </section>
  );
}
