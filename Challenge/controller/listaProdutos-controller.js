import { produtos } from "../my_api/produtos.js";

const criaNovoProduto = (imagem, categoria, nome, preco, descricao, id) => {
  
    const itemNovoProduto = document.createElement('li');
    const conteudo = `
    <img src="${imagem}">
    <h2 class="nome">${nome}</h2>
    <h2 class="preco">${preco}</h2>
    <a href="produto.html?id=${id}">Ver produto</a>
    <button type="submit" class="excluir">Excluir produto</button>
    `;
    itemNovoProduto.innerHTML = conteudo;
    itemNovoProduto.dataset.id = id;
   
    return itemNovoProduto;
};


const render = async () => {
    try {
        const listaDeProdutos = await produtos.listaProdutos();
        let categoriasComDuplicadas =  listaDeProdutos.map( listaDeProdutos => listaDeProdutos.categoria);
        let categoriasUnicas = new Set(categoriasComDuplicadas);
        categoriasUnicas.forEach(categoria => {
            let produtosDaCategoria = listaDeProdutos.filter(listaDeProdutos => listaDeProdutos.categoria === categoria);
            // console.log(produtosDaCategoria);
            produtosDaCategoria.forEach( elemento => {
                const lista = document.querySelector(`[data-lista-${elemento.categoria}]`);
                lista.appendChild(criaNovoProduto(elemento.imagem, elemento.categoria, elemento.nome, elemento.preco, elemento.descricao, elemento.id))
                const botaoExcluir = lista.querySelector(`[data-id="${elemento.id}"] .excluir`);
                botaoExcluir.addEventListener('click', async (evento) => {
                    try {
                        const itemProduto = evento.target.closest('[data-id]');
                        let id = itemProduto.dataset.id;
                        await produtos.removeProduto(id);
                        itemProduto.remove();
                    }
                    catch(erro){
                        console.log(erro);
                    };
                });
            });
        });
        
    }
    catch(erro){
        console.log(erro);
    };
};

render();






