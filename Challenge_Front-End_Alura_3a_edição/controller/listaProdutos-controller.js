import { produtos } from "../my_api/produtos.js";

const criaNovoProduto = (imagem, categoria, nome, preco, descricao, id) => {
    const itemNovoProduto = document.createElement('li');
    const conteudo = `
        <img src="${imagem}">
        <h2 class="nome">${nome}</h2>
        <h2 class="preco">${preco}</h2>
        <a href="produto_1.html?id=${id}">Ver produto</a>
    `;
    itemNovoProduto.innerHTML = conteudo;
    itemNovoProduto.dataset.id = id;
    return itemNovoProduto;
};

const lista = document.querySelector('[data-lista]');

const render = async () => {
    try {
        const listaDeProdutos = await produtos.listaProdutos();
        listaDeProdutos.forEach( elemento => {
            lista.appendChild(criaNovoProduto(elemento.imagem, elemento.categoria, elemento.nome, elemento.preco, elemento.descricao, elemento.id))
        });
    }
    catch(erro){
        console.log(erro);
    };
};

render();