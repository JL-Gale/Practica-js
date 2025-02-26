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
