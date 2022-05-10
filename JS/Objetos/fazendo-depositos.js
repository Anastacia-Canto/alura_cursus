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
        this.saldo += valor;// this é uma palavra reservada que se refere ao próprio objeto
    }
};

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);
