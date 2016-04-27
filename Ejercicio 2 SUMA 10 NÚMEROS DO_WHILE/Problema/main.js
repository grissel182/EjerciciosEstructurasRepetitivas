var n = 0
var i = 1

alert("Sumemos 10 números")

do {
	var numero= prompt("Dame un número")
	n = parseInt(n) + parseInt(numero) 
	i++	
}
while (i<=10);

alert("El resultado es " + n)