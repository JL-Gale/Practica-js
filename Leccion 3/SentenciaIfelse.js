//Sentencia if else

let numero = 22;

if (numero <= 100 || numero >= 200) {
    console.log(`El numero es <= 100 o >= 200: ${numero}`);
} else {
    console.log(`El numero no es <= 100 o >= 200: ${numero}`);
}

//Sentencia if else if
numero = 100;
if (numero < 10) {
    console.log(`El numero es menor a 10: ${numero}`);
} else if(numero > 20) {
    console.log(`El numero es mayor a 20 ${numero}`);
} else {
    console.log(`El numero no es menor a 10 y mayor 20 ${numero}`);
}
