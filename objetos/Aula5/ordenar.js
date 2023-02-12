const clientes = require("./clientes.json");

function ordenar(lista, propriedade, ordem = "crescente") {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] > b[propriedade]) {
      return 1;
    } else if (a[propriedade] < b[propriedade]) {
      return -1;
    } else {
      return 0;
    }
  });

  if (ordem !== "crescente") {
    resultado.reverse();
  }

  return resultado;
}

const ordenadaNome = ordenar(clientes, "nome", "decrescente");
//const ordenadoInverso = ordenadaNome.reverse();

console.log(ordenadaNome);
//console.log(ordenadoInverso);

