import type { Experience, InterestTag } from "./types";

/**
 * 19 experiences. Originally 14 (Website-Strategy.md §6.4: 10–14 total),
 * expanded in a later round at the client's explicit request: several
 * flagship provinces had only one experience each, which read as too close
 * to the real site's own catalog-depth problem the whole rebuild exists to
 * fix. The client asked for roughly 2–4 experiences per flagship province
 * wherever real attractions support it — a deliberate, approved deviation
 * from the original 10–14 cap, not scope creep.
 *
 * 11 are `verified` — real Angola Experience offerings named in
 * Website-Audit.md, whose descriptions/itineraries/inclusions here are
 * original enrichment copy (§6.2: draft, pending the client's own approval,
 * never presented as their existing published wording).
 *
 * 8 are `conceptual`. 3 are from the original build, added only where a
 * flagship province (Huíla, Namibe, Cuanza Sul) had no real tour to draw on.
 * 5 more were added in this expansion round (Fenda da Tundavala and Baía dos
 * Tigres/Tchitundo-Hulu in the two provinces that still had only one
 * experience each, Miradouro da Lua for Luanda, Sumbe City Tour for Cuanza
 * Sul) — each built from real, independently-verified geography/history
 * (see WORKLOG.md for sources), never from an invented Angola Experience
 * offering, price, or policy. The `Conceito de Demonstração` badge and the
 * explicit "esta experiência é conceptual" framing in the description are
 * the same mechanism already used for the original 3 — no new distinction
 * was introduced for this round's additions.
 *
 * Every verified tour had an empty/broken price on the live site (audit
 * §3), so all of them use `priceType: "on-request"` per §6.3. Only the two
 * real Services-page items keep their real published AOA price.
 *
 * `itinerary` is always rendered with an explicit "itinerário exemplo"
 * label in the UI (§6.1) — for the two advisory services, it describes the
 * process (how the service works) rather than a place-based schedule,
 * since there's no destination itinerary to give. `included`/`notIncluded`
 * use deliberately conservative, industry-standard items (transport,
 * guide; not meals/personal expenses) rather than asserting specific
 * contractual terms nobody has verified.
 */
