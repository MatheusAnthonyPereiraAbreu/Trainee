"use strict";
let n1 = 10;
let n2 = 25;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 20) {
        return "soma maior que 20";
    }
    else {
        return "soma menor que 20";
    }
}
console.log(soma(n1, n2));
