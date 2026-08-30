# Worklog — Angola Experience Demo

This file tracks what has actually been completed in Phase 4 (Build), stage by stage, so a future session (or a crashed one) can pick up accurately. It is a build log, not a design document — see `Website-Strategy.md` / `Website-Design.md` for approved direction.

---

## 2026-08-30 — Final Polish Pass (pre-presentation)

After reviewing the demo end-to-end and the comparative analysis against the live site (produced the same day, no code changed by that report itself), the client asked for one last polish pass before considering the demo closed for a client presentation: structure/composition, motion, province/experience content consistency, image-rule compliance, and a full final QA sweep. Explicitly scoped as polish, not new features — the client asked to be shown any genuinely important structural finding before it was touched, and to leave minor nice-to-haves out.

### Structure/composition review — no changes proposed or made
Walked every page template's section order against `Website-Design.md` §3.2–§3.4. The homepage order (Hero → VisualStrip → FeaturedExperiences → WhyUs → TrustPreview → AboutTeaser → ConversionBand) matches the documented, client-approved plan exactly — not a bug. One pattern was considered and deliberately **not** flagged as a structural issue: `TrustPreview` and `AboutTeaser` are two consecutive homepage sections that are both currently all-placeholder content, immediately before the closing conversion band. This reads as a content gap (already documented as the demo's biggest weakness in the same-day comparative report), not a structural defect — reordering the sections wouldn't fix it, since both would still be empty regardless of position. No section reordering was made anywhere on the site.

### Motion — re-verified, no glitches found
Re-tested scroll-reveal behavior on `/experiencias` (19 cards) and `/explorar` (21 cards) — both denser than when the timing was last tuned. Caught a card mid-transition on `/explorar` (Cuando → Cuanza Norte column) via back-to-back screenshots: the fade completed between two rapid tool calls, confirming the anticipatory `rootMargin` + `--duration-reveal` fix from the second improvement round is still working correctly at the current content volume. No stuck states, no layout shift, no double-flash. Nothing changed in the motion system this round — it didn't need to be.

### Content consistency pass — one real issue found and fixed
Spot-checked Namibe, Cuanza Sul, and Huíla province pages against their linked experiences for internal consistency.
- **Namibe** now shows 3 conceptual experiences and 0 verified — considered whether this reads as a problem on the actual rendered page (not just in the abstract). It doesn't: the destination guide content is rich and the badges are unambiguous, so the page reads as "real potential, honestly labeled," not as broken. No change made.
- **Found and fixed:** the experience titled "Costa do **Kwanza** Sul" used a different spelling than the province it belongs to ("**Cuanza** Sul," used everywhere else on the same page, including the breadcrumb and page heading two lines above it) — a leftover from the original site's own inconsistent spelling. Renamed the experience's `title` to "Costa do Cuanza Sul" in `src/lib/data/experiences.ts`. Left the URL slug (`costa-do-kwanza-sul`) unchanged since slugs aren't user-facing and changing it would needlessly churn the route. This was a straightforward copy correction, not a design or content decision, so it was fixed directly rather than proposed first.
- Huíla (Serra da Leba, Cristo Rei, Tundavala, Lubango) checked clean — no inconsistencies found.

### Image placeholder rule — compliance confirmed, no new sourcing done
Verified via `grep` that `src=` is only ever passed into `MediaPlaceholder` from `province.heroImageSrc` or `experience.heroImageSrc`, in exactly the 6 files already known to do this (`ProvinceCard`, `ExperienceCard`, `VisualStrip`, `ProvinceFlagshipView`, `ProvinceLightView`, `ExperienceGallery`). Confirmed `BrandStorySection`, `MediaWallPlaceholder`, `AboutTeaser`, and `StoryPlaceholderCard` — every testimonial/team/client-facing slot — never pass a `src` prop, so they remain the abstract placeholder unconditionally. No new photos were sourced this round; that wasn't requested and the rule itself was already being followed correctly.

### Final QA sweep
- `npm run lint` — clean.
- `npm run build` — clean; 50 routes generated (unchanged from the third round — this round added no new routes).
- Browser-verified: `/experiencias` and `/explorar` grids (dense-content motion + badges), Namibe/Cuanza Sul/Huíla province pages, the WhatsApp floating button and homepage CTA link (both resolve to `wa.me/244923790953` with correctly URL-encoded pre-filled text), and the 404 page (renders on-brand, all four exit paths present, confirmed via a fresh screenshot this round).
- Console checked (`onlyErrors`) on the 404 page and homepage — no errors.
- Same session-local browser-extension flakiness as prior rounds (tabs periodically lost host access mid-session) — worked around each time by opening a fresh tab; not a site issue, and never blocked a check from eventually completing.
- **Mobile viewport still not visually confirmed** — same tooling limitation documented in every prior round's worklog entry. Not re-attempted this round since it has failed consistently; still worth a real-device check before presenting.

### Known gaps carried forward (unchanged from prior rounds)
Everything listed in the second and third round entries above still stands — zero real testimonials, 8/21 provinces and 10/19 experiences without a sourced photo (including all 5 experiences added in the third round), the four parallel "not fully real yet" labeling conventions, mobile viewport unverified. None were in scope for this round; see the same-day comparative-analysis artifact for the full prioritized list of what's worth addressing before or after presenting to the client.

---

## 2026-08-29 — Third Improvement Round (experience depth per province)

After another full client review, the one point raised: several flagship provinces had only one experience each (Huíla, Namibe, Cuanza Sul) or just two (Luanda), which read as too close to the real site's own "thin catalog" problem — exactly the gap this rebuild exists to demonstrate fixing. Scope this round was explicitly narrow: experience depth/distribution only, no other design changes.

### What was checked before changing anything
- `src/lib/data/experiences.ts`'s own header comment and `Website-Strategy.md` §6.4: the original plan was "10–14 experiences total... roughly 2–4 each" across the 6 flagship provinces, but execution had landed unevenly (Benguela 3, Malanje 3, Luanda 2, Huíla/Namibe/Cuanza Sul 1 each — 11 flagship experiences, 14 total including the 2 advisory services).
- `Website-Audit.md`: confirms the real site has ~60 tours across 7 catalog pages, but this project's Strategy phase deliberately capped the demo catalog at 10–14 total specifically so it wouldn't try to reproduce all ~60 — the client's new instruction (2–4 per flagship, "não apenas reproduzir a quantidade limitada" that the current build ended up with) is a deliberate, explicit, approved deviation from that cap, not a contradiction of it, so it's called out plainly in the updated header comment in `experiences.ts` rather than silently overridden.
- Considered re-checking the live site for additional *real* named tours before writing anything conceptual (would have let some of the new entries be `verified` instead) — decided against re-scraping the live site this round: the original Strategy phase already determined Huíla, Namibe, and Cuanza Sul have no real published tour to draw on, and re-verifying business facts about a real third-party company via web fetch was judged riskier and more out-of-scope than the client's own explicit instruction to build clearly-labeled conceptual entries from independently-verified geography/history instead.

### What was built — 5 new `conceptual` experiences, each backed by independently verified facts (not invented)
Same research discipline as the "deepen province content" round: verified via web search before writing anything, sources noted in each case below.

- **Fenda da Tundavala** (Huíla) — the escarpment near Lubango, rim above 2,200m, drop of over 1,000m, designated one of Angola's Seven Natural Wonders in 2012.
- **Baía dos Tigres** (Namibe) — the São Martinho dos Tigres ghost town, fishing village founded 1860, became an island on 14 March 1962 when the sea broke through the isthmus, abandoned cathedral.
- **Tchitundo-Hulu** (Namibe) — the four rock-art sites on the Namibe desert plateau, dated to roughly the 1st millennium BC/AD, attributed to Ovatwa communities, UNESCO World Heritage candidate since 2017.
- **Miradouro da Lua** (Luanda) — the eroded badlands ~40km south of the city in the Samba/Belas area.
- **Sumbe City Tour** (Cuanza Sul) — built from the Sumbe history already researched in the second round (founded 1769 as Novo Redondo, capital since 1955, "kussumba" etymology), giving the city its own experience distinct from the existing coastal `costa-do-kwanza-sul` one.

