/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */

function mediaArrayHastaMenosUno(array) {

   
  let suma=0;
  let i=0;

while (array[i]!=-1) {
  suma+=array[i];
  i++;
}

if (i>0) {

   
  let mediaAritmética=suma/i;
    
    return mediaAritmética;

} else {

  return 0;

}


//Escribe tu codigo aqui
}


module.exports = { mediaArrayHastaMenosUno };
