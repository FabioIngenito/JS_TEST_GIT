const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
console.log(meuSet);

const nomesAtualizados = [...meuSet];
console.log(nomesAtualizados);

const meuSet2 = new Set([1, 1, 2, 3, 4, 4]);
console.log(meuSet2);

console.log(...new Set(nomes));
console.log([...new Set(nomes)]);

// Um "SET" é diferente de um Array, veja a lista do ponto:
// meuSet.
