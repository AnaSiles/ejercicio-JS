/**
 *  Ejercicio 5
 *  Construir un algoritmo que reciba un numero entero y retorne
 *  un string que nos indique si es positivo, negativo o nulo.
 *  Debes tener en cuenta la opcion de que no se introduzca un
 *  numero.
 */

function determinarTipoNumero(numeroEntero) {

    if(numeroEntero>0){
        
        return "El numero es positivo";
    }
    else if(numeroEntero<0) {
        
        return "El numero es negativo";

    }
    else if(numeroEntero==null){
        
        return "El numero es nulo";

    }
     else {
         return "No has introducido un numero";

     }
 //Escribe tu codigo aqui
}

module.exports = { determinarTipoNumero };

//Preguntar por que en el número es nulo hay que poner ==a null y al hacerlo sin el test hay que poner ====
