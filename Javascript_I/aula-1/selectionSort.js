const livros = require("./listaLivros");
const menorValor = require("./menorValor");

for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  console.log("Posição Atual", atual);
  console.log("Livro Atual", livros[atual]);
  let livroMenorPreco = livros[menor];
  console.log("Livro menor preço", livros[menor]);

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);

// ECMA-262
// https://www.ecma-international.org/publications-and-standards/standards/ecma-262/

// Array.prototype.sort()
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort