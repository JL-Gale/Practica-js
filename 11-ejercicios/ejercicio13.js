/*
Ejercicio 13

Tengo un canguro que salta 3 metros cada vez

haz un programa que me diga cuantos saltos hadado el kanguro

y cual es la distancia total recorrida en tras 17 saltos

*/

let distanciaSalto = 3;
let saltos = 17;

let aux = 0;
for(let i = 1; i <= saltos; i++) {
    aux += distanciaSalto;
    console.log(`salto #${i}, distancia: ${aux} metros`);
}