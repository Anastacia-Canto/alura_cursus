//Deseja adicionar algum item a sua lista de compras? Sim ou não

//Qual item deseja inserir?

//Qual a categoria? (frutas, laticinios, congelados, doces)

// Exibe a lista com todos os itens agrupados


let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

function incluiNaLista(item, categoria) {
    if (categoria === "frutas") {
        frutas.push(item);
    } else if (categoria === "laticinios") {
        laticinios.push(item);
    } else if (categoria === "congelados") {
        congelados.push(item);
    } else if (categoria === "doces") {
        doces.push(item);
    } else if (categoria === "outros") {
        outros.push(item);
    };

};

let remover = document.getElementById("remover");
let inserir = document.getElementById("inserir");
let finalizar = document.getElementById("finalizar");
let inicio = document.getElementById("inicio");


function adicionar() {
    remover.style.display = "none";
    inserir.style.display = "block";
};

function inserirItem() {
    let modal = document.getElementById("modal-background");
    let span = document.querySelector('.close');
    let item = document.getElementById("item").value;
    let inputsDeCategorias = document.querySelectorAll('input[name="categoria"]');
    let categoria;
    for (const nomeDaCategoria of inputsDeCategorias) {
        if (nomeDaCategoria.checked && item) {
            categoria = nomeDaCategoria.value;
            incluiNaLista(item, categoria);
            break;
        };
    };
    if (!categoria || !item) {
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        };
        return;
    };

    inserir.style.display = "none";
    exibirLista('lista-atual');
    remover.style.display = "block";
};

function terminar() {
    finalizar.style.display = "block";
    inicio.style.display = "none";
    inserir.style.display = "none";
};

function exibirLista(id) {
    document.getElementById(id).innerHTML = `Frutas:<br><br> ${frutas.join(', ')}<br><br><br> Laticinios:<br><br> ${laticinios.join(', ')}<br><br><br> Congelados:<br><br> ${congelados.join(', ')}<br><br><br> Doces:<br><br> ${doces.join(', ')}<br><br><br> Outros:<br><br> ${outros.join(', ')}<br><br><br>`;
};

function removerItem() {
    let elemento = document.querySelector('#elemento-removido').value;
    
    let todasAsCategorias = [frutas, laticinios, congelados, doces, outros];
    
    
    const categoriaDoProdutoARemover = todasAsCategorias.find((categoria) => categoria.includes(elemento));
        
    if(categoriaDoProdutoARemover) {
        let indice = categoriaDoProdutoARemover.indexOf(elemento);

        categoriaDoProdutoARemover.splice(indice, 1);
        document.getElementById("resposta").innerHTML = "Produto removido!";
    } else {
        document.getElementById("resposta").innerHTML = "Produto não encontrado na lista";
    };
    exibirLista('lista-atual');

};

function novaLista() {
    frutas = [];
    laticinios = [];
    congelados = [];
    doces = [];
    outros = [];
    remover.style.display = "none";
    inserir.style.display = "none";
    finalizar.style.display = "none";
    document.getElementById("lista-atual").innerHTML = "";
    inicio.style.display = "block"; 
  };