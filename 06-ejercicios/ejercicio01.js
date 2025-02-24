/*
Ejerccio 1

Calcula cuantas horas le llevaria llegar a la luna a una nave espacialñ y
guarda el resultado en una variable

la distancia desde la tiera a la luna es de 384.400 kilometros.

la velocidad de la nave es de 1225 kilometros por hora.
*/

// t = d / v

let distancia = 384400;
let velocidad = 1225;
let resultado = distancia / velocidad;
console.log("La nave tardara: " + Math.ceil(resultado)+ " horas");