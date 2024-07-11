function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

function saidaArquivo(listaPalavras) {
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        if (duplicadas.length > 0) {
            textoFinal += `Palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`;
        }
    });
    return textoFinal;
}

export { saidaArquivo };