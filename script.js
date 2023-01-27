// var
var altura = 5;
var comprimento = 7;
area = altura * comprimento;
console.log(area);
var area;

// let
let formaLet = "retângulo";
let alturaLet = 5;
let comprimentoLet = 7;
let areaLet;

if ((forma = "retângulo")) {
  areaLet = (alturaLet * comprimentoLet) / 2;
}

console.log(areaLet);

const formaConst = "quadrado";
const alturaConst = 5;
const comprimentoConst = 7;
let areaConst = alturaConst * comprimentoConst;

if (formaConst === "quadrado") {
  areaConst = alturaConst * comprimentoConst;
} else {
  areaConst = alturaConst * comprimentoConst / 2;
}

console.log(areaConst);
