//Vector de n números aleatorios de 0 a m

var myLib = require("../retos día 6/vector");

function crearVector(n,m) {
    var vector = [];
    for (var i=0; i<n; i++)
    {
        vector.push(Math.round(Math.random()*m))
    }
    return vector;
};

//Suma dos vectores si tienen el mismo número de elementos

function sumaVector(v1,v2) {
    var resultado = [];
    if (v1.length == v2.length) {
        for (var i=0;i<v1.length;i++) {
            resultado.push(v1[i]+v2[i]);
        }
    }
    else {
        console.log("No tienen el mismo número de elementos");
    }
    return resultado;
};

vA = [12, 3, 4, 5];
vB = [3, 2, 1, 7];

//Multiplica v1 * n

function productoNumeroVector(v1,n) {
    var resultado = [];
    for (var i=0; i<v1.length; i++)
    {
        resultado.push(v1[i]*n);
    };
    return resultado;
};

vC = [0, 2, 1, 7, 6];

//Resta dos vectores si tienen el mismo número de elementos

function restaVector(v1, v2) {
    var resultado = [];
    if (v1.length == v2.length) {
        for (var i=0;i<v1.length;i++) {
            resultado.push(v1[i]-v2[i]);
        }
    }
    else {
        console.log("No tienen el mismo número de elementos");
    }
    return resultado;
};

vD = [1, 5, 8, 6];
vE = [6, 70, 11, 9, 40];

//Multiplica dos vectores si tienen el mismo número de elementos

function productoVector(v1, v2) {
    var resultado = [];
    if (v1.length == v2.length) {
        for (var i=0;i<v1.length;i++) {
            resultado.push(v1[i]*v2[i]);
        }
    }
    else {
        console.log("No tienen el mismo número de elementos");
    }
    return resultado;
};

vF = [0, 12, 3, 5, 8],

//Probar todas las funciones del fichero

console.log(crearVector(10,5));
console.log(sumaVector(vA,vB));
console.log(productoNumeroVector(vC,4));
console.log(restaVector(vD,vE));
console.log(productoVector(vF,vE));

module.exports = {crearVector, sumaVector, productoNumeroVector, restaVector, productoVector}
