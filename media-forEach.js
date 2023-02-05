const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// Parâmetro obrigatório: Uma função que recebe um elemento.
// Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente
notas.forEach(function(nota, indice) {
  somaDasNotas += nota;
  console.log(indice);
});

console.log(`Média das notas: ${somaDasNotas / notas.length}`);

