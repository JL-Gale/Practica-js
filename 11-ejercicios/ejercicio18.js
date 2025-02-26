/*
Ejercicio 18

Tenemos una coleccion de numeros desde el 1 al 17

y el usuario tiene que adivinar cual es el elegido

haz un programa para que pueda advinar el numero

*/

let num = 17
let num2;
do {
     num2 = parseInt(prompt(`Ingrese un numero del 1 al 17`));
    if(num === num2) {
        alert(`Felicidades ganaste`);
    } else {
        alert(`Sigue intentando`);
    }
} while(num2 !== num);