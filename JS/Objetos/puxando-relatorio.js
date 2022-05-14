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
};

let relatorio = "";

for ( let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    }else{
        relatorio += `
        ${info} => ${cliente[info]}
        `;// info se refere a cada chave do objeto
    };
};

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
};

let relatorio = "";

for ( let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    }else{
        relatorio += `
        ${info} => ${cliente[info]}
        `;// info se refere a cada chave do objeto
    };
};

>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
console.log(relatorio);