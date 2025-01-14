//Operadores logicos

let a = true;
let b = false;

//Operador logico && (and)
//Regresa verdero si solo los dos son verderos
if (a && b) {
    console.log("a y b son true");
} else {
    console.log("a y b no son true");
}

console.log(`${a} && ${b} -> ${a && b}`);

//Operador logico || (or)
//Regresa verdadero si solo uno de los es verdadero
console.log(`${a} || ${b} -> ${a || b}`);

//Opereador logico ! (not)
//Invierte el valor del boolean
console.log(`${a} ! -> ${!a}`);
console.log(`${b} ! -> ${!b}`);

