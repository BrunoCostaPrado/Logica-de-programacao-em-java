var cont = 1;
var div = 0;
var t = "";

do {
    if (cont % 4 == 0) {
        div = cont;
        t += div + "... ";
    }
    cont++;
} while (cont <= 200)

document.getElementById("p").innerHTML = t;