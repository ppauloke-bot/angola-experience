import Image, { type ImageProps } from "next/image";
import { cn } from "@/utils/cn";

/**
 * Slow pan/zoom still-image wrapper (§4.6). Pure CSS `transform: scale()`
 * keyframe — no JS animation loop, runs on the compositor thread (§7.2).
 * `prefers-reduced-motion` freezes it via `motion-reduce:animate-none`
 * (§6.3) — falls back to the image's static crop.
 */
export function KenBurnsImage({ className, ...props }: ImageProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and spread via {...props}; eslint can't see it through the spread */}
      <Image
        className={cn(
          "h-full w-full object-cover animate-ken-burns motion-reduce:animate-none",
          className,
        )}
        {...props}
      />
    </div>
  );
}
