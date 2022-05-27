import User from "./User.js";

export default class Admin extends User {
    constructor(nome, sobrenome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, sobrenome, email, nascimento, role, ativo);
    };

    criarCurso(nomeDoCurso, vagas) {
        return `Foi criado o curso ${nomeDoCurso} com ${vagas} vagas`;
    };
};

