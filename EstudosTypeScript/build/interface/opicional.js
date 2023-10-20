"use strict";
const NovoUsuario = {
    email: "matheus@teste.com",
    status: true,
};
function NovoUser(usuario) {
    console.log(usuario.email);
}
NovoUser({ email: "teste@teste.com", status: true });
