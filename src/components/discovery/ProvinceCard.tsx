import Link from "next/link";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Badge } from "@/components/ui/Badge";
import { HoverLift } from "@/components/motion/HoverLift";
import type { Province } from "@/lib/data/types";

/**
 * One province's grid card — a single component for all 21 provinces
 * (§4.2). `province.status` drives only the small "Guia em Expansão"
 * badge (§9.2); it must never drive size, image quality, typography,
 * spacing, or elevation. Every other prop and class below is identical
 * regardless of status — that symmetry is the whole point.
 */
export function ProvinceCard({ province }: { province: Province }) {
  return (
    <HoverLift>
      <Link href={`/explorar/${province.slug}`} className="group block">
        <div className="relative">
          <MediaPlaceholder
            label={province.heroImageAlt}
            aspect="4/5"
            src={province.heroImageSrc}
            sizes="(min-width: 1280px) 300px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            zoomOnHover
          />
          {province.status === "coming-soon" ? (
            <div className="absolute left-3 top-3">
              <Badge tone="neutral">Guia em Expansão</Badge>
            </div>
          ) : null}
        </div>
        <div className="mt-4">
          <h3 className="text-h3 font-display font-semibold text-ink transition-colors group-hover:text-gold">
            {province.name}
          </h3>
          <p className="mt-2 text-body text-ink-muted">{province.shortHook}</p>
        </div>
      </Link>
    </HoverLift>
  );
}
