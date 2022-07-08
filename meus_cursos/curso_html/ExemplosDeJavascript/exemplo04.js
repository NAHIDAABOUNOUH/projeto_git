var n1 = prompt("Informe o primeiro número para operação:");
var n2 = prompt("Informe o segundo número para operação:");
var operacao = prompt("Informe a operação desejada: 1 para adição, 2 subtração, 3 multiplicação ou 4 para divisão:");
var resultado = 0;
switch (operacao) {
  case "1":
    resultado = n1 + n2;
    break;
  case "2":
    resultado = n1 - n2;
    break;
  case "3":
    resultado = n1 * n2;
    break;
  case "4":
    resultado = n1 / n2;
    break;
  default:
    alert("Operação inválida!");
    break;
}

alert("O resultado da operação é: " + resultado);

/*
var nome = prompt("Informe seu nome:");
var idade = prompt("Informe sua idade:");
if (idade < 12) {
  alert(nome + ", você ainda é uma criança!");
}
else {
  if (idade >= 12 && idade < 18) {
    alert(nome + ", você é um adolecente!");
  }
  else {
    if (idade >= 18 && idade <= 60) {
      alert(nome + ", você é um adultinho!");
    }
    else {
      alert(nome + ", você está na terceira idade!");
    }
  }

}
*/