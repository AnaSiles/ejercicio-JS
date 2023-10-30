/**
 *  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */



function sum (numero1, numero2) {
    
    return numero1+numero2;
    }

//Escribe tu codigo aqui


function substract(numero1, numero2) {
   
   return numero1-numero2;
    }

//Escribe tu codigo aqui


function multiply(numero1, numero2) {
    
    return numero1*numero2;
     }

//Escribe tu codigo aqui


function divide(numero1, numero2) {
    // if (numero2==0) {
    //   return "No se puede dividir por 0";
    // }
    return numero1/numero2;
 //Escribe tu codigo aqui
}

function total(numero1, numero2) {
    return sum (numero1,numero2) + substract (numero1,numero2) + multiply (numero1,numero2)+ divide (numero1,numero2);
 //Escribe tu codigo aqui
}

module.exports = { sum, substract, multiply, divide, total };
