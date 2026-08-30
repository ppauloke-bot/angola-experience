import { Hero } from "@/features/home/Hero";
import { VisualStrip } from "@/features/home/VisualStrip";
import { FeaturedExperiences } from "@/features/home/FeaturedExperiences";
import { WhyUs } from "@/features/home/WhyUs";
import { TrustPreview } from "@/features/home/TrustPreview";
import { AboutTeaser } from "@/features/home/AboutTeaser";
import { ConversionBand } from "@/components/layout/ConversionBand";

/** Homepage module order per Website-Design.md §3.2. */
export default function Home() {
  return (
    <>
      <Hero />
      <VisualStrip />
      <FeaturedExperiences />
      <WhyUs />
      <TrustPreview />
      <AboutTeaser />
      <ConversionBand />
    </>
  );
}
