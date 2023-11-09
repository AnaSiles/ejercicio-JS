/**
 *  Ejercicio 33
 * Crear un algoritmo que reciba un array de tamaño 10 y que imprima cada indice
 * junto con el valor al que corresponda. Debera retornarlo de esta forma:
 *  `El indice es X y su valor es Y`
 */

function arrayIndex(array) {
  //Escribe tu codigo aqui

// for (let i = 0; i < array.length; i++) {
  
  
//   return `El indice es ${i} y su valor es ${array[i]}`
// }

let resultado="";
for (let i = 0; i < array.length; i++) {
  resultado+= `El indice es ${i} y su valor es ${array[i]}\n`;
  
}

return resultado;


}

module.exports = { arrayIndex };
