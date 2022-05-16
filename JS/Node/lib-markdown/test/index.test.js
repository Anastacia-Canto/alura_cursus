import pegaArquivo from "../index.js";
// import { expect, jest} from "@jest/globals";

const arrayResult = [ 
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
];

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function'); // toBe compara variáveis primitivas
    });
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('./test/arquivos/texto1.md');
        expect(resultado).toEqual(arrayResult); // toEqual compara estruturas de dados
    });
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('./test/arquivos/texto1_semlinks.md');
        expect(resultado).toBe('Não há links');
    });
});




