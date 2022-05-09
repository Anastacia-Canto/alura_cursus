const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

// o primeiro parametro é uma função 
// filter é um método boolean
// ele percorre a array notas e quando recebe um retorno true para a condição dada, busca na array nomes o elemento com o mesmo indice
const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`)