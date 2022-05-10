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

// o operador 'delete' remove a chave e o valor, desde que não sejam herdados de outro objeto. 