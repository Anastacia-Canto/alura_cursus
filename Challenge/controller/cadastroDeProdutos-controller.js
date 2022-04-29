import { produtos } from "../my_api/produtos.js";

const formulario = document.querySelector('[data-form]');

const imagemDoProduto = document.querySelector("#imagemDoProduto");
var uploadedImage = "";

imagemDoProduto.addEventListener("change", function(){
    const reader = new FileReader();
            
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#drop_zone").style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
});


formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    try {
        const categoria = evento.target.querySelector('[data-categoria] select').value;
        const nome = evento.target.querySelector('[data-nome] input').value;
        if (nome == ""){
            alert("Informe o nome do produto");
            return;
        };
        const preco = evento.target.querySelector('[data-preco] input').value;
        if (preco == ""){
            alert("Informe o preco do produto");
            return;
        };
        const descricao = evento.target.querySelector('[data-descricao] input').value;
        if (descricao == ""){
            alert("Informe a descrição do produto");
            return;
        };
        if (uploadedImage == ""){
            alert("Adicione a imagem do produto");
            return;
        };
        await produtos.incluirProduto(uploadedImage, categoria, nome, preco, descricao);
        window.location.href = "../produto-incluido.html";
    }
    catch(erro){
        console.log(erro);
    }
});

