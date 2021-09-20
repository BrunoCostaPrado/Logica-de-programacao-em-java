var n1 = +(prompt("Digite a primeira nota: "));

var n2 = +(prompt("Digite a segunda nota:"));

var m = (n1 + n2) / 2;

if (m >= 6) {

    alert("APROVADO! Sua Média Foi: " + m.toFixed(2));

} else {

    alert("REPROVADO! Sua Média Foi: " + m.toFixed(2));

}