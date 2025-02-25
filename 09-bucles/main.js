//Bucles for
console.log(`****For****`)

let numero = 5;
for(let i = 0; i < numero; i++) {
    console.log(`Vuelta ${i+1}`);
}

console.log(`****While****`)
numero = 0;
while(numero < 5) {
    console.log(`Vuelta ${numero+1}`);
    numero++;
}

console.log(`****Do While****`)
numero = 5;
do {
    console.log(`Vuelta ${numero+1}`);
    numero++;
} while (numero < 5);
