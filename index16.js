var n = parseInt(prompt("Digite um numero"))
var t = "";
var r = 0;
for (let cont = 1; cont <= 10; cont++) {
    r = n * cont
    t = t + "<br>" + "O resultado é: " + r;
}
document.getElementById("p").innerHTML = t;