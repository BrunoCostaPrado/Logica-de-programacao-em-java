let cont = 0;
let r = 0;
let t = "";
do {
    if (cont % 2 == 0) {
        r += cont;
        t += "<br> o resultado da somatória dos números pares de 1 a 500 é: " + r;

    }
    cont++;
} while (cont <= 500)
document.getElementById('p').innerHTML = t;