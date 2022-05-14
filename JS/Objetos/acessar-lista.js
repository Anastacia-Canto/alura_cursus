<<<<<<< HEAD

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

console.log(cliente["idade"]);

chaves.forEach( info => {
    console.log(cliente[info]);
=======

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

console.log(cliente["idade"]);

chaves.forEach( info => {
    console.log(cliente[info]);
>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
});