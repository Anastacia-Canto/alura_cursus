const primeiraPergunta = prompt("Você deseja seguir a área de Front-End ou Back-End");
alert(`Você escolheu ${primeiraPergunta}`);

var segundaPergunta = "";

if (primeiraPergunta.toLowerCase() == 'front-end') {
    segundaPergunta = prompt("Você deseja aprender React ou Vue?");
} else if (primeiraPergunta.toLowerCase() == 'back-end') {
    segundaPergunta = prompt("Você deseja aprender C# ou Java?");
};
alert(`Você escolheu ${segundaPergunta}`);

const terceiraPergunta = prompt("Você deseja continuar se especializando na área escolhida ou seguir se desenvolvendo para se tornar FullStack?");
alert(`Você escolheu ${terceiraPergunta}! Boa sorte nos seus estudos!`);

var maisTecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
while (maisTecnologias == 'Sim') {
    const resposta = prompt("Diga qual o nome da tecnologia que gostaria de aprender: ");
    alert(`Você escolheu ${resposta}! Muito bem!`);
    maisTecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
};
alert("Chegamos ao fim do jogo. Boa sorte nos seus estudos!");
