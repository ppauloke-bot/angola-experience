import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

/**
 * Company mission/story content block (§3.6, §4.4). Every claim here
 * traces back to the four things `Website-Strategy.md` §9 confirms the
 * live site verifiably states — dedication to showcasing Angola, a team
 * of specialists, a commitment to quality, a commitment to sustainability
 * — paraphrased warmly, not expanded with invented specifics (no founding
 * date, no team size, no named initiatives). "Larger photography" per §9
 * is the one prominent image here, not a small teaser thumbnail.
 */
export function BrandStorySection() {
  return (
    <SectionContainer>
      <PageShell className="grid items-center gap-12 lg:grid-cols-2">
        <MediaPlaceholder
          label="A barragem das Mabubas, no Bengo"
          aspect="4/5"
          src="/images/barragem-das-mabubas-bengo.jpg"
          sizes="(min-width: 1024px) 46vw, 100vw"
          animated
        />
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-h2 font-display font-semibold text-ink">
              Mostrar Angola como ela merece ser vista
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              <p className="text-body text-ink-muted">
                A Angola Experience existe para mostrar Angola como ela merece ser vista — não
                apenas os destinos mais conhecidos, mas a diversidade real do país, do litoral ao
                planalto, das cidades históricas às paisagens desérticas do sul.
              </p>
              <p className="text-body text-ink-muted">
                Por trás de cada roteiro está uma equipa de especialistas dedicada à qualidade de
                cada viagem — do primeiro contacto pelo WhatsApp ao último dia da experiência.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-h3 font-display font-semibold text-ink">
              Uma ligação a Angola, não apenas um catálogo de viagens
            </h3>
            <p className="mt-3 text-body text-ink-muted">
              A missão é simples: ajudar mais pessoas a descobrir Angola com profundidade — as 21
              províncias do país, não apenas um punhado de destinos populares — e fazê-lo de forma
              sustentável, sem comprometer os lugares que tornam estas viagens possíveis.
            </p>
          </div>
        </div>
      </PageShell>
    </SectionContainer>
  );
}
