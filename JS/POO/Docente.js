import User from "./User.js";

export default class Docente extends User {
    constructor(nome, sobrenome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, sobrenome, email, nascimento, role, ativo);
    };

    static aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso ${curso}`;
    };
};
