const notas = [10, 9.5, 8, 7.5, 6];

const notasAtualizadas = 
notas.map((nota, indice) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notas);
console.log(notasAtualizadas);
