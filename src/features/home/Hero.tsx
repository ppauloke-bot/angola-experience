import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { PageShell } from "@/components/layout/PageShell";

/**
 * Cinematic hero (§3.2.1): full-bleed Ken-Burns imagery, a headline that
 * names a place/feeling rather than "Bem-vindo à Angola Experience!"
 * (Website-Strategy.md §3), and both discovery paths presented as equally
 * weighted entry points — not one buried in a submenu.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0">
        <MediaPlaceholder
          label="Imagem de destaque: paisagem aérea de Angola (fotografia a confirmar)"
          aspect="16/9"
          animated
          className="h-full w-full rounded-none"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <PageShell className="relative z-10 pb-16 pt-32 md:pb-24">
        <h1 className="max-w-2xl font-display text-display font-bold text-balance">
          De Luanda ao Namibe: a Angola por descobrir.
        </h1>
        <p className="mt-6 max-w-lg text-body text-cream/85 text-pretty">
          Paisagens, histórias e experiências por todo o país — viagens por Angola, à sua medida.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/explorar">Explorar por Destino</Button>
          <Button href="/explorar/interesses" variant="secondary" tone="inverted">
            Explorar por Interesse
          </Button>
        </div>
      </PageShell>
    </section>
  );
}
