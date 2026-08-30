import { siteConfig } from "@/lib/site-config";

/**
 * Contact channels module (§3.6) — the audit's "multi-channel contact
 * page" strength (§9 of the audit), preserved: email, WhatsApp, a second
 * phone line, address, and social, all using only what's already in
 * `site-config.ts`. Only the WhatsApp number is presented as a WhatsApp
 * channel — the secondary number is labeled plainly as a phone line,
 * since which number is WhatsApp-enabled was never confirmed
 * (Website-Strategy.md §10).
 */
const channels = [
  { label: "WhatsApp", value: siteConfig.whatsappNumberDisplay, href: `https://wa.me/${siteConfig.whatsappNumber}` },
  { label: "Telefone", value: siteConfig.secondaryPhoneDisplay, href: `tel:${siteConfig.secondaryPhoneDisplay.replace(/\s/g, "")}` },
  { label: "E-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Endereço", value: siteConfig.address, href: undefined },
];

export function ContactChannels() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {channels.map((channel) => (
        <div key={channel.label}>
          <p className="text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
            {channel.label}
          </p>
          {channel.href ? (
            <a href={channel.href} className="mt-1 block text-h3 font-display font-semibold text-ink hover:text-gold">
              {channel.value}
            </a>
          ) : (
            <p className="mt-1 text-h3 font-display font-semibold text-ink">{channel.value}</p>
          )}
        </div>
      ))}
      <div>
        <p className="text-caption font-medium uppercase tracking-[0.1em] text-terracotta">
          Redes sociais
        </p>
        <div className="mt-1 flex gap-4">
          <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-h3 font-display font-semibold text-ink hover:text-gold">
            Facebook
          </a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-h3 font-display font-semibold text-ink hover:text-gold">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
