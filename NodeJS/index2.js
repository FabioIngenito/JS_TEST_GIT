import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  console.log(erro);
  throw new Error(
    chalk.yellow.bgRed.bold(erro.code, "não há arquivo no diretório")
  );
}

//Síncrono
function pegaArquivoSync(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    if (erro) {
      trataErro(erro);
    }

    console.log(chalk.green(texto));
  });
}

//Assíncrono - promises com then() - encadeia código assíncrono.
function pegaArquivoAssync(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.promisses
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch(trataErro);
}

//async / await
// No JavaScript o try...catch possibilita lidar com um erro identificando o trecho em que ele pode ocorrer (try) e captando o erro (catch) para tratá-lo.
// O Javascript (assim como muitas outras linguagens) utiliza o bloco try para envolver o trecho de código que pode gerar algum tipo de exceção e o bloco catch é o responsável por capturar a exceção (caso ocorra) e permitir que seja “tratada”, retornando alguma mensagem informativa, executando alguma função específica, etc.
async function pegaArquivoAssyncAwait(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  }
}

// pegaArquivoSync("./arquivos/texto.md");
// pegaArquivoSync("./arquivos/");

pegaArquivoAssyncAwait("./arquivos/texto.md");
pegaArquivoAssyncAwait("./arquivos/");

// /\[[^[\]]*?\]/gm