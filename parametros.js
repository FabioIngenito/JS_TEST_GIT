function soma(num1, num2) {
  return num1 + num2;
}

console.log("O resultado é: " + soma(2, 2));
console.log("O resultado é: " + soma(245, 20));
console.log("O resultado é: " + soma(-500, 60));

// parâmetros x argumentos

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Teste", 70));

function soma(numero1, numero2) {
  return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2;
}

//Em JavaScript, os parâmetros de funções tem undefined como valor predefinido.
console.log(multiplica(soma(4, 5)));
