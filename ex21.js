var hi = +prompt("Digite o horario de inicio");
var hf = +prompt("Digite o horario de termino");
var ht = hf - hi;
if (hi > hf) {
  alert("Total de horas foi de " + ht + " horas");
} else {
  ht = ht + 24;
  alert("Total de horas foi de " + ht + " horas");
}
