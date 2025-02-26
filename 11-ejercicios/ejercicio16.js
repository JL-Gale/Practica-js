/*
Ejercicio 16

Escribe un programa que te muestre la tabla de multiplicar del numero que te diga el usuario
*/

let num = parseInt(prompt(`Ingrese el numero`));
let aux = `TABLA DEL ${num}\n`;
console.log(`TABLA DEL ${num}`);
for (let i = 1; i <= 10; i++) {
    aux += `${num} x ${i} = ${num*i}\n`;
    console.log(`${num} x ${i} = ${num*i}`);
}

alert(aux);