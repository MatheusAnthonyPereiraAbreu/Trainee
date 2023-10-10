
type info = {
    id: number;
    nome: string;
    descricao?:string;
}

const produtoInfo: info = {
    id:123,
    nome: "placa de video",
    descricao: "Placa GTX 2090",
}

type categoria = {
    slug:string;
    quantidadeProduto: number; 
}

const categoria1: categoria ={
    slug:"hardware",
    quantidadeProduto: 2
}

type ProdutoInfo = info & categoria; //interseção entre info e categoria

const novoProduto: ProdutoInfo = {
    id:12313,
    nome:"teclado RGB",
    slug: "teclado-mecanico",
    quantidadeProduto: 10,
}
console.log(novoProduto)