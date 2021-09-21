const time = new Date().getHours();
let saudar;
if (time < 10) {
    saudar = "Bom dia";
} else if (time < 20) {
    saudar = "Boa Tarde";
} else {
    saudar = "Boa noite ";
}
document.getElementById("tempo").innerHTML = saudar