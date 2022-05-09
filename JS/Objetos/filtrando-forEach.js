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

console.table(equipes);