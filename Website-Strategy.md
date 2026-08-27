# Website Strategy — Angola Experience Demo

Version: 1.1

Phase: 2 — Strategy

Source inputs: `Website-Audit.md`, `Core/*.md`, `Business-Specific/Travel.md`, and direction provided by the client for this phase.

## Changelog

- **v1.1** — Client reviewed and approved the overall architecture/scope, and resolved the five open decisions from v1.0 (WhatsApp number, founder/team content, stories/social proof integrity, pricing, and province verification). This version incorporates those decisions, replaces the flagship-province placeholder with a verified recommendation, and closes out §14 as a decisions log rather than an open list. No architectural changes to the sitemap from v1.0.

---

# 0. Framing

This is a **demonstration product**, not a rebuild of angolaexperience.com and not a production system. Its purpose is to show Angola Experience a credible, navigable vision of what their digital presence could become — enough depth to feel real and convincing, bounded enough to stay honest about being a concept demo.

Three things the demo must prove:

1. **Angola can be presented far more richly** than a tour catalogue — as a country worth discovering.
2. **Visitors can be guided naturally** from curiosity to a specific, well-explained experience, to contacting Angola Experience.
3. **The website itself can become a brand asset** — not a listing of services, but part of how Angola Experience makes people feel about traveling with them.

Everything in this document exists to serve those three proofs. Where a feature would add scope without strengthening one of them, it is deliberately left out (see §13).

**Scope principle (client-approved):** this is "full concept, partial implementation." The demo must not feel artificially small — it should represent the complete product vision (all provinces, both discovery paths, a real trust layer, a real conversion journey) at a convincing level. What stays partial is *content depth and backend infrastructure*, not *conceptual breadth*. In one sentence: **show the company what this could become — do not build the entire production website for free.**

---

# 1. Guiding Principles Carried From Core/Business-Specific Docs

- **Purpose before decoration** (`Anti-AI-Design.md`) — every section below states *why* it exists, not just what it contains.
- **Hidden information is the #1 travel anti-pattern** (`Travel.md`) — the experience model (§6) exists specifically to fix this.
- **Do not invent proof** (`Copywriting.md`) — trust content (§7) is structurally real but factually placeholder, and clearly so.
- **Preserve what works** (audit §9) — gold/black identity, WhatsApp-first conversion, transparent pricing pattern, and simple navigation all carry forward.
- **Never fabricate business information** (`CLAUDE.md`) — no invented prices, reviews, client counts, team members, or company history beyond what the live site already publishes.

---

# 2. Final Demo Structure (Sitemap)

```
/                       Home
/explorar               Explore Angola — Province mode (default)
/explorar/interesses    Explore Angola — Interest mode
/explorar/[provincia]   Province / destination guide page
/experiencias           Experience catalog (filterable)
/experiencias/[slug]    Experience detail page
/historias              Trust & social proof hub (traveler stories, demo placeholders)
/sobre                  Human side of the brand + company story
/contacto               Contact / Reserve (form + WhatsApp + FAQ)
404                     Custom, on-brand not-found page
```

Nine surfaces total (seven real routes, two dynamic templates). This is deliberately more than the current five nav items but far short of a full site — the two dynamic templates (`[provincia]`, `[slug]`) are what let the demo "represent all provinces" and a realistic experience catalogue without hand-building dozens of unique pages.

## Navigation (top-level, kept simple per audit finding)

```
Início · Explorar Angola · Experiências · Histórias · Sobre · Contacto
```

Six items. "Explorar Angola" is a single nav entry that opens onto a hub offering both discovery modes (province-first and interest-first) rather than splitting into two separate top-level nav items — this keeps the preserved strength ("simple top-level navigation") intact while still fully demonstrating both discovery paths requested in §4/§5 of the brief.

FAQ is **not** a separate nav item. It is merged into `/contacto`, positioned just before the contact form, because those questions (visas, safety, packing, booking, health) are pre-decision anxieties that belong right at the conversion moment — not filed away under "About."

---

# 3. Homepage Narrative

The homepage's job is not to explain the company — it's to make someone want to keep scrolling into Angola. Structure:

1. **Cinematic hero** — full-bleed destination imagery (Ken Burns-style slow motion treatment, see §11), a short emotional headline (not "Bem-vindo à Angola Experience!" but something that names a feeling or place), and **two** parallel entry points side by side: *"Explorar por Destino"* and *"Explorar por Interesse"* — this is the homepage physically presenting the two discovery paths from the brief as equally valid front doors, rather than burying one in a submenu.
2. **"A Angola em números e paisagens"-style visual strip** — a short, honest sequence of province/landscape imagery (not stats we don't have — a visual proof of range, not a claims-driven counter section).
3. **Featured experiences** (3–4 cards pulled from the experience model, §6) — proof that "discovery" leads to something concrete and bookable, not just mood.
4. **Why Angola Experience** — evolved version of the current "Porquê Viajar Connosco," but tied to specific, demonstrable things (local expertise, WhatsApp-speed responsiveness, transparent planning) rather than generic icon+adjective pairs.
5. **Trust preview** — one or two traveler-story cards linking to `/historias`, clearly framed as illustrative (§7).
6. **Human-side teaser** — a short, warm strip linking to `/sobre` ("Quem está por trás da Angola Experience").
7. **Closing conversion band** — the "Precisa de assistência?" pattern from the current site, preserved and reused: WhatsApp CTA + contact form link.

This directly encodes the required journey: **Discover → Explore → Find something relevant → Learn about it → Trust → Contact.**

---

# 4. Explore Angola (Province Discovery)

This is the demo's centerpiece, per the brief.

## 4.1 Verified Provincial Data (researched for this revision)

Angola's administrative division changed in 2024. This has now been verified via public sources (Angolan National Assembly reporting via Ver Angola, Angop, and Wikipedia's "Provinces of Angola"):

- Angola had **18 provinces** prior to August 2024.
- On **14 August 2024**, the National Assembly approved a reorganization creating **3 new provinces** by splitting existing ones; it was published in the official gazette on 5 September 2024 and the new provinces became operational in 2025.
- Angola now has **21 provinces**. The three new ones: **Cuando** and **Cubango** (split from the former Cuando Cubango), and **Icolo e Bengo** (split from Luanda province). A third split — Moxico into Moxico and **Moxico Leste** — is also part of the same reorganization.
- **Current full list (21):** Bengo, Benguela, Bié, Cabinda, Cuando, Cuanza Norte, Cuanza Sul, Cubango, Cunene, Huambo, Huíla, Icolo e Bengo, Luanda, Lunda Norte, Lunda Sul, Malanje, Moxico, Moxico Leste, Namibe, Uíge, Zaire.