New province counts: Luanda 3, Benguela 3 (unchanged — already in range), Huíla 2, Namibe 3, Malanje 3 (unchanged), Cuanza Sul 2. All 6 flagships now have 2–3 experiences; none were forced to 4 where a 4th solid, real attraction wasn't already researched. Total catalog: 19 experiences (11 verified, 8 conceptual — 3 from earlier rounds, 5 new).

Each new entry follows the exact same conceptual pattern as the three pre-existing ones: `status: "conceptual"`, the same `StatusBadge`/"Conceito de Demonstração" component (untouched this round), and the same explicit "esta experiência é conceptual — ainda não existe como oferta publicada da Angola Experience" framing in its description — no new distinction mechanism was introduced. None claim a real Angola Experience price, itinerary, policy, or booking term — all use `priceType: "on-request"` and the same conservative `included`/`notIncluded` pattern as every other conceptual entry.

The relevant provinces' `keyPlaces` ("O que ver") were also updated to list these same attractions with the same facts, so the province guide and its linked experience stay consistent with each other (matching the pattern already established for Cristo Rei do Lubango, Pungo Andongo, etc. in the second round).

### Checks run
- `npm run lint` — clean.
- `npm run build` — clean; 50 routes generated (up from 45 — 5 new experience detail pages), confirming `generateStaticParams` correctly picked up the new entries with no manual route wiring needed.
- Browser-verified: `/explorar/namibe` shows all 3 Namibe experiences with distinct real photos/abstract placeholders and correct captions; `/experiencias/baia-dos-tigres` renders correctly with the "Conceito de Demonstração" badge, working province-linked breadcrumb, and its full itinerary/inclusions; `/experiencias/quedas-de-calandula` (an untouched `verified` entry) still shows "Oferta Atual da Angola Experience" correctly, confirming the badge logic itself wasn't affected by this round's data-only changes; `/explorar/zaire` (a light province) confirmed unaffected.
- Console checked (`onlyErrors`) on multiple pages — no errors.
- One session-local browser-tooling hiccup again this round (the extension briefly lost tab access mid-verification, same as the previous round) — resolved by opening a fresh tab each time; not a site issue.

### Known gaps carried forward
- The 5 new conceptual experiences don't have real photos yet (left as abstract placeholders) — sourcing licensed photography for them wasn't part of this round's scope (explicitly experience depth/distribution only), but would be a natural next step if a future round revisits photography.
- Benguela and Malanje were left at 3 experiences each rather than pushed to 4 — both already had solid, distinct coverage of their well-known attractions from earlier rounds, and no additional real/well-documented attraction stood out enough to justify a 4th without diluting quality.

---

## 2026-08-28 (cont.) — Second Improvement Round (2 targeted fixes)

After the first improvement round, the client did their own full visual review of the demo and reported it solid overall, with exactly two objective, narrowly-scoped fixes — explicitly **not** a new broad round: no changes to general structure, layout, copy, motion, or other components beyond these two points.

### 1. Real photography for the remaining provinces without one

Sourced and wired in 8 more real, licensed Wikimedia Commons photos, closing most of the gap the first round left (Cuanza Sul, flagship, plus 7 of the 15 "coming-soon" provinces):

| Province | File | Author | License |
|---|---|---|---|
| Cuanza Sul | `praia-do-sumbe-cuanza-sul.jpg` | jlrsousa (Flickr) | CC BY-SA 2.0 |
| Bengo | `barragem-das-mabubas-bengo.jpg` | Rogério Melo | CC BY 3.0 |
| Bié | `rua-principal-kuito-bie.jpg` | Nilton Huey Pensante | CC0 |
| Cuanza Norte | `cambambe-cuanza-norte.jpg` | Luís Rochinha | CC BY 3.0 |
| Huambo | `morro-do-moco-huambo.jpg` | MagníficoRosário | CC BY-SA 4.0 |
| Icolo e Bengo | `lagoa-da-quiminha-icolo-e-bengo.jpg` | Rogério Melo | CC BY 3.0 |
| Lunda Sul | `rua-saurimo-lunda-sul.jpg` | Fmanuel090 | CC BY-SA 4.0 |
| Moxico | `jardim-palacio-governador-luena-moxico.jpg` | Pereira Santos Samuel | CC BY-SA 3.0 |

Full source/license/usage detail in `IMAGE_CREDITS.md`, same discipline as the first round. The Cuanza Sul beach photo also resolved a documented gap from the first round: it's now wired into both the province hero and the matching `costa-do-kwanza-sul` experience (same reuse pattern already used for Benguela/Lobito).

Two local edits were needed before use: `barragem-das-mabubas-bengo.jpg` was cropped to remove two people leaning on the dam wall in the original frame; `jardim-palacio-governador-luena-moxico.jpg` was cropped to remove an on-camera date stamp burned into the bottom-right corner; `morro-do-moco-huambo.jpg` was re-rotated 90° (the source file's EXIF orientation wasn't preserved through download).

**Still deliberately abstract** (documented in `IMAGE_CREDITS.md` with reasons): Cabinda (candidates were either a people-focused community-workshop photo or an unusably wide 2100×300 banner crop), Uíge (the one candidate found has a person as a fairly prominent compositional element, rejected under the same "no identifiable person as subject" rule used everywhere else), Zaire/M'Banza Kongo (the UNESCO Kulumbimbi ruins have no Commons photo yet; the only real candidates were healthcare-outreach and carnival-crowd photos), and Lunda Norte, Cuando, Cubango, Cunene, Moxico Leste (no usable landscape/landmark photography found — several are 2024-created provinces with minimal Commons coverage).

**Download note**: Wikimedia's servers 404'd 6 of the first 9 download attempts with curl's default User-Agent (likely their bot-etiquette policy) — retried successfully with an explicit descriptive `User-Agent` header, no other workaround needed.

### 2. Province name visibility — real root cause found and fixed

Investigated the client's report by reproducing it directly (not just checking contrast). Diagnosed the actual bug via computed-style inspection, not assumption: `MediaPlaceholder.tsx`'s base classes hard-code `relative`, and the full-bleed province-hero usage (`ProvinceFlagshipView`/`ProvinceLightView`) passes its own `className="absolute inset-0 h-full w-full rounded-none"`. `cn()` is plain string concatenation with **no** Tailwind conflict resolution (by design — see its own doc comment), so both `relative` and `absolute` landed in the DOM's class list, and the CSS cascade kept `relative`. That took the hero image div out of full-bleed absolute positioning and back into normal flex flow, splitting the hero section horizontally between the image (~half width) and the text block (~the other half) instead of layering the text over the image. This was invisible with the abstract gradient placeholder (the section's own `bg-ink` looked the same either way) and only became visible once real photos were added — this round's real bug, not a first-round regression in the sense of new code, but a **pre-existing latent bug newly exposed** by the first round's `src` feature.

Fixed at the source in `MediaPlaceholder.tsx`: the component now checks whether the caller's `className` already declares its own position utility and omits its own `relative` when it does, so the two never collide regardless of caller. No change to any calling component, no new dependency (didn't reach for `tailwind-merge` for a one-call-site conflict), no layout/structure change — a self-contained fix inside the one component already touched by the first round's photo work. Verified via `getBoundingClientRect()`/`getComputedStyle()` in the browser, not just visually: hero container width went from ~616px (half the section) to the full ~1257px section width, `position` from `relative` to `absolute`, confirmed on Namibe, Luanda, Malanje, Huambo, and Icolo e Bengo.

### Checks run
- `npm run lint` — clean.
- `npm run build` — clean; all 45 routes generated.
- Browser-verified in a real Chrome tab: `/explorar` grid (Bengo/Bié cards showing real photos with clearly legible names below, consistent with unaffected cards), and 5 province detail heroes (Namibe, Luanda, Malanje, Huambo, Icolo e Bengo) — all full-bleed, all names clearly legible against the gradient scrim regardless of the underlying photo's brightness.
- Console checked (`onlyErrors`) on every page visited — no errors.
- One session-local browser-tooling hiccup during verification (a tab briefly lost extension permissions mid-session) — resolved by opening a fresh tab; not a site issue, no code implicated.

