<<<<<<< HEAD
function troca(lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];
        
    lista[analise] = itemAnterior;
    lista[analise - 1] = itemAnalise;
};

=======
function troca(lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];
        
    lista[analise] = itemAnterior;
    lista[analise - 1] = itemAnalise;
};

>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
module.exports = troca;