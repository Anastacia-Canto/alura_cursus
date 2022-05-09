// Declarando nota por nota:

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;
// let media = (nota1 + nota2 + nota3 + nota4)/4;

// Usando arrays:

const notas = [10, 6.5, 8, 7.5];
notas.push(7); // para adicionar elementos ao final da lista

console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/notas.length; 
// .length calcula a quantidade de elementos na lista

notas.pop(); // retira o último elemento da lista. Essa função não aceita parâmetro

console.log(notas)
console.log(media)

const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)

arrayVazia.push(2);

console.log(arrayVazia)
console.log(arrayVazia.length)