# Website Design — Angola Experience Demo

Version: 1.2

Phase: 3 — Design (approved, Build prerequisites closed)

Source inputs: `Website-Audit.md`, `Website-Strategy.md` (v1.1), `Core/Design-System.md`, `Core/Anti-AI-Design.md`, `Core/Motion-Rules.md`, `Core/Code-Standards.md`, `Core/Accessibility.md`, `Core/Performance.md`, `Core/Copywriting.md`, `Business-Specific/Travel.md`, and the client's Phase 3 direction.

## Changelog

- **v1.2** — Closes the three remaining Build prerequisites the client requested before Phase 4:
  1. **Typography finalized** (§2.3): display = Bricolage Grotesque, body = Instrument Sans. Both are variable, open-license, full Latin-Extended (Portuguese diacritics) coverage, and neither is an overused SaaS-template default — chosen to evolve the current site's rounded-geometric feel rather than reuse it verbatim. Weight usage constrained to 2 display instances and 3 body instances (no unnecessary weights).
  2. **Color tokens finalized** (§2.2): Ink `#161310`, Cream `#FAF6EE`, Gold `#B4842A`, Terracotta `#9C5430`. Gold and Terracotta were each deepened slightly from the v1.1 indicative values after WCAG contrast verification — the original Gold (`#C89A3E`) failed the 3:1 non-text/UI-component threshold against Cream (2.39:1), and the original Terracotta (`#A85C34`) cleared body-text AA on Cream with almost no margin (4.59:1). Roles and relationships are unchanged; only precision improved. Verified contrast ratios are recorded in §2.2.
  3. **Regional groupings dropped** (§3.3, §4.2): researched against public sources — Angola has no official statistical/administrative region tier above province, informal groupings vary by source, and three of the 21 current provinces (Cuando, Cubango, Icolo e Bengo, Moxico Leste) are too new (2024–2025) to have any established grouping at all. Per the fallback §11 already authorized in v1.1, `RegionFilterTabs` is removed from scope; `/explorar` uses alphabetical sorting with flagship provinces surfaced first instead. No loss to the "all 21 provinces, one discovery experience" requirement.

  All three Build prerequisites are now resolved. **No open items remain — Phase 4 (Build) may begin.**

- **v1.1** — Phase 3 approved. This revision hardens four points the client flagged before Build: (1) the 21-province experience is restated as a first-class requirement with zero visual/quality distinction between flagship and light provinces; (2) regional groupings are explicitly locked as editorial/navigation aids only, never presented as official divisions; (3) a new §7, "Performance as a Design Requirement," makes lightweight, jank-free motion and media a binding design constraint rather than a later optimization pass; (4) brand-recognizability and no-fabrication constraints are reaffirmed. Sections renumbered from v1.0: old §7 Accessibility → §8, old §8 Placeholder & Media → §9, old §9 Not Included → §10, old §10 Open Items → §11. **Phase 3 is approved — Build proceeds next**, following the sequence in `Website-Strategy.md` §15.

---

# 0. How to Read This Document

This document turns the approved Phase 2 architecture into a concrete visual system, page hierarchy, component inventory, responsive rules, performance constraints and motion spec — specific enough to move directly into Build without re-opening strategy questions. It contains **no application code**. Per `Core/SYSTEM.md`'s phase order, this is "Design," not "Build."

**Client clarifications incorporated in this version:**

1. **The 21-province experience is a first-class requirement, not a limitation.** `/explorar` must feel like a genuine way to discover the whole of Angola. The flagship/light distinction is about *content depth only* — never importance, visual quality, or perceived completeness. No province may look like a lower-quality version of another; the same visual system, card quality, typography, spacing, and interaction model applies to all 21. This governs §3.3, §3.4, §4.2, and §9.2 below.
2. **Regional groupings are editorial/navigation aids only.** They must never be presented as Angola's official administrative or geographic divisions unless independently verified — see §3.3 and §11.
3. **Performance is a design requirement, not a later optimization step.** See the new §7.
4. **Brand recognizability and content integrity are non-negotiable** — this must read as "Angola Experience evolved," and no real customer content or invented facts are introduced. See §1 and §10.

---

# 1. Brand Evolution Principle

Per the client's explicit instruction, this must read as **Angola Experience's brand evolved**, not a new, unrelated design. Concretely, this design system is anchored to five things the audit identified as already working (`Website-Audit.md` §9), each carried forward and elevated rather than replaced:

| Existing element | How it evolves here |
|---|---|
| Gold/black identity | Refined into a full warm palette (§2.2) — same emotional register (sun, warmth, gold-as-premium), better executed |
| Circular sun/spiral logo mark | Used as-is (real brand asset, per `Website-Strategy.md` §11.2); given more breathing room and a consistent lockup system instead of being squeezed into a cramped header |
| Aerial/destination photography style | Elevated to the primary storytelling device across the whole site, not just the tour grid |
| WhatsApp-first conversion | Preserved as a persistent, designed UI element (§4, `WhatsAppCTAButton`), not just a form add-on |
| Simple top-level navigation | Preserved exactly — six items, no mega-menu sprawl |

Nothing in this design should make someone who knows the current site feel like they've landed on a different company's page. This principle is a hard constraint on Build, not just an aspiration: any component that drifts from these five anchors should be reconsidered before it ships.

---

# 2. Visual System

## 2.1 Brand Personality

