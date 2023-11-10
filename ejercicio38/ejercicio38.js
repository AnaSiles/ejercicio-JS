/**
 * Ejercicio 38
 * Desarollar un algoritmo que nos retore el array introducido por
 * parametros invertido.
 */

function invertArray(array) {
  //Escribe tu codigo aqui
  let arrayInvertido = [];

  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

module.exports = { invertArray };

/**Estructura de la condición del for:
 * let i=array.length-1: la variable i la inicializamos con el último valor del array, que sería array.length-1
 * i>=0: en cada interación se tiene que comprobar que i sea mayor o igual a 0, esto es así para que el se recorra el array
 * desde la última posición hasta la primera [0]
 * i--:tenemos que poner esta condición para que el valor de i vaya disminuyendo en 1 después de cada iteración
 */
