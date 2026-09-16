import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

const BRAND_IMAGE = "/images/cambambe-cuanza-norte.jpg";

/**
 * The company, told through the country rather than through a team photo
 * the project doesn't have. Every claim traces to the four things
 * `Website-Strategy.md` §9 confirms the live site verifiably states —
 * showcasing Angola, a team of specialists, a commitment to quality, a
 * commitment to sustainability — paraphrased, never extended with an
 * invented founding date, team size, or named initiative.
 *
 * The previous homepage teaser used a captioned "fotografia a confirmar"
 * placeholder in this position. A real landscape carries the same
 * editorial weight without announcing a gap to the visitor.
 */
export function BrandEditorial() {
  return (
    <section className="overflow-x-clip bg-ink py-20 text-cream md:py-28">
      <PageShell className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <figure className="order-2 lg:order-1">
          <ImageReveal className="relative aspect-[5/4]">
            <Image
              src={BRAND_IMAGE}
              alt="A paisagem do Cambambe, junto ao rio Cuanza, no Cuanza Norte"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <figcaption className="mt-3">
            <PhotoCredit src={BRAND_IMAGE} place="Cambambe, Cuanza Norte" />
          </figcaption>
        </figure>

        <RevealOnScroll className="order-1 lg:order-2">
          <p className="text-caption font-medium tracking-[0.2em] text-gold uppercase">
            Angola Experience
          </p>
          <h2 className="mt-5 max-w-lg font-display text-h1 font-semibold text-balance">
            Mostrar Angola como ela merece ser vista
          </h2>
          <div className="mt-6 flex max-w-lg flex-col gap-4 text-body text-cream/75">
            <p>
              Somos uma equipa de especialistas dedicada à qualidade de cada viagem — do primeiro
              contacto pelo WhatsApp ao último dia da experiência.
            </p>
            <p>
              E a mostrar o país inteiro, não apenas um punhado de destinos conhecidos, de forma
              sustentável — sem comprometer os lugares que tornam estas viagens possíveis.
            </p>
          </div>
          <Link
            href="/sobre"
            className="group mt-8 inline-flex items-center gap-2 text-body font-medium text-gold transition-colors hover:text-cream"
          >
            Conhecer a Angola Experience
            <span
              aria-hidden="true"
              className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </RevealOnScroll>
      </PageShell>
    </section>
  );
}
