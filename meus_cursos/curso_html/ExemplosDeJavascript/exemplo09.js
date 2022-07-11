var meuBotao = document.getElementById("btn-msg");
meuBotao.onclick = exibirMensagem;

function exibirMensagem() {
  alert("Muito bem!");
}

function somar(n1, n2) {
  var resultado = n1 + n2;
  return resultado;
}


/*
var calculo = somar(10, 50);
alert(calculo);
calculo = somar(20, 100);
alert(calculo);
alert(somar(100, 200));
calculo = somar(100, 200);
calculo = calculo * 3;
alert(calculo);
*/