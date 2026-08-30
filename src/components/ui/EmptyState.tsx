import Link from "next/link";

/**
 * Light-province forward-framed module (§3.4, §4.7). Distinct from
 * `ReservedContentBanner` — this is "content not yet written," not "proof
 * not yet authorized," so it gets its own honest, non-apologetic treatment:
 * a normal content module, not an error/warning pattern (no caution
 * triangles, no dashed borders, full-color, same type scale as everywhere
 * else on the page).
 */
export function EmptyState({
  relatedProvinceName,
  relatedProvinceSlug,
}: {
  relatedProvinceName: string;
  relatedProvinceSlug: string;
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-ink/10 bg-cream-muted p-8">
      <p className="text-body text-ink-muted">
        Este destino está a caminho do nosso guia completo — enquanto isso, explore{" "}
        <Link href={`/explorar/${relatedProvinceSlug}`} className="font-medium text-terracotta hover:text-gold">
          {relatedProvinceName}
        </Link>{" "}
        ou{" "}
        <Link href="/contacto" className="font-medium text-terracotta hover:text-gold">
          fale connosco
        </Link>{" "}
        para saber mais.
      </p>
    </div>
  );
}
