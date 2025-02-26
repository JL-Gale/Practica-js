/*
Ejercicio 21

Calculadora:

-Pida dos numeros por pantalla
-si memetemos uno mal los vuelva a pedir
-en una alerta y por consola mosrtrar el resultado
de sumar, restar, multiplicar y dividir esas dos cifras

*/
let num1;
let num2;
do {
  num1 = parseInt(prompt(`Ingrese el primer numero`));
  num2 = parseInt(prompt(`Ingrese el segundo numero`));

  if (isNaN(num1) || isNaN(num2)) {
    alert(`Error`);
  } else {
    alert(
      `${num1} + ${num2} = ${num1 + num2}\n${num1} - ${num2} = ${
        num1 - num2
      }\n${num1} x ${num2} = ${num1 * num2}\n${num1} / ${num2} = ${num1 / num2}`
    );

    console.log(
      `${num1} + ${num2} = ${num1 + num2}\n${num1} - ${num2} = ${
        num1 - num2
      }\n${num1} x ${num2} = ${num1 * num2}\n${num1} / ${num2} = ${num1 / num2}`
    );
  }
} while (isNaN(num1) || isNaN(num2));
