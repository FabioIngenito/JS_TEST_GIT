// function minhaaFuncao(param) {
//   //bloco de código
// }

// minhaaFuncao("param");

// expressão de função

const soma = function (num1, num2) {
  return num1 + num2;
};

console.log(soma(1, 1));

// diferença principal ???
// diferença principal: HOISTING - trazer as declarações de variáveis para cima do código.
console.log(apresentar());

function apresentar() {
  return "olá";
}
