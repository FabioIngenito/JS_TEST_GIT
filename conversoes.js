//node conversoes.js
// tipo de dados
// booleanos

//conversao implicita
const numero = 456;
const numeroString = "456";
const numeroStringZuado = "456a";

// Compara conteúdo e tipo
console.log(numero === numeroString);
// Compara conteúdo
console.log(numero == numeroString);
console.log(numero + numeroString);

//conversao explicita
// Number()
// String()

console.log(numero + Number(numeroString));
console.log(String(numero) + numeroString);
console.log(String(numero) + String(numeroString));
console.log(numero + Number(numeroStringZuado));
console.log(String(numero) + numeroStringZuado);
