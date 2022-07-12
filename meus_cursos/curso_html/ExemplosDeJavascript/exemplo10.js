var meuBotao = document.getElementById("btn-msg");
meuBotao.onclick = exibirMensagem;

function exibirMensagem() {

  //alert(defineMensagem());
  var areaDeMensagem = document.getElementById("mensagem");
  areaDeMensagem.textContent = defineMensagem();
  trocaTitulo();
}

function defineMensagem() {
  var primeiroNumero = document.getElementById("n1");
  var segundoNumero = document.getElementById("n2");
  var resultado = primeiroNumero.value * segundoNumero.value;
  var mensagem = "O resultado da multiplicação de " + primeiroNumero.value + " vezes " + segundoNumero.value + " é " + resultado;
  return mensagem;

}

function trocaTitulo() {
  var titulo = document.getElementById("titulo");
  titulo.textContent = "Esse é nosso encontro 24, apesar de ser o exemplo 10 de Java Script.";
}