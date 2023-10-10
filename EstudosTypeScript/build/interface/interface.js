"use strict";
const BurguerK = {
    nome: "BK",
    endereco: "Rua X",
    status: true,
    produtoPromocao: "Burguer Duplo",
};
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso! `);
    console.log(`Endereço da loja ${endereco}`);
    console.log(`Status da loja: ${status}`);
    console.log("==========================================");
}
novaLoja({ nome: "Red Burguer", endereco: "Rua ali da esquina", status: false });
novaLoja({ nome: "Subway", endereco: "Rua X", status: true });