### Known gaps carried forward
- Cabinda, Uíge, Zaire, Lunda Norte, Cuando, Cubango, Cunene, Moxico Leste still use the abstract placeholder — see reasons above and in `IMAGE_CREDITS.md`. Worth a periodic re-check, since Commons coverage of Angola's newer/smaller provinces may improve over time.
- `IMAGE_CREDITS.md`'s standing "known gap" (no on-page attribution credit for CC BY/CC BY-SA images) still applies to these 8 new images too.

---

## 2026-08-28 (cont.) — First Improvement Round (post-QA)

Scope for this round was a tightly-defined, client-approved list of 6 items following the full critical QA review of the completed 9-stage build. Everything below traces to one of those 6 items; nothing outside the list was touched (site structure, badge system, placeholder philosophy, the `/contacto` map placeholder, the trust/social-proof system, data architecture, WhatsApp flow, testimonial/client content, and the "Warm Premium" visual direction were all left exactly as they were). URL-based filter persistence and experience-detail sidebar refinement were explicitly deferred to a separate future round, per the client's own instruction.

### 1. Real photography for provinces/experiences (placeholders kept for people/testimonials)
- `src/components/ui/MediaPlaceholder.tsx` extended with an optional `src` (and `priority`) prop: with `src`, it renders a real `next/image` (no gradient/arc-mark/caption bar, `label` becomes `alt` text); without it, behavior is byte-for-byte unchanged from before. One component, two modes — no parallel component created.
- `Badge.tsx`: `terracotta-outline`/`ink-outline` tones got a `bg-cream/90` backing (previously fully transparent) — needed once badges could sit over unpredictable real photography instead of only the controlled abstract gradient.
- Sourced 9 real, properly-licensed photos from Wikimedia Commons (CC0/CC BY/CC BY-SA) for 5 of 6 flagship provinces and 7 of 14 experiences — every source, author, and license logged in the new `IMAGE_CREDITS.md`, including an explicit "deliberately left as abstract" section for every place a photo was rejected (wrong country, mismatched content, low quality) or genuinely doesn't apply (advisory services, Cuanza Sul's coast, the homepage/404 generic hero).
- Wired the new `heroImageSrc` field into every card/hero/gallery that renders a province or experience: `ProvinceCard`, `ExperienceCard`, `VisualStrip`, `ProvinceFlagshipView`/`ProvinceLightView` heroes (flagship hero also got `priority`, being the LCP element), and `ExperienceGallery`'s primary tile (its two secondary tiles keep the abstract treatment, since only one photo was sourced per experience — using `highlights` as captions, unchanged).
- All customer/testimonial/founder-team content (`AboutTeaser`, `BrandStorySection`, `MediaWallPlaceholder`, `StoriesGrid`) was deliberately left untouched — no internet photos of people were used or considered for these slots, per the client's explicit instruction.

### 2. Deeper, factual province/experience content
- Re-researched every flagship attraction (Serra da Leba, Kalandula Falls, Fortaleza de São Miguel, Pedras Negras de Pungo Andongo, the Benguela Railway, Ilha do Mussulo, the Namib desert/Welwitschia mirabilis, Sumbe/Porto Amboim, Cristo Rei do Lubango) via web search before writing anything, specifically to avoid inventing numbers or history.
- Enriched all 6 flagship provinces' `keyPlaces` ("O que ver") with real, verifiable context (dates, dimensions, historical figures) instead of bare place names, and extended `whatToDo`/`culture`/`landscapes` paragraphs where a real fact was available (e.g. Benguela's founding + the Benguela Railway's 1,344 km/1929/1931 history; Namibe's Welwitschia longevity; Malanje's Pungo Andongo/Queen Njinga connection). Added Cristo Rei do Lubango as a new, real `keyPlaces` entry for Huíla.
- Enriched the matching experience `descriptionParagraphs` for 10 of 14 experiences with the same verified facts, kept consistent with their province entries.
- Every fact added is about real Angolan geography/history — nothing about Angola Experience's own prices, services, policies, or testimonials was invented; the existing `verified`/`conceptual` framing and disclosure language was left exactly as-is.

### 3. Scroll-reveal motion timing
- Root cause: `RevealOnScroll`'s `IntersectionObserver` only fired once an element was already 15% on-screen, combined with the shared 300–400ms "Medium" duration token — the reveal was visibly still catching up to elements the user had already scrolled past.
- Added a new `--duration-reveal: 220ms` token, used only by `RevealOnScroll` (the shared `--duration-medium` token is untouched, so the accordion/mode-toggle/mobile-nav transitions that also use it are unaffected).
- Changed the observer to `{ threshold: 0, rootMargin: "0px 0px 150px 0px" }` — reveals now start while an element is still up to 150px below the viewport, so the (now-faster) transition finishes before it's actually scrolled into view instead of visibly playing out mid-scroll.
- Reduced the translate offset (`translate-y-4` → `translate-y-2`) for a subtler settle, and tightened the stagger multipliers in the four grids that use it (`ProvinceGrid`, `ExperienceGrid`, `StoriesGrid`, `FeaturedExperiences`) from 60–80ms/step to 35–40ms/step.
- `prefers-reduced-motion` behavior (opacity-only fade, no movement) is unchanged — verified the `motion-reduce:` variants are still intact.
- `Website-Design.md` §6.1's timing table updated to document the new `Reveal` token and the reasoning, so the doc doesn't silently drift from the code.
- **Limitation**: browser-automation screenshots can't reliably capture a sub-300ms mid-scroll transition state, so this was verified by code review of the fix's logic (anticipatory trigger + shorter duration) plus live browsing with no console errors, rather than by visually catching the old "glitch" and confirming its absence frame-by-frame. Worth a quick manual scroll-through before presenting the demo.

