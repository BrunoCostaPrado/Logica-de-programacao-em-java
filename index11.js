var x = 15;
var t = "";
var r = 0;

do {
    r = Math.pow(x, 2);
    t += "<br>" + x + " * " + x + " = " + r;
    x++;
} while (x <= 200)
document.getElementById("do").innerHTML = t;