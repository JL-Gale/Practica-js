/*
Ejercicio 17

Mostrar todos los numero impares que hay entre dos numeros que nos de el usuario
*/

let num1 = parseInt(prompt(`Ingre el primer numero`));
let num2 = parseInt(prompt(`Ingre el segundo numero`));

if(!isNaN(num1) && !isNaN(num2)) {

    if(num1 < num2) { 
        for(let i = num1; i <= num2; i++) {
            if(i%2 != 0) {
                console.log(`${i} es impar`);       
            }
        }
    } else {
        for(let i = num1; i >= num2; i--) {
            if(i%2 != 0) {
                console.log(`${i} es impar`);       
            }
        }
    }
} else {
    alert(`Error`);
}