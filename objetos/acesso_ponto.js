const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com"
};

console.log(cliente);
console.log(`O nome do cliente é: ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

//Podemos invocar o método substring() passando para a função a faixa da string que queremos retornar.

console.log(`Os 3 primeiros dígitos do CPF são: ${cliente.cpf.substring(0,3)}`);

