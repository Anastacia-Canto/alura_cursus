const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// callback - é um método que recebe como parametro uma função, ele aplica essa função ao cada elemento da lista
// nota é uma ArrowFunction
// a função do parametro poderia ser criada fora e só chamada no parametro
// o método do forEach executa o que tá no bloco mas não retorna nada

notas.forEach(nota => {
	somaDasNotas += nota;
})

let media = somaDasNotas / notas.length;

console.log(media)


