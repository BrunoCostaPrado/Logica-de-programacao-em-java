var t = "";
var x = 1;
var r = 0;
var tabuada = parseInt(prompt("Digite um numero"));

do {
    r = tabuada * x;
    t += "<br>" + tabuada + " * " + x + " = " + r;
    x++;
} while (x <= 10)
document.getElementById("do").innerHTML = t;