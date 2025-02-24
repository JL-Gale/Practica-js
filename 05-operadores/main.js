//Operadores aritmeticos + - * / **
console.log("******Operadores aritmeticos*****");
let suma = 100 + 100;
let rest = 100 - 99;
let multi = 10 * 10;
let divi = 100 / 2;
let restante = 100 % 3;
let poten = 2 ** 5;

console.log(suma);
console.log(rest);
console.log(multi);
console.log(divi);
console.log(restante);
console.log(poten);

//Asignacion = += -= *= /=
console.log("******Asignacion*****");
let num1 = 10;
let num2 = 2;
console.log((num1 += num2));
console.log((num1 -= num2));
console.log((num1 *= num2));
console.log((num1 /= num2));
console.log((num1 %= num2));
num1 = 5;
console.log((num1 **= num2));

//Comparacion == === != !==
console.log("******Comparacion*****");
let comparacionNumero = 30;
console.log(comparacionNumero == "30");
console.log(comparacionNumero === "30");

console.log(comparacionNumero != "30");
console.log(comparacionNumero !== "30");

console.log(comparacionNumero < "30"); //False
console.log(comparacionNumero <= "30"); //True
console.log(comparacionNumero > "30"); //False
console.log(comparacionNumero >= "30"); //True

//Logicos || && !
console.log("******Logicos*****");
let variableBoolean1 = true;
let variableBoolean2 = false;

console.log(variableBoolean1 && variableBoolean2);
console.log(variableBoolean1 || variableBoolean2);
console.log(!variableBoolean2);

//Cadena
let mensaje1 = "JL-gale";
let mensaje2 = "Hola";

let nuevoMensaje = mensaje2 + " " + mensaje1;
nuevoMensaje += " esta programando en JavaScript"
console.log(nuevoMensaje);

//Incremento y decremento
let incremento = 10;
let decremento = 10;
incremento++;
decremento--;

console.log(incremento + " \n" + decremento)