### 4. Breadcrumbs
- New `src/components/layout/Breadcrumb.tsx` — was already in `Website-Design.md`'s §4.1 component inventory ("Province/experience detail wayfinding") but had never been built. Supports a `tone="inverted"` variant (same convention as `Button`), for placement on photography backgrounds.
- `/explorar/[provincia]` (both `ProvinceFlagshipView` and `ProvinceLightView`): placed inside the hero's existing bottom gradient-backed text block (`Explorar Angola / [Província]`) — inverted tone, no separate contrast handling needed since it inherits the same reliable dark scrim the h1 already relies on.
- `/experiencias/[slug]`: placed as a full-width strip above the two-column detail grid (`Experiências / [Província, linked] / [Título]`) — default tone, on the page's plain cream background. Falls back to `Experiências / [Título]` for the two nationwide advisory services with no province.
- Confirmed **not** present on `/sobre` or `/contacto` (untouched by construction, since those files weren't edited).

### 5. Active nav state
- `MainNav.tsx` and `MobileNav.tsx` both gained `usePathname()` (`"use client"` added to both) to compare against each `mainNavItems` entry — exact match for `/`, prefix match otherwise, so nested routes like `/explorar/huila` correctly highlight "Explorar Angola" and `/experiencias/[slug]` highlights "Experiências".
- Desktop: active item gets `text-gold` (the existing hover color) plus a thin `border-b`, applied via a `border-transparent`/`border-gold` swap so there's no layout shift between states.
- Mobile drawer: same color logic, with a `border-l-2` accent bar instead of an underline (more legible in a stacked list).
- `aria-current="page"` added to the active link in both, matching the existing WAI-ARIA discipline used elsewhere in the codebase.

### Checks run
- `npm run lint` — clean, run after every task in this round.
- `npm run build` — clean after every task in this round; all 45 routes still generate correctly.
- Browser-verified in a real Chrome tab (existing dev server on `localhost:3000`): homepage, `/explorar/huila`, `/experiencias/serra-da-leba`, `/explorar` grid, `/experiencias` listing, `/contacto` — real photos render, enriched copy renders cleanly in the two-column "O que ver" layout, breadcrumbs render correctly (present where expected, absent on `/sobre`/`/contacto`), active nav state confirmed visually on desktop for both a static route and a nested dynamic route.
- Console checked (`onlyErrors`) on every page visited above — no errors on any of them.
- **Mobile viewport limitation** (same as the previous stage's worklog entry): the browser tool's `resize_window` did not produce an actual narrow viewport in this environment (confirmed again this round), so the mobile nav's active-state styling was verified by code review (identical conditional logic to the already-visually-confirmed desktop nav) and by the clean build, not by an actual phone-width screenshot. Worth a real-device or working-resize check before presenting.

### Known gaps carried from this round
1. Scroll-reveal timing fix verified by logic + live browsing, not by visually catching the previous glitch and confirming its disappearance frame-by-frame (see item 3 above).
2. Mobile nav active-state styling not visually screenshot-verified (same tooling limitation as the 404/polish stage).
3. `IMAGE_CREDITS.md`'s pre-existing "known gap" still stands: the CC BY/CC BY-SA images (as opposed to the CC0 ones) don't yet have an on-page, human-visible attribution credit — not required for this internal demo, but required before any real/public use.

---

## 2026-08-28 (cont.) — Custom 404 + Final Polish Pass

This closes out `Website-Strategy.md` §15 item 9, the last item in the implementation sequence. No product-direction check-ins were needed — everything in this stage was either building the already-specified 404 page or fixing genuine implementation defects against already-approved specs, not new decisions.

### 404 page
- `src/app/not-found.tsx` — Next.js's global not-found fallback, so it also now covers the two explicit `notFound()` calls already wired in the experience/province detail routes from earlier stages (previously falling through to Next's generic default page). On-brand: same design system, same `MediaPlaceholder` treatment, no special-cased styling — a direct fix for the audit's flagged real-site issue (an unrelated snowy-mountain stock photo on 404). Never a dead end: primary/secondary buttons to Home and Explore, plus text links to Experiências and Contacto.

### Genuine issues found and fixed
- **Missing `<h1>` on 6 pages.** `/experiencias`, `/explorar`, `/explorar/interesses`, `/historias`, `/sobre`, and `/contacto` all used `SectionHeading` at its default level (`h2`) for their main page title, meaning none of these pages had an `<h1>` at all — a real `Core/Accessibility.md` violation (heading structure). Fixed by passing `level="h1"` to each page's primary heading. Verified via full-codebase grep that no page now has zero or multiple `h1`s.
- **No favicon.** One had never existed since the design-foundation stage removed Next's default and nothing replaced it — every tab showed a generic icon. Generated a proper `src/app/icon.png` from the real, already-authorized logo asset by cropping to just the circular mark (favicons conventionally use the mark alone, not a full lockup with wordmark, which is illegible at 16px regardless of source) using .NET's `System.Drawing` via PowerShell — no new npm dependency, no new imagery invented. Verified serving correctly (`/icon.png` → 200, `image/png`).
- **`text-display` (64px) had no mobile scaling.** Fine for short province names, but the homepage's multi-word sentence headline would overflow into far too many lines on a phone-width screen. Fixed at the token level in `globals.css` with `clamp(2.5rem, 1.5rem + 5vw, 4rem)` — fluidly scales between ~40px on narrow phones and the original 64px at desktop widths, with zero component-level changes needed anywhere it's used.
- **Two touch targets under the 44×44px minimum** (`Website-Design.md` §5.3): `ExploreModeToggle`'s tabs (~43px) and `ExperienceFilterBar`'s filter pills (~34px, the caption-sized ones). Fixed both with `min-h-11` + `inline-flex items-center`, which guarantees the minimum regardless of font metrics rather than relying on padding arithmetic that happened to fall just short.
- **Inconsistent letter-spacing**: 3 of 12 "eyebrow"/caption-label instances used `tracking-[0.12em]` while the other 9 had already converged on `tracking-[0.1em]`. Normalized `SectionHeading`, `SiteFooter`, and `AboutTeaser` to the majority value.
- **`BookingInquiryForm`/`ExperienceDetailView` prop naming** — already fixed during the Contact stage (generalized `experienceTitle` → optional `context`), confirmed still consistent in this pass.

### Checked and found already correct (no change needed)
- All 6 client-component boundaries (`"use client"`) are genuinely interactive and justified — no unnecessary client-side work.
- Zero hardcoded hex colors anywhere except the 4 canonical token definitions in `globals.css` — full codebase grep confirmed.
- Zero default/off-token Tailwind color classes (e.g. `text-gray-500`) anywhere.
- `prefers-reduced-motion` coverage: the global CSS override (`animation-duration`/`transition-duration` forced to near-zero for every element) covers all motion including the newer `FAQAccordion`/`MobileNav` grid-rows collapses, layered under `RevealOnScroll`'s and `MediaPlaceholder`'s explicit `motion-reduce:` variants.
- Text contrast for every opacity-based color (`cream/50` through `cream/90` on Ink, `ink-muted` on Cream) verified via script — all comfortably clear WCAG AA, no fixes needed.
- All internal `href`s (static and dynamic template literals) cross-checked against the real route list — no dangling links.
- All 15 `relatedFlagshipSlug` values and all 7 experience `provinceSlug` values cross-checked against real province slugs — no typos or dead references.
- `KenBurnsImage` (built early, unused since no real photography exists yet) left in place deliberately — it's explicitly named in `Website-Design.md` §4.6's approved component inventory, has zero runtime cost since it's never imported, and removing it would just mean rebuilding it later when real photos are sourced.

### Checks run
- `npm run lint` — clean.
- `npm run build` — clean; all 45 routes generated (44 pages + `/icon.png`).
- **Found and resolved a real dev-server issue, not a code defect**: after running `build` immediately followed by `dev` without clearing `.next`, the two dynamic route templates (`/explorar/[provincia]`, `/experiencias/[slug]`) returned 500s with "Jest worker encountered 2 child process exceptions" — a stale-cache artifact of the Turbopack dev-worker pool, reproduced consistently until `.next` was deleted and the dev server restarted clean, after which every route (including the previously-failing ones) returned 200. Worth remembering for future sessions: don't run `dev` right after `build` without clearing `.next` first.
- Verified every major route returns the correct status: all 7 top-level pages 200, an invalid URL correctly 404s to the custom page (both via direct navigation and via a fake path that was never routed).
- Visually confirmed the 404 page and its four exit paths render correctly in a real browser.
- Checked console errors on the homepage and on `/explorar/huila` (fresh load, post-cache-clear) — none found. Dev server log checked after the session — clean.
- Final codebase-wide integrity grep for fabricated content (invented quotes, ratings, awards, credentials, founding dates, named roles) — no genuine matches.
- **Mobile/responsive verification limitation**: the browser tool's `resize_window` did not produce an actual narrow viewport in this environment (confirmed on two separate attempts, in two different stages of this build) — screenshots kept rendering at full desktop width regardless of the requested size. Mobile behavior was therefore verified at the code level instead: every grid/flex breakpoint pattern across the codebase was greped and confirmed mobile-first correct, the two touch-target and one fluid-typography issues above were found and fixed this way, and the `InterestPicker`'s explicit 2-column mobile grid was confirmed to match `Website-Design.md` §5.2's specific recommendation. This is a real gap in what was *visually* confirmed on an actual phone-width viewport — worth a manual check on a real device or working browser resize before presenting the demo.

### Known gaps (final state, carried across the whole build)
1. **All imagery is a placeholder** (gradient + abstract arc mark) — no real or licensed photography sourced. `KenBurnsImage` is ready for real photos whenever they arrive.
2. **Contact details** (email, address, social handles) were sourced from one automated fetch, not independently re-verified a second way — the phone numbers corroborate exactly against earlier-verified sources, increasing confidence, but this is worth a final human check.
3. **Which of the two published phone numbers is WhatsApp-enabled** was never confirmed — the primary number is wired per the client's explicit decision; the secondary is shown as a plain phone line only.
4. **Two lower-confidence `relatedFlagshipSlug` pairings** (Cabinda → Luanda; the four Lunda/Moxico provinces → Malanje) — geographically the least-bad available option among the 6 flagships, not close neighbors, flagged in the data file's own comments.
5. **Mobile viewport was not visually screenshot-verified** this session (tooling limitation, not a known code defect) — see above.
6. The map on `/contacto` is an intentional static placeholder, not a live embed — a deliberate decision, not a gap, but worth restating here since it's a visible difference from a typical production contact page.

### What remains
Per `Website-Strategy.md` §15, this was the final item in the implementation sequence. All 9 stages are now built: design system/shell, homepage, experience catalog/detail, explore province grid/detail, interest mode, trust hub, about, contact, and this 404/polish pass. Nothing further is scheduled unless requested.

## 2026-08-28 (cont.) — Contact (`/contacto`)

### Product-direction check-in (resolved before building)
`Website-Design.md` §3.6 lists a "map" module for this page but doesn't specify how, and `Website-Audit.md` had already flagged the real site's map as a concrete problem (generically pinned to "Luanda," not the actual office). This project only has an unverified address from one automated fetch, no precise coordinates, and adding a live Google Maps embed would have been the site's first external third-party dependency. Flagged this and asked rather than guessing. **Client decision: static, honest, city-level placeholder** — no pin, no external embed, no API key, labeled "Localização exata a confirmar," using the same placeholder visual language as the rest of the site. Implemented as `LocationMapPlaceholder`.

### What was built
- **`BookingInquiryForm` generalized**: the `experienceTitle` prop became an optional `context` prop, so the same component (not a second form pattern) now serves both the experience detail page and this page's generic inquiry — with a plain "Gostaria de saber mais sobre viagens com a Angola Experience" intro when no specific experience is being asked about. The one existing caller (`ExperienceDetailView`) was updated to the new prop name.
- **`FAQAccordion`**: real `<button>` elements with `aria-expanded`/`aria-controls`, a `role="region"` panel labelled by its header button (WAI-ARIA accordion pattern), and the same grid-rows collapse animation already used by `MobileNav` — keyboard-operable by construction (native buttons respond to Enter/Space without extra JS), not just mouse-clickable.
- **`LocationMapPlaceholder`**: the static, honest treatment from the decision above.
- **`ContactChannels`**: WhatsApp, a second phone line, e-mail, address, and social — all pulled from the existing `site-config.ts`, nothing new invented. The WhatsApp number is the only one presented as a WhatsApp channel; the secondary number is labeled plainly as "Telefone," preserving the still-unresolved status of which number is actually WhatsApp-enabled (`Website-Strategy.md` §10) rather than presenting it as verified.
- **FAQ content** (`lib/data/faq.ts`): 5 items on the exact topics `Website-Strategy.md` §2 names as belonging at this conversion moment (visto, segurança, o que levar, reservas, saúde) — the same topics `Website-Audit.md` confirms the real site's FAQ already thinly covers. Answers are original content, deliberately hedged wherever a specific claim would require verified company policy or medical/legal fact this project doesn't have (visa rules by nationality, vaccine requirements, response-time SLAs). The booking-process answer only describes the mechanism actually built here (WhatsApp + form, no automated booking) — true of the real site too, per the audit, not a claim invented for the demo.
- **`/contacto`**: contact channels → `BookingInquiryForm` + `FAQAccordion` side by side → a standalone `WhatsAppCTAButton` block → the map. No `ConversionBand` at the end — deliberate: `Website-Design.md`'s module list for this page doesn't include one (unlike every other page built so far), since the whole page is already the conversion moment.

### Checks run
- `npm run lint` — clean.
- `npm run build` — clean; 44 static paths total.
- Visually verified `/contacto` top to bottom; live-tested the FAQ accordion by clicking a question — it expanded correctly with the icon rotating from "+" to "×" and the answer sliding in.
- Tested the booking form's WhatsApp handoff by mouse: filled in a name and clicked submit. The browser extension's screenshot capability hung mid-interaction after the popup opened (a tooling flakiness, reproduced twice, recovered both times via closing and recreating the tab) — I was not able to get a fresh live screenshot of the resulting `wa.me` URL on this specific page. Confidence this works correctly rests on: (a) direct code review of the exact same `buildWhatsAppLink`/`window.open` logic, unchanged from the previous stage, (b) that identical mechanism was already screenshot-verified end-to-end (correct number, correct message) on the experience detail page in the prior stage, and (c) no console errors were logged during or after the interaction. Flagging this honestly rather than claiming a fresh screenshot I don't have — **worth a quick manual re-check** before presenting this page specifically.
- Confirmed the map renders exactly as decided: "Luanda, Angola" + "Localização exata a confirmar," no fake precise pin.
- Checked the browser console (no errors) and the dev server log (no errors/warnings) after the session.
- Grepped all new files for fabricated operational claims (response-time SLAs, office hours, certifications, guarantees) — none found.

### Known gaps
Same as previous entries, plus the one noted above (WhatsApp-handoff screenshot on this specific page not freshly captured due to tooling flakiness, not a known code defect).

### Next step
Stopping here as instructed. Per `Website-Strategy.md` §15, item 9 (final item): custom 404, then a final motion/performance/accessibility pass — pending your go-ahead.

## 2026-08-28 — About (`/sobre`)

Re-read `Website-Strategy.md` §9, `Website-Design.md` §3.6/§4.4/§9.1, `Core/Accessibility.md`, `Core/Copywriting.md`, `Core/Anti-AI-Design.md`, and `Business-Specific/Travel.md` before building. No product-direction check-in was needed — §9's client decision is explicit and the four verified facts it names (dedication to showcasing Angola, a team of specialists, a commitment to quality, a commitment to sustainability) are the complete, bounded set of source material for this page; nothing else needed resolving.

### What was built
- **`BrandStorySection`**: one prominent image ("larger photography" per §9) plus two content blocks — a company-story paragraph pair and a "mission/connection-to-Angola" paragraph — both paraphrased warmly from the four verified facts only. No founding date, team size, named initiatives, or any other specific invented to fill it out. The "sustainability" claim is tied to something concretely true about this project (the site covers all 21 provinces, not just a popular handful) rather than left as an abstract, generic claim — addresses `Copywriting.md`'s "specificity creates trust" without fabricating a real-world program.
- **`ReservedTeamSection`**: built on the existing `ReservedContentBanner` (large size), using the exact example framing line given in Strategy §9 ("Esta secção está reservada para apresentar a equipa e o(s) fundador(es) da Angola Experience"). No names, photos, roles, or bios anywhere.
- **`/sobre`**: intro heading → `BrandStorySection` → `ReservedTeamSection` → `ConversionBand`, matching §3.6's module order exactly.

### Checks run
- `npm run lint` — clean.
- `npm run build` — clean; 43 static paths total.
- Visually verified `/sobre` top to bottom in a real browser: intro, the image + story + mission content, and the reserved team banner — confirmed it reads as an honest, premium "not yet, but here's the shape" moment, not a broken or apologetic empty state.
- Checked all links/CTAs touching this page: the homepage's existing `AboutTeaser` → `/sobre` link (built during the homepage stage) and the header nav's "Sobre" link both navigate correctly, confirmed live in-browser (first click attempt raced the navigation and the check ran before it landed — retried and confirmed on the second, slower check).
- Grepped every new file for founder/team fabrication patterns (founding dates, "anos de experiência," awards, certifications, named roles like CEO/diretor) — none found. Manually re-read all visible copy against §7.3/§9's integrity rules.
- Checked the browser console (fresh load) and the dev server log — no runtime errors.

### Known gaps (carried over, unchanged)
Same as previous entries — placeholder imagery, contact details from one automated fetch, the secondary-WhatsApp-number question, and the two lower-confidence related-flagship-province pairings from the Explore Angola stage. No new gaps from this stage.

### Next step
Stopping here as instructed. Per `Website-Strategy.md` §15, the next stage (pending approval) is item 8: `/contacto` — contact channels, `BookingInquiryForm` (already built, reused), `FAQAccordion` (new), `WhatsAppCTAButton` (already built, reused), and a map.

## 2026-08-27 (cont.) — Trust / Social Proof Hub (`/historias`)

Before building, re-read `Website-Strategy.md` §7 and §11.2, `Website-Design.md` §3.6/§4.4/§9.1–9.4, `Core/Accessibility.md` in full, and `Business-Specific/Travel.md` in full (hadn't read that one yet this session). Travel.md's generic trust guidance (reviews, ratings, UGC, "10,000 happy travelers"-style claims) is exactly what Strategy §7.1's client decision already and deliberately overrides — nothing new to reconcile, no product-direction check-in was needed.

### What was built
- **`ReservedContentBanner`** extracted as the shared shell component (§4.4, §9.1) — muted Ink/Cream/Gold gradient, abstract arc mark (never a human silhouette), consistent radius/border. `StoryPlaceholderCard` refactored to build on it instead of duplicating the shell inline (it had been built standalone during the homepage stage, before this component existed). This is also what `ReservedTeamSection` will build on when `/sobre` is built next, per the component inventory.
- **`TestimonialSlot`**: quote-card shape (§9.1) — a decorative quotation-mark glyph, a framing line naming the category of content ("Aqui viverá um testemunho real..."), and an "Atribuição reservada" label instead of any name. No invented quote text, no fabricated persona.
- **`MediaWallPlaceholder`**: a real 6-tile grid (reusing the existing `MediaPlaceholder` component, not a new image pattern) with varied "Fotografia/Vídeo de viagem reservado(a)" captions — non-human, non-customer imagery per §9.4.
- **`TrustSignals`** (`features/trust/`): a "what's already verifiable today" section — three real, already-true facts (the two real service prices, the verified/conceptual badge system itself, the real WhatsApp number). Deliberately a different angle from the homepage's "Why Angola Experience" list (that one is a general pitch; this one is specifically about how to tell what's real), not a copy-paste of it.
- **`StoriesGrid`** (`features/trust/`): a 6-item grid mixing `StoryPlaceholderCard` and `TestimonialSlot`, covering 4 province/interest combinations (Huíla·Fotografia, Luanda·Praia, Malanje·Natureza, Namibe·Aventura) plus 2 testimonial slots.
- **`/historias`**: intro framing (warm, states the placeholder fact plainly and pivots forward rather than apologizing) → `TrustSignals` → `StoriesGrid` → media wall section → a `ConversionBand` with page-specific copy ("Quer ser a próxima história real?").
- No changes were needed to the homepage or experience-detail pages: the homepage's `TrustPreview` → `/historias` link was already built and wired during the homepage stage; `Website-Design.md` §3.5's experience-detail module list doesn't include a trust module, so none was added there (would have been scope creep beyond what's specified).

