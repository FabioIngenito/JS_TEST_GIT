var lista = [10,1, 5, 9, 8, 12, 15];

console.log(lista);

lista.sort(); // [1, 10, 12, 15, 5, 8, 9]

console.log(lista);

function comparaNumeros(a,b) 
{ 
  if (a == b) return 0; 
  if (a < b) return -1; 
  if (a > b) return 1; 
}

//lista.sort(comparaNumeros);

//console.log(lista);

// Repare que o resultado dessa conta é sempre 0 se forem iguais, -1 se a é menor e 1 se b é menor. Exatamente o que precisamos.

lista.sort((a, b) => a - b); // [1, 5, 8, 9, 10, 12, 15]
console.log(lista);

lista.sort((a, b) => b - a); // [1, 5, 8, 9, 10, 12, 15]
console.log(lista);

// https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona