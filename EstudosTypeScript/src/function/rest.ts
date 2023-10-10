

// function totalvendas(venda1:number,venda2:number,venda3:number,venda4:number): number{
//     const total = venda1+venda2+venda3+venda4;

//     console.log(total);

//     return total;
// }

// totalvendas(10,30,50,10)

function totalvendas(...vendas: number[]){
    const quantidadeVendas = vendas.length;

    console.log(`Você fez ${quantidadeVendas} vendas hoje!` )
}

// totalvendas(10,20,30);

function mostraNomes(...nome:string[]){
    
    console.log(nome.length);

    nome.map( nome =>{
        console.log(nome)
    })
}

mostraNomes("Natan","Matheus","Guilherme","Natalia")