### Checks run
- `npm run lint` — clean.
- `npm run build` — clean; 42 static paths total.
- Visually verified `/historias` top to bottom in a real browser: intro, all three trust-signal items, the 6-card mixed grid (correct alternating pattern, quotation mark visible, "ATRIBUIÇÃO RESERVADA" label, no names anywhere), the 6-tile media wall, and the closing conversion band with real contact info in the footer.
- Explicitly re-checked for fabricated content: grepped every new file for quote-attribution patterns, star/rating symbols, and "X satisfied customers"-style phrasing — none found. Manually re-read every string of visible copy on the page against the integrity rules in §7.3 before calling this done.
- Clicked the homepage's existing "Ver Histórias →" link live and confirmed it navigates to `/historias` correctly.
- Checked the browser console after a fresh page load (not just mid-session) — no errors. Dev server log also checked — no runtime errors or warnings.

### Known gaps (carried over, unchanged)
Same as previous entries — placeholder imagery, contact details from one automated fetch, the secondary-WhatsApp-number question, and the two lower-confidence related-flagship-province pairings from the Explore Angola stage. No new gaps from this stage.

### Next step
Stopping here as instructed. Per `Website-Strategy.md` §15, the next stage (pending approval to continue) is item 7: `/sobre` — which will reuse `ReservedContentBanner` again for the founder/team slot.

