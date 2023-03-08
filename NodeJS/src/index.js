import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map((captura) => ({ [captura[1]]: captura[2] }));

  return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(
    chalk.yellow.bgRed.bold(erro.code, "não há arquivo no diretório")
  );
}

//async / await
// No JavaScript o try...catch possibilita lidar com um erro identificando o trecho em que ele pode ocorrer (try) e captando o erro (catch) para tratá-lo.
// O Javascript (assim como muitas outras linguagens) utiliza o bloco try para envolver o trecho de código que pode gerar algum tipo de exceção e o bloco catch é o responsável por capturar a exceção (caso ocorra) e permitir que seja “tratada”, retornando alguma mensagem informativa, executando alguma função específica, etc.
async function pegaArquivoAssyncAwait(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    //console.log(chalk.green(texto));
    //console.log(extraiLinks(texto));
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

pegaArquivoAssyncAwait("./arquivos/texto.md");
// pegaArquivoAssyncAwait("./arquivos/");

// /\[[^[\]]*?\]/g
// /\(https?:\/\/[^\s?#.].[^\s]*\)/g
// /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/g

export default pegaArquivoAssyncAwait;

