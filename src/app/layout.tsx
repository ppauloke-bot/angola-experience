import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StickyWhatsAppButton } from "@/components/layout/StickyWhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://angola-experience.vercel.app"),
  title: {
    default: "Angola Experience — Viagens por Angola",
    template: "%s · Angola Experience",
  },
  description:
    "Descubra Angola com a Angola Experience: destinos, experiências e roteiros por todo o país, de Luanda a Namibe.",
  // Without this, sharing the link (in a WhatsApp message, for instance)
  // produces a bare text preview with no image — the first impression of
  // the site, before anyone opens it.
  openGraph: {
    type: "website",
    siteName: "Angola Experience",
    locale: "pt_PT",
    title: "Angola Experience — Viagens por Angola",
    description:
      "Da Serra da Leba ao deserto do Namibe: destinos, experiências e roteiros por todas as 21 províncias.",
    images: [
      {
        url: "/images/serra-da-leba-huila.jpg",
        width: 2944,
        height: 1536,
        alt: "A estrada em ziguezague da Serra da Leba, na Huíla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <StickyWhatsAppButton />
      </body>
    </html>
  );
}
