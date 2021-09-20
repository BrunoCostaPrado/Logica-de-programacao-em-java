var maças = +(prompt("Digite a quantidade de maças compradas: "));

const meiaDuziaMacas = 1.30;

const duziaMacas = 1.0;

var valorFinal;

if (maças < 12) {

    valorFinal = maças * meiaDuziaMacas

    alert("Comprando " + maças + " o preço final é: R$ " + valorFinal);

} else {

    valorFinal = maças * duziaMacas

    alert("Comprando " + maças + " o preço final é: R$ " + valorFinal);

}