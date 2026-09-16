import { HomeHero } from "@/features/home/HomeHero";
import { HomeIndexBar, Manifesto } from "@/features/home/Manifesto";
import { DestinationsEditorial } from "@/features/home/DestinationsEditorial";
import { InterestInvitation } from "@/features/home/InterestInvitation";
import { ExperienceStories } from "@/features/home/ExperienceStories";
import { TrustEditorial } from "@/features/home/TrustEditorial";
import { BrandEditorial } from "@/features/home/BrandEditorial";
import { ClosingInvitation } from "@/features/home/ClosingInvitation";

/**
 * Homepage, rebuilt around the visitor's journey rather than around the
 * live site's section list. Each module earns its place in that sequence:
 *
 * 1. `HomeHero` — first impression: one full-viewport photograph.
 * 2. `HomeIndexBar` — the scale of the country, bridging out of the hero.
 * 3. `Manifesto` — curiosity: why 21 provinces, not one capital.
 * 4. `DestinationsEditorial` — discovery by place.
 * 5. `InterestInvitation` — discovery by way of travelling ("Como quer viver Angola?").
 * 6. `ExperienceStories` — what discovery leads to, concretely.
 * 7. `TrustEditorial` — why to believe it, without invented social proof.
 * 8. `BrandEditorial` — who is behind it.
 * 9. `ClosingInvitation` — conversion, on a photograph rather than a flat band.
 *
 * The inner pages (`/explorar`, `/experiencias`, detail templates, filters,
 * the WhatsApp flow) are unchanged and still own the depth — this page is
 * the way in, not a second copy of them.
 */
export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIndexBar />
      <Manifesto />
      <DestinationsEditorial />
      <InterestInvitation />
      <ExperienceStories />
      <TrustEditorial />
      <BrandEditorial />
      <ClosingInvitation />
    </>
  );
}
