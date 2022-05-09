const pessoa1 = {
    nome: "Ana",
    email: "ana@email.com",
    imprimeInfo: imprimeNomeEmail
};

const pessoa2 = {
    nome: "Paula",
    email: "paula@email.com",
    imprimeInfo: imprimeNomeEmail
};



function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`);
};

pessoa1.imprimeInfo();

pessoa2.imprimeInfo();