Sources: [Ver Angola — "Angola officially has 21 provinces"](https://www.verangola.net/va/en/082024/Politics/41162/Angola-officially-has-21-provinces-Parliament-approves-administrative-division-with-UNITA%E2%80%99s-%E2%80%9Crejection%E2%80%9D.htm), [Angop](https://www.angop.ao/en/noticias/politica/alteracao-da-divisao-administrativa-dominou-noticiario-politico), [Wikipedia — Provinces of Angola](https://en.wikipedia.org/wiki/Provinces_of_Angola).

**One accuracy note carried into content-build:** Cabo Ledo (one of the tours on the real Angola Experience site, currently filed under "Luanda") sits geographically in the coastal area now governed by the new **Icolo e Bengo** province, not Luanda province proper. Ilha do Mussulo remains within Luanda. This distinction should be confirmed and applied correctly when the Cabo Ledo experience is tagged to a province during Build — it's a small factual detail, but the kind of thing worth getting right in a demo about destination accuracy.

## 4.2 Structure

`/explorar` shows **all 21 current provinces** as cards in a grid (or map-plus-grid hybrid — a design decision, not a strategy one). Every province is represented; not every province is fully developed — this is the direct implementation of the client-approved "full concept, partial implementation" principle (§0).

- **Flagship provinces (fully realized): see §4.3 for the recommendation and rationale.**
- **All remaining provinces (15):** shown as real, named cards with a short one-line descriptor and a "Guia completo brevemente" (full guide coming soon) state — clickable through to a lightweight stub page rather than a dead end, so the architecture visibly scales to the whole country without requiring full content for all of them.

## 4.3 Flagship Province Recommendation (for approval)

Rather than choosing flagship provinces on visual appeal alone, this recommendation is anchored in what the audit verified as Angola Experience's **own stated coverage area**. The live homepage's welcome copy explicitly names its regions: *"passeios por Luanda, Cuanza Sul, Benguela, Huíla, Namibe, e Malanje."* The live tour catalog additionally confirms real, published tours in Luanda (Ilha do Mussulo, Luanda Histórica Comunitária, Cabo Ledo), Benguela (Benguela Tropical, Benguela Safari, Lobito City Tour), and Malanje (Quedas de Calandula, Malanje City Tour, Quedas de Musseleje).

**Recommended flagship provinces (6 — upper end of the requested 4–6 range, because all 6 are independently verifiable from the client's own real site rather than a subjective pick):**

| Province | Why it's flagship-worthy | Verified basis |
|---|---|---|
| **Luanda** | Capital, urban + coastal identity, the brand's home base | Real tours: Mussulo, Luanda Histórica Comunitária |
| **Benguela** | Coastal/tropical identity, includes Lobito | Real tours: Benguela Tropical, Benguela Safari, Lobito City Tour |
| **Huíla** | Dramatic highland identity (Serra da Leba road — one of the strongest photography assets identified in the audit) | Named on homepage as a coverage region |
| **Namibe** | Desert/aerial-dune identity, strong visual contrast to the other five | Named on homepage as a coverage region |
| **Malanje** | Interior nature/waterfalls identity | Real tours: Quedas de Calandula, Malanje City Tour, Quedas de Musseleje |
| **Cuanza Sul** | Rounds out the coastal south, explicitly named as a coverage region | Named on homepage as a coverage region |

This set of 6 gives the demo strong visual and thematic range (capital, tropical coast, highland, desert, waterfalls/interior, coastal south) while staying strictly evidence-based rather than inventing a "greatest hits" list. **This selection is presented for your approval below, not yet final.**

The remaining 15 provinces (Bengo, Bié, Cabinda, Cuando, Cuanza Norte, Cubango, Cunene, Huambo, Icolo e Bengo, Lunda Norte, Lunda Sul, Moxico, Moxico Leste, Uíge, Zaire) are represented as scalable "coming soon" cards per §4.2.

## 4.4 Province Data Model

| Field | Notes |
|---|---|
| Name, region grouping | e.g., "Litoral," "Planalto Central," "Sul" — optional grouping to reinforce scale |
| Hero image | Placeholder/conceptual |
| Short hook (1–2 sentences) | Every province, including stub ones |
| Overview (a few paragraphs) | Flagship provinces only |
| Key places to visit | List — flagship only |
| Activities / interest tags | Links into the interest taxonomy (§5) |
| Related experiences | Pulled from the experience catalog (§6) |
| Destination guide block | What to see / do / culture / landscapes / food / practical info / best time — flagship only, see §8 |
| Status | `featured` or `coming-soon` — drives which template renders |

## 4.5 Province Detail Page (`/explorar/[provincia]`)

Flagship provinces render the full destination-guide template (§8). Coming-soon provinces render a minimal, honest stub: name, hero image, one-line hook, and a note that the full guide is in progress — with a link back to the interest picker or featured provinces, so the visitor is never dead-ended.

---

# 5. Explore by Interest

`/explorar/interesses` is the second discovery path: **"Que tipo de experiência procura?"**

## 5.1 Taxonomy (fixed set, reused everywhere)

Natureza · Praia · Cultura · História · Aventura · Gastronomia · Fotografia · Relaxamento

This is not a recommendation engine. Selecting an interest filters the experience catalogue (and cross-highlights relevant provinces) using simple tag-matching — a real, working filter, not a simulated one, but with no personalization, scoring, or ML behind it.

## 5.2 Why this taxonomy also lives on Experiences

Each experience (§6) carries one or more of these same interest tags. This is the connective tissue between the two discovery paths: a visitor can arrive at the same experience either by picking "Huíla" or by picking "Fotografia" — demonstrating that discovery is genuinely multi-path, not two disconnected demos bolted together.

---

# 6. Experience Model

This directly answers the audit's biggest content finding (one-paragraph tours, duplicated descriptions, broken pricing/duration fields).

## 6.1 Fields

| Field | Purpose |
|---|---|
| Title | |
| Province + specific location | Links to province page |
| Experience type / interest tags | Reused taxonomy from §5 |
| **Status: `verified` or `conceptual`** | See §6.2 — determines badge, sourcing, and pricing behavior |
| Duration | Realistic, e.g. "Meio-dia," "3 dias / 2 noites" |
| Highlights | 3–5 bullets |
| Description | 2–4 paragraphs, unique per experience (fixes the audit's duplicate-content finding structurally, since the template requires distinct content per entry) |
| Sample itinerary | Segment or day-by-day, explicitly labeled "itinerário exemplo" |
| What's included / not included | |
| Practical information | Best time, what to bring, fitness/difficulty level, typical group size |
| Price | See §6.3 — **no fabricated numbers, ever** |
| Gallery | Placeholder imagery |
| CTA | "Reservar" form + WhatsApp (preserved pattern) |
| Related experiences | Cross-links |

## 6.2 Verified vs. Conceptual experiences (client decision, now mandatory)

Every experience in the catalogue must be explicitly labeled as one of:

- **`verified`** — based on a real, currently published Angola Experience offering. From the audit, this covers: Ilha do Mussulo, Luanda Histórica Comunitária, Cabo Ledo (Luanda/Icolo e Bengo), Benguela Tropical, Benguela Safari, Lobito City Tour, Quedas de Calandula, Malanje City Tour, Quedas de Musseleje, plus the two real Services-page offerings (Consultoria de Roteiro, Serviços de Concierge). For these, only verifiable facts (name, province, real published price where one exists) are used as-is; the *original* one-paragraph descriptions were thin and partly duplicated, so any expanded description/itinerary/highlights we write for a verified experience is a **conceptual enrichment of a real offering**, not fabricated fact, and is treated as draft copy pending the client's own approval — not presented as if Angola Experience already publishes that exact wording today.
- **`conceptual`** — invented purely to demonstrate the richer experience structure (e.g., an illustrative experience in a flagship province with no real-tour equivalent). These must never be presented as if they are current, bookable Angola Experience products.

**UI consequence:** the experience catalogue and detail template visibly distinguish the two states (e.g., a small tag — "Oferta atual da Angola Experience" vs. "Conceito de demonstração"). This is not just internal documentation — the client was explicit that fictional experiences must not be presented as existing products, so the distinction needs to be visible in the demo itself, not only in this strategy document.

## 6.3 Pricing content rule (client-confirmed)

- **Verified experiences that correspond to a real Angola Experience service with a real published price** (currently: the two Services-page offerings, Consultoria de Roteiro and Serviços de Concierge, in AOA) may show that real price.
- **All conceptual experiences, and any verified tour that has no real published price** (i.e., every tour in the catalogue — their prices were empty/broken on the live site), show **"Preço mediante consulta"** (price upon inquiry) with a direct CTA into the contact/WhatsApp flow. No numeric price is ever invented.

## 6.4 Catalog depth

10–14 experiences total, distributed across the flagship provinces confirmed in §4.3 (roughly 2–4 each), mixing `verified` and `conceptual` entries per §6.2. This is enough for `/experiencias` to feel like a real, filterable catalogue (by province and by interest) without reproducing all ~60 tours from the live site.

---

# 7. Trust & Social Proof

The audit's clearest gap: zero visible reviews, stories, or proof anywhere on the live site.

## 7.1 Client decision (supersedes v1.0 draft)

The client was explicit and stronger than the original draft here: **no real customer photos, testimonials, reviews, or videos without authorization** (unchanged), but also — the demo must use **premium conceptual placeholders that clearly communicate where real customer stories, photography, testimonials and video would eventually live**, and must **not use generic stock photography in a way that could make it appear to be a real Angola Experience customer**.

This is a meaningfully more conservative approach than "write a polished but fake testimonial." A fake quote attributed to a generic descriptor next to a stock photo of a smiling tourist would still risk reading as a real customer. So instead of *simulating* real testimonials, the demo **visibly frames these as reserved space for real future content** — designed to a premium standard, not a broken or cheap-looking empty state, but honest about what it is.

## 7.2 What we build

A `/historias` hub plus supporting modules on the homepage and experience pages, using an editorial "reserved for real content" pattern rather than simulated-real testimonials:

- **Traveler story slots**: elegantly designed cards that name the *shape* of the future content (e.g., a province/interest tag and a short framing line such as "Aqui viverá a história real de um viajante nesta experiência") rather than an invented narrative presented as if a real traveler wrote it.
- **Testimonial slot format**: a designed quote-card *shape* (quotation mark, attribution line, layout) shown in a clearly editorial/placeholder treatment — not filled with an invented quote attributed to a fabricated person.
- **Photo/video "wall" structure**: a real, working gallery/grid component and layout, populated with **non-human, non-customer-identifiable imagery** (landscape/atmosphere photography or abstract/graphic treatment — see §11.2) rather than stock photography of people that could be mistaken for real clients.

## 7.3 Integrity rules (non-negotiable)

- No invented named customers, no stock/AI photos of people presented as if they are real Angola Experience travelers, no invented star ratings, review counts, "10,000 happy travelers"-style numbers, or celebrity/press mentions.
- No stock photography of identifiable people used anywhere near a testimonial, quote, or story slot — the risk of it being mistaken for a real customer is exactly what the client flagged.
- Where attribution text appears at all, it names the *category* of content that will go there (e.g., "Espaço reservado — história de viajante"), not a fabricated persona.
- The placeholder nature must be **visible in the demo UI itself**, not only documented internally — this is a change from the v1.0 draft, made at the client's explicit direction.

## 7.4 Video without video assets

We do not have rights to real Angola Experience video. Rather than sourcing unrelated stock video, the "cinematic" feeling (see §11) is achieved through **slow Ken Burns-style pan/zoom on still imagery** — a deliberate, low-risk technique that delivers motion and atmosphere without needing licensed footage. True video slots can be documented as a future enhancement (§13) rather than built now.

---

# 8. Destination Guide Content (Flagship Provinces)

For the flagship provinces confirmed in §4.3, `/explorar/[provincia]` goes beyond a tour-catalog page and becomes a genuine mini destination guide:

- O que ver (what to see)
- O que fazer (what to do) → linked experiences
- Cultura
- Paisagens
- Gastronomia
- Informação prática (getting there, safety basics, what to pack)
- Melhor época para visitar

This is the concrete proof of "the website could become more than a tour catalogue" — demonstrated fully on the flagship set, structurally scalable to all 21 provinces.

---

# 9. Human Side of the Brand

**Client decision:** do not invent team members, biographies, roles, achievements, or any personal information. Use only publicly verifiable information; since that material is limited, `/sobre` stays focused on the **brand/company story**, with a clearly designed, empty **structural slot reserved for approved founder/team content to be added later** (not filled with placeholder people or invented bios in the meantime).

`/sobre` evolves the current company blurb into something warmer — larger photography, a clearer mission statement, a "local expertise" framing — but **only using what the live site already verifiably states** (dedication to showcasing Angola, a team of specialists, a commitment to quality and sustainability). No founder name, biography, headshot, or personal history is invented, and no generic "the team" stock-photo montage is used as a stand-in for real people.

Recommended treatment:
- A brand/company-story section (mission, connection to Angola, approach) — real, paraphrased from verified source content.
- A visually distinct, clearly-labeled **"Founder & Team" reserved section** — a designed placeholder (e.g., "Esta secção está reservada para apresentar a equipa e fundador(es) da Angola Experience") rather than invented names/roles/photos — so the *structure* for future trust-building content is obviously there without fabricating anything to fill it.

---

# 10. Conversion Journey

```
Discovery (Home)
   → Exploration (Explorar: province or interest)
      → Experience (Experience detail)
         → Trust (Histórias / Sobre)
            → Contact / Reservation (Contacto, or WhatsApp at any point)
```

WhatsApp is treated as a **first-class, always-available conversion channel**, not just a Contact-page feature — a persistent WhatsApp affordance is available from the experience detail page and the closing band of most major pages, directly preserving the audit's identified strength. Every major content module (province page, experience page, story page) ends in a contextual CTA rather than assuming the visitor will independently find Contacto.

**Client decision on the WhatsApp number:** the demo uses Angola Experience's real, publicly listed number (**+244 923 790 953**, published on the live site's homepage and Contact page), since the demo is being presented directly to the company itself. This is documented here as publicly available information, not a private detail we sourced privately. **If this demo is ever circulated more broadly than the client's internal review** (e.g., shared publicly, sent to third parties, used in a public portfolio), the number should be swapped for a non-functional placeholder first, to avoid routing real inquiries to Angola Experience's real WhatsApp inbox from a non-production demo. One pre-Build item remains: the live site publishes two phone numbers (+244 923 790 953 and +244 930 928 402); which one is actually WhatsApp-enabled should be confirmed rather than assumed before wiring the `wa.me` link.

---

# 11. Visual Direction

Full design tokens belong to Phase 3 (Design), but the direction is fixed here so Design doesn't re-litigate strategy:

- **Keep** the gold/black identity and the circular sun/spiral logo language as the anchor — evolve its execution (typography, spacing, restraint), don't replace it.
- **Photography-led**, not illustration-led. Aerial/landscape/golden-hour direction, consistent with what already works on the live site.
- Cinematic **only where it serves discovery** (province hero, homepage) — via slow pan/zoom on stills, not autoplay video or heavy WebGL.
- One deliberate type system (fixes the audit's five-competing-fonts finding).
- African without cliché: no generic safari/tribal stock imagery; specificity (named provinces, real landmarks like Serra da Leba, Quedas de Calandula) is the antidote to genericness.
- Avoid: glassmorphism, decorative gradients, animation without purpose, particle effects, and the "template SaaS" look `Anti-AI-Design.md` warns against.

## 11.1 Motion — what deserves animation

- Hero entrance (text/image reveal), once, on load.
- Scroll-triggered section reveals — subtle, one-time, not on every element.
- Ken Burns pan/zoom on hero and story imagery (see §7.4).
- Card hover states on province/experience grids (subtle elevation/scale).
- Interest picker → results transition (progressive disclosure, reinforces that a real filter just happened).
- Persistent WhatsApp affordance entrance.

**Explicitly avoid:** parallax stacking, particle backgrounds, competing animation libraries (a direct callback to the audit's plugin-bloat finding), and motion on elements that don't need attention.

## 11.2 Media sourcing priority (client-confirmed, three tiers)

1. **Verified/publicly usable brand assets** — the real Angola Experience logo and brand mark. Since this demo is presented directly to the company, using their own real logo is appropriate and makes the demo read as "your site, evolved" rather than a generic template. This does **not** extend to real customer photography, video, or testimonials — those remain off-limits per §7.
2. **Neutral or clearly conceptual placeholders for anything customer-related** — traveler stories, testimonials, "people" imagery. Per §7.2, this means abstract/graphic/editorial placeholder treatment, not photographs of identifiable people.
3. **Carefully selected, properly licensed atmospheric imagery** — for province/landscape/destination photography where no real Angola Experience asset exists, used **only** where it cannot be mistaken for real Angola Experience customer content (i.e., landscapes, landmarks, and general atmosphere — not staged "tourist enjoying their trip" photography that implies a real client).

## Media placeholders needed

Home hero · province cards + province hero (all 21 provinces, full imagery on flagship set) · interest icons · experience gallery + hero (all experiences) · story/testimonial slots (§7, editorial placeholder treatment, not photos of people) · about/company-story imagery (brand-level, not team headshots) · contact banner.

---

# 12. Content Matrix — Real/Verified vs. Conceptual/Placeholder

| Content | Status |
|---|---|
| Company name, contact channels (phone, email, WhatsApp, social handles), real logo/brand mark, general mission language | Real — already publicly published by Angola Experience; WhatsApp number used as-is per §10 |
| Province names, geography, real landmarks (Serra da Leba, Quedas de Calandula, Ilha do Mussulo, etc.) | Real — verified in §4.1 against public sources; Cabo Ledo's province tag needs the Icolo e Bengo check noted there |
| Services pricing (roteiro/concierge, in AOA) | Real — already published; **may be shown as-is** (client-confirmed, §6.3) |
| Verified tours (Mussulo, Cabo Ledo, Benguela Tropical/Safari, Lobito, Malanje trio) | Real offerings, but **expanded descriptions/itineraries are conceptual enrichment** pending client approval — see §6.2 |
| Conceptual/demo-only experiences | **Fully conceptual** — clearly labeled as demonstration, never presented as an existing product (§6.2) |
| All experience prices except the two real Services-page items | **Not fabricated** — shown as "Preço mediante consulta" |
| Traveler stories, testimonials, reviews, photos/video of "customers" | **Not simulated** — shown as clearly-labeled reserved placeholder slots, not invented content (§7) |
| Founder/team bios | **Not built** — `/sobre` stays at company/brand-story level with a labeled reserved slot for future approved content (§9) |
| Visitor numbers, awards, press mentions, client counts | **Not built at all** — no invented statistics of any kind |

---

# 13. What Should Explicitly NOT Be Built

Per the client's direction, the following are documented as future considerations only — not implemented in this demo:

- CMS / content backend
- Authentication / accounts
- Payments
- Real booking backend or availability system
- CRM integration
- Analytics infrastructure
- AI recommendation engine
- External/third-party APIs
- Admin dashboard
- Multi-language system
- Multi-currency system
- Real video assets/hosting pipeline

The demo simulates the *experience* of these where relevant (e.g., a booking form that visually works and hands off to WhatsApp) without the underlying system.

---

# 14. Decisions Log (resolved in v1.1)

All five items open in v1.0 have been resolved by client direction and/or verification research. Kept here as a record rather than deleted, so Design/Build never has to guess why the strategy reads the way it does.

| # | Decision | Resolution |
|---|---|---|
| 1 | WhatsApp number | **Resolved** — use the real published number (+244 923 790 953), documented as public info, replace with a placeholder only if the demo is ever circulated beyond the client's internal review. See §10. One remaining pre-Build check: confirm which of the two published numbers is WhatsApp-enabled. |
| 2 | Human-side/team content | **Resolved** — no invented team/founder content. `/sobre` stays at brand/company-story level with a labeled, empty reserved slot for future approved founder/team content. See §9. |
| 3 | Placeholder media sourcing | **Resolved** — three-tier priority: real brand assets (logo) where appropriate; clearly conceptual/abstract placeholders for anything customer-related; carefully selected licensed atmospheric imagery elsewhere, never used in a way that implies a real customer. See §11.2. |
| 4 | Services pricing reuse | **Resolved** — real AOA prices may be shown as-is for the two real Services-page offerings; all other experience pricing (verified tours with no real price, and all conceptual experiences) shows "Preço mediante consulta," never a fabricated number. See §6.3. |
| 5 | Province administrative data | **Resolved via research** — Angola has 21 provinces as of the 2024 reorganization (up from 18); full list, sources, and one accuracy nuance (Cabo Ledo / Icolo e Bengo) documented in §4.1. |

**One new item raised by this revision, for approval:** the flagship-province recommendation in §4.3 (6 provinces: Luanda, Benguela, Huíla, Namibe, Malanje, Cuanza Sul) is presented for sign-off, not assumed. See the summary sent alongside this document.

---

# 15. Recommended Implementation Sequence

1. Design system foundation (type, color, spacing, component shells) — Phase 3, informed by §11.
2. Layout shell + navigation + homepage.
3. Experience data model + `/experiencias` catalog + `/experiencias/[slug]` template (this unlocks everything else, since provinces and interests both link into it).
4. `/explorar` province grid (all 21 provinces) + `/explorar/[provincia]` template (flagship set from §4.3 fully built, remaining provinces as coming-soon stub state).
5. `/explorar/interesses` interest picker, wired to the same experience data.
6. `/historias` trust hub + homepage/experience-page trust modules.
7. `/sobre` human-side page.
8. `/contacto` (form + WhatsApp + FAQ).
9. Custom 404, final motion/performance/accessibility pass.

This order front-loads the experience model because both discovery paths (province and interest) depend on it — building it third avoids reworking either discovery surface later.

---

# Summary — Answers at a Glance

| Question | Answer |
|---|---|
| Final demo structure | 7 routes + 2 dynamic templates, listed in §2 |
| Homepage narrative | Cinematic hero → dual discovery entry → featured experiences → why-us → trust preview → human teaser → conversion band (§3) |
| Explore Angola | All 21 current provinces represented; 6 recommended flagship provinces fully realized (§4.3, pending approval), rest as scalable "coming soon" cards (§4) |
| Explore by interest | 8-tag taxonomy, shared with experiences, real filtering, no recommendation engine (§5) |
| Experiences | Full structured model; each entry labeled `verified` (real offering, enriched copy pending approval) or `conceptual` (demo-only, never presented as real); no fabricated prices except real Services-page items; 10–14 built (§6) |
| Trust/social proof | `/historias` + homepage/experience modules — visibly-labeled reserved placeholder slots, not simulated real testimonials/photos (§7) |
| Human side of brand | Brand/company-story only; no invented founder/team; labeled reserved slot for future approved content (§9) |
| Conversion journey | Discovery → Exploration → Experience → Trust → Contact, WhatsApp persistent throughout, real published number used (§10) |
| Visual direction | Gold/black evolved, photography-led, restrained motion, tiered media sourcing (§11) |
| Not built | CMS, auth, payments, booking backend, CRM, analytics, AI engine, external APIs, admin, multi-language/currency (§13) |
| Implementation order | Design system → shell/home → experiences → explore/provinces → interests → trust → about → contact → polish (§15) |
