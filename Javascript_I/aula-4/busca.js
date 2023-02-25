const listaLivros = require("./arrayOrdenado.js");

function busca(array, de, ate, valorBuscado) {
  //console.log("de e até:", de, ate);
  const meio = Math.floor((de + ate) / 2);
  const atual = array[meio];

  if (de > ate) return -1;

  if (valorBuscado === atual.preco) {
    return meio;
  } else if (valorBuscado < atual.preco) {
    return busca(array, de, meio - 1, valorBuscado);
  } else if (valorBuscado > atual.preco) {
    return busca(array, meio + 1, ate, valorBuscado);
  }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 40));
console.log(busca(listaLivros, 0, listaLivros.length - 1, 20));
console.log(busca(listaLivros, 0, listaLivros.length - 1, 60));
