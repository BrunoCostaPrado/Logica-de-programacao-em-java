var t = "";
var r = 0;
for (let cont = 15; cont <= 200; cont++) {
    r = cont * cont
    t = t + "<br>" + "O resultado é: " + r;
}
document.getElementById("p").innerHTML = t;