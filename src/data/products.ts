export interface SizeRow {
  idade: string;
  tamanho: string;
  altura: string;
  peso: string;
}

export interface Product {
  slug: string;
  nome: string;
  personagem: string;
  precoAtual: number;
  precoAntigo: number;
  imagens: string[];
  resumo: string;
  descricao: string;
  especificacoes: string[];
}

export const sizeTable: SizeRow[] = [
  { idade: "0 a 3 meses", tamanho: "RN", altura: "até 60 cm", peso: "3 a 5 kg" },
  { idade: "3 a 6 meses", tamanho: "P", altura: "60 a 66 cm", peso: "5 a 7 kg" },
  { idade: "6 a 9 meses", tamanho: "M", altura: "66 a 72 cm", peso: "7 a 9 kg" },
  { idade: "9 a 12 meses", tamanho: "G", altura: "72 a 78 cm", peso: "9 a 11 kg" },
  { idade: "1 a 2 anos", tamanho: "2", altura: "78 a 88 cm", peso: "11 a 13 kg" },
  { idade: "3 a 4 anos", tamanho: "4", altura: "88 a 105 cm", peso: "13 a 16 kg" },
  { idade: "4 a 6 anos", tamanho: "6", altura: "105 a 117 cm", peso: "16 a 21 kg" },
  { idade: "6 a 8 anos", tamanho: "8", altura: "117 a 128 cm", peso: "21 a 26 kg" },
  { idade: "8 a 10 anos", tamanho: "10", altura: "128 a 137 cm", peso: "26 a 32 kg" },
  { idade: "10 a 12 anos", tamanho: "12", altura: "137 a 150 cm", peso: "32 a 39 kg" },
];

const especificacoesPadrao = [
  "Tecido fleece premium (100% poliéster antialérgico)",
  "Capuz com personagem 3D bordado e aplicado",
  "Zíper frontal infantil de fácil abertura",
  "Punhos elásticos que não apertam",
  "Pés fechados antiderrapantes (modelos selecionados)",
  "Modelagem folgada, veste do tamanho indicado",
  "Costura reforçada que aguenta brincadeira pesada",
  "Lavável na máquina em água fria",
];

export const products: Product[] = [
  {
    slug: "panda",
    nome: "Pijama Panda",
    personagem: "Panda",
    precoAtual: 24.9,
    precoAntigo: 39.9,
    imagens: ["/products/panda/1.jpg", "/products/panda/2.jpg", "/products/panda/3.jpg", "/products/panda/4.jpg"],
    resumo: "Fleece macio e capuz 3D de Panda, do RN ao tamanho 12.",
    descricao:
      "Pijama Panda para deixar a hora de dormir (e de brincar) muito mais divertida! Fleece super macio e antialérgico, quentinho para o friozinho sem esquentar demais em ambientes climatizados. Um capricho de fantasia inspirado em Panda que a criançada vai amar vestir — ótimo pra brincar de faz-de-conta ou só para dormir agasalhado. Disponível do RN ao tamanho 12, unissex, com zíper frontal e capuz em formato de Panda.",
    especificacoes: especificacoesPadrao,
  },
  {
    slug: "unicornio",
    nome: "Pijama Unicórnio",
    personagem: "Unicórnio",
    precoAtual: 24.9,
    precoAntigo: 39.9,
    imagens: ["/products/unicornio/1.jpg", "/products/unicornio/2.jpg", "/products/unicornio/3.jpg", "/products/unicornio/4.jpg"],
    resumo: "Fleece macio e capuz 3D de Unicórnio, do RN ao tamanho 12.",
    descricao:
      "Pijama Unicórnio para deixar a hora de dormir (e de brincar) muito mais divertida! Fleece super macio e antialérgico, quentinho para o friozinho sem esquentar demais em ambientes climatizados. Um capricho de fantasia inspirado em Unicórnio que a criançada vai amar vestir — ótimo pra brincar de faz-de-conta ou só para dormir agasalhado. Disponível do RN ao tamanho 12, unissex, com zíper frontal e capuz em formato de Unicórnio.",
    especificacoes: especificacoesPadrao,
  },
  {
    slug: "dinossauro",
    nome: "Pijama Dinossauro",
    personagem: "Dinossauro",
    precoAtual: 24.9,
    precoAntigo: 39.9,
    imagens: ["/products/dinossauro/1.jpg", "/products/dinossauro/2.jpg", "/products/dinossauro/3.jpg", "/products/dinossauro/4.jpg"],
    resumo: "Fleece macio e capuz 3D de Dinossauro, do RN ao tamanho 12.",
    descricao:
      "Pijama Dinossauro para deixar a hora de dormir (e de brincar) muito mais divertida! Fleece super macio e antialérgico, quentinho para o friozinho sem esquentar demais em ambientes climatizados. Um capricho de fantasia inspirado em Dinossauro que a criançada vai amar vestir — ótimo pra brincar de faz-de-conta ou só para dormir agasalhado. Disponível do RN ao tamanho 12, unissex, com zíper frontal e capuz em formato de Dinossauro.",
    especificacoes: especificacoesPadrao,
  },
  {
    slug: "astronauta",
    nome: "Pijama Astronauta",
    personagem: "Astronauta",
    precoAtual: 24.9,
    precoAntigo: 39.9,
    imagens: ["/products/buzz/1.jpg", "/products/buzz/2.jpg", "/products/buzz/3.jpg", "/products/buzz/4.jpg"],
    resumo: "Fleece macio e capuz 3D de Astronauta, do RN ao tamanho 12.",
    descricao:
      "Pijama Astronauta para deixar a hora de dormir (e de brincar) muito mais divertida! Fleece super macio e antialérgico, quentinho para o friozinho sem esquentar demais em ambientes climatizados. Um capricho de fantasia inspirado no espaço que a criançada vai amar vestir — ótimo pra brincar de faz-de-conta ou só para dormir agasalhado. Disponível do RN ao tamanho 12, unissex, com zíper frontal e capuz temático.",
    especificacoes: especificacoesPadrao,
  },
  {
    slug: "marquinho",
    nome: "Pijama Marquinho",
    personagem: "Marquinho",
    precoAtual: 24.9,
    precoAntigo: 39.9,
    imagens: ["/products/marquinho/1.jpg", "/products/marquinho/2.jpg", "/products/marquinho/3.jpg", "/products/marquinho/4.jpg"],
    resumo: "Fleece macio e capuz 3D do Marquinho, do RN ao tamanho 12.",
    descricao:
      "Pijama Marquinho para deixar a hora de dormir (e de brincar) muito mais divertida! Fleece super macio e antialérgico, quentinho para o friozinho sem esquentar demais em ambientes climatizados. Um capricho de fantasia que a criançada vai amar vestir — ótimo pra brincar de faz-de-conta ou só para dormir agasalhado. Disponível do RN ao tamanho 12, unissex, com zíper frontal e capuz temático.",
    especificacoes: especificacoesPadrao,
  },
];

export const detailImages = {
  zipper: "/products/detalhes/zipper.jpg",
  fabric: "/products/detalhes/fabric.jpg",
  stitching: "/products/detalhes/stitching.jpg",
  cuff: "/products/detalhes/cuff.jpg",
};
