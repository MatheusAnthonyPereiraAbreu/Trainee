class conta {
    private limite: number = 450;

    private aumentarLimite(quantidade: number) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`)
        }else {
            console.log("Limite não aprovado.")
        }
    }

    protected solicitarLimite(quantidade: number) {
        return this.aumentarLimite(quantidade);
    }

    solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        } else {
            return false
        }
    }
}

class bancoAfiliado extends conta {
    limiteAfiliadoConta() {
        return this.solicitarLimite(1500)
    }
}

const fulano = new conta();

fulano.solicitarLimiteApp(true, 700)

console.log(fulano);

const joao = new bancoAfiliado();

joao.limiteAfiliadoConta();

console.log(joao);