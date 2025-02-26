/*
Ejercicio 19

muestra todos los divisores de un numero que se introduce en un prompt
*/

let num = parseInt(prompt(`Ingrese su numero`));

for (let i = 2; i <= num; i++) {
  if (num % i == 0) {
    console.log(`El numero ${i} es devisor de ${num}`);
  }
}
