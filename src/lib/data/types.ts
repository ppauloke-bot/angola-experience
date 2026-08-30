/**
 * Content data model — Website-Strategy.md §4.4 (Province) and §6.1
 * (Experience). Field set matches the approved model in full so later
 * phases (Explore Hub, Experience Catalog/Detail) don't require type
 * rework; fields not yet used by the homepage are left optional and
 * unpopulated until the phase that owns them is built.
 */

/** Fixed 8-tag taxonomy shared by provinces and experiences (Website-Strategy.md §5.1). */
export const INTEREST_TAGS = [
  "Natureza",
  "Praia",
  "Cultura",
  "História",
  "Aventura",
  "Gastronomia",
  "Fotografia",
  "Relaxamento",
] as const;

export type InterestTag = (typeof INTEREST_TAGS)[number];

export type ProvinceStatus = "featured" | "coming-soon";

export interface ProvincePracticalInfo {
  gettingThere: string;
  safety: string;
  whatToPack: string;
}

/** Flagship-only destination-guide content (§8): O que ver is `keyPlaces`, O que fazer intro is `whatToDo` (linked experiences come from the experience data layer, not duplicated here). */
export interface DestinationGuide {
  whatToDo: string;
  culture: string;
  landscapes: string;
  gastronomy: string;
  practicalInfo: ProvincePracticalInfo;
  bestTimeToVisit: string;
}

export interface Province {
  slug: string;
  name: string;
  /** "featured" = flagship (full destination-guide template); "coming-soon" = light template (§3.4). */
  status: ProvinceStatus;
  /** Every province has this, including coming-soon ones (§4.4). */
  shortHook: string;
  heroImageAlt: string;
  /** Real, licensed local photo path (e.g. "/images/serra-da-leba-huila.jpg") — see IMAGE_CREDITS.md. Omit to keep the abstract placeholder. */
  heroImageSrc?: string;
  /** Flagship-only, populated below. "O que ver". */
  keyPlaces?: string[];
  /** Light-province-only: 2–4 real, specific bullet points (§3.4) — not filler. */
  highlights?: string[];
  interestTags?: InterestTag[];
  /** Flagship-only (§8). */
  destinationGuide?: DestinationGuide;
  /**
   * coming-soon only. A geographic navigation suggestion — "if you want to
   * explore more of Angola now, you can also discover [X]" — never an
   * administrative link, a claim of touring continuity, or an existing
   * Angola Experience route between the two. Chosen by real geographic
   * proximity/continuity, kept explicit here (not computed) so it stays
   * easy to review. Always one of the 6 flagship slugs — never a dead end.
   */
  relatedFlagshipSlug?: string;
}

export type ExperienceStatus = "verified" | "conceptual";
export type PriceType = "real" | "on-request";

export interface ItineraryStep {
  label: string;
  description: string;
}

export interface PracticalInfo {
  bestTime: string;
  difficulty: string;
  groupSize: string;
  whatToBring: string;
}

export interface Experience {
  slug: string;
  title: string;
  /** Undefined for the two nationwide advisory services, which aren't tied to one destination. */
  provinceSlug?: string;
  interestTags: InterestTag[];
  /** verified = real, currently published Angola Experience offering; conceptual = demo-only (§6.2). */
  status: ExperienceStatus;
  duration: string;
  /** Card-level summary, unique per experience — fixes the audit's duplicate-description finding. */
  summary: string;
  highlights: string[];
  priceType: PriceType;
  /** Only set for the two real Services-page items with a real published price (§6.3). */
  priceAOA?: { min: number; max?: number };
  heroImageAlt: string;
  /** Real, licensed local photo path — see IMAGE_CREDITS.md. Omit to keep the abstract placeholder. */
  heroImageSrc?: string;
  /**
   * Detail-page content. For `verified` experiences this is original
   * enrichment copy, not the client's actual published wording — a
   * "conceptual enrichment of a real offering," draft pending their
   * approval (§6.2), not a claim about their existing terms.
   */
  descriptionParagraphs: string[];
  /** Always rendered with an explicit "itinerário exemplo" label per §6.1 — never presented as the confirmed plan. */
  itinerary: ItineraryStep[];
  included: string[];
  notIncluded: string[];
  practicalInfo: PracticalInfo;
}
