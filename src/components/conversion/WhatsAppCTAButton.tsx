import { Button, type ButtonProps } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/site-config";

/**
 * Deep-links to `wa.me` with the real published number (§4.5,
 * Website-Strategy.md §10). Single place that builds the WhatsApp link so
 * every CTA across the site sends a consistent, well-formed message.
 */
export function WhatsAppCTAButton({
  message,
  children = "Falar no WhatsApp",
  variant = "primary",
  tone = "default",
  className,
}: {
  message: string;
  children?: ButtonProps["children"];
  variant?: ButtonProps["variant"];
  tone?: ButtonProps["tone"];
  className?: string;
}) {
  return (
    <Button
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      tone={tone}
      className={className}
    >
      {children}
    </Button>
  );
}
