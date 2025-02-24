//Condiconales

// if

let estaLloveindo = true;

if (estaLloveindo) {
  console.log(`Esta lloviendo`);
}

if (estaLloveindo == false) {
  console.log(`No esta lloviendo`);
}

// if-else
if (estaLloveindo) {
  console.log(`Esta lloviendo`);
} else {
  console.log(`No esta lloviendo`);
}

// example 2
let tieneCebolla = true;
if (tieneCebolla) {
  console.log(`Tu hamburgesa tiene cebollaa`);
} else {
  console.log(`Tu hamburgesa no tiene cebollaa`);
}

// example 3

let nombre = "JL-Gale";
let edad = 60;

if (edad < 18) {
  console.log(`Hola ${nombre}, apenas tienes ${edad} eres menor de edad`);
} else if (edad >= 18 && edad < 60) {
  console.log(`Hola ${nombre} tienes ${edad} eres mayor de edad`);
} else {
  console.log(`Hola ${nombre} tienes ${edad} ya vas de salida sorry`);
}

//example 4

let buenTiempo = false;

if (!buenTiempo) {
  console.log(`No saldremos esta lloviendooooo`);
}

//example 5

let year = 1999;

if (year >= 2000 && year <= 2030) {
  console.log(`Estamos en la era moderna, año: ${year}`);
} else if (year > 2030) {
  console.log(`Estamos en la era post moderna, año: ${year}`);
} else {
  console.log(`Estamos en la epoca de los pica piedras, año: ${year}`);
}

//example 6

if (year == 2000 || year == 2004) {
  console.log(`Tu año esta en la lista: ${year}`);
} else {
  console.log(`Tu año no esta en la lista: ${year}`);
}
