/**
 *  Ejercicio 23
 *  Leer tres números que denoten una fecha (día, mes, año) por
 *  parametros.
 *  Comprobar que es una fecha válida. Si no es válida escribir
 *  un mensaje de error que indique que se ha introducido mal
 *  alguna parte de la fecha y volver a pedir los números. Si es válida,
 *  escribir la fecha cambiando el número del mes por su nombre.
 *  Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero del 2006”.
 *  El año debe ser mayor que 0. (Recuerda la estructura switch).
 */

function fechaIntroducida(dia, mes, ano) {
  //Escribe tu codigo aqui
// Uso los condicionales if para ir comprobando que los días, meses y años sean válidos.

  if (dia<1 || dia>31 || mes<1 || mes>12 || ano<=0){
    return "Has introducido mal alguna parte de la fecha";
  }
// En este segundo if compruebo que febrero no tenga más de 28 días
  if (mes==2 && dia>=29) {
    return "Has introducido mal alguna parte de la fecha";
  }

  // Uso el switch para cambiar el número del mes introducido por el string nombre del mes, para eso es necesario que cree la variable
  // nombreMes que es donde se va a almacenar el string nombre del mes que corresponde al valor del mes.Con el break se sale de la estructura switch
  
  let nombreMes;
  switch (mes) {
    case 1: nombreMes = 'enero';
      
      break;

    case 2: nombreMes = 'febrero';
      
      break;

    case 3: nombreMes = 'marzo';
      
      break;

    case 4: nombreMes = 'abril';
      
      break;

    case 5: nombreMes = 'mayo';
      
      break;

    case 6: nombreMes = 'junio';
      
      break;

    case 7: nombreMes = 'julio';
      
      break;

    case 8: nombreMes = 'agosto';
      
      break;

    case 9: nombreMes = 'septiembre';
      
      break;

    case 10: nombreMes = 'octubre';
      
      break;

    case 11: nombreMes = 'noviembre';
      
      break;

    case 12: nombreMes = 'diciembre';
      
      break;
  
    
  }
  return `${dia} de ${nombreMes} del ${ano}`;

}

module.exports = { fechaIntroducida };
