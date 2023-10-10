

// let loja: object;

// loja = {
//     nome:"BK",
//     endereco: "Rua X",
//     status:true, 
// }

interface IlojaProps{
    nome: string;
    endereco:string;
    status:boolean;
    produtoPromocao?:string;
}

const BurguerK: IlojaProps = {
    nome:"BK",
    endereco:"Rua X",
    status: true ,
    produtoPromocao: "Burguer Duplo",
}

//console.log(BurguerK);

function novaLoja( {nome,endereco,status}: IlojaProps ): void {
    console.log(`Loja ${nome} criada com sucesso! `)
    console.log(`Endereço da loja ${endereco}` )
    console.log(`Status da loja: ${status}` )

    console.log("==========================================")
}

novaLoja({nome:"Red Burguer", endereco:"Rua ali da esquina", status:false})

novaLoja({nome:"Subway", endereco:"Rua X", status:true})