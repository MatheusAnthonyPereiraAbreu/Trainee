

interface produtoProps{
    readonly id:string;
    nome:string;
    descricao:string;
}

let produto1: produtoProps={
    id:"1",
    nome:"Tenis nike",
    descricao:"Tenis maneiro"
}

produto1.nome = "Tenis Nike 2.0"

console.log(produto1);