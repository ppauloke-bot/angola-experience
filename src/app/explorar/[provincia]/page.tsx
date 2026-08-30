import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionBand } from "@/components/layout/ConversionBand";
import { ProvinceFlagshipView } from "@/features/explore/ProvinceFlagshipView";
import { ProvinceLightView } from "@/features/explore/ProvinceLightView";
import { provinces, getProvinceBySlug } from "@/lib/data/provinces";

export function generateStaticParams() {
  return provinces.map((province) => ({ provincia: province.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provincia: string }>;
}): Promise<Metadata> {
  const { provincia } = await params;
  const province = getProvinceBySlug(provincia);
  if (!province) return {};
  return {
    title: province.name,
    description: province.shortHook,
  };
}

export default async function ProvinceDetailPage({
  params,
}: {
  params: Promise<{ provincia: string }>;
}) {
  const { provincia } = await params;
  const province = getProvinceBySlug(provincia);
  if (!province) notFound();

  return (
    <>
      {province.status === "featured" ? (
        <ProvinceFlagshipView province={province} />
      ) : (
        <ProvinceLightView province={province} />
      )}
      <ConversionBand />
    </>
  );
}
