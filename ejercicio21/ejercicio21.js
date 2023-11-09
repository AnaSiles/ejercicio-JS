/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

function maxMinAverageUntilZero(array) {
  //Escribe tu codigo aqui
  let i=0;
  let suma=0;
  let max=array[i];
  let min=array[i];

  while(array[i]!=0) {

    suma+=array[i];

    if (array[i]>max) {
      max=array[i];
      
    } else if(array[i]<min){
      min=array[i];
    }
    
    i++;
    
  }
  let media=suma/i;
  return {
    max: max,
    min: min,
    average: media
};

    
  
}

module.exports = { maxMinAverageUntilZero };
