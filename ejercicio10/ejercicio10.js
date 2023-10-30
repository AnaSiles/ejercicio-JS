/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

function nuevoSalario(sueldo, categoria) {
let categoria1=1;
let categoria2=2;
let categoria3=3;
let categoria4=4;
let categoria5=5;


  if (categoria==categoria1) {
    return sueldo+(sueldo*0.15);

  }

  if (categoria==categoria2) {
    return sueldo+(sueldo*0.1);

  }

  if (categoria==categoria3) {
    return sueldo+(sueldo*0.06);

  }

  if (categoria==categoria4) {
    return sueldo+(sueldo*0.03);
  }

  if (categoria==categoria5) {
    return sueldo;
  }
  //Escribe tu codigo aqui
}

// Otra forma de hacerlo pero con un array y for:

// function nuevoSalario(sueldo, categoria) {
//   let porcentajes = [0.15, 0.1, 0.06, 0.03, 0]; aquí se crea un array que contiene los porcentajes de aumento de cada 
//                                                 categoría.  
//   let nuevoSueldo = sueldo; aquí creamos una variable donde se le asigna el valor de sueldo

//   for (let i = 0; i < porcentajes.length; i++) { ;el for se va a ejecutar una vez para cada elemento del array procentajes
//                                                   la variable i se usa como contador de las posiciones que se van recorriendo
//                                                   del array, y se inicializa en 0.
//       if (categoria == i + 1) { ;esta línea verifica si la categoria proporcionada coincide con el indice actual del array+1
//                                  si es así, se ejecuta el código dentro del if.
//           nuevoSueldo += sueldo * porcentajes[i]; aquí se calcula el aumento de sueldo.
//           break; en esta línea se incluye un break que rompe el bucle for. Esto significa que una vez que se ha encontrado
//                  la categoría correcta y se ha calculado el nuevo saldo, no hay necesidad de seguir revisando las demás categorías
//       }
//   }

//   return nuevoSueldo;
// }

module.exports = { nuevoSalario };
