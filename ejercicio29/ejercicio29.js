/**
 *  Ejercicio 29
 *  Desarrollar un algoritmo que calcule el factorial de un numero introducido por
 *  los parametros de la funcion.
 *
 *  El factorial de un numero N es la multiplicacion de todos los numeros desde 1 hasta N.
 *  Es decir, para N = 5, el factorial seria 5! = 5*4*3*2*1 = 120;
 */

function factorialNumero(numero) {
  //Escribe tu codigo aqui

  let resultado=1; 
  for (let i = numero; i>0; i--) {
    resultado*=i; 
    
    
  }
  return resultado;
}

module.exports = { factorialNumero };
