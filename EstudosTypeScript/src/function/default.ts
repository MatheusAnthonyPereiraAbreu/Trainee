
//Como deixar um valor por default ou deixar ele opcional.

// function cadastro(email: string, senha: string, nome : string = 'Aluno' ,idade?:number): void {
//     let data = { email, senha, nome , idade};

//     console.log(data);

// }

// cadastro("teste@teste.com", "1231231231", "Sujeito Programador", 28);

function cadastroloja(nome:string,email:string, status=false):boolean{

    console.log("Status atual da loja: ", status);

    return status;
}

cadastroloja("Matheus", "teste@teste.com", true)