import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { mainNavItems, siteConfig } from "@/lib/site-config";

/** Nav links, contact info, social, copyright (§4.1). Dark (Ink) to match the header/logo treatment. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <PageShell className="grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-body text-cream/70">
            Viagens por Angola — de Luanda a Namibe, do litoral ao planalto.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="text-caption font-medium uppercase tracking-[0.1em] text-cream/50">
            Navegação
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-body text-cream/80 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-caption font-medium uppercase tracking-[0.1em] text-cream/50">
            Contacto
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-body text-cream/80">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.whatsappNumberDisplay}</li>
            <li>{siteConfig.address}</li>
            <li className="flex gap-4 pt-1">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Facebook
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </PageShell>

      <div className="border-t border-cream/10">
        <PageShell className="py-6 text-caption text-cream/60">
          <p>© {year} Angola Experience — Todos os direitos reservados.</p>
        </PageShell>
      </div>
    </footer>
  );
}
