let x = "";
console.log("VAZIO:" + x);
x = "oi";
console.log(x);

// 3 formas de escrever uma função no Javascript

//1º Forma: Declaração de função
function imprimeTexto(texto) {
  console.log(texto);
  console.log(soma());
}
imprimeTexto(x);

//2º Forma:
function soma()
{
  return 2 + 2;
}
console.log(soma());

//3º Forma:
console.log();