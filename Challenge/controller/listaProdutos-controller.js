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
        let listaDeProdutos = await produtos.listaProdutos();
        const pegaURL = new URL(window.location);
        const search = pegaURL.searchParams.get('search');
        if (search?.length > 0){
            listaDeProdutos = listaDeProdutos.filter(produto => produto.nome.toLowerCase().indexOf(search.toLowerCase()) != -1 );
            let tituloDaPagina = document.getElementById("titulo-produtos");
            tituloDaPagina.innerHTML = `Busca por: ${search}`;
            let inputField = document.getElementById("inputSearch");
            inputField.value = `${search}`;
            if (listaDeProdutos?.length == 0){
                let erro = document.getElementById("titulo-produtos");
                erro.innerHTML = `Nenhum produto encontrado com ${search}`;
            };
        };
        listaDeProdutos.sort(function (a, b) {
            return a.nome.localeCompare(b.nome);
        });
        listaDeProdutos.forEach( elemento => {
            const lista = document.querySelector('[data-lista]');
            lista.appendChild(criaNovoProduto(elemento.imagem, elemento.categoria, elemento.nome, elemento.preco, elemento.descricao, elemento.id));
        });
    }
    catch(erro){
        console.log(erro);
    };
};

render();






