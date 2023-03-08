// CLI = Command Line Interface
// #!/usr/bin/env node

import chalk from "chalk";
import fs from "fs";
import pegaArquivoAssyncAwait from "./index.js";
import listaValidada from "../arquivos/http-validacao.js";

//Como o resultado da execução do process.argv é um array, podemos utilizar process.argv[2] para recuperar o argumento 2.

const caminho = process.argv;
//console.log(caminho);
//console.log(caminho[2]);

async function imprimeLista(valida, resultado, identificador = "") {
  if (valida) {
    console.log(
      chalk.bgYellow("lista validada"),
      chalk.black.bgGreen(identificador),
      await listaValidada(resultado)
    );
  } else {
    console.log(
      chalk.bgYellow("lista de links"),
      chalk.black.bgGreen(identificador),
      resultado
    );
  }
}

//pegaArquivoAssyncAwait(caminho[2]);

async function ProcessaTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3] === "--valida";

  // Node.js v19.7.0 documentation - ERRORS
  // https://nodejs.org/api/errors.html

  try {
    fs.lstatSync(caminho);
  } catch (erro) {
    if (erro.code === "ENOENT") {
      console.log(chalk.bgRed("Arquivo ou Diretório NÃO existente."));
      return;
    }
  }

  if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivoAssyncAwait(caminho);
    imprimeLista(valida, resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho);

    arquivos.forEach(async (nomeDeArquivo) => {
      const lista = await pegaArquivoAssyncAwait(`${caminho}/${nomeDeArquivo}`);
      imprimeLista(valida, lista, `${caminho}/${nomeDeArquivo}`);
    });

    console.log(arquivos);
  }
}

ProcessaTexto(caminho);
