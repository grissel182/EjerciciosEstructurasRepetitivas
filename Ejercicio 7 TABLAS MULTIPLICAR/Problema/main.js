var n = prompt("Tabla de multiplicar, dame un número,  para generar su tabla de multiplicar")
var num1 = 0


for (var i = 0; i <= 10; i++) {
	var num1 = 0
	num1 = num1 + i
	r = n * num1
	alert( n + " x "+ num1 + " = " + r)

}
alert("Esa fue la tabla del " + n)

