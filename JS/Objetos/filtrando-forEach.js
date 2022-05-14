<<<<<<< HEAD
const nadadores = [
    {
        nome: "Roberto",
        idade: 18,
        nado: "costa",
        equipe: 
        [{
            categoria: "Júnior II",
            treinador: "Arnaldo"
        }],
    },
    {
        nome: "Paula",
        idade: 10,
        nado: "borboleta",
        equipe: 
        [{
            categoria: "Mirim II",
            treinador: "Maria"
        }],
    },
    {
        nome: "Carla",
        idade: 27,
        nado: "peito",
        equipe: 
        [{
            categoria: "Masters",
            treinador: "Pedro"
        }],
    },
    {
        nome: "Lucas",
        idade: 15,
        nado: "costa",
        equipe: 
        [{
            categoria: "Juvenil I",
            treinador: "Júlia"
        }],
    }
];

let equipes = [];

nadadores.forEach(dadosEquipe => {
    equipes.push(...dadosEquipe.equipe);
});

=======
const nadadores = [
    {
        nome: "Roberto",
        idade: 18,
        nado: "costa",
        equipe: 
        [{
            categoria: "Júnior II",
            treinador: "Arnaldo"
        }],
    },
    {
        nome: "Paula",
        idade: 10,
        nado: "borboleta",
        equipe: 
        [{
            categoria: "Mirim II",
            treinador: "Maria"
        }],
    },
    {
        nome: "Carla",
        idade: 27,
        nado: "peito",
        equipe: 
        [{
            categoria: "Masters",
            treinador: "Pedro"
        }],
    },
    {
        nome: "Lucas",
        idade: 15,
        nado: "costa",
        equipe: 
        [{
            categoria: "Juvenil I",
            treinador: "Júlia"
        }],
    }
];

let equipes = [];

nadadores.forEach(dadosEquipe => {
    equipes.push(...dadosEquipe.equipe);
});

>>>>>>> 5e00c0ff61df15a8a52763b58d6a9f9085e97006
console.table(equipes);