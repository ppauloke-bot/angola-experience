"use client";

import { useMemo, useState } from "react";
import { ExperienceFilterBar } from "@/components/experience/ExperienceFilterBar";
import { ExperienceGrid } from "@/components/experience/ExperienceGrid";
import { getProvinceBySlug } from "@/lib/data/provinces";
import { getDurationOptions } from "@/lib/data/experiences";
import type { Experience, InterestTag } from "@/lib/data/types";

/**
 * Owns the catalog's filter state (§3.5, §4.3). Client boundary is kept
 * to this one component — `ExperienceCard`/`ExperienceGrid` themselves
 * stay server components, filtering is a cheap in-memory array filter
 * (§7.1: no heavy computation or network round-trip for a 14-item list).
 */
export function ExperienceCatalog({ experiences }: { experiences: Experience[] }) {
  const [province, setProvince] = useState<string | null>(null);
  const [interest, setInterest] = useState<InterestTag | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const provinceOptions = useMemo(() => {
    const slugs = Array.from(
      new Set(experiences.map((e) => e.provinceSlug).filter((s): s is string => Boolean(s))),
    );
    return slugs
      .map((slug) => getProvinceBySlug(slug))
      .filter((p): p is NonNullable<typeof p> => Boolean(p))
      .map((p) => ({ slug: p.slug, name: p.name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [experiences]);

  const durationOptions = useMemo(() => getDurationOptions(), []);

  const filtered = useMemo(() => {
    return experiences.filter((experience) => {
      if (province && experience.provinceSlug !== province) return false;
      if (interest && !experience.interestTags.includes(interest)) return false;
      if (duration && experience.duration !== duration) return false;
      return true;
    });
  }, [experiences, province, interest, duration]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
      <ExperienceFilterBar
        provinces={provinceOptions}
        province={province}
        onProvinceChange={setProvince}
        interest={interest}
        onInterestChange={setInterest}
        durations={durationOptions}
        duration={duration}
        onDurationChange={setDuration}
      />
      <div>
        <p className="mb-6 text-caption text-ink-muted">
          {filtered.length} {filtered.length === 1 ? "experiência" : "experiências"}
        </p>
        <ExperienceGrid experiences={filtered} />
      </div>
    </div>
  );
}
