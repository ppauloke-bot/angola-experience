import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StickyWhatsAppButton } from "@/components/layout/StickyWhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Angola Experience — Viagens por Angola",
    template: "%s · Angola Experience",
  },
  description:
    "Descubra Angola com a Angola Experience: destinos, experiências e roteiros por todo o país, de Luanda a Namibe.",
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
