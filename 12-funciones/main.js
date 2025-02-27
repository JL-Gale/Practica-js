//Funciones

console.log(`***********`);
function saludar() {
  console.log(`Hola soy una funcion`);
}

saludar();
console.log(`***********`);

//Funcion que retorna
function saludar2() {
  console.log(`Hola soy una funcion`);
  return `Puede devolver valores`;
}

let guardarsaludo = saludar2();
console.log(guardarsaludo);
console.log(`***********`);

//Funciones con parametros
function saludar3(nombre) {
  console.log(`Hola ${nombre} soy una funcion`);
}
saludar3(`JL-Gale`);
console.log(`***********`);

//Funciones con parametros opcionales
function saludar4(nombre = "JL-Gale") {
  console.log(`Hola ${nombre} soy una funcion`);
}
saludar4();
console.log(`***********`);

//Funciones dentro de otras

function operaciones(num1, num2) {
  let resultados = {
    suma: num1 + num2,
    resta: num1 - num2,
    multiplicacion: num1 * num2,
    division: num1 / num2,
  };
  return resultados;
}

function mostrarPorConsola(num1, num2) {
  let resultados = operaciones(num1, num2);
  console.log(`num1: ${num1} num2: ${num2}`);
  console.log(`Suma: ${resultados.suma}`);
  console.log(`Resta: ${resultados.resta}`);
  console.log(`Multiplicacion: ${resultados.multiplicacion}`);
  console.log(`Division: ${resultados.division}`);
  return true;
}

function mostrarPorPantalla(num1, num2) {
  let resultados = operaciones(num1, num2);
  document.write(`<h1>num1: ${num1} num2: ${num2}</h1>`);
  document.write(`<h2>Resultados</h2>`);
  document.write(`<h2>Suma: ${resultados.suma}</h2>`);
  document.write(`<h2>Restas: ${resultados.resta}</h2>`);
  document.write(`<h2>Multiplicacion: ${resultados.multiplicacion}</h2>`);
  document.write(`<h2>Division: ${resultados.division}</h2>`);
  document.write(`<hr>`);
  return true;
}

function calculadora(num1, num2, mostrar = false) {
  if (mostrar) {
    mostrarPorConsola(num1, num2);
  } else {
    mostrarPorPantalla(num1, num2);
  }
  return true;
}

calculadora(10, 10, false);
calculadora(10, 20, true);
console.log(`***********`);

//Parametros REST
function misPeliculas(pelicula1, pelicula2, ...restoDepPelis) {
  console.log(pelicula1);
  console.log(pelicula2);
  console.log(restoDepPelis);
  return true;
}
misPeliculas(`Matrix`, `Jhon hicks`, "Toy store", `Ranbo`, `Rocky`);
console.log(`***********`);

//Operador SPREAD
let numeros = [1, 2, 3];
let misNumero = [...numeros, 4, 5, 6, 7, 8, 9, 10];
console.log(misNumero);
console.log(`***********`);

let misPeliculasFav = [`Las tortugas ninjas`, `Transformes`];
misPeliculas(...misPeliculasFav, `Scarface`, "Titanic");
