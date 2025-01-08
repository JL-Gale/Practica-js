
let a, b, c, d, e;

//sumar

a = 5 + 5;
a += 10;
console.log(a);

//resta
b = 10 - 5;
b -= 4;
console.log(b);

//multiplicacion
c = a * 2;
c *= (a + b);
console.log(c);

d = 12%7;
console.log(d);

e = d ** 3 // 5 * 5 * 5
console.log(e);

e = Math.pow(5, 3);
console.log(e);


    let numero = 100;
    let bolean = true;

    for (let i = numero; i > 0; i--) {
        
        if(i == numero | i == 1) {
           continue;     
        }
        
        if(numero%i == 0) {
            bolean = false;
            break;
        }
    }

    console.log(bolean ? "es primo" : "no es prinmo");

