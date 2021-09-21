var n = (prompt("Digite um número: "));
var cont = 1;
let t = "";

while (cont <= 10) {
    var r = n * cont;
    t += "<br>" + n + " * " + cont + " = " + r;
    cont++;
}
document.getElementById("tabuada").innerHTML = t;