import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

/**
 * Custom, on-brand 404 (Website-Strategy.md §2). The audit flagged the
 * real site's 404 for using an unrelated snowy-mountain/wildflower stock
 * photo — breaking brand consistency at exactly the moment it should
 * recover trust. This uses the same design system as every other page
 * (no special-cased styling) and never dead-ends the visitor.
 */
export default function NotFound() {
  return (
    <SectionContainer className="pt-16 pb-24 md:pt-24">
      <PageShell className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            level="h1"
            eyebrow="404"
            title="Este caminho ainda não foi explorado"
            supporting="A página que procura não existe ou foi movida. Mas há muito mais de Angola para descobrir."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/">Voltar ao Início</Button>
            <Button href="/explorar" variant="secondary">
              Explorar Angola
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-body text-ink-muted">
            <Link href="/experiencias" className="hover:text-gold">
              Experiências
            </Link>
            <Link href="/contacto" className="hover:text-gold">
              Contacto
            </Link>
          </div>
        </div>
        <MediaPlaceholder label="Angola, ainda por descobrir" aspect="4/5" animated />
      </PageShell>
    </SectionContainer>
  );
}
