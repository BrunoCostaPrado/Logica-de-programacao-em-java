var salario = parseFloat(prompt("Digite o valor do salario em R$"));
var salariocomissao = parseFloat(prompt("Digite o valo da comissao"));
var carros = parseFloat(prompt("Digite o nume de carros vendidos"));
var vendas = parseFloat(prompt("Digite o numero de vendas"));
var comissao = salariocomissao * carros;
var comissao2 = vendas / 100 * 5;
var salariofinal = comissao + comissao2 + salario;
alert("O salario final é R$:" + salariofinal);