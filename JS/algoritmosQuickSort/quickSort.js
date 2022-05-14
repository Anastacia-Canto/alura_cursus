<<<<<<< HEAD
const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

function quickSort(array, esquerda, direita) {

    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual -1);
        };
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        };
    };

    return array;
};

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        };
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        };
        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        };
    };
    return atualEsquerda;
};


=======
const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

function quickSort(array, esquerda, direita) {

    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual -1);
        };
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        };
    };

    return array;
};

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        };
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        };
        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        };
    };
    return atualEsquerda;
};


>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
console.log(quickSort(listaLivros, 0, listaLivros.length - 1));