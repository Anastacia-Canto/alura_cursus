<<<<<<< HEAD
const clientes = [
    {
        nome: "Andre",
        idade: 36,
        cpf: "123456789",
        email: "andre@email.com",
        fones: ["999888777", "989898987"],
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014" 
        }],
        saldo: 100,
        depositar: function(valor){
            this.saldo += valor;
        }
    },
    {
        nome: "Juliana",
        cpf: "142536478",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }]
    }
];

// ... operador Spread
// cira uma array e guarda o conteúdo pedido. No caso os dependentes de cada objeto.
//const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

let listaDeDependentes = [];

clientes.forEach(listaDependentes => {
    listaDeDependentes.push(...listaDependentes.dependentes);
});

console.log(listaDeDependentes);


=======
const clientes = [
    {
        nome: "Andre",
        idade: 36,
        cpf: "123456789",
        email: "andre@email.com",
        fones: ["999888777", "989898987"],
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014" 
        }],
        saldo: 100,
        depositar: function(valor){
            this.saldo += valor;
        }
    },
    {
        nome: "Juliana",
        cpf: "142536478",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }]
    }
];

// ... operador Spread
// cira uma array e guarda o conteúdo pedido. No caso os dependentes de cada objeto.
//const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

let listaDeDependentes = [];

clientes.forEach(listaDependentes => {
    listaDeDependentes.push(...listaDependentes.dependentes);
});

console.log(listaDeDependentes);


>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
// console.table(listaDependentes);