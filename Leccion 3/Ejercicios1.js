let edad = 18;

const EDAD_ADULTO = 18;
const PERSONA_MAS_VIEJA = 123;

if (edad >= EDAD_ADULTO && edad < PERSONA_MAS_VIEJA) {
    console.log("Es mayor de edad");
} else if(edad > 0 && edad < EDAD_ADULTO) {
    console.log("es menor de edad");
}else{
    console.log("edad errada o estas mintiendo");
};

console.log((edad >= EDAD_ADULTO) ? "Es mayor de edad" : " No es mayor de edad");

let dia = 8;

if(dia == 1) {
    console.log("Hoy es lunes");
} else if(dia == 2) {
    console.log("Hoy es marte");
} else if(dia == 3) {
    console.log("Hoy es miercoles");
} else if(dia == 4) {
    console.log("Hoy es jueves");
} else if(dia == 5) {
    console.log("Hoy es virnes");
} else if(dia == 6) {
    console.log("Hoy es sabado");
} else if(dia == 7) {
    console.log("Hoy es domingo");
} else {
    console.log("ese dia no existe");
}