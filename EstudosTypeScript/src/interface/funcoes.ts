

interface CursoProps{
    id: string;
    nome:string;
    preco: number;

    promocao: (preco:number) => void;
}

// function mostraPromocao(preco: number){
//     console.log(`Promocao no curso por apenas: R$ ${preco}`);
// }

// const novoCurso: CursoProps = {
//     id: "1",
//     nome: "Curso typescript",
//     preco: 750,
//     promocao: (preco: number): void =>{
//         console.log('Preoco total: ', preco)
//     }
// }

// console.log(novoCurso);

// console.log(novoCurso.promocao(320))

interface SomaProps{
    (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1:number, valor2:number): number => {
    console.log("Resultado: ", valor1 + valor2);

    return valor1+valor2;
}

const resultado = somaNumeros(15,13)

console.log("Resultado da variavel: ",resultado)