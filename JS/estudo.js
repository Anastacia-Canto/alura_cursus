const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`;
const tamanhoString = `o tamanho da string é ${pedido.length}`;

console.log(pedido)
console.log(tamanhoString)