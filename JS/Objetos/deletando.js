<<<<<<< HEAD
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
};

delete objPersonagem.aliado;

console.log(objPersonagem);

=======
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
};

delete objPersonagem.aliado;

console.log(objPersonagem);

>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
// o operador 'delete' remove a chave e o valor, desde que não sejam herdados de outro objeto. 