"use strict";
function cadastroloja(nome, email, status = false) {
    console.log("Status atual da loja: ", status);
    return status;
}
cadastroloja("Matheus", "teste@teste.com", true);
