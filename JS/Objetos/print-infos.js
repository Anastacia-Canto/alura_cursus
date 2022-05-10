const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com"
};

console.log(cliente.idade); //escolho a chave e recebo o valor

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);

console.log(cliente.cpf.substring(0,3));