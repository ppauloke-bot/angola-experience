# Website Audit — Angola Experience (angolaexperience.com)

Version: 1.0

Phase: 1 — Understanding

Date: 2026-08-27

---

# Purpose

This document is the Phase 1 audit of the current Angola Experience website (https://angolaexperience.com/), produced before any strategy or design decisions for the demo project.

It follows the methodology defined in `Core/Website-Analysis.md`. All findings below were verified through direct browser inspection (homepage, tour listing, a tour detail page, About, FAQ, Services, Contact, 404) plus inspection of network requests to understand the technical stack. No private or internal company data was accessed — only what is publicly visible on the live site.

One note on method: an initial automated content summary (a single fast fetch) claimed a few things that direct browser verification did not confirm — a specific hero headline ("Encontre o Nosso Sonho"), a homepage testimonials section, and stray GitHub links in the footer. None of these were found on direct inspection, so they are excluded from this audit. Everything below was seen directly.

Per `Core/CLAUDE.md` confidence rules: this document separates confirmed observations from a small number of explicitly flagged assumptions (e.g., mobile-viewport behavior, which could not be reliably forced in the browser-automation session used).

---

# 1. Current Website Structure

**Platform:** WordPress + Elementor (page builder), Portuguese-only, no currency/language switcher exposed to users despite a translation plugin being loaded.

```
Home
Sobre (dropdown)
 ├─ Angola Experience (/sobre/) — company blurb + FAQ excerpt
 └─ Perguntas Frequentes (/perguntas-frequentes/) — same 6 FAQ items, own page
Serviços (/servicos/) — 6 priced service cards
Passeios por Angola (/passeios-por-angola/) — tour catalog, 7 pages (~60 tours)
 └─ individual tour pages (e.g. /tour-por-mussulo/)
Contacto (/contacto/) — contact info, socials, form, map
Footer: Política de Privacidade (typo'd sitewide as "Privacidadde")
404: generic snow-mountain/wildflower stock photo (off-brand, never customized)
```

Homepage flow (confirmed by scrolling the live page): Hero → 3 featured tours → "Porquê Viajar Connosco" (4 value props) → assistance/CTA banner → "Como Funciona" (3 steps) → footer. No testimonials, reviews, or user-generated content anywhere on the site.

---

# 2. What Works Well (strengths to preserve or evolve)

- **Genuinely strong destination photography** where it appears — aerial drone shots of Ilha do Mussulo, the Serra da Leba mountain road, Malanje's canyons, historic Luanda monuments. This is the site's biggest existing asset and proof the brand *can* look premium.
- **A distinct brand palette** — warm gold/yellow + black/dark neutrals reads as "Angolan sun," and is more distinctive than the generic blue/teal most travel sites default to.
- **WhatsApp as a first-class booking channel**, sitting next to a normal form on tour pages. This is the right instinct for the Angolan/African market.
- **Transparent, itemized pricing in AOA** on the Services page (roteiro consulting: 25,000/35,000 AOA; concierge: 10,000–100,000 AOA). Travel buyers hesitate most over hidden pricing — this is a real trust builder that the tour catalog itself completely lacks.
- **A sane, small information architecture.** Home / About+FAQ / Services / Tours / Contact is not over-built. The problem is depth, not structure.
- **The tour-detail template's skeleton is the right idea** — a sidebar with Duration, price, a booking form, *and* a WhatsApp button. It's currently broken (see below) but the pattern itself is correct and worth evolving rather than replacing.
- **Multi-channel contact page** (2 phone numbers, email, WhatsApp, Facebook, Instagram, address, embedded map) — good coverage of trust/contact signals in one place.

---

# 3. What Should Be Improved

**Critical**
- **Broken tour detail sidebar**: the "Duração" (duration) field has no value, and "A partir de" (starting price) has no value *and* visually overlaps the "E-mail" form label — a real, live layout bug that undermines trust at the exact moment someone is deciding to book. (Verified on `/tour-por-mussulo/`.)
- **Duplicate, copy-pasted tour descriptions**: "Benguela Tropical," "Benguela Safari," and "Lobito City Tour" share one identical paragraph verbatim; the three Malanje tours ("Quedas de Calandula," "Malanje City Tour," "Quedas de Musseleje") share another identical paragraph. Visitors — and search engines — can't tell these tours apart. (Verified via the tour catalog listing text.)
- **Tour pages are one paragraph long.** No itinerary, no inclusions/exclusions, no gallery, no map, no group size, no difficulty, no best season — everything `Business-Specific/Travel.md` flags as essential to reduce booking anxiety is missing.

**High Priority**
- Hero image loads very late (appeared only on a repeat visit, with a large blank void beside the headline in the meantime) — a likely LCP/lazy-loading problem on the single most important piece of visual real estate on the site.
- No reviews, testimonials, ratings, or traveler photos anywhere, despite the footer *claiming* "uma base de clientes satisfeitos" (a satisfied client base) — an assertion with zero visible proof.
- Two sitewide typos in the shared footer ("Privacidadde", "Concierg") — trivial to fix, appears on every page since it's one shared footer widget.
- Google Map on the Contact page is pinned generically to "Luanda," not the actual office location.
- 404 page uses an unrelated snowy-mountain/wildflower stock photo — breaks brand consistency at a moment that should recover trust, not undermine it.

**Medium Priority**
- On the Services page, two "Consultoria de Roteiros Personalizados" cards and three "Serviços de Concierge" cards each reuse the *identical heading*, differentiating only in small body text — weak scannability for otherwise good, transparent content.
- Tour catalog has no filtering by destination/activity/duration/price despite a search-filter plugin being loaded — just a flat, paginated blog-style grid ("Ler Mais"). Tours are implemented as ordinary WordPress posts, not a dedicated tour/product content model.

---

# 4. UX Opportunities

- Turn tours into a real destination-discovery experience: filter/browse by region (Luanda, Benguela, Huíla, Namibe, Malanje…), trip type (beach, culture, nature, adventure), or duration — the Travel.md "Inspiration → Discovery → Evaluation → Trust → Booking" journey currently collapses discovery into "scroll through 7 pages of a blog."
- Fix and complete the booking sidebar (duration, real price or price range, inclusions) so the existing form + WhatsApp pattern actually earns the click.
- Give each tour a real content shape: overview → highlights → sample itinerary → what's included → practical info — reusable as a template across all ~60 tours, which also solves the duplicate-content problem structurally.
- Surface trust signals (reviews, photos from real trips, a "why book with us" that isn't just 4 generic icons) earlier in the journey, not only as a text claim in the footer.

# 5. Visual/Design Opportunities

- Build one deliberate type system — the live site currently loads five Google Font families (Poppins, Lato, Josefin Sans, Roboto, Roboto Slab) at once, which is plugin sprawl rather than a brand decision.
- Replace the generic flat "value prop" icon set (map-pin person, camera, badge, plant) with something that feels specific to Angola/this brand rather than stock-icon-pack generic — this is exactly what `Core/Anti-AI-Design.md` warns against.
- Give the hero and page-header banners more variety and intent — right now several interior pages (Sobre, Serviços) reuse the same Welwitschia-plant banner photo regardless of topic.
- Keep the gold/black palette and the aerial-photography sensibility — that part of the visual language is worth carrying forward and elevating, not discarding.

# 6. Content/Discovery Opportunities

- Real per-tour content: durations, prices/price ranges, itineraries, inclusions, best time to visit — `Business-Specific/Travel.md` is explicit that hidden information is the #1 travel-site anti-pattern, and this site currently has it on every single tour.
- De-duplicate the Benguela/Malanje cluster content; each tour needs its own distinct story even if tours share a region.
- Add a lightweight travel-guide/content layer (best time to visit, visas, safety, packing) — the FAQ already gestures at this (visa, safety, clothing, health questions exist) but only as 6 unanswered-in-preview accordion questions, not real destination guide content.
- Consider whether an international/diaspora audience is a real target; if so, Portuguese-only with no language toggle (despite a translate plugin already being loaded but not surfaced) is worth revisiting.

# 7. Conversion Opportunities

- Fix the broken price/duration fields — right now the strongest conversion moment (the booking sidebar) is the most visibly broken part of the site.
- Extend the transparent AOA pricing already used on the Services page to tours themselves.
- Add proof near the point of decision: reviews or trip photos alongside the booking form, not just generic "why travel with us" icons far above it.
- Clarify what happens after someone submits the "Reservar" form or taps "Reservar pelo Whatsapp" (confirmation, response time expectations) — reduces the "will anyone actually answer" anxiety `Business-Specific/Travel.md` calls out.

# 8. Technical / Performance / Accessibility Observations

- The homepage fires **95 network requests** before counting all images, coming from at least seven overlapping Elementor "addon" plugin suites running simultaneously (the-plus-addons, master-addons, royal-elementor-addons, sky-elementor-addons, elementskit-lite, happy-elementor-addons, bdthemes-prime-slider, essential-addons) plus **three separate parallax/particle JS libraries** (jarallax, parallax.js, particles.js) likely doing the job of one effect.
- Images are unoptimized camera exports (`IMG_6764.jpg`, `IMG_9302.jpg`, etc.) — no descriptive filenames (image SEO), no visible WebP/AVIF usage.
- A GDPR cookie-consent plugin, an SEO plugin (AIOSEO Lite), and a WhatsApp-chat plugin are all present and reasonable to keep conceptually — but the sheer plugin count is the main technical-debt story here, and a strong argument for a lean, modern rebuild rather than "more WordPress plugins."
- Accessibility wasn't deeply instrumented (no automated contrast/Lighthouse run performed), but observed manually: the price/email label overlap is a real content-obscuring bug; several body-copy blocks use light-gray-on-white text that should be contrast-checked; FAQ accordions are at least built from real buttons/links (a good semantic sign) though the expand interaction could not be fully confirmed to complete cleanly during this session.
- **Unverified / not directly tested in this session:** a true mobile viewport could not be reliably forced during the browser-automation audit (window-resize did not propagate to the rendered viewport). Mobile-specific claims are therefore inferred from layout patterns (justified body text, wide multi-column icon rows, sidebar-based tour layout) rather than directly observed, and should not be treated as confirmed scores.
- **Security note (flag only, not investigated further):** during testing, the live domain exhibited unexpected redirect behavior toward external cryptocurrency-related domains on at least one occasion. This is noted only as a technical issue for the client to investigate separately (e.g., compromised plugin, malicious ad/redirect script, or DNS/hosting issue). No claim is made about cause, scope, or whether the site was "hacked" — there is not enough evidence gathered here to support that conclusion. The demo project is built on entirely independent infrastructure and has no technical connection to the legacy site, so it is unaffected regardless of the cause.

---

# 9. What Could Be Preserved

- The gold/black brand palette and circular sun/spiral logo mark.
- The photography *style and ambition* (aerial/drone, golden hour, landmark-forward) — not the actual files, but the same visual language recreated with placeholder/conceptual media for the demo.
- WhatsApp as a primary, equal-weight booking channel alongside a form.
- Transparent line-item pricing as a pattern (currently only on Services — extend it, don't remove it).
- The simple, small top-level navigation (Home / About / Services / Tours / Contact) — the problem is page depth, not menu complexity.

# 10. What Should Be Rethought for the Demo

- Tours-as-blog-posts → a proper destination/tour content model with structured fields (duration, price, region, highlights, itinerary, inclusions).
- The single generic "why travel with us" icon block → something more specific to Angola's actual differentiators.
- The plugin-stacked WordPress technical foundation → a lean, purpose-built front end (fits `Core/Code-Standards.md` / `Core/Performance.md` directly).
- The undifferentiated repeated card headings on Services, and the copy-pasted tour descriptions.
- The complete absence of trust content (reviews, proof, real numbers) → needs a real (even if illustrative/placeholder) trust layer.

# 11. Important Things We Should Not Build Yet

- No real client photography, video, logos, or testimonials — placeholders/conceptual media only, since we don't have rights to reuse the real assets.
- No real booking/payment backend — a demo should *look* and *feel* like booking works (forms, WhatsApp CTA, price display) without wiring actual payments or CRM integration.
- No multi-language/multi-currency system — worth flagging as a future opportunity, not a Phase-1 build item.
- No CMS/admin backend decisions yet — that's an architecture choice for a later phase, not something to lock in during analysis.

---

# Final Note

This audit intentionally highlights strengths before problems, per `Core/Website-Analysis.md`. The core finding is that Angola Experience's current website is not a design failure so much as a **depth and infrastructure** failure: the brand instincts (color, photography direction, WhatsApp-first conversion, transparent pricing) are largely right, but the execution is shallow, inconsistent, and technically overloaded. This framing directly informs the Phase 2 strategy.
