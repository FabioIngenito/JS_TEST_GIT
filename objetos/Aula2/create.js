const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
 }
 
 const objPersonagem2 = Object.create(objPersonagem)
 objPersonagem2.nome = "Fabio, o Azul"
 objPersonagem2.classe = "mago forjador"

 console.log(objPersonagem.nome) //Gandalf
 console.log(objPersonagem2.nome) //Fabio, o Azul

 console.log(objPersonagem.classe) //
 console.log(objPersonagem2.classe) //