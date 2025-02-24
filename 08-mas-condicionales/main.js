// switch

let dia = 3;

switch (dia) {
  case 1:
    console.log(`Lunes`);
    break;

  case 2:
    console.log(`Martes`);
    break;

  case 3:
    console.log(`Miercoles`);
    break;

  case 4:
    console.log(`Jueves`);
    break;

  case 5:
    console.log(`Viernes`);
    break;

  case 6:
    console.log(`Sabado`);
    break;

  case 8:
    console.log(`Domingo`);
    break;

  default:
    alert(`Dia de la semana erroneo`);
}

//Condional Ternario


let nombre = "JL-Gale";
let edad = 18;

console.log(edad < 18 ? `${nombre} es menor` : `${nombre} es mayor`);
