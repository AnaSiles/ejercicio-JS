/**
 *  Ejercicio 15
 *  Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
 *  la funcion te vuelva a pedir que introduzcas otro numero.
 */
function parImparNulo(numero) {

  while (numero==0) {
     
    return "Introduce otro numero";
  }

  if (numero % 2==0){
    return "El numero es par";
  }

  else {
    return "El numero es impar";
  }
  //Escribe tu codigo aqui
}

module.exports = { parImparNulo };
