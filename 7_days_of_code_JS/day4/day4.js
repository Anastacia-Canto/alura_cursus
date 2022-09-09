var tentativas = 1;

var numero = Math.floor(Math.random() * 11);


var refresh = "";

function verificar() {
    
    var chute = document.querySelector('#numero').value;
    
    var resultado = document.querySelector('#resposta');
    
    if (chute == numero) {
        resultado.innerHTML = "Muito bem! Você acertou!";
    } else {
        resultado.innerHTML = "Você errou!";
        if (tentativas == 3) {
            resultado.innerHTML = `Suas tentativas acabaram! O número correto era ${numero}.
             Que tal reiniciar o jogo?`;
             refresh += "<button onclick='window.location.reload()'>Reiniciar</button>";
             document.getElementById("reiniciar").innerHTML = refresh;
        };
        tentativas++;     
    };
};







