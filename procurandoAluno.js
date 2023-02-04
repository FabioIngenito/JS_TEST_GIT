const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];
    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);

    console.log(`${aluno} está cadastrado!`);
    console.log(`A média do ${aluno} é: ` + medias[indice]);
  } else {
    console.log(`${aluno} NÃO encontrado!`);
  }
}

exibeNomeENota("Ana");
