interface jogoprops{
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const left4dead: jogoprops = {
    id: "123",
    nome:"Left 4 Dead 2",
    descricao: "Jogo de tiro e açao",
    plataforma: ["PS5", "PC"]
}

//console.log(left4dead)

// interface DLC extends jogoprops{
//     novoConteudo: string[];
// }

// const left4deadDLC: DLC= {
//     id:"90",
//     nome: "Left for Dead - Novos Mapas",
//     descricao:"4 novos mapas  para jogar online",
//     plataforma: ["PS5", "Pc"],
//     novoConteudo:["Modo coop", "Mais 5 horas de jogo", "Medalhas"]
// }

// console.log(left4deadDLC);

interface DLC extends jogoprops{
    jogoOriginal: jogoprops;
    novoConteudo: string[];
}

const left4deadDLC: DLC= {
    id:"90",
    nome: "Left for Dead - Novos Mapas",
    descricao:"4 novos mapas  para jogar online",
    plataforma: ["PS5", "Pc"],
    novoConteudo:["Modo coop", "Mais 5 horas de jogo", "Medalhas"],
    jogoOriginal: left4dead,
}

console.log(left4deadDLC);