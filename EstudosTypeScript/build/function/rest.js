"use strict";
function totalvendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
}
function mostraNomes(...nome) {
    console.log(nome.length);
    nome.map(nome => {
        console.log(nome);
    });
}
mostraNomes("Natan", "Matheus", "Guilherme", "Natalia");
