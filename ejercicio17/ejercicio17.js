/**
 *  Ejercicio 17
 *  Crea un algoritmo que nos calcule la suma de los N primeros numeros
 *  naturales que seran introducidos como parametro de la funcion.
 *  La funcion retornara la suma.
 */

function calcularSumaNumerosNaturales(N) {
let suma=0;  
// se crea un variable para acumular la suma de los numeros naturales dandole el valor 0
// creamos el bucle for para que va a iterar desde 1 hasta N

for (let i = 0; i <= N; i++) {
  suma+=i;
  
}
  
  return suma;
  //Escribe tu codigo aqui
}

module.exports = { calcularSumaNumerosNaturales };
