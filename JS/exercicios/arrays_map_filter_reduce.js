const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

let empresasCriadasAposAnos2000 = empresas.filter( empresa => empresa.anoDeCriacao >= 2000);

console.log("Empresas criadas após os anos 2000:");
console.log(empresasCriadasAposAnos2000);

console.log("------------------------------------------------");

// let nomeDaEmpresaEDoCEO = empresas.map(({nome, CEO}) => ({nome, CEO}));
let nomeDaEmpresaEDoCEO = empresas.map(empresa => `${empresa.nome}` + 'CEO: ' + `${empresa.CEO}`);
console.log("Nome da empresa e nome do CEO:");

console.log(nomeDaEmpresaEDoCEO);

console.log("------------------------------------------------");

console.log("Somatório do valor de todas as empresas:");

let somatorioDoValorDeTodasAsEmpresas = empresas.reduce((acumulador, valorAtual) => (acumulador + valorAtual.valorDeMercado), 0);

console.log(somatorioDoValorDeTodasAsEmpresas);