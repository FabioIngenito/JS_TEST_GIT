// Classes x funções no Javascript | #AluraMais
// Alura
// 9 de nov. de 2020  Pílulas de conteúdo sobre Tecnologia e suas ferramentas | Alura Mais
// Será que existe diferença entre classes e funções no Javascript? No Alura+ dessa semana, a nossa instrutora Juliana Amoasei esclarece essa questão. Vem com a gente! 😉
// https://youtu.be/iohhj-k9L6s

const LivroObjeto = {
  nome: "React Native",
  editora: "Casa do Código",
  paginas: 185,
  anunciar: function () {
    console.log("A Alura indica o livro " + this.nome + "!");
  },
};

//LivroObjeto.anunciar();

const LivroFuncao = function (nome, editora, paginas) {
  (gNome = nome), (gEditora = editora), (gPaginas = paginas);

  this.getNome = function () {
    return gNome;
  };

  this.getEditora = function () {
    return gEditora;
  };

  this.getPaginas = function () {
    return gPaginas;
  };
};

const GrapfQL = new LivroFuncao("GraphQL", "Casa do Codigo", 143);

// console.log(GrapfQL.getNome());
// console.log(GrapfQL.getEditora());
// console.log(GrapfQL.getPaginas());

//propriedade escondida
//prototype - O Javascript define todas as propriedades, palavras-chave, tipos de dados ou funcionalidade. Com exceção de alguns tipos primitivos.

const nome = "Alura";
const temp = new String(nome);
const temp2 = new String("TESTE");

// console.log(nome);
// console.log(temp.toString());
// console.log(temp2.toString());

//////////////////////

class Livro {
  constructor(nome, editora, paginas) {
    this.nome = nome;
    this.editora = editora;
    this.paginas = paginas;
  }
  anunciarTitulo() {
    console.log(`Titulo: ${this.nome}`);
  }
  descreverTitulo() {
    console.log(
      `${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas.`
    );
  }
}

const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do código", 195);

// NodeJS.anunciarTitulo();
// NodeJS.descreverTitulo();
// console.log("Qual é o tipo: " + typeof Livro);

// açucar sintático
// hoinsted (içadas)

class LivroColecao extends Livro {
  constructor(nome, nomeColecao) {
    super(nome);
    this.nomeColecao = nomeColecao;
  }
  descreverColecao() {
    console.log(
      `O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`
    );
  }
}

const logicaProgramacao = new LivroColecao(
  "Logica de Programação",
  "Comece a programar"
);

logicaProgramacao.descreverColecao();
