const formulario = document.querySelector('.form');

function maisPerguntas(linguagem) {
    const pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
    if (pergunta == 1) {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
    } else if (pergunta == 2) {
        alert("Ahh que pena... Já tentou aprender outras linguagens?");
    };
};

formulario.addEventListener('submit', (evento) => {
    const nome = evento.target.querySelector('#name').value;
    const idade = evento.target.querySelector('#age').value;
    const linguagem = evento.target.querySelector('#language').value;

    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

    maisPerguntas(linguagem);
});