Per `Design-System.md`'s requirement to define personality before visual decisions: Angola Experience sits between two of the document's reference personalities — **local business** (trustworthy, human, approachable) and **luxury** (elegant, refined, confident) — without being either generic-local or cold-luxury.

**Personality statement: "Warm Premium — a confident local expert, not a cold luxury brand."**

- Confident, not shouting (no exclamation-mark marketing, no "best experience ever" language — see `Copywriting.md`).
- Warm, not cold-minimal — the current gold/black palette already points this direction; refine it, don't neutralize it into grayscale luxury.
- Specific, not generic — every visual decision should feel like it could only be Angola Experience, not a template swapped in for any tour operator (`Anti-AI-Design.md`'s core test: "Could this belong to any company?").

## 2.2 Color System — Final Tokens

Finalized at Build-readiness (v1.2). Roles and relationships are unchanged from v1.1; Gold and Terracotta were each deepened slightly from their indicative values after WCAG contrast verification (method and full ratio table below).

| Role | Final hex | Notes |
|---|---|---|
| **Ink** (primary neutral, replaces pure black) | `#161310` | Warm near-black charcoal. Current site uses flat black; a warm charcoal feels less corporate, more premium. Unchanged from v1.1. |
| **Cream** (primary background, replaces pure white) | `#FAF6EE` | Warm off-white. Avoids the sterile all-white look of the current site; warmer canvas for photography. Unchanged from v1.1. |
| **Gold** (primary brand color) | `#B4842A` | Refined amber-gold. Deepened from the v1.1 indicative `#C89A3E` — that value failed the 3:1 WCAG non-text/UI-component threshold against Cream (2.39:1), which would have made gold-based focus rings, icon fills, and borders non-compliant on the light theme. `#B4842A` clears that threshold (3.10:1) with a small safety margin while still reading as a rich amber-gold, not brown. |
| **Terracotta** (secondary accent) | `#9C5430` | Earth/rust tone, drawn from real Angola Experience photography already seen in the audit (the red-clay canyons at Cabo Ledo). Deepened from the v1.1 indicative `#A85C34`, which cleared AA body-text contrast on Cream with almost no margin (4.59:1 against a 4.5:1 minimum). `#9C5430` gives a safer margin (5.23:1) for the small caption-sized text used in badges and interest-tag chips, without losing the rust/terracotta character. |
| **Supporting neutrals** | Derived from Ink (no separate hex token) | Warm greys generated as tints/shades of Ink (e.g. Ink blended toward Cream at fixed opacities), not a separately-specified cool/blue-tinted gray scale. Used for body text on light surfaces, borders, and disabled states. Keeping neutrals derived rather than hand-picked avoids introducing a fifth decorative color, per the "no additional colors without semantic purpose" constraint. |

Semantic use is unchanged: gold = primary action / "this is real and available now"; terracotta = secondary / classification / "conceptual, tag, metadata." This gives the Verified/Conceptual badge system (§9.3) a built-in, non-arbitrary color logic rather than inventing a new status-color scheme.

### Verified contrast ratios (WCAG 2.1, calculated against these final hex values)

| Pair | Ratio | Passes |
|---|---|---|
| Ink text on Cream (body copy, light sections) | 17.17:1 | AA + AAA, all text sizes |
| Cream text on Ink (dark sections, footer) | 17.17:1 | AA + AAA, all text sizes |
| Gold on Cream (non-text: focus ring, icon, border) | 3.10:1 | AA non-text/UI-component (≥3:1) |
| Gold on Ink (gold accent text on dark sections) | 5.53:1 | AA normal text (≥4.5:1) |
| Ink text on Gold fill (primary CTA button label) | 5.53:1 | AA normal text (≥4.5:1) |
| Terracotta on Cream (badge/tag text, outline badge label) | 5.23:1 | AA normal text (≥4.5:1) |
| White text on Terracotta fill (solid terracotta usage) | 5.64:1 | AA normal text (≥4.5:1) |

**Two binding rules that follow directly from this table, both new in v1.2:**

1. **Gold is never used as text color directly on Cream.** Base Gold-on-Cream is 2.39:1 even at the old indicative value and only 3.10:1 at the finalized value — sufficient for non-text UI (focus rings, borders, icon fills) but not for text at any size. Gold text only appears on Ink/dark surfaces (5.53:1) or as Ink-colored text on a solid Gold fill (5.53:1, e.g. the primary CTA button). This was implicit in the v1.1 "gold = primary action, used sparingly" framing but is now an explicit, testable constraint for Build.
2. **White is never used as text on a Gold fill.** White-on-Gold is only 2.58–3.35:1 depending on the exact gold value — fails AA. Primary Gold buttons use Ink-colored labels, not white ones (this reverses an assumption a generic "dark button = white text" component library default would otherwise make).

Verified vs. Conceptual badges (§9.3) remain distinguished by shape and label as well as color (solid gold pill vs. outline terracotta pill, different text) — never by hue alone, since both sit in the same warm amber/rust band and shouldn't be relied on to self-distinguish for color-vision-deficient users.

**Contrast commitment (unchanged from v1.1):** all text-on-photography uses a scrim/gradient overlay (§2.5) to guarantee WCAG AA contrast — never relying on hoping the photo is dark enough, which is a likely contributor to the audit's flagged low-contrast body text.

## 2.3 Typography System — Final Families

The audit's single clearest typographic finding: **five competing Google Font families loaded at once, with no deliberate system.** This is fixed with one deliberate, finalized pairing:

| Role | Final family | Why |
|---|---|---|
| **Display/headline** | **Bricolage Grotesque** | A warm, rounded-but-refined geometric-grotesque hybrid — the direct evolution of the current site's approachable rounded display feel (previously carried, inconsistently, by Poppins), but more distinctive and better crafted. It is a variable font with both weight and optical-size axes, so one file serves hero-scale display type and smaller H2/H3 headings without separate static weights. It is open-license (SIL OFL via Google Fonts), self-hostable, and has full Latin Extended coverage (Portuguese diacritics — ã, õ, ç, á, à, â, ê, í, ó, ô, ú — fully supported). It reads confident and specific rather than as a generic template default, which matters directly against `Anti-AI-Design.md`'s "could this belong to any company?" test. |
| **Body/UI** | **Instrument Sans** | A clean, highly legible humanist sans purpose-built for UI and body text (labels, forms, paragraph copy, chrome). Chosen over the more commonly-templated `Inter`/generic-grotesque default for the same genericness reason — it is newer, still extremely legible and neutral at small sizes, and pairs cleanly against Bricolage Grotesque's warmth without competing with it. Variable font, open-license, full Latin Extended (Portuguese) coverage, self-hostable. |

Used for hero headlines, section titles, and province/experience names (display); all body copy, forms, labels, and UI chrome (body). This is a deliberate *evolution* of the existing feel rather than a switch to an unrelated style (e.g., a serif), which would work against "brand evolved, not redesigned."

**Weight usage (no unnecessary weights loaded):**

| Family | Instances used | Where |
|---|---|---|
| Bricolage Grotesque | 600 (Semibold), 700 (Bold) | H1–H3 use 600; Display (hero headline) uses 700. Loaded as a single variable-font file constrained to this range — not as separate static font files. |
| Instrument Sans | 400 (Regular), 500 (Medium), 600 (Semibold) | 400 = body paragraphs; 500 = UI labels, form fields, secondary emphasis; 600 = buttons, small headings-adjacent UI (e.g. card titles that use body rather than display type). |

Two font families, five total weight instances across both — nothing beyond what the type hierarchy below actually needs.

**Type hierarchy** (per `Design-System.md`'s Display/Heading/Body/Supporting levels):

| Level | Use | Approx. scale (desktop) |
|---|---|---|
| Display | Hero headlines, major brand moments (home hero, province hero) | ~56–72px |
| H1 | Page titles | ~40–48px |
| H2 | Section titles | ~28–32px |
| H3 | Card/module titles | ~20–22px |
| Body | Paragraph copy | ~16–18px, 1.6 line-height |
| Supporting/Caption | Metadata, tags, captions | ~13–14px |

No more than these two font families anywhere in the demo — this is a hard constraint, not a suggestion.

## 2.4 Spacing & Grid System

- **Base unit:** 4px, scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 — avoids the "random spacing values" `Design-System.md` warns against.
- **Max content width:** ~1280px for text-heavy content, full-bleed (100vw) permitted for hero and gallery imagery.
- **Grid:** 12-column desktop grid, 4-column mobile grid, consistent gutters (24px desktop / 16px mobile).
- **Whitespace is a deliberate tool** (`Anti-AI-Design.md`): sections get room to breathe rather than being packed — this directly fixes the audit's crowded, uneven homepage spacing.

## 2.5 Iconography & Imagery Direction

- **Icons:** a single custom-feel line-icon set (consistent stroke weight, consistent corner radius) replacing the current site's generic flat icon-pack illustrations (map-pin person, camera, badge, plant) — icons should feel like they were drawn for this system, not pulled from a generic pack.
- **Photography:** aerial/drone, golden-hour, landmark-specific — continuing the audit's identified strength. Every hero and card image uses a **consistent gradient scrim** (dark at the bottom third, transparent above) so overlaid text always passes contrast checks regardless of the underlying image.
- **Aspect ratio discipline:** one consistent aspect ratio per component type (e.g., province cards always 4:5, experience hero always 16:9) — mixed aspect ratios in the same grid is a common "unintentional" signal `Anti-AI-Design.md` warns against.
- **Placeholder imagery** follows the three-tier sourcing priority already defined in `Website-Strategy.md` §11.2 — this document adds the *visual treatment* on top (§9).

## 2.6 Elevation, Borders, Radius

- A restrained radius scale: sharp-ish corners (4–8px) for photography/cards, slightly softer for buttons/pills (8–12px) — deliberately **not** the "excessive rounded cards" look `Anti-AI-Design.md` flags as a generic AI pattern.
- Shadows used sparingly, only to lift interactive cards on hover — no default drop-shadow-on-everything.
- Borders used instead of shadows for most static separation (a hairline warm-grey border reads as more editorial/premium than a soft shadow on every card).

## 2.7 Card Usage Discipline

Per `Design-System.md`: "cards should only exist when they improve organization, comparison, or scanning... excessive cards create generic AI layouts." Cards are used for: province grid, experience grid, story placeholder slots. Cards are **not** used for: the "why Angola Experience" section (uses a simpler side-by-side/list layout instead of four identical icon-cards, directly addressing the audit's "generic icon+adjective" finding), or the FAQ (uses an accordion, not cards).

---

# 3. Page Hierarchy & Templates

Building on `Website-Strategy.md` §2. Each template below states its purpose, module order, and primary/secondary CTA — this is what Build implements directly.

## 3.1 Template Inventory

| Template | Route(s) | Renders for |
|---|---|---|
| Home | `/` | Single page |
| Explore Hub | `/explorar`, `/explorar/interesses` | Single page, two modes (tab/toggle, shared layout) |
| Province — Flagship | `/explorar/[provincia]` | 6 flagship provinces |
| Province — Light | `/explorar/[provincia]` | 15 remaining provinces (same route pattern, same template system, lighter content variant based on data — see §3.4) |
| Experience Catalog | `/experiencias` | Single page |
| Experience Detail | `/experiencias/[slug]` | All experiences (verified + conceptual variants share one template, differ by badge/price slot) |
| Trust Hub | `/historias` | Single page |
| About | `/sobre` | Single page |
| Contact | `/contacto` | Single page |
| 404 | — | Fallback |

## 3.2 Home

1. **Hero** — full-bleed Ken-Burns imagery, Display headline, two entry CTAs side by side: "Explorar por Destino" / "Explorar por Interesse."
2. **Visual strip** — short sequence of province/landscape imagery, no invented stats.
3. **Featured experiences** — 3–4 `ExperienceCard`s, mixed verified/conceptual (each badged).
4. **Why Angola Experience** — list/side-by-side layout (not icon-cards, per §2.7), tied to specific, demonstrable things.
5. **Trust preview** — 1–2 `StoryPlaceholderCard`s linking to `/historias`.
6. **Human-side teaser** — strip linking to `/sobre`.
7. **Conversion band** — `ConversionBand` component: WhatsApp CTA + contact link, reused on every major page.

Primary CTA: enter Explore. Secondary: WhatsApp / contact band.

## 3.3 Explore Hub (`/explorar`) — All 21 Provinces, One Discovery Experience

`/explorar` is designed to feel like a genuine, complete way to discover Angola — not a catalogue of "6 real destinations plus 15 stubs." Concretely:

- `ExploreModeToggle` at the top: "Por Província" (default) / "Por Interesse."
- **Province mode:** no regional grouping filter. **`RegionFilterTabs` was researched and dropped (v1.2) — see the resolved decision in §11.** Angola has no official statistical or administrative region tier above province, and informal groupings found in research vary by source and cannot cover the three provinces created in the 2024–2025 reorganization (Cuando, Cubango, Icolo e Bengo, Moxico Leste), which are too new to appear in any existing grouping. Rather than present a browsing convenience that risks reading as a geographic claim, `/explorar` relies on sorting alone (see below).
- Below the toggle: **one unified `ProvinceGrid` showing all 21 provinces in the exact same card component, at the same size, with the same visual weight, the same photography treatment, and the same interaction behavior.** There is no separate "featured" zone and "the rest" zone — flagship and light provinces are interleaved in the same grid, **sorted alphabetically with the 6 flagship provinces surfaced first** (a simple, defensible sort with no geographic claim embedded in it), distinguished only by the small metadata badge described in §9.2. This is the direct, literal implementation of the client's instruction that `/explorar` must feel like a genuine way to discover Angola as a whole.
- **Interest mode:** `InterestPicker` (8 tags as large, tappable tiles) → `InterestResultsGrid` (filtered `ExperienceCard`s + relevant `ProvinceCard`s, again drawn from the full 21-province set, not just the flagship 6).

## 3.4 Province Pages — One System, Twenty-One Provinces, Two Content Depths

**Design principle (restated as a hard constraint):** flagship and light provinces are **never** allowed to look like two different products or two tiers of quality. They share the same hero component, the same typography, the same card component in the grid, the same spacing rules, and the same interaction model. The *only* difference between them is how many content modules render below the hero — a content-depth difference, not a design-quality difference. No province may look like a lower-quality version of another.

**Province — Flagship** (6 provinces): Hero → short hook → "O que ver" → "O que fazer" (linked experiences) → Cultura → Paisagens → Gastronomia → Informação prática → Melhor época → related experiences → conversion band.

**Province — Light** (15 provinces): Hero → short hook → key highlights (2–4 bullet points, still real/specific, not filler) → interest tags → a **forward-framed** module (not an apology): *"Este destino está a caminho do nosso guia completo — enquanto isso, explore [related flagship province] ou fale connosco para saber mais."* This reframes the lighter template as part of a growing, living guide rather than a dead end. → related flagship province card → conversion band.

Both templates use the identical hero component, identical heading scale, identical photography treatment, identical card styling, and identical conversion band. The light template is simply **shorter, not lower-quality** — this applies to every visual property (imagery resolution/treatment, typography, spacing, color usage, interaction affordances), not only to the general impression.

## 3.5 Experience Catalog & Detail

- Catalog: filter bar (province, interest, duration) + `ExperienceGrid`. Verified and conceptual experiences are visually distinguished (§9.3) but laid out in the same grid — no segregation into separate "real" vs "demo" sections, since the goal is a believable, browsable catalogue, not a disclaimer page.
- Detail: hero → status badge → highlights → description → `ItineraryTimeline` → `InclusionsList` → `PracticalInfoPanel` → `PriceSlot` (real price or "Preço mediante consulta") → booking form + WhatsApp CTA → related experiences.

## 3.6 Trust Hub, About, Contact

- **Trust Hub (`/historias`):** intro framing line explaining the section's purpose in-brand (warm, not apologetic) → grid of `StoryPlaceholderCard`/`TestimonialSlot` components (§9.1) → media wall placeholder.
- **About (`/sobre`):** brand/company story (real, paraphrased) → mission/connection-to-Angola → `ReservedTeamSection` (§9.1) → conversion band.
- **Contact (`/contacto`):** contact channels → `BookingInquiryForm` → `FAQAccordion` → `WhatsAppCTAButton` (persistent) → map.

---

# 4. Component Architecture

Per `Code-Standards.md`: one clear responsibility per component, named for what they do (`UserProfileCard`-style clarity, not `Box`/`Section`). No code yet — this is the inventory Build implements against.

## 4.1 Layout & Navigation

| Component | Responsibility |
|---|---|
| `SiteHeader` | Logo lockup, `MainNav`, mobile menu trigger |
| `MainNav` | Six-item top nav |
| `MobileNav` | Drawer/sheet variant of `MainNav` |
| `SiteFooter` | Nav links, contact info, social, copyright |
| `PageShell` | Consistent page padding/max-width wrapper |
| `SectionContainer` | Consistent vertical rhythm between sections |
| `ConversionBand` | Reusable closing CTA band (WhatsApp + contact link) |
| `StickyWhatsAppButton` | Persistent floating WhatsApp affordance |
| `Breadcrumb` | Province/experience detail wayfinding |

## 4.2 Discovery

| Component | Responsibility |
|---|---|
| `ProvinceCard` | One province's grid card. **A single component for all 21 provinces** — a `depth: "flagship" \| "light"` prop drives only the small metadata badge (§9.2); it must never drive size, image quality, typography, spacing, or elevation. This constraint is enforced at the component-API level so Build cannot accidentally create a visual hierarchy of "important" vs "unimportant" provinces. |
| `ProvinceGrid` | Renders all 21 `ProvinceCard`s in one unified grid, alphabetically sorted with flagship provinces first (§3.3) |
| ~~`RegionFilterTabs`~~ | **Dropped, v1.2** — see §11. No regional grouping component exists in this system. |
| `ExploreModeToggle` | Province/Interest mode switch |
| `InterestPicker` | 8-tag interest tile grid |
| `InterestResultsGrid` | Filtered results after an interest is picked, drawn from the full 21-province set |

## 4.3 Experience

| Component | Responsibility |
|---|---|
| `ExperienceCard` | Catalog/grid card |
| `ExperienceGrid` | Renders filtered experience cards |
| `ExperienceFilterBar` | Province/interest/duration filters |
| `StatusBadge` | "Oferta Atual" vs "Conceito de Demonstração" (§9.3) |
| `PriceSlot` | Real price or "Preço mediante consulta" state |
| `ExperienceGallery` | Image gallery on detail page |
| `ItineraryTimeline` | Sample itinerary display |
| `InclusionsList` | What's included/not included |
| `PracticalInfoPanel` | Best time, difficulty, group size, what to bring |

## 4.4 Trust & Brand

| Component | Responsibility |
|---|---|
| `ReservedContentBanner` | Generic "this space is reserved for X" pattern — reused by both Stories placeholders and the About founder/team slot |
| `StoryPlaceholderCard` | Traveler-story reserved slot |
| `TestimonialSlot` | Quote-card reserved slot |
| `MediaWallPlaceholder` | Photo/video wall structure |
| `BrandStorySection` | Company mission/story content block |
| `ReservedTeamSection` | Uses `ReservedContentBanner`, About page founder/team slot |

## 4.5 Conversion

| Component | Responsibility |
|---|---|
| `BookingInquiryForm` | Name/email/phone/notes form (visual only, no backend) |
| `WhatsAppCTAButton` | Deep-links to `wa.me` with the real number (`Website-Strategy.md` §10) |
| `FAQAccordion` | Expandable Q&A, reused pattern from the current site (preserved strength) |

## 4.6 Motion Primitives

| Component | Responsibility |
|---|---|
| `RevealOnScroll` | Wrapper for one-time scroll-triggered fade/slide reveal, implemented via `IntersectionObserver` (never a scroll-event listener — see §7.2) |
| `KenBurnsImage` | Slow pan/zoom still-image wrapper, implemented via a pure CSS `transform: scale()` keyframe animation (GPU-accelerated, no per-frame JS — see §7.2) |
| `HoverLift` | Card hover elevation/scale wrapper, `transform`/`opacity` only |

## 4.7 Utility

| Component | Responsibility |
|---|---|
| `Badge` / `Tag` | Small metadata pills (interest tags, status badges build on this) |
| `SectionHeading` | Consistent heading + optional supporting line pattern |
| `EmptyState` | Used specifically for the light-province forward-framed module (§3.4) — visually distinct from `ReservedContentBanner`, since one is "content not yet written" (province) and the other is "proof not yet authorized" (stories/team) — conflating them would blur an important honesty distinction |

---

# 5. Responsive Behavior

Per `Design-System.md`: "design mobile intentionally, do not simply shrink desktop layouts." Per the audit, mobile behavior on the current site was never confirmed as intentional — this is fixed here.

## 5.1 Breakpoints

| Name | Range |
|---|---|
| Mobile | < 640px |
| Tablet | 640–1023px |
| Desktop | 1024–1439px |
| Wide | ≥ 1440px |

## 5.2 Key Adaptations

- **Nav:** collapses to `MobileNav` drawer below 1024px; six items remain flat (no nested accordion needed at this size).
- **Province/Experience grids:** 1 column (mobile) → 2 (tablet) → 3 (desktop) → 4 (wide). Flagship and light cards reflow identically — no special-casing.
- **Experience detail sidebar** (price/duration/booking): becomes an inline block below the description on mobile, not a persistent sidebar — avoids the current site's cramped-sidebar-with-overlapping-text bug (audit §3) by removing the failure mode entirely on small screens.
- **Sticky WhatsApp button:** repositions to a safe-area-aware bottom-right position on mobile, sized for a comfortable touch target (minimum 44×44px per accessibility norms).
- **Hero:** Ken Burns motion still runs on mobile but at reduced amplitude (smaller pan distance) to avoid perceived jitter on smaller viewports, and is the first thing disabled under a slow-connection or reduced-data signal (§7.3).
- **Interest picker:** grid of tiles reflows to a horizontal scroll or 2-column grid on mobile rather than a cramped 8-across row.

## 5.3 Touch & Readability

- Minimum touch target 44×44px on all interactive elements.
- Body text never below ~16px on mobile.
- Justified body text (seen on the current live site, contributing to uneven "rivers" of whitespace) is **not used** — left-aligned only.

---

# 6. Motion System

Expanding `Website-Strategy.md` §11.1 into concrete values, per `Motion-Rules.md`'s timing/easing principles.

## 6.1 Timing Tokens

| Token | Duration | Use |
|---|---|---|
| Fast | 150ms | Button/hover feedback, `HoverLift` |
| Reveal | 220ms | `RevealOnScroll` only |
| Medium | 300–400ms | Mode-toggle transitions, accordion/nav expand |
| Slow | 8–14s (loop or single pass) | `KenBurnsImage` pan/zoom |

Easing: standard ease-out for entrances (content arrives and settles, doesn't overshoot), ease-in-out for hover/press feedback. No bounce/elastic easing anywhere — inconsistent with the "confident, restrained" personality (§2.1).

`RevealOnScroll` was retuned after Build QA found the original 300–400ms band, combined with an `IntersectionObserver` that only fired once an element was already 15% on-screen, made reveals feel laggy and produced a visible "catching up" state during normal scroll speed. The fix has two parts: a faster dedicated `--duration-reveal` token (used only here, not shared with the Medium band), and an anticipatory `rootMargin` on the observer (`0px 0px 150px 0px`, `threshold: 0`) so the reveal starts while the element is still below the fold and finishes before it's actually seen. `prefers-reduced-motion` behavior (opacity-only, no movement) is unchanged.

## 6.2 Motion Budget (what actually animates)

Per `Motion-Rules.md`'s hierarchy (brand moments → important information → user actions → supporting details), motion is spent on:

1. Hero entrance (once, on load) — brand moment.
2. `KenBurnsImage` on hero and story-placeholder imagery — atmosphere/storytelling.
3. `RevealOnScroll` on section entries — one-time, not repeated on scroll-back.
4. `HoverLift` on province/experience cards — user-action feedback.
5. `ExploreModeToggle` and interest-filter transitions — progressive disclosure, confirms a real filter happened.
6. `StickyWhatsAppButton` entrance.

**Explicitly not built:** parallax stacking, particle backgrounds, scroll-progress-driven video scrubbing, morphing transitions, magnetic buttons — these are real patterns in `Motion-Rules.md`'s catalogue, but each is justified only for a scale of interactive storytelling this demo doesn't need; adding them would itself be "meaningless animation" per `Anti-AI-Design.md`, and is the same plugin-stacking impulse the audit criticized (audit §8 — three separate parallax/particle libraries loaded for no clear reason). Every remaining animation in the budget above must be traceable to hierarchy, discovery, storytelling, or conversion — motion that exists only because it's technically possible is out of scope.

## 6.3 Reduced Motion

`prefers-reduced-motion` disables `KenBurnsImage` pan/zoom (falls back to a static, correctly-cropped image) and reduces `RevealOnScroll` to a simple opacity fade with no movement. Nothing that conveys information depends on motion completing — per `Accessibility.md`, motion never gates access to content.

---

# 7. Performance as a Design Requirement

Per the client's direction, performance is fixed here as a **design constraint that Build must satisfy**, not a pass that happens after the visual system is built — directly extending `Core/Performance.md`'s principle that "a beautiful website that feels slow is not a premium experience," and directly responding to the audit's finding that the live site fires 95+ requests and stacks three separate motion/animation libraries for no clear benefit.

## 7.1 Core Web Vitals as Design Inputs

- **LCP (Largest Contentful Paint):** every hero image ships with a low-quality placeholder/blur-up and a correctly sized `srcset`; the hero's Ken Burns animation must never delay the hero image's initial paint — motion starts only after the image is visible, never gating it.
- **CLS (Cumulative Layout Shift):** every image and media placeholder reserves its aspect ratio (§2.5) before load; the sidebar-to-inline responsive change on the experience detail page (§5.2) is defined with fixed dimensions at each breakpoint specifically to prevent the kind of layout instability the audit flagged.
- **INP (Interaction to Next Paint):** filter/toggle interactions (`ExploreModeToggle`, `InterestPicker`, `ExperienceFilterBar`) update the UI via lightweight, local state changes — no heavy computation or network round-trip blocking the interaction, consistent with the "no backend" scope (`Website-Strategy.md` §13).

## 7.2 Motion Implementation Rules (this is what keeps the cinematic direction lightweight)

- **CSS-driven, not JS-driven, wherever possible.** `KenBurnsImage` is a CSS `transform: scale()` keyframe animation, not a JavaScript animation loop — this runs on the compositor thread and does not block the main thread or cause scroll-jank.
- **`RevealOnScroll` uses `IntersectionObserver`, never a `scroll` event listener.** Scroll-event-driven animation (reading scroll position on every frame, as the current site's `jarallax`/`parallax.js` stack effectively does) is exactly the pattern that causes layout thrashing and jank on lower-powered devices — it is excluded by design, not just by convention.
- **Only `transform` and `opacity` are animated.** No animating `width`, `height`, `top`, `left`, or other properties that trigger layout recalculation — this is a hard rule for every motion primitive in §4.6.
- **No scroll-linked video scrubbing, no scroll-progress-driven storytelling, no parallax layering** — each of these (real patterns in `Motion-Rules.md`'s catalogue) requires continuous main-thread work tied to scroll position, which is precisely the "heavy JavaScript" and "unnecessary scroll listeners" `Core/Performance.md` warns against. They are excluded from this demo (§6.2) for this reason as well as the restraint/purpose reasoning already given.

## 7.3 Media Weight

- All imagery served in modern formats (WebP/AVIF) with responsive `srcset` — directly fixing the audit's finding of raw, unoptimized camera-export JPGs.
- No real video assets are used at all (`Website-Strategy.md` §7.4) — this was originally a rights decision, but it is also a deliberate performance decision: stills with a CSS-only Ken Burns treatment cost a fraction of what video streaming/hosting would, with no perceptible loss of "cinematic" feeling at this demo's scale.
- Below-the-fold imagery (province/experience grids beyond the first visible rows, trust-hub placeholder media) is lazy-loaded.
- The plugin-stacking anti-pattern from the audit (multiple overlapping animation/carousel/icon libraries) has a direct architectural answer: **one motion approach, implemented once, reused everywhere** (§4.6) — not a different library per section.

## 7.4 Performance Review Gate

Before any page is considered "done" in Build, it must satisfy the same checklist `Core/Performance.md` and `Core/Motion-Rules.md` define: images optimized, no layout shift from late-loading content, animations restricted to `transform`/`opacity`, mobile experience evaluated on its own terms (not just a shrunk desktop), and reduced-motion respected. This is a design sign-off gate, not an afterthought.

---

# 8. Accessibility Commitments

- **Contrast:** WCAG AA minimum (4.5:1 body text, 3:1 large text) enforced structurally via the mandatory image scrim (§2.5), not left to chance per-image.
- **Focus states:** a visible, consistent focus ring (gold-based, not just a color shift, so it's visible on both light and dark sections) on every interactive element — never removed without replacement.
- **Heading structure:** strict H1→H2→H3 per page, no skipped levels, no headings used purely for size.
- **Forms:** real `<label>` elements (not placeholder-as-label, which `Accessibility.md` explicitly flags), clear error states.
- **Images:** meaningful images (province/experience photography) get descriptive alt text even though the media itself is a placeholder — "this is a placeholder" is a content-sourcing fact, not a reason to skip accessibility.
- **Motion:** see §6.3.
- **Semantic HTML:** `header`/`nav`/`main`/`section`/`article`/`footer` used per their meaning, not generic `div`s for everything, per both `Accessibility.md` and `SEO.md`.

---

# 9. Placeholder & Media Visual Language

This section makes `Website-Strategy.md` §7 and §11.2 concrete and visual, per the client's direction: placeholders must be premium and clearly communicative, never simulated-real, and no real customer photography, testimonials, reviews, or video may be sourced or implemented without authorization.

## 9.1 Trust / "Reserved for Real Content" Treatment (`ReservedContentBanner`, `StoryPlaceholderCard`, `TestimonialSlot`, `ReservedTeamSection`)

- Editorial card design: generous whitespace, a subtle line-icon (not a stock photo of a person), a short italic framing line naming what will eventually live there (e.g., *"Aqui viverá a história real de um viajante nesta experiência"* / *"Esta secção está reservada para apresentar a equipa da Angola Experience"*).
- Background treatment: a muted duotone or soft gradient using Ink/Cream/Gold (§2.2) — never a generic gray "empty state" box, and never a photograph of an unrelated person.
- No quotation marks with invented text attributed to anyone. No avatar circles with stock headshots — if a shape is needed compositionally, use an abstract mark (e.g., a soft geometric motif drawn from the logo's spiral) instead of a human silhouette that could imply a real, specific person.
- This treatment is visually premium (matches the rest of the site's polish) precisely because it's honest — a well-designed "reserved" moment reads as intentional, not as a bug or missing content.

## 9.2 Light-Province Treatment (`EmptyState`, within Province — Light template)

- **Not** styled as a dimmed, grayed-out, or visually "lesser" card or page — it uses full-color photography and the same typographic hierarchy, spacing, and interaction model as flagship pages (§3.4).
- The forward-framed message is styled as a normal content module, not an error/warning pattern (no yellow caution triangles, no dashed borders suggesting "unfinished").
- Its one visual signal of being "light" is a small `Badge` near the province name — same visual family as the Verified/Conceptual badge (§9.3), for system-wide consistency — reading something like "Guia em Expansão," never "Indisponível" or similar negative framing.

## 9.3 Verified vs. Conceptual Experience Badge (`StatusBadge`)

- **Verified:** solid gold pill, label "Oferta Atual da Angola Experience."
- **Conceptual:** outline pill in terracotta, label "Conceito de Demonstração."
- Both are calm, small, and placed consistently (top-left of the card image, or beside the title on detail pages) — informational metadata, not a warning label. The goal is transparency without undermining the catalogue's credibility.

## 9.4 Photography/Media Sourcing Recap

Per `Website-Strategy.md` §11.2's three tiers, applied visually: real brand logo used in its own dedicated lockup space (never cropped or distorted); conceptual/atmospheric photography always run through the same scrim/aspect-ratio treatment as any other image, so it never reads as "stock" by looking inconsistent with the rest of the system; no photography of identifiable people anywhere in trust-related modules; no real Angola Experience customer photos, testimonials, reviews, or video anywhere in the demo.

---

# 10. What This Phase Does Not Include

Reaffirming `Website-Strategy.md` §13 and the client's explicit constraints, restated here at the boundary of Design→Build:

- No backend, CMS, authentication, payments, booking system, CRM, analytics infrastructure, or admin dashboard.
- No real customer photographs, testimonials, reviews, or videos — sourced or implemented — without authorization.
- No invented founder/team members, biographies, achievements, awards, statistics, customer numbers, or operational claims.
- No production-only concerns (multi-language, multi-currency, hosting/CDN strategy) — noted as future considerations only.
- No visual effects added simply because they are technically possible (§6.2, §7.2) — every animation, transition, and interaction in Build must trace back to hierarchy, discovery, storytelling, or conversion.
- No application code from this document — Design is complete; Build starts next, per `Website-Strategy.md` §15's implementation sequence.

---

# 11. Build Prerequisites — Resolved (v1.2)

All three items that were open at the end of v1.1 are now resolved. Kept here as a decisions log, following the same pattern as `Website-Strategy.md` §14, so Build never has to guess why the document reads the way it does.

| # | Item | Resolution |
|---|---|---|
| 1 | Final font family selection | **Resolved** — Bricolage Grotesque (display) + Instrument Sans (body). Both open-license, variable, full Portuguese-diacritic coverage. See §2.3 for the full rationale and weight-usage table. |
| 2 | Exact color tokens | **Resolved** — Ink `#161310`, Cream `#FAF6EE`, Gold `#B4842A`, Terracotta `#9C5430`. Gold and Terracotta deepened slightly from their v1.1 indicative values after WCAG contrast verification; full ratio table and two new binding text/fill rules in §2.2. |
| 3 | Regional grouping labels (Litoral, Planalto, Sul, Leste, Norte) | **Resolved — dropped.** Researched against public sources: Angola has no official statistical or administrative region tier above province; informal groupings vary by source; three of the current 21 provinces (Cuando, Cubango, Icolo e Bengo, Moxico Leste) postdate the 2024–2025 reorganization and aren't covered by any existing grouping at all. Rather than risk presenting a contestable geographic claim — even with an "informal" caveat — this uses the fallback already authorized in v1.1: `RegionFilterTabs` is removed from scope (§3.3, §4.2); `ProvinceGrid` sorts alphabetically with the 6 flagship provinces surfaced first. No loss to the "all 21 provinces, one discovery experience" requirement. |

**No open items remain. Phase 3 (Design) is fully closed. Phase 4 (Build) may proceed**, following the implementation sequence in `Website-Strategy.md` §15.

---

# Summary — Design at a Glance

| Question | Answer |
|---|---|
| Brand personality | "Warm Premium — confident local expert," bridging `Design-System.md`'s local-business and luxury archetypes |
| Color (final tokens) | Ink `#161310`, Cream `#FAF6EE`, Gold `#B4842A`, Terracotta `#9C5430` — WCAG-verified (§2.2); gold never used as text on Cream, white never used as text on Gold |
| Typography (final families) | Display: Bricolage Grotesque · Body: Instrument Sans — one deliberate pairing, fixes the audit's 5-font problem, full Portuguese-diacritic support (§2.3) |
| Page hierarchy | 9 templates per `Website-Strategy.md` §2, with province pages split into Flagship/Light variants of one shared system |
| 21 provinces | All 21 are first-class, browsable, and share one visual system; flagship (6) vs. light (15) differs in content depth only — enforced at the component level (`ProvinceCard`'s `depth` prop touches only a badge) |
| Regional groupings | **Dropped (v1.2)** — no official Angolan region tier exists and 4 of 21 provinces are too new to have any established grouping; `ProvinceGrid` sorts alphabetically with flagship first instead (§11) |
| Components | ~35 components across Layout, Discovery, Experience, Trust, Conversion, Motion, Utility — one responsibility each per `Code-Standards.md` |
| Responsive | Mobile-first, 4 breakpoints, sidebar-to-inline pattern fixes the audit's mobile-broken booking sidebar bug structurally |
| Motion | 6 purposeful motion uses, explicit budget, reduced-motion fallback; parallax/particles/morphing/scroll-scrubbing explicitly excluded |
| Performance | A binding design constraint (§7): CSS-only transform/opacity animation, `IntersectionObserver` not scroll listeners, no real video, optimized/lazy-loaded imagery, Core Web Vitals treated as design inputs |
| Accessibility | AA contrast via mandatory scrim, visible focus rings, semantic HTML, real form labels |
| Placeholders | Premium "reserved for real content" editorial pattern — never simulated-real testimonials, stock photos of people, or any real customer content |
| Content integrity | No invented people, facts, statistics, awards, or operational claims anywhere in the demo |
