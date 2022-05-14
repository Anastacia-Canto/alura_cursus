<<<<<<< HEAD
class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    exibirSaldo(){
        console.log(this.saldo);
    }
};

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca)
    {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
};

const andre = new ClientePoupanca("Andre", "andre@email.com", "123456789", 100, 200);

console.log(andre);

andre.depositar(50);
andre.depositarPoupanca(100);

console.log(andre);


=======
class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    exibirSaldo(){
        console.log(this.saldo);
    }
};

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca)
    {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
};

const andre = new ClientePoupanca("Andre", "andre@email.com", "123456789", 100, 200);

console.log(andre);

andre.depositar(50);
andre.depositarPoupanca(100);

console.log(andre);


>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
