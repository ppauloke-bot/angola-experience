import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";
/** "inverted" is for buttons placed directly on Ink/photography backgrounds (e.g. hero). */
type Tone = "default" | "inverted";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-body font-medium font-body transition-[transform,background-color,border-color,color,opacity] duration-[var(--duration-fast)] ease-[var(--ease-feedback)] active:scale-[0.98]";

const variants: Record<Variant, Record<Tone, string>> = {
  primary: {
    // Gold fill + Ink text only — white-on-gold fails WCAG AA (§2.2).
    default: "bg-gold text-ink hover:bg-[color-mix(in_oklab,var(--color-gold)_88%,black)]",
    inverted: "bg-gold text-ink hover:bg-[color-mix(in_oklab,var(--color-gold)_88%,black)]",
  },
  secondary: {
    default: "border border-ink/25 text-ink bg-transparent hover:bg-ink-faint",
    inverted: "border border-cream/40 text-cream bg-transparent hover:bg-cream/10",
  },
  ghost: {
    default: "text-ink hover:bg-ink-faint",
    inverted: "text-cream hover:bg-cream/10",
  },
};

interface CommonProps {
  variant?: Variant;
  tone?: Tone;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  tone = "default",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant][tone], className);

  if ("href" in props && props.href) {
    const { href, children, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
