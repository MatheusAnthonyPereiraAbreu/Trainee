/*
Herança e encapsulamento 

4 tipos de modificadores: public, private,protected, readonly

Public: Público, todos podem usar e modificar.
Private: Pode ser acessado apenas pela classe que pertence aquele método.
Protected: Pode ser modificado pela própria classe ou pela classe filha. 
Readonly: Posso apenas passa-la, ve-la, manipular ela, contando que eu não mude o seu valor.
*/

class usuario {
    protected id:number;
    nome: string;
    email: string;

    constructor(id: number,nome: string, email: string) {
        this.id = id 
        this.nome = nome
        this.email = email
    }
}

class admin extends usuario {
    cargo: string;
    nivel: number;

    constructor(id:number,nome: string, email: string, cargo: string, nivel: number) {

        super(id,nome, email);

        this.cargo = cargo;
        this.nivel = nivel;
    }

    protected mudarCargo(cargo:string): void {
        console.log("ALTERANDO CARGO PARA: ", cargo)
        console.log("ID DO USUARIO: ", this.id)
    }

    acessarAdmin(){
        this.mudarCargo("Designer");
    }
}

const usuario1 = new admin(123,"Matheus", "teste@teste.com", "Programador", 2);

console.log(usuario1);

usuario1.acessarAdmin();