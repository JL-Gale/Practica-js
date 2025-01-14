//Opdores de comparacion 

let a = 20;
let b = "20";

//Igualdad ==
// (Solo compara valores, y hace una conversion si es necesario)
console.log(`${a} == ${b} -> ${a == b}`);

//Igualdad Eestricta ===
// se compara el valor y el tipo deto
console.log(`${a} === ${b} -> ${a === b}`);

//Desigualdad !=
console.log(`${a} != ${b} -> ${a != b}`);

//Desigualdad estricta !==
console.log(`${a} !== ${b} -> ${a !== b}`);

//Mayor que >
a = 21;
console.log(`${a} > ${b} -> ${a > b}`);

//Mayor o igual que >=
a = 20;
console.log(`${a} >= ${b} -> ${a >= b}`);

//Menor que <
a = 20;
console.log(`${a} < ${b} -> ${a < b}`);

//Menor o igual <=
a = 19;
console.log(`${a} <= ${b} -> ${a <= b}`);