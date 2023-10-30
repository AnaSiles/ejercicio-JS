/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */
// let numero1=3;
// let numero2=7;
// let numero3=5;


// Revisar este ejercicio por que si los dos primeros son iguales, no sale. Está relacionado con acortar las comparaciones

function compareThreeNumbers(numero1, numero2, numero3) {

            if (numero1>numero2 && numero1>numero3) { 
                return numero1;
            }
            else if (numero2>numero1 && numero2>numero3) {
                return numero2;
            }
            else if (numero3>numero1 && numero3>numero2 || numero3!=numero1 || numero3!=numero2) {
                return numero3;
            }
            
            else if (numero1==numero2 && numero2==numero3) {
                return "iguales";
            }
        }
        
//Escribe tu codigo aqui


module.exports = {compareThreeNumbers};
