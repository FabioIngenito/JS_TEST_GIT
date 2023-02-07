const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago"
  },
  status: "desaparecido"
 };

 console.log(objPersonagem);
console.log(objPersonagem.aliado);

delete objPersonagem.aliado;

console.log(`DELETADO: ${objPersonagem.aliado}`); //undefined

delete objPersonagem["status"]

console.log(objPersonagem.status) //undefined
console.log(objPersonagem);

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true


