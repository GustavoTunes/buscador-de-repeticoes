import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { saidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;
        const resultado = contaPalavras(texto);
        criaSalvaArquivo(resultado, endereco);
    } catch (erro) {
        trataErros(erro);
    }
});

async function criaSalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = saidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado');
    } catch (erro) {
        throw erro;
    }
}