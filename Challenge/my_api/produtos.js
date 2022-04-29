const listaProdutos = () => {
    return fetch(`http://localhost:3077/produtos`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error("Não foi possível encontrar a página");
    });
};

const buscaProduto = (id) => {
    return fetch(`http://localhost:3077/produtos/${id}`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error("Não foi possível encontrar a página");
    });
};

const incluirProduto = (imagem, categoria, nome, preco, descricao) => {
    return fetch(`http://localhost:3077/produtos`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível incluir o produto');
    });
};

const removeProduto = (id) => {
    return fetch(`http://localhost:3077/produtos/${id}`, {
        method: 'DELETE'
    }).then( resposta => {
        if(!resposta.ok){
            console.log(resposta);
            throw new Error('Não foi possível remover o produto.');
        }
    });
};

export const produtos = {
    listaProdutos,
    buscaProduto,
    incluirProduto,
    removeProduto
};