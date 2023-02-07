console.log(apresentar("TESTE"));

function apresentar(nome) {
  return `meu nome é ${nome}`;
}

const apresentarConst = function (nome) {
  return `meu nome é ${nome}`;
};

console.log(apresentarConst("TESTE Const"));

const apresentarArrow = (nome) => `meu nome é ${nome}`;

console.log(apresentarArrow("TESTE Arrow"));

const soma = (num1, num2) => (num1 = num2);

console.log(soma(1, 2));

//Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "Somente número de 1 a 9";
  } else {
    return num1 + num2;
  }
};
//Hoisting: arrow function se comporta da mesma forma.

console.log(somaNumerosPequenos(11,1));
console.log(somaNumerosPequenos(9,9));