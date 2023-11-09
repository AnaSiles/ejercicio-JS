/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calcule el cubo de cada uno de ellos. Recuerda la estructura For;
 */

function cuboNumerosArray(numeros) {
  //Escribe tu codigo aqui

  for (let i = 0; i < numeros.length; i++) {
    console.log(
      `El cubo de ${numeros[i]} es ${numeros[i] * numeros[i] * numeros[i]}`
    );
  }
}

module.exports = { cuboNumerosArray };
