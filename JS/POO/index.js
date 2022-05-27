import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Mariana', 'Souza', 'm@m.com', '2021-01-01');
// console.log(novoUser.nome);
// novoUser.nome = 'Mariana Silva Souza';
// console.log(novoUser.nome);

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
// console.log(novoAdmin.nome);

// novoAdmin.nome = '';
// console.log(novoAdmin.nome);

const novoDocente = new Docente('Guilherme', 'Silveira', 'g@g.com', '2021-01-01');
console.log(novoDocente.exibirInfos());