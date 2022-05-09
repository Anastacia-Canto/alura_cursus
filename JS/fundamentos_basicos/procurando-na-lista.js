const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

// includes retorna boolean (ele só diz se aquele elemento existe ou não na lista)

const exibeNomeNota = (nomeDoAluno) => {
	if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){ //includes procura o parametro na lista
		let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno); //indexOf retorna o indice do elemento procurado
		return listaDeNotasEAlunos[0][indice] + ' sua média é ' + listaDeNotasEAlunos[1][indice];
	}
	else {
		return "Aluno não está cadastrado";
	}
}

console.log(exibeNomeNota("Ana"))
console.log(exibeNomeNota("Lucas"))


