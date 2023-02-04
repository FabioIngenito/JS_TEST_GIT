const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const Numeros2D = [numerosPares, numerosImpares];
console.log(Numeros2D);

const NumerosJuntos = [...numerosPares, ...numerosImpares];
console.log(NumerosJuntos);

const num1 = 1;
const num2 = 2;
console.log(num1, num2);

const [num3, num4, ...outros] = [3, 4, 5, 6, 7, 8];
console.log(num3, num4, outros);

const [nome1 = "Juliana"] = [];
console.log(nome1);

const pessoa = {
  nome: "ju",
  idade: 25,
};

const pessoaComTelefone = { ...pessoa, telefone: 123456798 };

console.log(pessoa);
console.log(pessoaComTelefone);

const nomePessoa = pessoa.nome;
console.log(nomePessoa);

const { nome } = pessoa;
console.log(nome);

function imprimeDados(dados) {
  const { nome, idade } = dados
  console.log(dados)
  console.log(nome, idade)
}

imprimeDados(pessoa);

function imprimeDados2({nome, idade}) {
  console.log(nome, idade)
}

imprimeDados2(pessoa);
