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


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj); //lista as chaves do objeto
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    };
};

console.log(Object.keys(cliente));// acessa as chaves

console.log(Object.values(cliente));//acessa os valores

console.log(Object.entries(cliente));//acessa os pares chave:valor

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


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj); //lista as chaves do objeto
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    };
};

console.log(Object.keys(cliente));// acessa as chaves

console.log(Object.values(cliente));//acessa os valores

console.log(Object.entries(cliente));//acessa os pares chave:valor

>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
oferecerSeguro(cliente);