import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProvinceCard } from "@/components/discovery/ProvinceCard";
import { getProvinceBySlug } from "@/lib/data/provinces";
import type { Province } from "@/lib/data/types";

/**
 * Light province template (§3.4). Identical hero component, heading
 * scale, photography treatment and interaction model as the flagship
 * template — shorter, not lower-quality (§3.4 hard constraint). The one
 * "light" signal is the small badge already on `ProvinceCard`; this page
 * itself carries no dimmed/warning styling anywhere.
 */
export function ProvinceLightView({ province }: { province: Province }) {
  const relatedProvince = province.relatedFlagshipSlug
    ? getProvinceBySlug(province.relatedFlagshipSlug)
    : undefined;

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-ink text-cream">
        <MediaPlaceholder
          label={province.heroImageAlt}
          aspect="16/9"
          animated
          className="absolute inset-0 h-full w-full rounded-none"
          src={province.heroImageSrc}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <PageShell className="relative z-10 pb-12">
          <Breadcrumb
            tone="inverted"
            className="mb-4"
            items={[{ label: "Explorar Angola", href: "/explorar" }, { label: province.name }]}
          />
          <Badge tone="neutral" className="mb-4">
            Guia em Expansão
          </Badge>
          <h1 className="font-display text-display font-bold text-balance">{province.name}</h1>
          <p className="mt-4 max-w-lg text-body text-cream/85">{province.shortHook}</p>
        </PageShell>
      </section>

      <SectionContainer>
        <PageShell className="flex flex-col gap-12">
          {province.highlights && province.highlights.length > 0 ? (
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {province.highlights.map((highlight) => (
                <li key={highlight} className="text-body text-ink-muted">
                  · {highlight}
                </li>
              ))}
            </ul>
          ) : null}

          {province.interestTags && province.interestTags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {province.interestTags.map((tag) => (
                <Badge key={tag} tone="terracotta-outline">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}

          {relatedProvince ? (
            <EmptyState relatedProvinceName={relatedProvince.name} relatedProvinceSlug={relatedProvince.slug} />
          ) : null}

          {relatedProvince ? (
            <div>
              <h2 className="text-h2 font-display font-semibold text-ink">Continue a explorar</h2>
              <div className="mt-6 max-w-sm">
                <ProvinceCard province={relatedProvince} />
              </div>
            </div>
          ) : null}
        </PageShell>
      </SectionContainer>
    </>
  );
}
