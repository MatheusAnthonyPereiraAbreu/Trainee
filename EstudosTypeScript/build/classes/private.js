"use strict";
class conta {
    constructor() {
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log("Limite não aprovado.");
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class bancoAfiliado extends conta {
    limiteAfiliadoConta() {
        return this.solicitarLimite(1500);
    }
}
const fulano = new conta();
fulano.solicitarLimiteApp(true, 700);
console.log(fulano);
const joao = new bancoAfiliado();
joao.limiteAfiliadoConta();
console.log(joao);
