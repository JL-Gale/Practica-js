/*
Ejerccio 11

Nuestros usuriarios tienen perros

Y quieren saber que edad de perro tienen sus mascotas

un año de humano equivale a 7 años de perro

pregunta a los usuarios que edad tiene su perro y dile la edad canina

*/

let edadDelPerro = prompt(`Diga la edad de su mascota`);
let edadReal = edadDelPerro * 7;
console.log(`Tu perro tiene ${edadReal} años`);