## 2026-08-27 (cont.) — Interest Mode (`/explorar/interesses`)

No product-direction check-in was needed this stage — everything required was already resolved by `Website-Strategy.md` §5 and `Website-Design.md` §3.3/§4.2, and the existing data layer (interest tags on both experiences and provinces, populated in the two previous stages) covered it without new content decisions.

### What was built
- **`getExperiencesByInterest(tag)`** and **`getProvincesByInterest(tag)`** added to the data layer (`experiences.ts`, `provinces.ts`) — plain array filtering against the same `interestTags` fields already on both models, no new taxonomy, no scoring/ranking logic.
- **`InterestPicker`**: 8 large tappable tiles for the fixed taxonomy, single-select, same active/inactive visual language already established by the experience catalog's filter pills (gold fill when active) rather than inventing a second pattern. Deliberately typographic, not icon-based — consistent with `Anti-AI-Design.md`'s warning against generic icon packs, and with how the homepage's "Why Angola Experience" section already avoided icon-cards.
- **`InterestResultsGrid`**: real tag-matching results — the filtered `ExperienceGrid` (reusing the exact same component, cards, and status badges as the catalog) plus a "Províncias relacionadas com {tag}" cross-highlight section using `ProvinceCard`, drawn from the full 21-province set. The province section only renders when there's at least one match — no tag currently has zero matching experiences, but "Relaxamento" has zero matching provinces (no province was tagged with it in the previous stage), so that section is conditionally hidden rather than showing an empty block.
- **`InterestExplorer`**: the one client component in this stage, owning which tag is selected (same architectural pattern as `ExperienceCatalog`'s filter state) — before a tag is picked, a plain prompt line is shown instead of an empty grid.
- **`/explorar/interesses`**: composes the mode toggle (now correctly showing "Por Interesse" as active), the picker, and the results, plus the closing conversion band.

### Checks run
- `npm run build` — clean; 41 static paths total now (14 experiences + 21 provinces + 6 other routes).
- `npm run lint` — clean.
- Visually verified in a real browser: toggle correctly shows Interest mode active; all 8 tiles render correctly; clicked "Fotografia" live and confirmed the tile turned gold, the results heading read "Experiências de Fotografia" with a correct count of 4 (cabo-ledo, quedas-de-calandula, serra-da-leba, deserto-do-namibe — the only four experiences actually tagged Fotografia), correct verified/conceptual badge mix on the resulting cards, and a "Províncias relacionadas com Fotografia" section showing exactly the 3 provinces tagged Fotografia (Huíla, Namibe, Malanje). This confirms the two discovery paths are genuinely connected through the same tag data, not two separate demos — the same thing `Website-Strategy.md` §5.2 asks this stage to prove. Dev server log checked — no runtime errors.

### Known gaps (carried over, unchanged)
Same as previous entries — placeholder imagery, contact details from one automated fetch, the secondary-WhatsApp-number question, and the two lower-confidence related-flagship-province pairings (Cabinda; the Lunda/Moxico group) from the previous stage. No new gaps from this stage.

### Next step
Per `Website-Strategy.md` §15, item 6: `/historias` — the trust/social-proof hub, plus the homepage/experience-page trust modules it's meant to anchor.

## 2026-08-27 (cont.) — Explore Angola (province grid + detail)

### Product-direction check-in (resolved before building)
`Website-Design.md` §3.4 requires each light-province page to name one "related flagship province" but doesn't specify how that pairing should be chosen. Given regional groupings were already dropped earlier over geographic-accuracy risk, I flagged this rather than silently inventing a mapping. Client decision: use real geographic proximity/continuity (not an invented tourism relationship), kept as an explicit field in the data layer (not computed), framed purely as a navigation suggestion, never implying administrative linkage or that Angola Experience operates tours between the two, and always resolving to one of the 6 flagship provinces (never a dead end). Implemented as `relatedFlagshipSlug` on each coming-soon `Province` in `src/lib/data/provinces.ts`.

Two pairings are the least confident and are called out in that file's own comments: **Cabinda** (an exclave with no land continuity to any flagship — mapped to Luanda as the practical travel hub, not a bordering province) and the **Lunda Norte/Lunda Sul/Moxico/Moxico Leste** group (genuinely distant from all 6 flagships; Malanje is the least-distant of the six, not a close neighbor). Worth a client sanity-check before real use, though none of the 15 mappings claim more than "you might also want to look at X."

### What was built
- **Data layer extended**: `Province` type gained `keyPlaces` (already existed, now used for "O que ver"), `highlights` (2–4 real bullet points for light provinces — added for all 15, e.g. Zaire → foz do rio Congo, M'Banza Kongo; Moxico → largest province by area; Uíge → historic coffee-growing region), `destinationGuide` (flagship-only: whatToDo/culture/landscapes/gastronomy/practicalInfo/bestTimeToVisit, populated for all 6 flagship provinces), and `relatedFlagshipSlug` (light-only, per above). All content is original, geographically-grounded copy — general, verifiable facts (climate, landmarks, coastal-vs-interior), not specific cultural/culinary claims nobody has verified, same discipline as the experience descriptions.
- **`getSortedProvinces()`** in `provinces.ts`: flagship provinces first (alphabetical), then the other 15 (alphabetical) — the exact fallback `Website-Design.md` §11 pre-authorized when `RegionFilterTabs` was dropped.
- **Discovery components**: `ProvinceCard` (one component for all 21 — status drives only the "Guia em Expansão" badge, nothing else), `ProvinceGrid`, `ExploreModeToggle` (links to `/explorar` and `/explorar/interesses`; interest mode itself is a later stage), and `EmptyState` (the light-province forward-framed module, visually a normal content block, not a warning pattern).
- **`/explorar`**: unified grid of all 21 provinces, verified live to render flagship-first-then-alphabetical with identical card treatment — the only visible difference for the 15 light provinces is the small badge.
- **`/explorar/[provincia]`**: `ProvinceFlagshipView` (hero → O que ver → O que fazer → Cultura/Paisagens/Gastronomia → Informação prática → Melhor época → related experiences via the existing `ExperienceGrid`/`getExperiencesByProvince`) and `ProvinceLightView` (hero with badge → highlights → interest tags → `EmptyState` → related flagship province card), selected by `province.status`. Both share the identical hero, type scale, and card components. Static params generated for all 21 slugs.
- Generalized `PracticalInfoPanel`'s inner grid into a shared `InfoGrid` component (label/value pairs) so the province practical-info block could reuse it instead of duplicating near-identical markup.
- Homepage's `VisualStrip` tiles now link to their `/explorar/[provincia]` page, since it exists.

### Checks run
- `npm run build` — clean; all 21 province pages statically generated alongside the existing 14 experience pages and the catalog (40 static paths total).
- `npm run lint` — clean.
- Visually verified in a real browser: `/explorar` grid confirmed flagship-first-alphabetical ordering (Benguela, Cuanza Sul, Huíla, Luanda, Malanje, Namibe, then Bengo, Bié, Cabinda, …) with the badge appearing only on the light provinces and identical card styling throughout; opened `/explorar/huila` (flagship) and confirmed every destination-guide section renders (O que ver, O que fazer, Cultura, Paisagens, Gastronomia, Informação prática) plus the linked "Serra da Leba" experience card at the bottom; opened `/explorar/zaire` (light) and confirmed the badge, highlights, interest tags, and the forward-framed module correctly linking to Luanda, plus the "Continue a explorar" Luanda card. Dev server log checked — no runtime errors.
- Re-confirmed Cabo Ledo's province tag is unaffected by this stage (still `icolo-e-bengo`, not `luanda`).

### Known gaps (carried over, unchanged)
Same as previous entries: placeholder imagery still in use everywhere, contact details from one automated fetch, and the WhatsApp-enabled-number question for the secondary phone number. No new gaps beyond the two flagged geographic-mapping uncertainties noted above.

### Next step
Per `Website-Strategy.md` §15, item 5: `/explorar/interesses` — the interest picker, wired to the same experience (and now province) data already in place.

## 2026-08-27 (cont.) — Experience Catalog + Detail

### What was built
- **Data layer extended** (`src/lib/data/types.ts`, `experiences.ts`): added `descriptionParagraphs`, `itinerary` (`ItineraryStep[]`), `included`/`notIncluded`, and `practicalInfo` to the `Experience` type and populated all 14 experiences with this content. Verified experiences' itinerary/inclusions/practical-info are original enrichment copy (§6.2 — draft, pending the client's own approval), using deliberately conservative, industry-standard inclusions (transport, guide) rather than asserting specific contractual terms nobody has verified. Also added `getDurationOptions()` and `getRelatedExperiences()` helpers.
- **Catalog** (`/experiencias`): `ExperienceFilterBar` (province/interest/duration, real client-side filtering, single client boundary via `ExperienceCatalog`), `ExperienceGrid` (handles the empty-filter-result state), reusing the existing `ExperienceCard`/`StatusBadge`/`PriceSlot`. Province filter options and duration filter options are both derived from the actual data (not the full static lists), so no filter option ever produces a dead end. All 8 interest tags happen to already be used at least once across the 14 experiences, so the full fixed taxonomy is shown safely.
- **Detail page** (`/experiencias/[slug]`): `ExperienceGallery` (hero + 2 secondary tiles, captions reused from the experience's own highlights rather than invented image copy), `ItineraryTimeline` (always labeled "Itinerário (exemplo)" per §6.1 — verified live), `InclusionsList`, `PracticalInfoPanel`, `BookingInquiryForm`, and a new `WhatsAppCTAButton` (extracted from the inline logic previously duplicated in `ConversionBand`/`StickyWhatsAppButton`, now the one place that builds `wa.me` links). Sidebar (price + WhatsApp CTA + booking form) is a CSS-grid column that naturally stacks as an inline block on mobile, not an overlay — structurally avoids the audit's cramped-sidebar-with-overlapping-text bug (§5.2) rather than patching around it. Related experiences: same province first, then same interest tag, capped at 3. Static params generated for all 14 slugs; unknown slugs hit `notFound()`.
- **Booking form** hands off to WhatsApp with the entered fields pre-filled (`window.open` to a `wa.me` link built from name/email/phone/notes) — no backend, no fake "submitted" state, and the form says outright that nothing is stored. This is the exact simulated pattern `Website-Strategy.md` §13 describes.

### Checks run
- `npm run build` — clean; all 14 experience detail pages statically generated (`generateStaticParams`) alongside the catalog.
- `npm run lint` — clean, no warnings.
- Visually verified in a real browser: catalog renders all 14 cards with correct per-experience copy (no duplicated descriptions); clicked the Namibe province filter live and confirmed it correctly narrowed the grid to the one Namibe experience with no page reload; opened the Quedas de Calandula detail page and confirmed hero/gallery/badge/highlights/description/itinerary ("Itinerário (exemplo)" label present)/inclusions (✓/✕ icons)/practical info/price/related-experiences all render correctly; submitted the booking form with a test name and confirmed it opens `https://api.whatsapp.com/send/?phone=244923790953&text=...` with the fields correctly interpolated into the message — the real, client-approved number, not a placeholder. Dev server log checked for runtime errors — none found.
- Cabo Ledo specifically double-checked: correctly tagged to Icolo e Bengo (not Luanda), matching the accuracy note in `Website-Strategy.md` §4.1.

### Known gaps (carried over, unchanged from previous entry)
Same three items as before: placeholder imagery still in use everywhere (no licensed photography sourced), contact details from one automated fetch rather than a full manual re-verification, and the WhatsApp-enabled-number question for the secondary phone number remains open. No new gaps introduced by this stage.

### Next step
Per `Website-Strategy.md` §15, item 4: `/explorar` (province grid, all 21 provinces, alphabetical with flagship-first sort per the dropped-regional-grouping decision) and `/explorar/[provincia]` (flagship vs. light template, §3.4). This is the next data-model consumer and the last major piece before `/explorar/interesses`.

## 2026-08-27 — Build prerequisites + Foundation + Shell + Homepage

### 1. Build prerequisites (re-confirmed, no new work)
`Website-Design.md` v1.2 had already finalized all three items the client asked to close before Build:
- Typography: Bricolage Grotesque (display) + Instrument Sans (body).
- Color tokens: Ink `#161310`, Cream `#FAF6EE`, Gold `#B4842A`, Terracotta `#9C5430`.
- Regional groupings: dropped (no official Angolan region tier exists; 4 of 21 current provinces postdate the 2024–2025 reorganization and have no established grouping at all).

No changes were needed to the design doc in this session.

### 2. Project initialization
- `git init` at the project root; first commit captures the Phase 1–3 documentation baseline before any code.
- Git identity set locally (repo-scoped, not global) per explicit instruction: `Frederico Feliciano <ppauloke@gmail.com>`.
- Scaffolded with `create-next-app` (Next.js 16, App Router, TypeScript, Tailwind v4, ESLint) — had to scaffold into a temp directory first because the project folder name (`Angola-Experience-Demo`) contains capital letters, which `create-next-app` rejects as an npm package name; files were then copied into the real project root, preserving the existing root-level `README.md` and all documentation untouched.
- `npm install` initially crawled to a near-standstill (~135 files/min) because the project lives inside a OneDrive-synced folder and the shell's `cp -r` triggers per-file sync overhead. Diagnosed and fixed: a plain `npm install` (native Node fs writes, not shell `cp`) completed normally in ~2 minutes directly inside the OneDrive path — the slowness was specific to bulk shell copy, not to npm/OneDrive together. No workaround (e.g. junctions) was ultimately needed.
- `.gitignore` added (node_modules, .next, build output, env files, `.claude/`).
- **Next.js 16 auto-generated a root-level `AGENTS.md` and `CLAUDE.md`** on first `next dev` run (a new built-in feature). Both were deleted and the feature disabled via `agentRules: false` in `next.config.ts`, because a generic auto-generated `CLAUDE.md` sitting next to this project's real `Core/CLAUDE.md` and doc set would be confusing in future sessions.
- Package name set to `angola-experience-demo` (was `scaffold` from the temp-dir workaround).

### 3. Folder structure (`Core/Code-Standards.md`)
```
src/
  app/            Next.js App Router routes
  components/
    ui/           Button, Badge, SectionHeading, MediaPlaceholder
    layout/       SiteHeader, MainNav, MobileNav, SiteFooter, PageShell, SectionContainer, ConversionBand, StickyWhatsAppButton
    motion/       RevealOnScroll, KenBurnsImage, HoverLift
    experience/   ExperienceCard, StatusBadge, PriceSlot
    trust/        StoryPlaceholderCard
  features/
    home/         Hero, VisualStrip, FeaturedExperiences, WhyUs, TrustPreview, AboutTeaser
  lib/
    data/         types.ts, provinces.ts, experiences.ts
    fonts.ts, site-config.ts
  utils/
    cn.ts
```

### 4. Design system foundation
- All design tokens (color, type scale, radius, motion timing) implemented as Tailwind v4 `@theme` tokens in `src/app/globals.css`, generating utilities directly (`bg-ink`, `text-gold`, `text-h1`, etc.) rather than hardcoded values anywhere in components.
- Fonts loaded via `next/font/google` (`src/lib/fonts.ts`): Bricolage Grotesque (600/700 only) and Instrument Sans (400/500/600 only) — both `latin` + `latin-ext` subsets for full Portuguese diacritic coverage. No other weights loaded.
- Global focus ring (gold, 2px, visible on every interactive element) and a `prefers-reduced-motion` global override, both per §8/§6.3.
- Removed the scaffold's default `prefers-color-scheme` dark-mode block — not part of this project's design system, which uses Ink/Cream as deliberate section tones, not an OS-driven theme toggle.
- Base primitives built: `Button` (primary/secondary/ghost, with the §2.2 binding rule — gold fill always pairs with Ink text, never white — enforced in the component itself), `Badge`, `SectionHeading`, `PageShell`, `SectionContainer`.
- Motion primitives built exactly per §4.6/§7.2: `RevealOnScroll` (IntersectionObserver, one-time, never a scroll listener), `KenBurnsImage` (pure CSS `transform: scale()` keyframe, ready for real photography), `HoverLift` (transform/opacity only).
- **`MediaPlaceholder`** (new, not separately named in the design doc's component inventory but required by it): a gradient-and-mark placeholder used everywhere a real licensed photograph would go. Built because none of this session's imagery has a verified license — see "Known gaps" below.

### 5. Application shell
`SiteHeader` (composes `MainNav` + `MobileNav`), `SiteFooter`, `ConversionBand`, `StickyWhatsAppButton` — wired into `src/app/layout.tsx`. Header/footer deliberately sit on an Ink background specifically because the real Angola Experience logo file has a white wordmark baked in and must never be cropped or recolored (`Website-Strategy.md` §11.2) — the background was chosen to fit the real asset, not the other way around.

### 6. Content data layer
`src/lib/data/`: full types matching the approved model (`Website-Strategy.md` §4.4, §6.1); seed data for **all 21 provinces** (6 flagship fully described, 15 "coming-soon" with a real one-line hook each — no province is a placeholder-of-a-placeholder); **14 experiences** (11 `verified`, sourced from `Website-Audit.md`'s real-tour list, 3 `conceptual` added only to give Huíla/Namibe/Cuanza Sul at least one experience each, since the real site has no published tour there). All verified tours use `priceType: "on-request"` (their real prices were empty/broken on the live site per the audit) except the two real Services-page items, which keep their real AOA prices. Long-form detail fields (`description`, full destination-guide content) are intentionally left unpopulated — that's Experience Detail / Province Detail template scope, not this stage.

### 7. Homepage (`Website-Design.md` §3.2)
All seven modules built: Hero (Ken Burns placeholder, dual discovery CTAs), Visual Strip (6 flagship provinces), Featured Experiences (4 cards: 3 verified + 1 conceptual, including one real-priced service to surface transparent pricing early), Why Angola Experience (list, not icon-cards, per §2.7), Trust Preview (2 `StoryPlaceholderCard`s, honest reserved-space framing), About Teaser, Conversion Band.

### Checks run
- `npm run build` — clean, no errors, static homepage generated.
- `npm run lint` — clean (one false-positive `jsx-a11y/alt-text` warning on `KenBurnsImage`, suppressed inline with a one-line justification — `alt` is required by `ImageProps` and enforced by TypeScript, ESLint just can't see it through the prop spread).
- Visually verified in a real browser at desktop width — logo, fonts, colors, badges, cards, footer all render as intended. Mobile-width verification was attempted but the browser tool's window-resize did not propagate to the captured screenshot; mobile behavior was not visually confirmed this session and relies on code review of the responsive Tailwind classes (`lg:` breakpoints matching §5.1) rather than an actual screenshot. **Flagged for a follow-up visual check.**

### Known gaps / flagged for follow-up (not blockers, but should be checked before any real client presentation)
1. **All imagery is a placeholder** (gradient + abstract arc mark), including province/landscape photography. `Website-Strategy.md` §11.2 tier 3 permits "carefully selected, properly licensed atmospheric imagery" for landscapes, but no licensing pipeline exists yet — using real photos without a verified license would violate the same content-integrity principle as the trust/testimonial rules. Real photography (or a licensed stock integration) is a prerequisite before this looks "finished," not before it's "correct."
2. **Contact details** (`geral@angolaexperience.com`, "Nova Vida, Luanda", Facebook/Instagram handles) were sourced from one automated fetch of the live `/contacto` page, not a direct browser walkthrough like the original audit used. The two phone numbers corroborate exactly against `Website-Strategy.md`'s already-verified data, which is reassuring, but the email/address/social handles weren't independently cross-checked a second way. The social URLs in `site-config.ts` (`facebook.com/angolaexperience`, `instagram.com/angolaexperience`) are constructed from the displayed handle, not confirmed as the exact live URLs.
3. A separate automated fetch also claimed the real site's hero headline is "Encontre o Nosso Sonho" — this directly contradicts `Website-Audit.md`'s explicit finding that this exact claim could **not** be confirmed by direct browser inspection. Per that audit's own methodology note, the claim was **not** used anywhere in this build; the new homepage headline is original copy instead.
4. Which of the two published phone numbers is actually WhatsApp-enabled is still unconfirmed (`Website-Strategy.md` §10 flagged this as a pre-Build item). The primary number (+244 923 790 953) is wired to the `wa.me` link per the client's explicit decision in that section.
5. `ExperienceCard` links to `/experiencias/[slug]`, which doesn't exist yet — expected at this stage (that route is next per the sequence below), not a bug.

### Next step
Per `Website-Strategy.md` §15, item 3: build the `/experiencias` catalog and `/experiencias/[slug]` detail template using the data layer already in place, then proceed to `/explorar` (province grid + detail), `/explorar/interesses`, `/historias`, `/sobre`, `/contacto`, custom 404, and a final polish/performance/accessibility pass — one stage at a time, each checked before moving on.
