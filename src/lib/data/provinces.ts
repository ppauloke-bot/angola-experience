import type { InterestTag, Province } from "./types";

/**
 * All 21 current provinces (Website-Strategy.md §4.1, verified against
 * public sources post-2024 reorganization). The 6 flagship provinces are
 * the client-approved recommendation from §4.3; the remaining 15 render
 * the light/"coming-soon" template (§3.4) with equal visual treatment,
 * differing only in content depth (Website-Design.md §3.3, §3.4).
 *
 * No regional grouping field — dropped per Website-Design.md §11 (v1.2):
 * no official Angolan region tier exists above province.
 *
 * Flagship `destinationGuide` content is original enrichment copy, kept
 * deliberately general and geographically grounded (climate, landmarks,
 * coastal-vs-interior facts) rather than asserting specific cultural or
 * culinary claims nobody has verified — same discipline as the experience
 * descriptions (§6.2).
 *
 * `relatedFlagshipSlug` on each coming-soon province is a geographic
 * navigation suggestion only — chosen by real proximity/continuity
 * between provinces, not an administrative claim or a claim that Angola
 * Experience operates tours between the two. Kept explicit here rather
 * than computed so the mapping stays easy to review. Least-confident
 * picks (noted per-entry): Cabinda has no land continuity to any
 * flagship province (it's an exclave separated by DR Congo), so it maps
 * to Luanda as the practical travel hub rather than a bordering province.
 * The Lunda/Moxico provinces are genuinely distant from all 6 flagships;
 * Malanje is the least-distant of the six, not a close neighbor.
 */
