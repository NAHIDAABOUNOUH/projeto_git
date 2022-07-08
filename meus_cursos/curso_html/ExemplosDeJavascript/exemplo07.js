//var nomes = ["Mari", "Adriane", "Edson"];
var nomes = [];
for (var contador = 0; contador <= 2; contador++) {
  nomes[contador] = prompt("Qual seu nome?");
}
for (var contador = 0; contador <= 2; contador++) {

  alert(nomes[contador]);
  if (nomes[contador] == "Mari") {
    alert("Menina gente boa!");
  }

  if (nomes[contador] == "Adriane") {
    alert("Menina gente fina!");
  }
  if (nomes[contador] == "Edson") {
    alert("Esse é o cravo entre as rosas!");
  }
}