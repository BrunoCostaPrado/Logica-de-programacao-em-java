let cont = 1;
let r = 0;
let t = "";
for (cont; cont <= 500; cont++) {
    if (cont % 2 == 0) {
        r += cont;
        t = "a somatória dos números pares de 1 á 500 é:" + r;
    }
    document.getElementById("p").innerHTML = t;
}