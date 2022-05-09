const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if (de > ate) {
        return -1;
    };

    if (valorBuscado === atual.preco) {
        return meio;
    };

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    };

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    };
};


console.log(busca(listaLivros, 0, listaLivros.length - 1, 36));

// 1 operação = 2^1 = 2 elementos
// 2 operações = 2^2 = 4 elementos
// 3 operações = 2^3 = 8 elementos
// 4 operações = 2^4 = 16 elementos
// 10 operações = 2^10 = 1024 elementos
// 
// Calculando operações a partir da qantidade de elementos:
// 
// Big-O notation: O(log n)