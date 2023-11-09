/**
 *  Ejercicio 22
 *  Algoritmo que imprima la cuenta y los numeros
 *  que son multiplos de 2 o de 3 qye hay entre 1 y 100.
 */

function multiplosDeCien() {
  //Escribe tu codigo aqui
  let multiplos=0;
  
// Necesito un bucle que recorrar los números de 1 a 100:

  for (let i = 1; i <=100; i++) {

// Dentro del bucle hy que comprobar si el número actual (i) es múltiplo de 2 o de 3 usando el operador de modulo %.
// Si un numero es múltiplo de otro, el resto de la dicisión es 0
    if (i % 2==0 || i % 3==0){
// Si el número es múltiplo de 2 o de 3, se inrementa la variable multiplos en 1, esto se hace para llevar la cuenta de cuántos números son
// múltiplos de 2 o de 3.
      multiplos++;
    } 
  }

      return multiplos;
      
  }


module.exports = { multiplosDeCien };
