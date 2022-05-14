import { produtos } from "../my_api/produtos.js";

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');

const listaProdutos = produtos.buscaProduto(id)
.then( resposta => {
    const imagem = document.querySelector(".imagem-produto");
    imagem.setAttribute('src', resposta.imagem);
    const nome = document.querySelector(".nomeDoProduto");
    nome.innerHTML = resposta.nome;
    const preco = document.querySelector(".precoDoProduto");
    preco.innerHTML = resposta.preco;
    const descricao = document.querySelector(".descricaoDoProduto");
    descricao.innerHTML = resposta.descricao;
});


