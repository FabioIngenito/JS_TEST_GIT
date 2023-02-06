const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasnotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

  //console.log(somaDasnotas);
  const media = somaDasnotas / notasDaSala.length;

  return media;
}

console.log("Média JS: " + calculaMedia(salaJS));
console.log(`Média Java: ${calculaMedia(salaJava)}`);
console.log(`Média Python: ${calculaMedia(salaPython)}`);
