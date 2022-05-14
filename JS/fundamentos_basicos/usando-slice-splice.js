const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara',
 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
  'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan',
   'Renata', 'Daisy', 'Camilo'];

// o slice serve para dividir listas, criando uma cópia em uma nova array

// const sala1 = nomes.slice(0, nomes.length/2); //o end é exclusivo
// const sala2 = nomes.slice(nomes.length/2);

// // console.log(`Alunos da sala 1: ${sala1}`)
// // console.log(`Alunos da sala 2: ${sala2}`)
// console.log(nomes)

// O splice serve para remover e/ou adicionar elementos na lista em quantidades e posições específicas

const listaDeChamada = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// começando na posição 1, ele vai excluir 2 elementos e incluir 'Rodrigo'
listaDeChamada.splice(1, 2, 'Rodrigo')
console.log(listaDeChamada)

// apenas adicionando algum elemento numa posiçao especifica
// adicionando Arthur na posição 2, sem eliminar nenhum elemento (0)
listaDeChamada.splice(2, 0, 'Arthur')
console.log(listaDeChamada)
