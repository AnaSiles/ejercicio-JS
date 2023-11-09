/**
 *  Ejercicio 31
 *  Algoritmo que lea un numero entero (altura) y a partir de el,cree
 *  una escalera invertida de asteriscos con esa altura.
 *  Debera quedar asi, si ponemos una altura de 5
 *  *****
 *   ****
 *    ***
 *     **
 *      *
 *
 *  Deberas recordar la concatenacion y el uso de espacio en blanco (\n)
 */

function crearTriangulo(numeroEntero) {
  //Escribe tu codigo aqui

  let linea="";
  for (let i = 0; i<numeroEntero; i++) {

   for (let j = 0; j <i; j++) {
    linea+=" ";
    
   } 
   for (let k = 0; k < numeroEntero-i; k++) {
    linea+="*";
    
   }
   linea+="\n";
  }
  return linea;
}

module.exports = { crearTriangulo };
