/*
Muestra la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/

let aux = true;
let suma = 0,
  contador = 0;
do {
  let numero = parseInt(prompt(`Ingrese un nuemro`));
  console.log(`El numero ingresesado es el: ${numero}`);
  if (isNaN(numero)) {
    alert(`No estas introduciendo numeros mmg`);
  } else if (numero >= 0) {
    contador++;
    suma += numero;
  } else if (numero < 0) {
    aux = false;
  }
} while (aux);

console.log(`La suma total de los numeros es de: ${suma}`);
console.log(`La media de los numeros es de: ${suma / contador}`);
