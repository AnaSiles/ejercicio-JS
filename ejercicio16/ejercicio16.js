/**
 *  Ejercicio 16
 *  Desarrollar un algoritmo que nos calcule el cuadrado de los 9
 *  primeros numeros naturales. La funcion debera retornar un array
 *  con el resultado de estos nueve numeros ([1,4,9...])
 */

function cuadraroNumerosNaturales(cuadrado,numero) {

  numero=0;
  cuadrado=[];
  while (numero<10) {

    cuadrado.push(numero*numero);
    numero++;
    
    

  }

  return cuadrado;
  // Escrie aquí tu código
  
}
// Preguntar si es mejor con un do..while

module.exports = { cuadraroNumerosNaturales };
