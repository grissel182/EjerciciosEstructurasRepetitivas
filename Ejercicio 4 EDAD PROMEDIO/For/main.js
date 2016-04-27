var N = prompt("Ingrese el numero de alumnos de los cuáles se promediará la edad")
// numero de alumnos

var p = 0
// edad de alumnos




for (var i = 1 ; i <= N; i++) {
	var numero= prompt("La edad de uno de los alumnos es: ")
	p = parseInt(p) + parseInt(numero) 
}

var promedio = p / N

alert("La edad promedio de los alumnos es de " + promedio)





