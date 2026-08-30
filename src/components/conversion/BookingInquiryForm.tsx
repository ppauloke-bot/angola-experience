"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/site-config";

/**
 * Name/email/phone/notes form, visual only — no backend (§4.5,
 * Website-Strategy.md §13). Submitting hands off to WhatsApp with the
 * entered details pre-filled, exactly the simulated pattern §13
 * describes: "a booking form that visually works and hands off to
 * WhatsApp" without a real booking system behind it. Real `<label>`
 * elements throughout, not placeholder-as-label (§8, Core/Accessibility.md).
 *
 * `context` is optional so the same component serves both the experience
 * detail page ("tenho interesse em: Quedas de Calandula") and the general
 * `/contacto` page (no specific experience — a plain introduction instead)
 * without a second, parallel form pattern.
 */
export function BookingInquiryForm({ context }: { context?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const intro = context
      ? `Olá! Chamo-me ${name || "(nome)"} e tenho interesse em: ${context}.`
      : `Olá! Chamo-me ${name || "(nome)"}. Gostaria de saber mais sobre viagens com a Angola Experience.`;
    const message = [
      intro,
      phone ? `Telefone: ${phone}` : null,
      email ? `E-mail: ${email}` : null,
      notes ? `Notas: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-ink/10 bg-cream-muted p-6">
      <div>
        <label htmlFor="booking-name" className="text-caption font-medium text-ink-muted">
          Nome
        </label>
        <input
          id="booking-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full rounded-[var(--radius-card)] border border-ink/20 bg-cream px-4 py-2.5 text-body text-ink outline-none focus-visible:border-gold"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-email" className="text-caption font-medium text-ink-muted">
            E-mail
          </label>
          <input
            id="booking-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-[var(--radius-card)] border border-ink/20 bg-cream px-4 py-2.5 text-body text-ink outline-none focus-visible:border-gold"
          />
        </div>
        <div>
          <label htmlFor="booking-phone" className="text-caption font-medium text-ink-muted">
            Telefone
          </label>
          <input
            id="booking-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-[var(--radius-card)] border border-ink/20 bg-cream px-4 py-2.5 text-body text-ink outline-none focus-visible:border-gold"
          />
        </div>
      </div>
      <div>
        <label htmlFor="booking-notes" className="text-caption font-medium text-ink-muted">
          Notas (datas, número de pessoas, pedidos especiais)
        </label>
        <textarea
          id="booking-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-[var(--radius-card)] border border-ink/20 bg-cream px-4 py-2.5 text-body text-ink outline-none focus-visible:border-gold"
        />
      </div>
      <Button type="submit" className="self-start">
        Enviar por WhatsApp
      </Button>
      <p className="text-caption text-ink-muted">
        Ao enviar, abrimos o WhatsApp com estes detalhes já preenchidos — não guardamos estes dados.
      </p>
    </form>
  );
}
