import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionBand } from "@/components/layout/ConversionBand";
import { ExperienceDetailView } from "@/features/experiences/ExperienceDetailView";
import { experiences, getExperienceBySlug } from "@/lib/data/experiences";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};
  return {
    title: experience.title,
    description: experience.summary,
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  return (
    <>
      <ExperienceDetailView experience={experience} />
      <ConversionBand />
    </>
  );
}
