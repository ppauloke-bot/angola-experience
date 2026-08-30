import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

/**
 * Display typeface (Website-Design.md §2.3). Weights limited to what the
 * type hierarchy actually uses: 600 for H1–H3, 700 for the Display level.
 * `latin-ext` is included alongside `latin` so Portuguese diacritics
 * (ã, õ, ç, á, à, â, ê, í, ó, ô, ú) are always covered.
 */
export const displayFont = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

/**
 * Body/UI typeface (Website-Design.md §2.3). 400 for paragraphs, 500 for
 * UI labels/forms, 600 for buttons and small card-title-style headings.
 */
export const bodyFont = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});
