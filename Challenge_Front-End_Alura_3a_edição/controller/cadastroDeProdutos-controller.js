import { produtos } from "../my_api/produtos.js";

const formulario = document.querySelector('[data-form]');

const imagemDoProduto = document.querySelector("#imagemDoProduto");
var uploadedImage = "";

imagemDoProduto.addEventListener("change", function(){
    const reader = new FileReader();
            
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#displayImage").style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
});

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    try {
        const imagem = evento.target.querySelector('[data-imagem]').value;
        const categoria = evento.target.querySelector('[data-categoria]').value;
        const nome = evento.target.querySelector('[data-nome]').value;
        const preco = evento.target.querySelector('[data-preco]').value;
        const descricao = evento.target.querySelector('[data-descricao]').value;

        await produtos.incluirProduto(imagem, categoria, nome, preco, descricao);
        window.location.href = "../produto-incluido.html";
    }
    catch(erro){
        console.log(erro);
    }
});