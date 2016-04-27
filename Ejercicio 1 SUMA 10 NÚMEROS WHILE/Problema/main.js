// var n = 1
// var i = 0
// alert("Sumemos 10 números")

// while (n<=10){
// 	var numero= prompt("Dame un número")
// 	i= n +i
// 	n= n+1
// 	numero = numero + numero
// }
// alert("El resultado es " + numero)


var n = 0
var i = 1

alert("Sumemos 10 números")

while (i<=10) {
	var numero= prompt("Dame un número")
	n = parseInt(n) + parseInt(numero) 
	i++
}
alert("El resultado es " + n)