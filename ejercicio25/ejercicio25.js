/**
 *  Ejercicio 25
 *  Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño.
 *  Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
 *  Ejemplo, para lado = 4 escribiría:
 *  * * * *
 *  *     *
 *  *     *
 *  * * * *
 *  Recuerda la estructura repetitiva For.
 *
 *  La funcion debera retornar cada linea + un espacio en blanco '\n';
 */
function crearCuadrado(numero) {
  //Escribe tu codigo aqui
  // inicializamos una variable cuadrado vacía para almacenar los ateríscos
  let cuadrado="";

// empiezo con un for para ir recorriendo las filas del cuadrado
for (let i = 0; i < numero; i++) {
// el egundo for lo creo para recorrer las columnas del cuadrado
   for (let j = 0; j < numero; j++) {
    // por último, necesito un if donde vamos a comprobar si estamos en el borde o estamos dentro del cuadrado
    if (i==0 || i==numero-1 || j==0 || j==numero-1){
      // si estamos en el borde, se añade un asterísco
      cuadrado+="*";
      // si no estamos en el borde tenemos que añadir un espacio en blanco
    } else {
      cuadrado+=" ";
    }
    // después de recorrer todas las columnas de una fila, con "\n" añadimos un salto de linea en cada fila de cuadrado 
  }
  cuadrado+="\n";
}
return cuadrado;

}

module.exports = { crearCuadrado };
