
alert("Saquemos la hipotenusa de un triángulo rectángulo, si conocemos sus catetos")

var C1 = prompt("Dame el valor del cateto más corto (el número deberá ser menor a 500")
var C2 = prompt("Dame el valor del cateto largo (menor a 500)")

var C12= parseFloat(C1) * parseFloat(C1) 
var C22= parseFloat(C2) * parseFloat(C2)

var H = parseFloat(C12) + parseFloat(C22)

var exponente = 2
var raiz = Math.pow(H,1/exponente)


alert("Nuestra formula quedaría : " + C1 + " al cuadrado + " + C2 + " al cuadrado = " + raiz + " al cuadrado, por lo tanto \n \nNuestra hipotenusa mide " + raiz)
