// Ejercicio 14
// Construir un algoritmo que resuelva el problema
// que tienen unos surtidores de gasolina, que registran
// lo que surten en galones, pero el precio de la gasolina
// se fija en litros. El algoritmo debe calcular
// e imprimir el precio que hay que cobrarle al cliente.

// Precio gasolina = 1.333euros / litro
// 1 galon = 3,78541 litros

/**
 *  Ejercicio 14
 *  Construir un algoritmo que resuelva el problema que tienen unos surtidores
 *  de gasolina, que registran lo que surten en galones, pero el precio de la
 *  gasolina se fija en litros. El algoritmo debe calcular y retornar el precio
 *  que hay que cobrarle al cliente.
 *
 *  Precio gasolina = 1.333 euros / litro
 *  1 galon = 3,78541 litros
 */

function precioEnLitros(galeones,litros) {
  litros=galeones*3.78541;


  return litros*1.333;
  //Escribe tu codigo aqui
}

module.exports = { precioEnLitros };
