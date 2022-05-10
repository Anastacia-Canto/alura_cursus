import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
 };

 // Síncrona
 //
 // function pegaArquivo(caminhoDoArquivo) {
 //     const encoding = 'utf-8';
 //     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
 //         if (erro) {
 //             trataErro(erro);
 //         };
 //         console.log(chalk.green(texto));
 //     });
 // };



// Assíncrona usando .then()

//  function pegaArquivo(caminhoDoArquivo) {
//      const encoding = 'utf-8';
//      fs.promises.readFile(caminhoDoArquivo, encoding)
//      .then((texto) => console.log(texto))
//      .catch((erro) => trataErro(erro));
//  };



// Assíncrona usando async / await

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';

    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    
        console.log(chalk.green(texto));
    } catch(erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('fim do programa'));
    };
};

pegaArquivo('arquivos/texto1.md');
