/**
 * Author/license per photo, transcribed from `IMAGE_CREDITS.md`.
 *
 * `IMAGE_CREDITS.md`'s standing "known gap" was that the CC BY / CC BY-SA
 * images carry no on-page, human-visible credit — which those licenses
 * actually require, and the demo is publicly deployed. This map exists so
 * the editorial photography on the homepage can carry a real credit line
 * (`PhotoCredit`), and the footer can carry a blanket one, instead of the
 * credit living only in a Markdown file nobody visiting the site reads.
 *
 * CC0 entries are included deliberately: no attribution is legally
 * required for them, but a credit line under a large editorial image is
 * part of the design language here, not a legal checkbox — leaving only
 * some images credited would read as an oversight.
 */
export interface PhotoCreditEntry {
  author: string;
  license: string;
}

export const photoCredits: Record<string, PhotoCreditEntry> = {
  "/images/serra-da-leba-huila.jpg": { author: "Valmir144", license: "CC BY-SA 4.0" },
  "/images/marginal-luanda.jpg": { author: "Paulo César Santos", license: "CC0" },
  "/images/quedas-de-calandula-malanje.jpg": { author: "Paulo César Santos", license: "CC0" },
  "/images/cabo-ledo-icolo-e-bengo.jpg": { author: "Paulo César Santos", license: "CC0" },
  "/images/deserto-do-namibe.jpg": { author: "David Stanley", license: "CC BY 2.0" },
  "/images/pedras-negras-pungo-andongo-malanje.jpg": { author: "Paulo César Santos", license: "CC0" },
  "/images/coatinha-benguela.jpg": { author: "jlrsousa", license: "CC BY-SA 2.0" },
  "/images/restinga-do-lobito.jpg": { author: "jlrsousa", license: "CC BY-SA 2.0" },
  "/images/fortaleza-sao-miguel-luanda.jpg": { author: "Paulo César Santos", license: "CC0" },
  "/images/praia-do-sumbe-cuanza-sul.jpg": { author: "jlrsousa", license: "CC BY-SA 2.0" },
  "/images/barragem-das-mabubas-bengo.jpg": { author: "Rogério Melo", license: "CC BY 3.0" },
  "/images/rua-principal-kuito-bie.jpg": { author: "Nilton Huey Pensante", license: "CC0" },
  "/images/cambambe-cuanza-norte.jpg": { author: "Luís Rochinha", license: "CC BY 3.0" },
  "/images/morro-do-moco-huambo.jpg": { author: "MagníficoRosário", license: "CC BY-SA 4.0" },
  "/images/lagoa-da-quiminha-icolo-e-bengo.jpg": { author: "Rogério Melo", license: "CC BY 3.0" },
  "/images/rua-saurimo-lunda-sul.jpg": { author: "Fmanuel090", license: "CC BY-SA 4.0" },
  "/images/jardim-palacio-governador-luena-moxico.jpg": {
    author: "Pereira Santos Samuel",
    license: "CC BY-SA 3.0",
  },
};

export function getPhotoCredit(src: string) {
  return photoCredits[src];
}
