let text = "";
let i = 0;
while (i < 10) {
    text += "<br> o numero é " + i;
    i++
}
document.getElementById("while").innerHTML = text;