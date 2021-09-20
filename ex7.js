var anos = parseInt(prompt("Digite sua idade em anos"));
var meses = parseInt(prompt("Digite sua idade em meses"));
var dias = parseInt(prompt("Digite sua idade em dias"));
anos = anos * 365;
meses = meses * 30;
alert("Sua idade em dias é : " + (anos + meses + dias));