/*
Ejercicio 14

Un DJ no sabe que genero quiere musical poner en la fiesta

Preguntale al usuario que genero quiere (pop, rock o rap)

Sagun lo que prefiera devuelve un mensaje diferente.
*/

let eleccion = prompt(`Ingrese el genero que desea escuchar (pop, rock o rap)`);

switch (eleccion.toLowerCase()) {
  case "pop":
    console.log(`Estas escuchando pop`);
    break;
  case "rock":
    console.log(`Estas escuchando rock`);
    break;
  case "rap":
    console.log(`Estas escuchando rap`);
    break;
  default:
    console.log(`Eleccion errada`);
}
