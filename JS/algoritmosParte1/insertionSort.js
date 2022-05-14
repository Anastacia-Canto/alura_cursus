<<<<<<< HEAD
// Algoritmo Insertion Sort

const livros = require('./listaLivros');

const troca = require('./troca');

function insertionSort(lista) {
    
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            troca(lista, analise);
            analise--;
        };
    };
    
    console.log(lista);
};

=======
// Algoritmo Insertion Sort

const livros = require('./listaLivros');

const troca = require('./troca');

function insertionSort(lista) {
    
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            troca(lista, analise);
            analise--;
        };
    };
    
    console.log(lista);
};

>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
insertionSort(livros);