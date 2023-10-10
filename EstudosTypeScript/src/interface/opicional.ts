

interface cadstroProps{
    nome?:string;
    email: string;
    status:boolean;
}

const NovoUsuario: cadstroProps = {
    email: "matheus@teste.com",
    status: true,
}

//console.log(NovoUsuario);

function NovoUser(usuario:cadstroProps){
    console.log(usuario.email)
}

NovoUser({email:"teste@teste.com", status:true});