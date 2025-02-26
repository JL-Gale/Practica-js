/*
Ejercicio 22

Tenemos una bolsa con 37 caramelo

Cada vez que te comes uno quedan menos

haz un simulacion de estos con un bucle

*/

let conf;
let caramelo = 37;
do {
    conf = confirm(`Deseas comerte un caramelo??\nTienes ${caramelo}`);
    if(conf) {
        caramelo--;
        alert(`Te has comido un caramelo te quedan ${caramelo}`);
    } else {
        alert(`Te quedan ${caramelo}`);
    }
} while(caramelo > 0);

console.log(`Te has comidos todos los caramelos`);

