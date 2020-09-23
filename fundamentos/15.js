let js = "Javascript";
let aw = "awesome";
console.log(`I just wanna say ${js} is ${aw}`)

var [a, b] = ["hello", "world"];
console.log(a)
console.log(b)

var person = { name: "Javier", surname: "Perez" };
var { name, surname } = person;
console.log(name);

function sumValues (v1, v2 = 0) {
    return v1 + v2;
}

console.log(sumValues(3,4));
sumValues(console.log(7));

//Reto1 función que imprima por parámetro o informe

saludar = nombre => { if (nombre == null) { console.log("Falta parámetro") } else {console.log(`Hola, ${nombre}!`) } };
console.log(saludar("Emma"));

//Reto2

multiply = (x,y) => { console.log(x*y) };
console.log(multiply(5,4));

//Reto3

const mensaje = "No has introducido un array como parámetro de entrada";

suma = (arr) => { 
    if (!arr) return 0;
    if (Array.isArray(arr)) { let sumar = 0;
        for (let i=0;i<arr.length;i++)
    { sumar += arr[i]; } return sumar; }
    else { return mensaje; } };

    let ejemplo = [2,3,7,4];
console.log(suma());
console.log(suma(ejemplo));
console.log(suma(5));