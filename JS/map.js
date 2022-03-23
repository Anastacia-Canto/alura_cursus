const notas = [10, 9, 8, 7, 6]
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)

// o map executa o código que ta no bloco e retorna uma array atualizada. 
// o retorno é o que faz a diferença entre o map e o forEach


let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

// usar o map para atualizar os dados deixando os nomes apenas com letras maiusculas

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)