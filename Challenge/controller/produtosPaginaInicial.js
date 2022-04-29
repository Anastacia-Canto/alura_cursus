import { produtos } from "../my_api/produtos.js";

const criaNovoProduto = (imagem, categoria, nome, preco, descricao, id) => {
   const itemNovoProduto = document.createElement('li');
   const conteudo = `
    <img src="${imagem}">
    <h2 class="nome">${nome}</h2>
    <h2 class="preco">${preco}</h2>
    <a href="produto.html?id=${id}">Ver produto</a>
    `;
    itemNovoProduto.innerHTML = conteudo;
    itemNovoProduto.dataset.id = id;
    return itemNovoProduto;
};

const render = async () => {
    try {
        const listaDeProdutos = await produtos.listaProdutos();
        let categoriasComDuplicadas = listaDeProdutos.map(listaDeProdutos => listaDeProdutos.categoria);
        let categoriasUnicas = new Set (categoriasComDuplicadas);
        categoriasUnicas.forEach( categoria => {
            let produtosDaCategoria = listaDeProdutos.filter(listaDeProdutos => listaDeProdutos.categoria === categoria);
            produtosDaCategoria.forEach(elemento => {
                const lista = document.querySelector(`[data-lista-${elemento.categoria}]`);
                lista.appendChild(criaNovoProduto(elemento.imagem, elemento.categoria, elemento.nome, elemento.preco, elemento.descricao, elemento.id));
            });
        });
    }
    catch(erro){
        console.log(erro);
    };
};

render();