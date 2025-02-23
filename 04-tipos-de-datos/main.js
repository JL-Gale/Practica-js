
// String
let cadenaDeTexto = "Esto es un string o cadena de texto"
console.log(cadenaDeTexto);

//int
let numeroIntP = 1000;
let numeroIntN = -1000;
console.log(numeroIntP);
console.log(numeroIntN);

//Float o Double
let numeroDecimalP = 0.9999;
let numeroDecimalN = -0.9999;
console.log(numeroDecimalP);
console.log(numeroDecimalN);

//Boolean
let variableTrue = true;
let variableFalse = false;
console.log(variableTrue);
console.log(variableFalse);

//Undefined
let variableUndefined;
console.log(variableUndefined);

//null
let variableNull = null;
console.log(variableNull);

//arrays
let nombres = ["Milton", "Cecilia", "Onalba"];
console.log(nombres);

//Objetos
let heroe = {nombre: "Acuaman", universo: "DC"};
console.log(heroe);

//Operadores de tipo typeOf
console.log(typeof cadenaDeTexto);
console.log(typeof numeroDecimalP);
console.log(typeof variableTrue);
console.log(typeof variableUndefined);
console.log(typeof variableNull);
console.log(typeof nombres);
console.log("Es un array: " + Array.isArray(nombres));
console.log(typeof heroe);