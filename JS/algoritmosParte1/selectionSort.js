<<<<<<< HEAD
// Algoritmo Selection Sort
//
// Ele sempre busca o menor valor e vai jogando ele pro início da array. 

const livros = require('./listaLivros');

const menorValor = require('./menorValor');


// console.log(livros);

// for (let atual = 0; atual < livros.length - 1; atual ++){
//     let menor = menorValor(livros, atual);
    
//     let livroAtual = livros[atual];
//     let livroMenorPreco = livros[menor];

//     livros[atual] = livroMenorPreco;
//     livros[menor] = livroAtual;
// };

// console.log(livros);

// usando forEach

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice);

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco;
    livros[menor] = livroAtual;
});

=======
// Algoritmo Selection Sort
//
// Ele sempre busca o menor valor e vai jogando ele pro início da array. 

const livros = require('./listaLivros');

const menorValor = require('./menorValor');


// console.log(livros);

// for (let atual = 0; atual < livros.length - 1; atual ++){
//     let menor = menorValor(livros, atual);
    
//     let livroAtual = livros[atual];
//     let livroMenorPreco = livros[menor];

//     livros[atual] = livroMenorPreco;
//     livros[menor] = livroAtual;
// };

// console.log(livros);

// usando forEach

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice);

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco;
    livros[menor] = livroAtual;
});

>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
console.log(livros);