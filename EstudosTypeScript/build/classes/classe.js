"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa ${mesa}`;
    }
    mudarStatus(status) {
        if (status == "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO!");
        }
        else {
            console.log("LOJA FECHADA!");
        }
    }
}
const redBurguer = new Loja("Red Burguer", "lanches");
redBurguer.criarLoja();
const retornoLoja = redBurguer.emitirPedido(48, "Suco", "Hamburguer", "Coca 2 litros");
redBurguer.mudarStatus("ABERTO");
console.log(retornoLoja);
