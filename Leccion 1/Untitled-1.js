let numero1 = 10;
let numero2 = 20;
let numero3 = 30;

console.log(numero1);
console.log(numero2);
console.log(numero3);

//Se puede usar $, _
let $variable1 = 1;
let _variable2 = 2;
let $miNumero = 100;

console.log($variable1);
console.log(_variable2);
console.log($miNumero);

/*
Number -> almacena valores numericos (10, 100, -10, 100, 10.000, 12.434, -129.232)
String -> almacena valores de tipo cadena de caractees("Hola mundo", 'Hola mundo', `Hello world`)
Boolean -> almecena valores de tipo boalno (True, False)
Null -> Sigfica ausencia de referencia de un objeto
Undefined -> Significa ausencia de valor
*/

let numero = 10;
console.log(numero);
let cadenaDeTexto = "Hello world";
console.log(cadenaDeTexto);
let boalno = false;
console.log(boalno);
let nulo = null;
console.log(nulo);
let vacio;
console.log(vacio);


//typeof sirve para saber cual es el tipo de dato de una variable
//'number' 'string' 'boolean' 'object' 'undefined' 
console.log(typeof nulo);
console.log(typeof vacio);
console.log(typeof cadenaDeTexto);
console.log(typeof numero);
console.log(typeof boalno);

//Hoisting 
variableHoisting = 200;
console.log(variableHoisting)

var variableHoisting
variableHoisting = 100;
console.log(variableHoisting);

//contastes
const NUMERO_EJEMPLO = 10;
const NAME = 'gale';