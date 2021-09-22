let cont = 1;
let q = 1;
let r = 0;
let t1 = "";
let t2 = "";

do {
    t1 += "<br> No quadro " + cont + " tem: " + q + " grãos.";
    r += q;
    q += q;
    document.getElementById('p').innerHTML = t1;
    t2 = "<br> o resultado da soma de todos os grãos é de: " + r;
    cont++;
} while (cont <= 64)
document.getElementById('p2').innerHTML = t2;