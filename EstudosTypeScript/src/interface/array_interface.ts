

// interface tecnologiaprops{
//     id:string;
//     nome:string;
//     slug?:string[];
// }

// let tecnologia1:tecnologiaprops = {
//     id:"1",
//     nome:"PHP",
//     slug: ["php","php-do-zero", "php12"]
// }

interface tecnologiaprops{
    id:string;
    nome:string;
    descricao?:string;
}

interface nomesprops {
    tecnologia: tecnologiaprops[]
}

let frontend: nomesprops = {
    tecnologia:[
        { id: "12", nome: "ReacJS", descricao:"Biblioteca para criar interfaeces"},
        { id: "43", nome: "VueJs", descricao: "Framework Frontend"}
    ]
}

console.log(frontend.tecnologia)