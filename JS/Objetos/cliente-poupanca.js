function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    };
};

const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100);

//na criação da função construtora da poupança é usada uma outra função construtora
//ClientePoupanca herda as propriedades de Cliente
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this,nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
};

const juliana = new ClientePoupanca("Juliana", "123432345", "juliana@email.com", 200, 400);

// console.log(juliana);


//adiciona um novo metodo ao protótipo do objeto
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
};

juliana.depositarPoup(300);

// console.log(juliana.saldoPoup);

console.log(andre.hasOwnProperty("saldoPoup"));
console.log(juliana.hasOwnProperty("saldoPoup"));
console.log(andre instanceof Cliente);
console.log(typeof andre);
console.log(typeof juliana);
console.log(juliana instanceof ClientePoupanca);
console.log(Function.prototype.isPrototypeOf(Cliente));
console.log(Cliente.constructor === Function);