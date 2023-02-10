const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

// Módulos JavaScript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules

// Node.js v19.6.0 documentation
// https://nodejs.org/api/modules.html#modules_modules

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log("O tipo é: " + typeof clienteEmString);
console.log(clienteEmString.nome); //undefined

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);

const splitCliente = clienteEmString.split(',');
console.log(splitCliente);
