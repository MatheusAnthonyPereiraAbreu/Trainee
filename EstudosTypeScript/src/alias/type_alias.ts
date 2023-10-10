
type Uuid = number|string|null;

function acessar(uuid: Uuid, nome: string){
    console.log(`ID: ${uuid} - Bem vindo ${nome}`)
}

function logUsuario(uuid:Uuid){
    console.log(`Conta referente ao UUID: ${uuid}`)
}

// acessar(123,"matheus")

// acessar("55", "Henrique")

// logUsuario("123")

type moedas = "brl"|"eur"|"usd"|"BTC"

function comprarItem(moeda: moedas){
    console.log("Comprando com a moeda: ", moeda)
}

comprarItem("BTC")