var t = "";
var r = 0;
for (let cont = 1; cont <= 100; cont++) {
    r = r + cont
    t = t + "<br>" + "O resultado é: " + cont + " = " + r;
}
document.getElementById("p").innerHTML = t;