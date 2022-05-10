/* Objeto literal: uma lista de chaves e valores dento de {}.

Objetos literais sempre apontam para um mesmo local na memória, mesmo se você criar cópias dele. */

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
};

console.log(objPersonagem.nome);

//esse objeto é apenas um ponteiro
const objPersonagem2 = objPersonagem; 

objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagem.nome);
console.log(objPersonagem2.nome);

// para criar cópias usa-se o método Object.create()
// esse método usa como protótipo um objeto passado via parâmetro

// esse novo objeto ocupa um novo lugar na memória, diferente do original
const objPersonagem3 = Object.create(objPersonagem); 

objPersonagem3.nome = "Saruman";

console.log(objPersonagem.nome);
console.log(objPersonagem3.nome);