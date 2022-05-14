<<<<<<< HEAD
const colecionador = {
    nome: "João do Gibi",
    idade: 41,
    tipoColecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo: function(propriedade, tipo){
        this[propriedade].push(tipo);
    }
};


console.log(colecionador.nome);
console.log(colecionador["nome"]);

for(i=0; i < 4; i++){
    colecionador.adicionarTipo("tipoColecao", "HQ" + i);
};

console.log(colecionador);
=======
const colecionador = {
    nome: "João do Gibi",
    idade: 41,
    tipoColecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo: function(propriedade, tipo){
        this[propriedade].push(tipo);
    }
};


console.log(colecionador.nome);
console.log(colecionador["nome"]);

for(i=0; i < 4; i++){
    colecionador.adicionarTipo("tipoColecao", "HQ" + i);
};

console.log(colecionador);
>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
