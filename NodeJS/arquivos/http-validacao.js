import chalk from "chalk";

function extraiLinks(arraLinks) {
  //loop
  return arraLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function checaStatus(listaURLs) {
  const arrStatus = await Promise.all(
    listaURLs.map(async (url) => {
      try {
        const response = await fetch(url);
        //return response.status;
        return `${response.status} - ${response.statusText}`;
      } catch (erro) {
        return manejaErros(erro);
      }
    })
  );

  return arrStatus;
}

function manejaErros(erro) {
  //console.log(chalk.bgRed('algo deu errado'), erro);
  if (erro.cause.code === "ENOTFOUND") {
    return "Link NÃO encontrado.";
  } else {
    return "Ocorreu algum erro.";
  }
}

export default async function listaValidada(listaDeLinks) {
  const links = extraiLinks(listaDeLinks);
  const status = await checaStatus(links);
  //console.log(status);

  return listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice],
  }));
}
