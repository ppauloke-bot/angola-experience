/**
 * Verified, publicly-published Angola Experience facts only (Core/CLAUDE.md
 * confidence rules — no invented contact details). WhatsApp number use is
 * a client-confirmed decision (Website-Strategy.md §10): the real number
 * is used because this demo is presented directly to the company.
 *
 * Sourced from Website-Audit.md / Website-Strategy.md plus a direct check
 * of the live site's contact page during Build. Phone numbers corroborate
 * exactly across both sources. Email, address and social handles were
 * confirmed via that contact-page check but not independently re-verified
 * by a second method — worth a final human check before any real,
 * client-facing use of this data.
 */
export const siteConfig = {
  name: "Angola Experience",
  whatsappNumber: "244923790953",
  whatsappNumberDisplay: "+244 923 790 953",
  secondaryPhoneDisplay: "+244 930 928 402",
  email: "geral@angolaexperience.com",
  address: "Nova Vida, Luanda, Angola",
  social: {
    facebook: "https://facebook.com/angolaexperience",
    instagram: "https://instagram.com/angolaexperience",
  },
} as const;

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * `/historias` is deliberately **not** in this list. The page exists and
 * still works, but every slot on it is a "reserved for real content"
 * placeholder — by design, since there are no authorized traveler stories
 * or testimonials yet (Website-Strategy.md §7.1, which this project will
 * not fill with invented social proof). Linking it from the main menu
 * invites a click straight into the one page that looks unfinished.
 *
 * Restoring it is a one-line change: add
 * `{ label: "Histórias", href: "/historias" }` back, once real stories
 * exist to put there.
 */
export const mainNavItems = [
  { label: "Início", href: "/" },
  { label: "Explorar Angola", href: "/explorar" },
  { label: "Experiências", href: "/experiencias" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contacto", href: "/contacto" },
] as const;
