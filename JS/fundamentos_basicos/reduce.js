const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

// reduce itera pela array, executando uma operação e retornando um único valor no final
// atual = elemento que está sendo lido
// acum = é iniciado com 0 e vai sendo atualizado a cada elemento, guardando o valor final da soma

function mediaSala(notasDaSala){
	const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador,0)
	return somaDasNotas/notasDaSala.length
}

console.log(`média da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`média da sala de Java ${mediaSala(salaJava)}`)
console.log(`média da sala de Python ${mediaSala(salaPython)}`)

// outro exemplo

const notas = [10, 6.5, 8, 7]

// const media = notas.reduce((acumulador, atual) => acumulador += atual, 0)/notas.length

// outra forma de escrever a função reduce
const media = notas.reduce(function (acumulador, atual) {
	return acumulador + atual
}, 0)/notas.length

console.log(media)