export const experiences: Experience[] = [
  {
    slug: "ilha-do-mussulo",
    title: "Ilha do Mussulo",
    provinceSlug: "luanda",
    interestTags: ["Praia", "Relaxamento"],
    status: "verified",
    duration: "Dia inteiro",
    summary:
      "Uma travessia de barco pela baía de Luanda até à península de areia mais procurada da cidade.",
    highlights: [
      "Travessia de barco pela baía de Luanda",
      "Águas calmas, ideais para nadar",
      "Restaurantes e bares à beira-mar",
      "Ambiente descontraído, longe do centro urbano",
    ],
    priceType: "on-request",
    heroImageAlt: "Águas turquesa e areal da Ilha do Mussulo, em Luanda",
    descriptionParagraphs: [
      "A Ilha do Mussulo é, na realidade, uma restinga de areia com cerca de 30 km de comprimento, separada de Luanda pela baía, e é o destino de praia mais procurado perto da capital. A travessia de barco já faz parte da experiência — poucos minutos de água calma antes de chegar a um areal com bares e restaurantes junto à água.",
      "O ritmo aqui é propositadamente lento: nadar, caminhar pela areia, ou simplesmente ficar sentado a ver o movimento de barcos na baía. É uma fuga curta ao centro urbano de Luanda, sem precisar de viajar para outra província.",
    ],
    itinerary: [
      { label: "Manhã", description: "Encontro em Luanda e travessia de barco até ao Mussulo." },
      { label: "Tarde", description: "Tempo livre na praia, para nadar nas águas calmas da península." },
      { label: "Fim de tarde", description: "Regresso de barco a Luanda antes do pôr do sol." },
    ],
    included: ["Travessia de barco (ida e volta)", "Guia de acompanhamento"],
    notIncluded: ["Refeições e bebidas", "Despesas pessoais"],
    practicalInfo: {
      bestTime: "Todo o ano — mar mais calmo na época seca (Maio a Setembro)",
      difficulty: "Fácil",
      groupSize: "Individual, casais ou grupos pequenos",
      whatToBring: "Roupa de banho, protetor solar, calçado confortável para areia",
    },
  },
  {
    slug: "luanda-historica-comunitaria",
    title: "Luanda Histórica Comunitária",
    provinceSlug: "luanda",
    interestTags: ["Cultura", "História"],
    status: "verified",
    duration: "Meio-dia",
    summary:
      "Um percurso a pé pelo centro histórico de Luanda, guiado por quem conhece a cidade por dentro.",
    highlights: [
      "Fortaleza de São Miguel",
      "Centro histórico colonial",
      "Marginal de Luanda",
      "Guia local com ligação à comunidade",
    ],
    priceType: "on-request",
    heroImageAlt: "Torreão da Fortaleza de São Miguel ao entardecer, em Luanda",
    heroImageSrc: "/images/fortaleza-sao-miguel-luanda.jpg",
    descriptionParagraphs: [
      "Antes de ser a capital moderna que é hoje, Luanda cresceu à volta da Fortaleza de São Miguel — construída em 1576 pelo primeiro governador português da colónia e hoje sede do Museu das Forças Armadas — e do porto natural da baía. Este percurso a pé liga esses pontos históricos ao centro colonial, com um guia local a preencher o contexto que não está em nenhuma placa.",
      "É uma introdução compacta à cidade — útil tanto para quem está de passagem como para quem quer perceber Luanda antes de seguir para outras províncias.",
    ],
    itinerary: [
      { label: "Manhã", description: "Visita à Fortaleza de São Miguel e ao seu miradouro sobre a baía." },
      { label: "Meio da manhã", description: "Percurso a pé pelo centro histórico colonial." },
      { label: "Final", description: "Passagem pela Marginal de Luanda." },
    ],
    included: ["Guia local", "Acompanhamento a pé pelo centro histórico"],
    notIncluded: ["Transporte até ao ponto de encontro", "Refeições"],
    practicalInfo: {
      bestTime: "Manhãs são preferíveis, antes do calor do meio-dia",
      difficulty: "Fácil, percurso maioritariamente a pé",
      groupSize: "Pequenos grupos",
      whatToBring: "Calçado confortável, água",
    },
  },
  {
    slug: "miradouro-da-lua",
    title: "Miradouro da Lua",
    provinceSlug: "luanda",
    interestTags: ["Natureza", "Fotografia"],
    status: "conceptual",
    duration: "Meio-dia",
    summary: "Uma paisagem lunar de falésias erodidas, a cerca de 40 km a sul do centro de Luanda.",
    highlights: [
      "Formações rochosas esculpidas pela erosão ao longo de milhares de anos",
      "Camadas de cor visíveis na rocha",
      "Pôr do sol especialmente fotogénico",
      "A cerca de 40 km do centro de Luanda, no distrito da Samba/Belas",
    ],
    priceType: "on-request",
    heroImageAlt: "Formações rochosas erodidas do Miradouro da Lua, perto de Luanda",
    descriptionParagraphs: [
      "A poucas dezenas de quilómetros do centro de Luanda, o Miradouro da Lua é uma paisagem improvável — falésias de rocha sedimentar esculpidas pela chuva e pelo vento ao longo de milhares de anos, com camadas de cor que lembram uma superfície lunar. É um dos pontos mais fotografados perto da capital, sobretudo ao entardecer.",
      "Esta experiência é conceptual — ainda não existe como oferta publicada da Angola Experience — mas complementa naturalmente as experiências já disponíveis em Luanda, como alternativa mais próxima da cidade do que Cabo Ledo.",
    ],
    itinerary: [
      { label: "Tarde", description: "Saída de Luanda em direção ao Miradouro da Lua, cerca de 40 km a sul." },
      { label: "Fim de tarde", description: "Tempo no miradouro, idealmente até ao pôr do sol." },
      { label: "Noite", description: "Regresso a Luanda." },
    ],
    included: ["Transporte a partir de Luanda", "Guia de acompanhamento"],
    notIncluded: ["Refeições"],
    practicalInfo: {
      bestTime: "Final de tarde, para o pôr do sol sobre as falésias",
      difficulty: "Fácil, percursos curtos junto ao miradouro",
      groupSize: "Pequenos grupos",
      whatToBring: "Máquina fotográfica, calçado confortável",
    },
  },
  {
    slug: "cabo-ledo",
    title: "Cabo Ledo",
    provinceSlug: "icolo-e-bengo",
    interestTags: ["Praia", "Aventura", "Fotografia"],
    status: "verified",
    duration: "Dia inteiro",
    summary:
      "Falésias de argila vermelha e um areal extenso, cerca de duas horas a sul de Luanda.",
    highlights: [
      "Falésias e canyons de argila vermelha",
      "Praia extensa junto ao Atlântico",
      "Ponto popular para surf",
      "Paisagem dramática, forte em fotografia",
    ],
    priceType: "on-request",
    heroImageAlt: "Baía e falésias de Cabo Ledo, junto ao Atlântico",
    heroImageSrc: "/images/cabo-ledo-icolo-e-bengo.jpg",
    descriptionParagraphs: [
      "Cabo Ledo fica cerca de duas horas (120 km) a sul de Luanda e é conhecido por dois motivos: as falésias de rocha vulcânica que caem diretamente sobre o Atlântico, esculpidas em arcos naturais e poças de maré, e as ondas que atraem surfistas de toda a região — a baía tem uma das ondas mais longas e consistentes de Angola. A paisagem muda de tom ao longo do dia, com as falésias a ganharem tons dourados e avermelhados ao pôr do sol, o que faz deste um dos pontos mais fotografados perto da capital.",
      "Está geograficamente em Icolo e Bengo, a mais recente província criada a partir do antigo território de Luanda — uma nuance de fronteira que raramente é explicada aos visitantes, mas que faz parte da geografia real da região.",
    ],
    itinerary: [
      { label: "Manhã", description: "Saída de Luanda, cerca de duas horas de estrada até Cabo Ledo." },
      { label: "Tarde", description: "Tempo na praia e junto às falésias de argila vermelha." },
      { label: "Fim de tarde", description: "Regresso a Luanda." },
    ],
    included: ["Transporte a partir de Luanda", "Guia de acompanhamento"],
    notIncluded: ["Refeições", "Aulas ou equipamento de surf"],
    practicalInfo: {
      bestTime: "Época seca (Maio a Setembro) para melhores condições de mar",
      difficulty: "Fácil a moderado, dependendo do acesso às falésias",
      groupSize: "Pequenos grupos",
      whatToBring: "Protetor solar, calçado que possa molhar-se, água",
    },
  },
  {
    slug: "benguela-tropical",
    title: "Benguela Tropical",
    provinceSlug: "benguela",
    interestTags: ["Cultura", "Praia"],
    status: "verified",
    duration: "Meio-dia",
    summary:
      "Um passeio pela cidade de Benguela, entre arquitetura colonial e avenidas à beira-mar.",
    highlights: [
      "Arquitetura colonial preservada",
      "Avenidas marginais junto ao oceano",
      "Praças e mercados locais",
      "Ritmo tranquilo, típico do sul de Angola",
    ],
    priceType: "on-request",
    heroImageAlt: "Falésias costeiras junto a Coatinha, Benguela",
    heroImageSrc: "/images/coatinha-benguela.jpg",
    descriptionParagraphs: [
      "Benguela cresceu como um dos portos mais antigos da costa angolana — fundada em 1617 pelos portugueses como São Filipe de Benguela — e isso vê-se na arquitetura do seu centro: fachadas coloniais, avenidas largas e uma relação próxima com o mar que a distingue de Luanda.",
      "Este passeio percorre esse centro a um ritmo tranquilo, tal como a própria cidade costuma ser descrita: mais lenta, mais aberta, com o oceano sempre presente ao fundo.",
    ],
    itinerary: [
      { label: "Manhã", description: "Chegada a Benguela e visita ao centro histórico colonial." },
      { label: "Meio da manhã", description: "Passeio pelas avenidas marginais junto ao mar." },
      { label: "Final", description: "Paragem em praças e mercados locais." },
    ],
    included: ["Guia local"],
    notIncluded: ["Transporte até Benguela", "Refeições"],
    practicalInfo: {
      bestTime: "Todo o ano, com temperaturas mais amenas do que Luanda",
      difficulty: "Fácil",
      groupSize: "Pequenos grupos",
      whatToBring: "Calçado confortável, chapéu",
    },
  },
  {
    slug: "benguela-safari",
    title: "Benguela Safari",
    provinceSlug: "benguela",
    interestTags: ["Natureza", "Aventura"],
    status: "verified",
    duration: "Dia inteiro",
    summary: "Uma exploração de jipe pelas paisagens naturais que rodeiam a cidade de Benguela.",
    highlights: [
      "Percurso de jipe pelo interior da região",
      "Paisagens de savana costeira",
      "Paragens para observação da paisagem",
      "Guia especializado na região",
    ],
    priceType: "on-request",
    heroImageAlt: "Paisagem de savana costeira nos arredores de Benguela",
    descriptionParagraphs: [
      "Para além da cidade, a região de Benguela abre-se em savana costeira — um contraste direto com as praias e avenidas do centro. Este percurso de jipe sai da cidade para explorar essa paisagem mais seca e aberta, com paragens pensadas para observação e fotografia.",
      "É pensado para quem já visitou o centro de Benguela e quer ver o que existe para lá dele, sem sair da província.",
    ],
    itinerary: [
      { label: "Manhã", description: "Saída de jipe para o interior da região de Benguela." },
      { label: "Tarde", description: "Paragens em pontos elevados para observar a paisagem de savana costeira." },
      { label: "Fim de tarde", description: "Regresso a Benguela." },
    ],
    included: ["Transporte em jipe", "Guia especializado na região"],
    notIncluded: ["Refeições", "Bebidas"],
    practicalInfo: {
      bestTime: "Época seca, para melhores condições de estrada",
      difficulty: "Moderado — percurso em jipe por estradas não pavimentadas",
      groupSize: "Pequenos grupos",
      whatToBring: "Roupa confortável, protetor solar, máquina fotográfica",
    },
  },
  {
    slug: "lobito-city-tour",
    title: "Lobito City Tour",
    provinceSlug: "benguela",
    interestTags: ["Cultura", "Praia"],
    status: "verified",
    duration: "Meio-dia",
    summary: "A restinga de areia, o porto histórico e o terminal do Caminho de Ferro de Benguela.",
    highlights: [
      "Restinga do Lobito",
      "Porto histórico",
      "Terminal do Caminho de Ferro de Benguela",
      "Vista sobre a baía do Lobito",
    ],
    priceType: "on-request",
    heroImageAlt: "Barcos de pesca na Restinga do Lobito",
    heroImageSrc: "/images/restinga-do-lobito.jpg",
    descriptionParagraphs: [
      "O Lobito é definido pela sua restinga — uma língua de areia com cerca de 10 km entre o oceano e a baía, que começou a formar-se no século XVII — e pelo seu porto, historicamente ligado ao Caminho de Ferro de Benguela: uma linha de 1.344 km que ligou o Lobito ao Congo Belga em 1929 e à Rodésia do Norte (atual Zâmbia) em 1931, construída para escoar o cobre da região do Katanga.",
      "Este passeio combina os dois: a paisagem natural da restinga e a história industrial do porto e do terminal ferroviário, numa cidade que vive tão perto da água como Benguela, mas com um caráter próprio.",
    ],
    itinerary: [
      { label: "Manhã", description: "Visita à restinga de areia do Lobito." },
      { label: "Meio da manhã", description: "Passagem pelo porto histórico." },
      { label: "Final", description: "Vista sobre a baía a partir do terminal do Caminho de Ferro de Benguela." },
    ],
    included: ["Guia local"],
    notIncluded: ["Transporte até ao Lobito", "Refeições"],
    practicalInfo: {
      bestTime: "Todo o ano",
      difficulty: "Fácil",
      groupSize: "Pequenos grupos",
      whatToBring: "Calçado confortável",
    },
  },
  {
    slug: "quedas-de-calandula",
    title: "Quedas de Calandula",
    provinceSlug: "malanje",
    interestTags: ["Natureza", "Fotografia"],
    status: "verified",
    duration: "2 dias / 1 noite",
    summary:
      "Uma das maiores quedas de água de África, junto ao rio Lucala, rodeada de vegetação densa.",
    highlights: [
      "Uma das maiores quedas de água de África",
      "Miradouros junto ao rio Lucala",
      "Vegetação densa envolvente",
      "Melhor caudal na época das chuvas",
    ],
    priceType: "on-request",
    heroImageAlt: "Quedas de Calandula vistas de um miradouro elevado",
    heroImageSrc: "/images/quedas-de-calandula-malanje.jpg",
    descriptionParagraphs: [
      "Com 105 metros de altura e 400 metros de largura sobre o rio Lucala, as Quedas de Calandula estão entre as maiores quedas de água de África, e a diferença entre vê-las de manhã e ao final do dia é suficiente para justificar duas visitas — a luz muda completamente a cor da água e da vegetação em redor.",
      "Por ficar a várias horas de Luanda, este passeio está desenhado como uma escapadela de dois dias, com uma noite em Malanje pelo meio, em vez de uma viagem apressada de ida e volta no mesmo dia.",
    ],
    itinerary: [
      { label: "Dia 1", description: "Saída de Luanda em direção a Malanje, com primeira visita às quedas ao final da tarde." },
      { label: "Dia 2", description: "Regresso às quedas de manhã, para ver a luz diferente, seguido de regresso a Luanda." },
    ],
    included: ["Transporte a partir de Luanda", "Guia local", "Alojamento (1 noite)"],
    notIncluded: ["Refeições", "Despesas pessoais"],
    practicalInfo: {
      bestTime: "Época das chuvas (Outubro a Abril) para maior caudal",
      difficulty: "Fácil, percursos curtos até aos miradouros",
      groupSize: "Pequenos grupos",
      whatToBring: "Roupa que possa molhar-se com o borrifo das quedas, calçado antiderrapante",
    },
  },
  {
    slug: "malanje-city-tour",
    title: "Malanje City Tour",
    provinceSlug: "malanje",
    interestTags: ["Cultura", "Natureza"],
    status: "verified",
    duration: "Meio-dia",
    summary: "A cidade de Malanje e as formações rochosas das Pedras Negras de Pungo Andongo.",
    highlights: [
      "Centro da cidade de Malanje",
      "Pedras Negras de Pungo Andongo",
      "Paisagens de savana do planalto",
      "Guia local",
    ],
    priceType: "on-request",
    heroImageAlt: "Formações rochosas das Pedras Negras de Pungo Andongo",
    heroImageSrc: "/images/pedras-negras-pungo-andongo-malanje.jpg",
    descriptionParagraphs: [
      "Malanje é mais do que o ponto de partida para Calandula — a cidade e a região à sua volta têm marcos próprios, como as Pedras Negras de Pungo Andongo, formações rochosas que se erguem até 200 metros sobre a savana. A tradição oral associa o local à rainha Njinga, que no século XVII teve aqui a sua base de resistência à colonização portuguesa.",
      "Este passeio combina o centro da cidade com essa paragem geológica, sendo uma boa forma de conhecer Malanje sem depender apenas das quedas de água que a tornaram conhecida.",
    ],
    itinerary: [
      { label: "Manhã", description: "Visita ao centro da cidade de Malanje." },
      { label: "Meio da manhã", description: "Deslocação até às Pedras Negras de Pungo Andongo." },
      { label: "Final", description: "Tempo livre junto às formações rochosas." },
    ],
    included: ["Guia local"],
    notIncluded: ["Transporte até Malanje", "Refeições"],
    practicalInfo: {
      bestTime: "Todo o ano",
      difficulty: "Fácil a moderado, dependendo do acesso às rochas",
      groupSize: "Pequenos grupos",
      whatToBring: "Calçado confortável, água",
    },
  },
  {
    slug: "quedas-de-musseleje",
    title: "Quedas de Musseleje",
    provinceSlug: "malanje",
    interestTags: ["Natureza", "Relaxamento"],
    status: "verified",
    duration: "Meio-dia",
    summary: "Uma queda de água menos conhecida do que Calandula, mais tranquila e menos visitada.",
    highlights: [
      "Queda de água menos concorrida",
      "Envolvente natural preservada",
      "Boa opção para complementar Calandula",
      "Ambiente calmo",
    ],
    priceType: "on-request",
    heroImageAlt: "Queda de água de Musseleje em Malanje",
    descriptionParagraphs: [
      "As Quedas de Musseleje não têm a escala das de Calandula, mas oferecem algo que estas já não conseguem: tranquilidade. É um ponto menos visitado da mesma região de Malanje, com uma envolvente natural preservada.",
      "Funciona bem como complemento a uma visita a Calandula, ou como alternativa mais calma para quem prefere evitar os pontos mais concorridos.",
    ],
    itinerary: [
      { label: "Manhã", description: "Deslocação até às Quedas de Musseleje." },
      { label: "Meio da manhã", description: "Tempo junto à queda de água, com menos visitantes do que em Calandula." },
      { label: "Final", description: "Regresso." },
    ],
    included: ["Guia local"],
    notIncluded: ["Transporte até ao local", "Refeições"],
    practicalInfo: {
      bestTime: "Época das chuvas para maior caudal, tal como Calandula",
      difficulty: "Fácil",
      groupSize: "Pequenos grupos",
      whatToBring: "Calçado confortável, água",
    },
  },
  {
    slug: "consultoria-roteiro-personalizado",
    title: "Consultoria de Roteiro Personalizado",
    interestTags: ["Cultura", "Aventura"],
    status: "verified",
    duration: "Sob consulta",
    summary: "Planeamento de um roteiro à medida por Angola, com apoio direto da equipa.",
    highlights: [
      "Roteiro construído à medida do viajante",
      "Apoio direto da equipa da Angola Experience",
      "Cobertura nacional, não limitada a uma província",
      "Dois níveis de consultoria disponíveis",
    ],
    priceType: "real",
    priceAOA: { min: 25000, max: 35000 },
    heroImageAlt: "Mapa de Angola sobre uma mesa, com anotações de planeamento de viagem",
    descriptionParagraphs: [
      "Nem toda a viagem por Angola cabe num pacote fixo. Este serviço existe para quem quer um roteiro pensado à sua medida — datas, ritmo e destinos escolhidos em conjunto com a equipa, em vez de um itinerário genérico.",
      "Os dois níveis de preço refletem a complexidade do roteiro: um roteiro mais simples, com uma ou duas províncias, tem um custo diferente de um percurso mais longo e detalhado por várias regiões do país.",
    ],
    itinerary: [
      { label: "Primeiro contacto", description: "Partilha de datas, destinos de interesse e orçamento aproximado." },
      { label: "Proposta de roteiro", description: "A equipa desenha um roteiro à medida, com sugestões de província e experiências." },
      { label: "Ajustes e confirmação", description: "Revisão do roteiro em conjunto até ficar fechado." },
    ],
    included: ["Roteiro escrito à medida", "Apoio direto da equipa durante o planeamento"],
    notIncluded: ["Reservas e pagamentos de alojamento, transporte ou experiências"],
    practicalInfo: {
      bestTime: "Disponível durante todo o ano",
      difficulty: "Não aplicável",
      groupSize: "Individual, casais, famílias ou grupos",
      whatToBring: "Não aplicável",
    },
  },
  {
    slug: "servicos-de-concierge",
    title: "Serviços de Concierge",
    interestTags: ["Relaxamento"],
    status: "verified",
    duration: "Sob consulta",
    summary: "Apoio logístico contínuo durante a viagem, do alojamento aos deslocamentos locais.",
    highlights: [
      "Apoio logístico durante toda a estadia",
      "Coordenação de alojamento e deslocamentos",
      "Disponibilidade para pedidos pontuais",
      "Escala de preço conforme o nível de apoio",
    ],
    priceType: "real",
    priceAOA: { min: 10000, max: 100000 },
    heroImageAlt: "Recepcionista de concierge a auxiliar um viajante",
    descriptionParagraphs: [
      "O serviço de concierge cobre o que fica entre reservar uma viagem e vivê-la — a coordenação do dia a dia, desde o alojamento até aos deslocamentos locais, para que essas decisões não caiam sobre quem está a viajar.",
      "A escala de preço acompanha o nível de apoio pedido: desde um apoio pontual durante alguns dias, até uma coordenação mais próxima ao longo de toda a estadia.",
    ],
    itinerary: [
      { label: "Definição do apoio", description: "A equipa entende que tipo de apoio é necessário — alojamento, deslocamentos, ou ambos." },
      { label: "Coordenação", description: "A Angola Experience trata da logística em nome do viajante." },
      { label: "Acompanhamento", description: "Disponibilidade para pedidos pontuais durante a estadia." },
    ],
    included: ["Coordenação de alojamento e deslocamentos", "Ponto de contacto durante a estadia"],
    notIncluded: ["Custos de alojamento, transporte ou atividades reservadas"],
    practicalInfo: {
      bestTime: "Disponível durante toda a estadia em Angola",
      difficulty: "Não aplicável",
      groupSize: "Individual, casais ou grupos",
      whatToBring: "Não aplicável",
    },
  },
  {
    slug: "serra-da-leba",
    title: "Serra da Leba",
    provinceSlug: "huila",
    interestTags: ["Natureza", "Fotografia", "Aventura"],
    status: "conceptual",
    duration: "Meio-dia",
    summary:
      "A icónica estrada em ziguezague que desce a Serra da Leba, com um dos miradouros mais fotografados de Angola.",
    highlights: [
      "Miradouro sobre a estrada em ziguezague",
      "Vista sobre o planalto da Huíla",
      "Ponto de paragem fotográfico",
      "Estrada com curvas acentuadas — conduzir com atenção",
    ],
    priceType: "on-request",
    heroImageAlt: "Estrada em ziguezague da Serra da Leba vista do miradouro",
    heroImageSrc: "/images/serra-da-leba-huila.jpg",
    descriptionParagraphs: [
      "A estrada da Serra da Leba desce cerca de 1.845 metros em menos de 30 km, em sucessivas curvas fechadas, ligando o planalto de Lubango à faixa costeira do Namibe. Construída em terreno colonial e inaugurada na década de 1970, é considerada uma das grandes estradas de montanha do mundo. O miradouro junto ao topo é um dos pontos de vista mais reconhecíveis de Angola, com a estrada a desenhar-se em ziguezague lá em baixo.",
      "Esta experiência é conceptual — ainda não existe como oferta publicada da Angola Experience — mas a Huíla já é uma das regiões que a empresa refere como área de cobertura, e este é o tipo de paragem que justificaria por si só uma visita à província.",
    ],
    itinerary: [
      { label: "Manhã", description: "Saída do Lubango em direção à Serra da Leba." },
      { label: "Meio da manhã", description: "Paragem no miradouro icónico sobre a estrada em ziguezague." },
      { label: "Final", description: "Regresso ao Lubango." },
    ],
    included: ["Transporte a partir do Lubango", "Guia local"],
    notIncluded: ["Refeições"],
    practicalInfo: {
      bestTime: "Manhãs, para melhor visibilidade e menos neblina",
      difficulty: "Fácil no miradouro; a estrada em si exige condução com atenção",
      groupSize: "Pequenos grupos",
      whatToBring: "Casaco leve — a altitude torna as manhãs mais frescas",
    },
  },
  {
    slug: "fenda-da-tundavala",
    title: "Fenda da Tundavala",
    provinceSlug: "huila",
    interestTags: ["Natureza", "Fotografia", "Aventura"],
    status: "conceptual",
    duration: "Meio-dia",
    summary:
      "Um dos pontos de vista mais dramáticos de Angola, com a escarpa a cair mais de mil metros sobre a planície do Namibe.",
    highlights: [
      "Miradouro a mais de 2.200 metros de altitude",
      "Queda de mais de 1.000 metros até à planície",
      "Classificada uma das Sete Maravilhas Naturais de Angola em 2012",
      "A cerca de 18 km do Lubango",
    ],
    priceType: "on-request",
    heroImageAlt: "Vista sobre a escarpa da Fenda da Tundavala, no planalto da Huíla",
    descriptionParagraphs: [
      "A Fenda da Tundavala é um dos pontos de vista mais impressionantes de Angola: o rebordo do planalto da Huíla ultrapassa os 2.200 metros de altitude e cai mais de 1.000 metros até à planície que se estende em direção ao Namibe. Em 2012, o governo angolano reconheceu a sua importância, classificando-a como uma das Sete Maravilhas Naturais do país.",
      "Esta experiência é conceptual — ainda não existe como oferta publicada da Angola Experience — mas a Huíla já é uma das regiões que a empresa refere como área de cobertura, e a Tundavala é um complemento natural a uma visita que já inclua a Serra da Leba, a poucos quilómetros de distância.",
    ],
    itinerary: [
      { label: "Manhã", description: "Saída do Lubango em direção ao planalto, cerca de 18 km até à Tundavala." },
      { label: "Meio da manhã", description: "Tempo no miradouro sobre a fenda, com vista até à planície do Namibe." },
      { label: "Final", description: "Regresso ao Lubango." },
    ],
    included: ["Transporte a partir do Lubango", "Guia local"],
    notIncluded: ["Refeições"],
    practicalInfo: {
      bestTime: "Manhãs, para melhor visibilidade",
      difficulty: "Fácil no miradouro; terreno irregular junto à borda exige atenção",
      groupSize: "Pequenos grupos",
      whatToBring: "Casaco leve — a altitude torna o local ventoso e fresco",
    },
  },
  {
    slug: "deserto-do-namibe",
    title: "Deserto do Namibe",
    provinceSlug: "namibe",
    interestTags: ["Natureza", "Fotografia", "Aventura"],
    status: "conceptual",
    duration: "Dia inteiro",
    summary:
      "Dunas que descem diretamente até ao Atlântico, num dos poucos desertos costeiros do mundo.",
    highlights: [
      "Dunas junto ao oceano",
      "Exemplares de Welwitschia mirabilis",
      "Percurso de todo-o-terreno",
      "Pôr do sol sobre o deserto",
    ],
    priceType: "on-request",
    heroImageAlt: "Estrada de terra por um canhão desértico no Namibe",
    heroImageSrc: "/images/deserto-do-namibe.jpg",
    descriptionParagraphs: [
      "O deserto do Namibe faz parte do deserto do Namib, considerado um dos mais antigos do mundo, com condições áridas há dezenas de milhões de anos — e é um dos poucos lugares onde dunas de areia descem diretamente até ao oceano Atlântico. A região é também um dos únicos habitats naturais da Welwitschia mirabilis, uma planta com apenas duas folhas que crescem continuamente ao longo de toda a sua vida, podendo viver entre 1.000 e 1.500 anos.",
      "Esta experiência é conceptual — ainda não existe como oferta publicada da Angola Experience — mas o Namibe já é referido pela empresa como área de cobertura, e a combinação de deserto e costa é uma das paisagens mais distintas de Angola.",
    ],
    itinerary: [
      { label: "Manhã", description: "Saída da cidade do Namibe em todo-o-terreno." },
      { label: "Tarde", description: "Exploração das dunas e observação de exemplares de Welwitschia mirabilis." },
      { label: "Fim de tarde", description: "Paragem para o pôr do sol sobre o deserto." },
    ],
    included: ["Transporte em todo-o-terreno", "Guia especializado"],
    notIncluded: ["Refeições"],
    practicalInfo: {
      bestTime: "Manhãs e finais de tarde, para evitar o calor do meio-dia",
      difficulty: "Moderado — terreno de duna exige algum esforço físico",
      groupSize: "Pequenos grupos",
      whatToBring: "Protetor solar, chapéu, água em abundância",
    },
  },
  {
    slug: "baia-dos-tigres",
    title: "Baía dos Tigres",
    provinceSlug: "namibe",
    interestTags: ["História", "Aventura", "Fotografia"],
    status: "conceptual",
    duration: "2 dias / 1 noite",
    summary: "Uma cidade fantasma numa ilha isolada do deserto, separada do continente pelo oceano desde 1962.",
    highlights: [
      "Antiga vila piscatória, fundada em 1860",
      "Tornou-se ilha em 1962, quando o mar rompeu o istmo que a ligava ao continente",
      "Catedral abandonada e edifícios em ruínas",
      "Isolamento quase total no meio do deserto do Namibe",
    ],
    priceType: "on-request",
    heroImageAlt: "Ruínas da vila abandonada da Baía dos Tigres, no Namibe",
    descriptionParagraphs: [
      "São Martinho dos Tigres nasceu em 1860 como povoação piscatória junto a uma baía isolada do deserto do Namibe. Em 14 de março de 1962, o mar rompeu a língua de areia que a ligava ao continente, transformando-a de um dia para o outro numa ilha sem água doce — o início do fim para a povoação, que acabou por ser abandonada. Hoje resta uma cidade fantasma, com uma catedral em ruínas, num dos desertos mais isolados do mundo.",
      "Esta experiência é conceptual — ainda não existe como oferta publicada da Angola Experience — mas o Namibe já é referido pela empresa como área de cobertura, e a Baía dos Tigres é um dos destinos mais singulares de toda a costa angolana.",
    ],
    itinerary: [
      { label: "Dia 1", description: "Saída da cidade do Namibe em todo-o-terreno, com travessia até à ilha." },
      { label: "Dia 2", description: "Exploração da vila abandonada e regresso ao Namibe." },
    ],
    included: ["Transporte em todo-o-terreno", "Guia especializado", "Alojamento (1 noite)"],
    notIncluded: ["Refeições"],
    practicalInfo: {
      bestTime: "Época seca, para melhores condições de acesso",
      difficulty: "Moderado — destino remoto, sem infraestrutura no local",
      groupSize: "Pequenos grupos",
      whatToBring: "Água em abundância, protetor solar, equipamento para acampar",
    },
  },
  {
    slug: "tchitundo-hulu",
    title: "Tchitundo-Hulu",
    provinceSlug: "namibe",
    interestTags: ["História", "Cultura", "Fotografia"],
    status: "conceptual",
    duration: "Dia inteiro",
    summary: "Gravuras e pinturas rupestres milenares, num dos conjuntos de arte rupestre mais importantes de Angola.",
    highlights: [
      "Quatro sítios de arte rupestre no planalto desértico do Namibe",
      "Gravuras e pinturas com origem no primeiro milénio antes e depois de Cristo",
      "Atribuídas aos Ovatwa, comunidades caçadoras-recoletoras da região",
      "Candidata a Património Mundial da UNESCO desde 2017",
    ],
    priceType: "on-request",
    heroImageAlt: "Formações rochosas de Tchitundo-Hulu, no deserto do Namibe",
    descriptionParagraphs: [
      "Tchitundo-Hulu é o nome dado a um conjunto de quatro sítios de arte rupestre erguidos sobre inselbergs no planalto desértico do Namibe, a cerca de 120 km do mar. As gravuras e pinturas, com sinais geométricos e figuras humanas e animais, remontam ao primeiro milénio antes e depois de Cristo, e são atribuídas às comunidades Ovatwa que habitaram a região até meados do século XX. Desde 2017 que o sítio é candidato a Património Mundial da UNESCO.",
      "Esta experiência é conceptual — ainda não existe como oferta publicada da Angola Experience — mas o Namibe já é referido pela empresa como área de cobertura, e Tchitundo-Hulu acrescenta uma camada histórica e cultural a uma região normalmente associada apenas à paisagem desértica.",
    ],
    itinerary: [
      { label: "Manhã", description: "Saída da cidade do Namibe em todo-o-terreno, em direção ao planalto interior." },
      { label: "Tarde", description: "Visita aos sítios de arte rupestre, com um guia a explicar o contexto histórico." },
      { label: "Fim de tarde", description: "Regresso ao Namibe." },
    ],
    included: ["Transporte em todo-o-terreno", "Guia especializado em arte rupestre"],
    notIncluded: ["Refeições"],
    practicalInfo: {
      bestTime: "Época seca, para melhores condições de estrada",
      difficulty: "Moderado — acesso por terreno desértico não pavimentado",
      groupSize: "Pequenos grupos",
      whatToBring: "Água em abundância, protetor solar, chapéu",
    },
  },
  {
    slug: "costa-do-kwanza-sul",
    title: "Costa do Cuanza Sul",
    provinceSlug: "cuanza-sul",
    interestTags: ["Praia", "Natureza", "Gastronomia"],
    status: "conceptual",
    duration: "Dia inteiro",
    summary: "Praias tranquilas e vilas piscatórias ao longo do litoral sul, entre Porto Amboim e Sumbe.",
    highlights: [
      "Praias pouco concorridas",
      "Vilas piscatórias tradicionais",
      "Peixe fresco junto à costa",
      "Ritmo mais lento que o litoral de Luanda",
    ],
    priceType: "on-request",
    heroImageAlt: "Praia de Sumbe, no litoral do Cuanza Sul",
    heroImageSrc: "/images/praia-do-sumbe-cuanza-sul.jpg",
    descriptionParagraphs: [
      "Entre Porto Amboim — colonizada pelos portugueses em 1587 — e Sumbe, fundada em 1769 e capital da província desde 1955, o litoral do Cuanza Sul alterna entre praias pouco concorridas e pequenas vilas piscatórias onde o peixe chega fresco todos os dias. É um ritmo diferente do litoral de Luanda — mais lento, menos procurado.",
      "Esta experiência é conceptual — ainda não existe como oferta publicada da Angola Experience — mas o Cuanza Sul já é referido pela empresa como área de cobertura, e este litoral é uma forma natural de a demonstrar.",
    ],
    itinerary: [
      { label: "Manhã", description: "Saída ao longo da costa do Cuanza Sul, com paragem numa vila piscatória." },
      { label: "Tarde", description: "Tempo numa praia tranquila da região, longe do movimento de Luanda." },
      { label: "Fim de tarde", description: "Regresso." },
    ],
    included: ["Transporte ao longo da costa", "Guia local"],
    notIncluded: ["Refeições"],
    practicalInfo: {
      bestTime: "Todo o ano, com mar mais calmo na época seca",
      difficulty: "Fácil",
      groupSize: "Pequenos grupos",
      whatToBring: "Roupa de banho, protetor solar",
    },
  },
  {
    slug: "sumbe-city-tour",
    title: "Sumbe City Tour",
    provinceSlug: "cuanza-sul",
    interestTags: ["Cultura", "Praia", "História"],
    status: "conceptual",
    duration: "Meio-dia",
    summary: "A capital do Cuanza Sul, entre história colonial e a praia que dá nome à cidade.",
    highlights: [
      "Fundada em 1769 como Novo Redondo",
      "Nome atual vem do kimbundu \"kussumba\" (comprar)",
      "Capital da província desde 1955",
      "Praia urbana junto ao centro da cidade",
    ],
    priceType: "on-request",
    heroImageAlt: "Centro da cidade de Sumbe, capital do Cuanza Sul",
    descriptionParagraphs: [
      "Sumbe nasceu em 1769 como um forte português junto à foz do rio Cambongo-Negunza, com o nome de Novo Redondo — um nome que manteve até 1975. O nome atual vem do termo kimbundu \"kussumba\" (comprar), que recorda o seu papel histórico como entreposto de troca de sal, peixe e mercadorias europeias. Tornou-se capital do Cuanza Sul em 1955, e mantém hoje uma praia urbana a poucos passos do centro.",
      "Esta experiência é conceptual — ainda não existe como oferta publicada da Angola Experience — mas complementa a experiência já existente ao longo da costa do Cuanza Sul, com foco na própria cidade em vez do litoral entre Porto Amboim e Sumbe.",
    ],
    itinerary: [
      { label: "Manhã", description: "Visita ao centro histórico de Sumbe." },
      { label: "Meio da manhã", description: "Tempo na praia urbana junto à cidade." },
      { label: "Final", description: "Regresso." },
    ],
    included: ["Guia local"],
    notIncluded: ["Transporte até Sumbe", "Refeições"],
    practicalInfo: {
      bestTime: "Todo o ano, com mar mais calmo na época seca",
      difficulty: "Fácil",
      groupSize: "Pequenos grupos",
      whatToBring: "Roupa de praia, protetor solar",
    },
  },
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((e) => e.slug === slug);
}

export function getExperiencesByProvince(provinceSlug: string) {
  return experiences.filter((e) => e.provinceSlug === provinceSlug);
}

/** Real tag-matching, no personalization/scoring/ML (Website-Strategy.md §5.1) — the filter behind Interest mode. */
export function getExperiencesByInterest(tag: InterestTag) {
  return experiences.filter((e) => e.interestTags.includes(tag));
}

/** All distinct duration values in the dataset — used to drive the catalog's duration filter without a separate category field. */
export function getDurationOptions() {
  return Array.from(new Set(experiences.map((e) => e.duration)));
}

/** Same province first, then same first interest tag, excluding the experience itself. */
export function getRelatedExperiences(experience: Experience, limit = 3) {
  const sameProvince = experiences.filter(
    (e) => e.slug !== experience.slug && e.provinceSlug && e.provinceSlug === experience.provinceSlug,
  );
  const sameInterest = experiences.filter(
    (e) =>
      e.slug !== experience.slug &&
      !sameProvince.includes(e) &&
      e.interestTags.some((tag) => experience.interestTags.includes(tag)),
  );
  return [...sameProvince, ...sameInterest].slice(0, limit);
}
