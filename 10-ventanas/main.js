//Alertas
let messaje = `Hello world`;
alert(messaje);

//Confirmacion
let conf = confirm(`ACEPTAR O CANCELAR`);
console.log(conf);

//Prompts
let edad = prompt(`Dime tu edad`, 0);
console.log(`${typeof edad}: ${edad}`);
console.log(`${typeof parseInt(edad)}: ${parseInt(edad)}`);