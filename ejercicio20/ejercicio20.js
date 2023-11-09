/**
 *  Ejercicio 20
 *  Teniendo en cuenta que la clave es 'eureka, escribir un algoritmo
 *  que nos pida un array de claves por parametros y una contrasena.
 *
 *  Solo tendremos 3 intentos para aceptar, si fallamos, nos mostrara un mensaje por consola indicandonos que hemos agotado esos
 *  3 intentos. Si acertamos la clave, nos mostrara un mensaje por consola y saldra del programa. Si agotaramos
 *  los 3 intentos sin acertar, tambien nos mostrara un mensaje por consola y saldra
 *  del programa.
 */

function adivinarContrasena(claves,contrasena) {
  //Escribe tu codigo aqui
// Definir una variable contador que lleva la cuenta de los intentos realizados.
  
let i=0; 
//Usamos el bucle while que se repetirá mientras el número de intentos sea menor que 3. 
    
while (i<3) {

      if (claves[i]===contrasena){
        // Comprobamos si la clave en la posición actual del array es igual a la contraseña 
      console.log ("Contraseña correcta, bienvenido");
// Si la contraseña es correcta se muestra el mensaje del console.log
      return;
// Con el return salimos de la función. ya no se ejecuta nada despúes del return
      
     } else {
      console.log ("Contraseña incorrecta, intentelo de nuevo");
// Si la clave no es correcta, se muestra el mensaje de intentar de nuevo y pasa a incrementar el contador en 1 para que se repita el while
      
    }
    i++;
// por eso ponemos el contador i++ aquí, que va fuera del if pero dentro del while
}
  
console.log("Has agotado tus intentos");
// si se hacen los tres intentos y no coincide ninguna clave, aparecerá este console.log


}

module.exports = { adivinarContrasena };
