/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */

function sumOrMultiply(numero1, numero2, numero3) {
   
    //Primero verificamos si los tres argumentos son números:

  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
   
     return "Has introducido uno o varios caracteres no validos";
    }  
   // Luego verificamos si el primer número es negativo, si es así, retornamos el producto de los tres   
    if (numero1 < 0) {
          
          return numero1 * numero2 * numero3;
        } 

        //Si el primero no es negativo, entonces retornamos la suma
          
      else if (numero1 >= 0) {
              
              return numero1 + numero2 + numero3; 
        }
              
   /**Se deine una función sumOrMultiply que toma tres argumentos: numero1, numero2, numero3. 
    * Primero verifica que los tres argumentos usados son números y para hacerlo se usa la función isNaN, que devuelve
    * true si el arguento no es un número. Si alguno de los argumento no es un número, la función retorna la cadena
    * "Has introducido uno o varios caracteres no válidos".
    * Si todos los argumentos son números, entonces va a verificar si el primer número es negativo. Si es así, va a
    * retornar el producto de numero1, numero2 y numero3. En caso de que el número sea positivo, retorna la suma de los tres
    */
            


  //Escribe tu codigo aqui
}

module.exports = { sumOrMultiply };
