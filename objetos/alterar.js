const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome);
console.log(pessoa.telefone);

//Podemos usar a notação de ponto para adicionar novos campos a objetos já criados, lembrando de iniciar o campo adicionado. 
console.log(pessoa["nome"]);
console.log(pessoa["telefone"]);

pessoa.telefone = "11 223333444";

console.log(pessoa.nome);
console.log(pessoa.telefone);

pessoa["nome"] = "Luma Silva";

console.log(pessoa);

const NovaPessoa = {
  nome: "Pedro",
}

//pessoa = NovaPessoa;


