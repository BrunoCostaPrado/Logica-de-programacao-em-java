var custoFab = parseFloat(prompt("Digite o custo de fábrica."));
var porcDist;
var impostos;
var custoFinal = custoFab + (28 / 100 * custoFab) + (45 / 100 * custoFab);
alert("O custo final do carro será de R$ : " + custoFinal);