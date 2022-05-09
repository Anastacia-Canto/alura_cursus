const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   };
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   };

   //cria um objeto com o nome do objeto como chave e suas propriedades como valor
//    const guerreiro = {fichaGuerreiro, equipoGuerreiro};


//cria um único objeto a partir de dois objetos
const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro};
console.log(guerreiro);
