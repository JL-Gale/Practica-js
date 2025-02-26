/*
Ejercicio 20

En base al numereo que nos de el user 

decirle si es par o impar 
*/

let numero;

while (isNaN(numero)) {
  numero = parseInt(prompt(`Ingrese su numero`));

  if (isNaN(numero)) {
    alert(`Error debe ingresar un numero`);
  } else if (numero%2 == 0) {
    alert(`Es par`);
  } else {
    alert(`Es impar`);
  }
}
