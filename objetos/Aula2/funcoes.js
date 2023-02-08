const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado; Novo Saldo: ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(25);

const cliente2 = {
  nome: "Jose",
  idade: 33,
  email: "jose@email.com",
  telefones: ["+550033338888", "+550033334444"],
};

console.log("-------------");

cliente2.animalEstimacao = [
  {
    nome: "Kripto",
    raca: "Cão",
    vacinado: true,
  },
];

cliente2.animalEstimacao.push({
  nome: "Lex",
  raca: "Gato",
  vacinado: false,
});

console.log(cliente2);

const animalEstimacao = cliente2.animalEstimacao.filter(
  (animalEstimacao) => animalEstimacao.raca === "Cão"
);

console.log(animalEstimacao[0].nome);