export const provinces: Province[] = [
  {
    slug: "luanda",
    name: "Luanda",
    status: "featured",
    shortHook: "A capital: baía urbana, ilhas de areia e a base da Angola Experience.",
    heroImageAlt: "Vista elevada da baía e da Marginal de Luanda",
    heroImageSrc: "/images/marginal-luanda.jpg",
    keyPlaces: [
      "Fortaleza de São Miguel — construída em 1576 pelo primeiro governador português da colónia, tornou-se o centro administrativo da cidade em 1627 e alberga hoje o Museu das Forças Armadas",
      "Ilha do Mussulo — uma restinga de areia com cerca de 30 km de comprimento, formada por sedimentos arrastados pela Corrente de Benguela",
      "Marginal de Luanda (Avenida 4 de Fevereiro) — cerca de 3,5 km junto à baía, remodelada em 2012 com espaços verdes e ciclovias",
      "Miradouro da Lua — falésias de rocha sedimentar esculpidas pela erosão, a cerca de 40 km a sul do centro",
      "Centro histórico colonial",
    ],
    interestTags: ["Cultura", "História", "Praia"],
    destinationGuide: {
      whatToDo:
        "Luanda combina história colonial, uma baía movimentada e escapadelas de praia a curta distância — dos passeios a pé no centro histórico, com paragem na Fortaleza de São Miguel, à travessia de barco até ao Mussulo.",
      culture:
        "Como capital, Luanda concentra grande parte da vida cultural e económica do país, com uma vida urbana que se estende pela Marginal até tarde.",
      landscapes:
        "A baía de Luanda define a cidade: água calma protegida pela península do Mussulo, com o perfil urbano moderno a contrastar com o centro histórico colonial.",
      gastronomy:
        "Sendo uma cidade costeira, o peixe e o marisco frescos têm presença forte na oferta gastronómica de Luanda.",
      practicalInfo: {
        gettingThere: "Principal porta de entrada em Angola, com aeroporto internacional.",
        safety: "Como em qualquer grande cidade, vale a pena ter atenção redobrada em zonas movimentadas e à noite.",
        whatToPack: "Roupa leve todo o ano — clima tropical, com uma estação seca mais fresca (Maio a Setembro).",
      },
      bestTimeToVisit: "Todo o ano, com temperaturas mais amenas durante o cacimbo (Maio a Setembro).",
    },
  },
  {
    slug: "benguela",
    name: "Benguela",
    status: "featured",
    shortHook: "Costa tropical, arquitetura colonial e a vizinha Lobito.",
    heroImageAlt: "Falésias costeiras junto a Coatinha, Benguela",
    heroImageSrc: "/images/coatinha-benguela.jpg",
    keyPlaces: [
      "Centro histórico colonial de Benguela — fundada em 1617 pelos portugueses como São Filipe de Benguela, foi brevemente ocupada pelos neerlandeses entre 1641 e 1648",
      "Restinga do Lobito — uma língua de areia com cerca de 10 km, que começou a formar-se no século XVII e hoje protege a baía e o porto do Lobito",
      "Avenidas marginais junto ao mar",
    ],
    interestTags: ["Praia", "Cultura", "Natureza"],
    destinationGuide: {
      whatToDo:
        "Entre o centro colonial de Benguela e a restinga do Lobito, esta província convida a um ritmo mais lento do que Luanda, sempre perto do mar.",
      culture:
        "Benguela é uma das cidades portuárias mais antigas de Angola — fundada em 1617 —, com identidade marcadamente costeira e ligação histórica ao Caminho de Ferro de Benguela: uma linha de 1.344 km que ligou o porto do Lobito ao Congo Belga em 1929 e à Rodésia do Norte (atual Zâmbia) em 1931, construída para escoar o cobre da região do Katanga até ao Atlântico.",
      landscapes:
        "Praias, avenidas marginais e savana costeira no interior — Benguela tem uma das costas mais variadas do país.",
      gastronomy: "O peixe fresco é uma constante ao longo de toda a costa de Benguela, do centro da cidade às vilas piscatórias vizinhas.",
      practicalInfo: {
        gettingThere: "Ligações rodoviárias e aéreas a partir de Luanda.",
        safety: "Zona geralmente tranquila; atenção habitual em áreas movimentadas.",
        whatToPack: "Roupa leve e protetor solar — o litoral sul tende a ser mais ameno do que Luanda.",
      },
      bestTimeToVisit: "Todo o ano, com temperaturas mais amenas do que Luanda.",
    },
  },
  {
    slug: "huila",
    name: "Huíla",
    status: "featured",
    shortHook: "Planalto dramático e a icónica estrada da Serra da Leba.",
    heroImageAlt: "Estrada sinuosa da Serra da Leba vista do miradouro",
    heroImageSrc: "/images/serra-da-leba-huila.jpg",
    keyPlaces: [
      "Estrada e miradouro da Serra da Leba — desce cerca de 1.845 metros em menos de 30 km de estrada, construída em terreno colonial e inaugurada na década de 1970",
      "Cidade do Lubango — capital da Huíla, a cerca de 1.760 metros de altitude, uma das cidades mais elevadas de Angola",
      "Cristo Rei do Lubango — estátua de 14 metros no topo da Serra da Chela, a 2.100 metros de altitude, inaugurada em 1957",
      "Fenda da Tundavala — miradouro a mais de 2.200 metros de altitude, com queda de mais de 1.000 metros até à planície, classificada uma das Sete Maravilhas Naturais de Angola",
      "Planalto da Huíla",
    ],
    interestTags: ["Natureza", "Fotografia", "Aventura"],
    destinationGuide: {
      whatToDo:
        "A Huíla é sobretudo uma província de paisagem — a estrada da Serra da Leba é o ponto alto, mas o planalto em redor do Lubango, incluindo o miradouro do Cristo Rei no topo da Serra da Chela, também merece tempo de exploração.",
      culture: "O Lubango, capital da província, é um dos centros urbanos mais frescos de Angola devido à altitude do planalto.",
      landscapes:
        "Planalto elevado, com quedas acentuadas de altitude na descida para a costa — a Serra da Leba é o exemplo mais dramático desta transição.",
      gastronomy:
        "A altitude e o clima mais fresco da Huíla trazem uma oferta com mais influência de produtos de planalto do que a cozinha costeira do resto do país.",
      practicalInfo: {
        gettingThere: "Ligação aérea ao Lubango ou estrada a partir de Luanda ou do Namibe.",
        safety: "A estrada da Serra da Leba exige condução com atenção, especialmente com neblina matinal.",
        whatToPack: "Roupa em camadas — as manhãs no planalto são frescas, mesmo com dias quentes.",
      },
      bestTimeToVisit: "Época seca (Maio a Setembro), com manhãs mais claras e menos neblina na Serra da Leba.",
    },
  },
  {
    slug: "namibe",
    name: "Namibe",
    status: "featured",
    shortHook: "Deserto costeiro onde as dunas encontram o Atlântico.",
    heroImageAlt: "Estrada de terra por um canhão desértico a sul do Namibe",
    heroImageSrc: "/images/deserto-do-namibe.jpg",
    keyPlaces: [
      "Dunas do deserto do Namibe — parte do deserto do Namibe, um dos mais antigos do mundo, com condições áridas há dezenas de milhões de anos",
      "Cidade do Namibe",
      "Exemplares de Welwitschia mirabilis — planta endémica deste deserto costeiro que pode viver entre 1.000 e 1.500 anos, com apenas duas folhas que crescem continuamente ao longo de toda a sua vida",
      "Baía dos Tigres — vila piscatória fundada em 1860, hoje uma cidade fantasma numa ilha isolada desde 1962",
      "Tchitundo-Hulu — quatro sítios de arte rupestre com origem no primeiro milénio, candidatos a Património Mundial da UNESCO desde 2017",
    ],
    interestTags: ["Natureza", "Fotografia", "Aventura"],
    destinationGuide: {
      whatToDo:
        "O Namibe é definido pelo contraste entre deserto e oceano — as dunas que descem até à água são a principal razão para visitar a província, com a Welwitschia mirabilis, uma das plantas mais longevas do mundo, a acrescentar outra camada de interesse ao percurso.",
      culture: "Uma das regiões mais áridas de Angola, historicamente ligada à pesca e ao comércio costeiro.",
      landscapes: "Um dos poucos desertos costeiros do mundo, onde as dunas de areia encontram diretamente o Atlântico, com neblina marítima trazida pela Corrente de Benguela a sustentar uma vida vegetal pouco comum para uma região tão árida.",
      gastronomy: "Tal como Benguela, a proximidade ao oceano garante peixe fresco, com o deserto a criar um contraste visual único junto à costa.",
      practicalInfo: {
        gettingThere: "Ligação aérea à cidade do Namibe ou estrada a partir do Lubango (Huíla), incluindo a Serra da Leba.",
        safety: "Percursos no deserto devem ser feitos com guia — a orientação no terreno pode ser difícil.",
        whatToPack: "Protetor solar, chapéu e água em abundância — o calor é intenso, mesmo com brisa costeira.",
      },
      bestTimeToVisit: "Manhãs e finais de tarde durante todo o ano, evitando o calor mais intenso do meio-dia.",
    },
  },
  {
    slug: "malanje",
    name: "Malanje",
    status: "featured",
    shortHook: "Interior verdejante, quedas de água e paisagens de savana.",
    heroImageAlt: "Quedas de Calandula vistas de cima, em Malanje",
    heroImageSrc: "/images/quedas-de-calandula-malanje.jpg",
    keyPlaces: [
      "Quedas de Calandula — com 105 metros de altura e 400 metros de largura sobre o rio Lucala, estão entre as maiores quedas de água de África",
      "Pedras Negras de Pungo Andongo — formações rochosas que se erguem até 200 metros, associadas na tradição oral à rainha Njinga, que no século XVII teve aqui a sua base de resistência à colonização portuguesa",
      "Quedas de Musseleje",
    ],
    interestTags: ["Natureza", "Fotografia"],
    destinationGuide: {
      whatToDo:
        "Malanje é a província das quedas de água — de Calandula, uma das maiores de África, às menos visitadas Quedas de Musseleje — mas também guarda marcos como as Pedras Negras de Pungo Andongo, ligadas à memória da rainha Njinga.",
      culture: "O interior de Malanje é marcado pela relação entre as comunidades locais e os rios que alimentam as suas quedas de água.",
      landscapes: "Savana interior, cortada por rios que criam algumas das quedas de água mais impressionantes do país.",
      gastronomy: "Cozinha de interior, mais afastada da influência costeira do litoral angolano.",
      practicalInfo: {
        gettingThere: "Estrada a partir de Luanda, com várias horas de viagem.",
        safety: "As zonas junto às quedas de água podem ser escorregadias — atenção ao caminhar perto da água.",
        whatToPack: "Calçado antiderrapante e roupa que possa molhar-se com o borrifo das quedas.",
      },
      bestTimeToVisit: "Época das chuvas (Outubro a Abril) para o maior caudal das quedas de água.",
    },
  },
  {
    slug: "cuanza-sul",
    name: "Cuanza Sul",
    status: "featured",
    shortHook: "O litoral sul de Angola, entre praias tranquilas e vilas piscatórias.",
    heroImageAlt: "Praia de Sumbe, capital do Cuanza Sul",
    heroImageSrc: "/images/praia-do-sumbe-cuanza-sul.jpg",
    keyPlaces: [
      "Sumbe — fundada em 1769 como Novo Redondo, é capital da província desde 1955; o nome atual vem do termo kimbundu \"kussumba\" (comprar), que recorda o seu passado como entreposto comercial",
      "Porto Amboim — colonizada pelos portugueses em 1587 sob o nome de Kissonde, mudou para o nome atual em 1923",
      "Vilas piscatórias do Cuanza Sul",
    ],
    interestTags: ["Praia", "Natureza", "Gastronomia"],
    destinationGuide: {
      whatToDo:
        "O litoral do Cuanza Sul oferece praias mais tranquilas do que Luanda, entre as cidades históricas de Sumbe e Porto Amboim, com vilas piscatórias que mantêm um ritmo de vida mais lento.",
      culture: "A pesca tradicional continua a ser central para as comunidades costeiras do Cuanza Sul.",
      landscapes: "Litoral sul, entre praias abertas e pequenas baías protegidas junto às vilas piscatórias.",
      gastronomy: "Peixe fresco vendido diretamente pelas comunidades piscatórias ao longo da costa.",
      practicalInfo: {
        gettingThere: "Estrada a partir de Luanda ou Benguela, ao longo do litoral.",
        safety: "Zona geralmente tranquila; verificar condições do mar antes de nadar em praias sem vigilância.",
        whatToPack: "Roupa de praia e protetor solar.",
      },
      bestTimeToVisit: "Todo o ano, com mar mais calmo durante a época seca.",
    },
  },
  {
    slug: "bengo",
    name: "Bengo",
    status: "coming-soon",
    shortHook: "Vizinha próxima de Luanda, com rios e paisagens rurais.",
    heroImageAlt: "Barragem das Mabubas, no Bengo",
    heroImageSrc: "/images/barragem-das-mabubas-bengo.jpg",
    highlights: ["O rio Bengo atravessa a província", "Paisagens rurais a poucas horas de Luanda", "Caxito é a capital provincial"],
    interestTags: ["Natureza"],
    relatedFlagshipSlug: "luanda",
  },
  {
    slug: "bie",
    name: "Bié",
    status: "coming-soon",
    shortHook: "Planalto central, nascente de alguns dos maiores rios de Angola.",
    heroImageAlt: "Vista aérea da rua principal do Kuito, capital do Bié",
    heroImageSrc: "/images/rua-principal-kuito-bie.jpg",
    highlights: ["Nascente de vários rios importantes de Angola", "Planalto central do país", "Cidade do Kuito"],
    interestTags: ["Natureza"],
    relatedFlagshipSlug: "malanje",
  },
  {
    slug: "cabinda",
    name: "Cabinda",
    status: "coming-soon",
    shortHook: "Enclave tropical a norte, entre floresta equatorial e costa.",
    heroImageAlt: "Costa tropical de Cabinda",
    highlights: [
      "Separada do resto de Angola pela República Democrática do Congo",
      "Floresta tropical densa",
      "Um dos centros petrolíferos de Angola",
    ],
    interestTags: ["Natureza", "Cultura"],
    relatedFlagshipSlug: "luanda",
  },
  {
    slug: "cuando",
    name: "Cuando",
    status: "coming-soon",
    shortHook: "Uma das províncias mais recentes de Angola, no sudeste do país.",
    heroImageAlt: "Paisagem de savana do Cuando",
    highlights: ["Uma das três novas províncias criadas em 2024", "Paisagens de savana no sudeste do país"],
    interestTags: ["Natureza"],
    relatedFlagshipSlug: "huila",
  },
  {
    slug: "cuanza-norte",
    name: "Cuanza Norte",
    status: "coming-soon",
    shortHook: "Colinas verdes e o curso alto do rio Cuanza.",
    heroImageAlt: "Rio Cuanza junto a Cambambe, no Cuanza Norte",
    heroImageSrc: "/images/cambambe-cuanza-norte.jpg",
    highlights: ["Colinas verdes ao longo do curso alto do rio Cuanza", "Cidade do Ndalatando"],
    interestTags: ["Natureza"],
    relatedFlagshipSlug: "malanje",
  },
  {
    slug: "cubango",
    name: "Cubango",
    status: "coming-soon",
    shortHook: "Uma das províncias mais recentes de Angola, junto ao rio que lhe dá nome.",
    heroImageAlt: "Margem do rio Cubango",
    highlights: [
      "Uma das três novas províncias criadas em 2024",
      "Banhada pelo rio Cubango, que mais a sul dá origem ao rio Okavango",
    ],
    interestTags: ["Natureza"],
    relatedFlagshipSlug: "huila",
  },
  {
    slug: "cunene",
    name: "Cunene",
    status: "coming-soon",
    shortHook: "Extremo sul, terra do povo Mucubal e paisagens áridas.",
    heroImageAlt: "Paisagem árida do Cunene, extremo sul de Angola",
    highlights: ["O rio Cunene marca parte da fronteira com a Namíbia", "Paisagens áridas no extremo sul do país"],
    interestTags: ["Natureza", "Cultura"],
    relatedFlagshipSlug: "huila",
  },
  {
    slug: "huambo",
    name: "Huambo",
    status: "coming-soon",
    shortHook: "Coração do planalto central, clima ameno e terras agrícolas.",
    heroImageAlt: "Morro do Moco, o ponto mais alto de Angola, no Huambo",
    heroImageSrc: "/images/morro-do-moco-huambo.jpg",
    highlights: ["Um dos maiores centros urbanos do planalto central", "Clima ameno todo o ano devido à altitude"],
    interestTags: ["Cultura", "Natureza"],
    relatedFlagshipSlug: "huila",
  },
  {
    slug: "icolo-e-bengo",
    name: "Icolo e Bengo",
    status: "coming-soon",
    shortHook: "Nova província junto a Luanda, onde fica o litoral de Cabo Ledo.",
    heroImageAlt: "Lagoa da Quiminha, em Icolo e Bengo",
    heroImageSrc: "/images/lagoa-da-quiminha-icolo-e-bengo.jpg",
    highlights: [
      "Nova província, criada a partir do antigo território de Luanda em 2024",
      "Inclui o litoral de Cabo Ledo, com as suas falésias de argila vermelha",
    ],
    interestTags: ["Praia", "Natureza", "Aventura"],
    relatedFlagshipSlug: "luanda",
  },
  {
    slug: "lunda-norte",
    name: "Lunda Norte",
    status: "coming-soon",
    shortHook: "Nordeste de Angola, floresta densa e tradição mineira.",
    heroImageAlt: "Floresta densa da Lunda Norte",
    highlights: ["Região historicamente associada à extração de diamantes", "Floresta densa no nordeste do país"],
    interestTags: ["Natureza"],
    relatedFlagshipSlug: "malanje",
  },
  {
    slug: "lunda-sul",
    name: "Lunda Sul",
    status: "coming-soon",
    shortHook: "Interior a leste, marcado por rios e savana arborizada.",
    heroImageAlt: "Rua no centro de Saurimo, capital da Lunda Sul",
    heroImageSrc: "/images/rua-saurimo-lunda-sul.jpg",
    highlights: ["Tal como a Lunda Norte, ligada à tradição mineira dos diamantes", "Savana arborizada no interior leste"],
    interestTags: ["Natureza"],
    relatedFlagshipSlug: "malanje",
  },
  {
    slug: "moxico",
    name: "Moxico",
    status: "coming-soon",
    shortHook: "A maior província de Angola, vasta savana a leste.",
    heroImageAlt: "Jardim do Palácio do Governador, em Luena, capital do Moxico",
    heroImageSrc: "/images/jardim-palacio-governador-luena-moxico.jpg",
    highlights: ["A maior província de Angola em área", "Vasta savana que se estende até à fronteira com a Zâmbia"],
    interestTags: ["Natureza", "Aventura"],
    relatedFlagshipSlug: "malanje",
  },
  {
    slug: "moxico-leste",
    name: "Moxico Leste",
    status: "coming-soon",
    shortHook: "Uma das províncias mais recentes de Angola, no extremo leste do país.",
    heroImageAlt: "Paisagem remota do Moxico Leste",
    highlights: ["Uma das três novas províncias criadas em 2024, separada do Moxico", "Uma das regiões mais remotas de Angola"],
    interestTags: ["Natureza"],
    relatedFlagshipSlug: "malanje",
  },
  {
    slug: "uige",
    name: "Uíge",
    status: "coming-soon",
    shortHook: "Norte montanhoso e húmido, entre café e floresta.",
    heroImageAlt: "Colinas cobertas de vegetação do Uíge",
    highlights: ["Região historicamente associada à produção de café", "Clima húmido e paisagem montanhosa"],
    interestTags: ["Natureza", "Gastronomia"],
    relatedFlagshipSlug: "luanda",
  },
  {
    slug: "zaire",
    name: "Zaire",
    status: "coming-soon",
    shortHook: "Foz do rio Congo e a histórica Soyo, no extremo noroeste.",
    heroImageAlt: "Foz do rio Congo, na província do Zaire",
    highlights: ["Foz do rio Congo no oceano Atlântico", "M'Banza Kongo, antiga capital do Reino do Kongo"],
    interestTags: ["História", "Cultura"],
    relatedFlagshipSlug: "luanda",
  },
];

export const flagshipProvinces = provinces.filter((p) => p.status === "featured");
export const lightProvinces = provinces.filter((p) => p.status === "coming-soon");

export function getProvinceBySlug(slug: string) {
  return provinces.find((p) => p.slug === slug);
}

/** Flagship provinces first (alphabetical within each group), then the rest — the fallback the client approved when RegionFilterTabs was dropped (Website-Design.md §11). */
export function getSortedProvinces() {
  const byName = (a: Province, b: Province) => a.name.localeCompare(b.name, "pt");
  return [...flagshipProvinces.sort(byName), ...lightProvinces.sort(byName)];
}

/** Provinces tagged with a given interest — the "cross-highlights relevant provinces" half of Interest mode (Website-Strategy.md §5.1). */
export function getProvincesByInterest(tag: InterestTag) {
  return getSortedProvinces().filter((p) => p.interestTags?.includes(tag));
}
