/*
Ejercicio 12

programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales

si los numero no son un numero o son menores o iguales a cero

*/

do {
  let num1 = parseInt(prompt(`Digite el primer numero`, 0));
  let num2 = parseInt(prompt(`Digite el segundo numero`, 0));

  console.log(isNaN(num1));
  if(num1 <= 0 || num2 <= 0) {
    alert(`Los numeros no pueden ser 0 o menores a 0`);
  } else if(isNaN(num1) || isNaN(num2)) {
    alert(`No deben ser letras solo numeros`);
  } else if(num1 === num2) {
    alert(`Los numero son iguales`);
  } else {
    console.log(
        num1 > num2
          ? `El numero ${num1} es mayor que el numero ${num2}`
          : `El numero ${num2} es mayor que el numero ${num1}`
      );
      break;
  }
} while (true);