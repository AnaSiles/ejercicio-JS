/**
 *  Ejercicio 6
 *  Crea un algoritmo que reciba un numero y determine si,
 *  el numero es 0, el numero es par o el numero es impar.
 *  Pista: para determinar el resto de una división, se usa la operación módulo %.
 */

function parImparNulo(numero) {

    if (numero == 0){
        return "El numero es 0";
    }

    else if(numero % 2==0) {
        return "El numero es par";
    }

    else {
        return "El numero es impar";
    }
 //Escribe tu codigo aqui
}

module.exports = { parImparNulo };
