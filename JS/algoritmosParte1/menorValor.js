<<<<<<< HEAD

const livros = require('./listaLivros');

let maisBarato = 0;
// let maisCaro = 0;


// const infoLivros = () => {
//     for (let atual = 0; atual < livros.length; atual++){
//         if (livros[atual].preco < livros[maisBarato].preco){
//             maisBarato = atual;
//         };
//         if (livros[atual].preco > livros[maisCaro].preco){
//             maisCaro = atual;
//         };
//     };
//     console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`);
//     console.log(`o livro mais caro custa ${livros[maisCaro].preco} e o seu título é ${livros[maisCaro].titulo}`);
// };

// infoLivros();

const menorValor = (arrProdutos, posicaoInicial) => {
    let maisBarato = posicaoInicial;
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        };
    };
    return maisBarato;
};

=======

const livros = require('./listaLivros');

let maisBarato = 0;
// let maisCaro = 0;


// const infoLivros = () => {
//     for (let atual = 0; atual < livros.length; atual++){
//         if (livros[atual].preco < livros[maisBarato].preco){
//             maisBarato = atual;
//         };
//         if (livros[atual].preco > livros[maisCaro].preco){
//             maisCaro = atual;
//         };
//     };
//     console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`);
//     console.log(`o livro mais caro custa ${livros[maisCaro].preco} e o seu título é ${livros[maisCaro].titulo}`);
// };

// infoLivros();

const menorValor = (arrProdutos, posicaoInicial) => {
    let maisBarato = posicaoInicial;
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        };
    };
    return maisBarato;
};

>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
module.exports = menorValor;