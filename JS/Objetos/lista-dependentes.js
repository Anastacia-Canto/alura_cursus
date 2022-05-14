<<<<<<< HEAD
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones: ["999888777", "989898987"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
};

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
});

console.log(cliente);

// como acessar um dependente específico?

const filhaMaisNova = cliente.dependentes.filter( dependente => {
    return dependente.dataNasc === "04/01/2014"
});

console.log(filhaMaisNova[0].nome);

console.log(filhaMaisNova);
=======
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fones: ["999888777", "989898987"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
};

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
});

console.log(cliente);

// como acessar um dependente específico?

const filhaMaisNova = cliente.dependentes.filter( dependente => {
    return dependente.dataNasc === "04/01/2014"
});

console.log(filhaMaisNova[0].nome);

console.log(filhaMaisNova);
>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
