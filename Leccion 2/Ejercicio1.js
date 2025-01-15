
let min = -10, max = 10, valor = 1;


console.log(valor >= min && valor <= max);

console.log((valor >= min && valor <= max) ? "Valor dentro del rango" : "Valor fuera del rango");

if (valor >= min && valor <= max) {
    console.log("Valor dentro del rango");
} else {
    console.log("Valor fuera del rango");
}


let boleano = valor >= min && valor <= max;
console.log(`valor dentro de rango: ${boleano}`);