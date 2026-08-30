import type { FAQItem } from "@/components/conversion/FAQAccordion";

/**
 * Five topics — visto, segurança, o que levar, reservas, saúde — are the
 * exact set `Website-Strategy.md` §2 names as "pre-decision anxieties
 * that belong right at the conversion moment" (visas, safety, packing,
 * booking, health), and `Website-Audit.md` confirms the real site already
 * has FAQ content on these same topics, just thin ("6 unanswered-in-preview
 * accordion questions, not real destination guide content").
 *
 * These answers are original content on those same topics — conservative,
 * general, hedged where a specific claim would require verified company
 * policy or medical/legal fact this project doesn't have (visa rules by
 * nationality, vaccine requirements, response-time SLAs). The booking
 * answer describes only the mechanism actually built on this site
 * (WhatsApp + form, no automated booking), which is also true of the real
 * site per the audit — not a claim invented for the demo.
 */
export const faqItems: FAQItem[] = [
  {
    question: "Preciso de visto para viajar para Angola?",
    answer:
      "Depende da sua nacionalidade — muitos visitantes precisam de visto antes da chegada. Recomendamos confirmar os requisitos atuais junto da embaixada ou consulado de Angola no seu país antes de viajar.",
  },
  {
    question: "Angola é um destino seguro para viajar?",
    answer:
      "Como em qualquer destino, vale a pena seguir as precauções habituais — evitar exibir objetos de valor, confirmar percursos com antecedência e manter-se atento em zonas movimentadas. Podemos partilhar recomendações mais específicas consoante o roteiro escolhido.",
  },
  {
    question: "Que roupa e equipamento devo levar?",
    answer:
      "Depende muito da região e da época do ano — o litoral é tropical, o planalto é mais fresco e o sul pode ser árido e quente durante o dia. Em geral, recomendamos roupa leve e respirável, um casaco para as manhãs mais frias no planalto, protetor solar e calçado confortável para caminhadas.",
  },
  {
    question: "Como funciona o processo de reserva?",
    answer:
      "Pode contactar-nos diretamente pelo WhatsApp ou através do formulário nesta página — respondemos com os detalhes disponíveis e ajudamos a construir o roteiro a partir daí, sempre com confirmação direta pela equipa.",
  },
  {
    question: "Preciso de alguma vacina ou cuidado de saúde específico?",
    answer:
      "Recomendamos consultar um médico ou centro de saúde de viagem antes de partir, já que os requisitos podem variar consoante o país de origem e o roteiro escolhido. Leve sempre água potável e protetor solar.",
  },
];
