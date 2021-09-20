var sal = parseFloat(prompt("Digite o seu salário mensal"));
var reaj = parseFloat(prompt("Digite a porcentagem do reajuste"));
var saltotal;
saltotal = sal * reaj / 100 + sal;
alert("O seu salário será de R$ " + saltotal);