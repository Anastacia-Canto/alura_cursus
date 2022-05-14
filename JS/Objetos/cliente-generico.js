<<<<<<< HEAD
// função construtora de objetos

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

const andre = new Cliente("André", "123456789", "andre@email.com", 100);

=======
// função construtora de objetos

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

const andre = new Cliente("André", "123456789", "andre@email.com", 100);

>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
console.log(andre);