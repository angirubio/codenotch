//Librería Matriz que utilice la librería vector : var myLibMatriz = require("../retos día 6/matriz");

var myLib = require("../retos día 6/vector");

function creaMatriz(n,m,k) {
    var m1 = new Array (n);
    for(var i = 0; i < n; i++){
        m1[i]= new Array (m);
        for(var j = 0; j < m; j++) {
            m1[i][j] = Math.round(Math.random()*k)
        }
    }
    return m1;
};

//Matriz n*m desde 0 hasta k

function crearMatriz(n,m,k) {
    var m1 = new Array (n);
    for(var i = 0; i < m1.length; i++){
        m1[i] = myLib.crearVector(m,k);
    }
    return m1;
};

//Suma dos matrices si tienen el mismo número de elementos

function sumaMatriz(m1,m2) {
    var m3 = [];
    if (m1.length == m2.length) {
        for (var i=0; i < m1.length; i++) {
            m3[i] = myLib.sumaVector(m1[i],m2[i]);
        }
    }
    else {
        console.log("No tienen el mismo número de elementos");
    }
    return m3;
};

var matriz1 = [[2,3,4,5],[3,5,0,1]]
var matriz2 = [[4,1,4,5],[2,0,0,1]]
console.log(sumaMatriz(matriz1,matriz2));

//Multiplica m * n

function productoNumeroMatriz(m,n) {
    var resultado = [];
    for (var i=0; i<m.length; i++)
    {
        resultado[i] = myLib.productoNumeroVector(m[i],n);
    };
    return resultado;
};

var matriz1 = [[2,3,4,5],[3,5,0,1]]

console.log(productoNumeroMatriz(matriz1,3));

//m1 - m2 si tienen el mismo número de elementos

function restaMatriz(m1,m2) {
    var m3 = [];
    if (m1.length == m2.length) {
        for (var i=0; i < m1.length; i++) {
            m3[i] = myLib.restaVector(m1[i],m2[i]);
        }
    }
    else {
        console.log("No tienen el mismo número de elementos");
    }
    return m3;
};

var matriz1 = [[2,3,4,5],[3,5,0,1]]
var matriz2 = [[4,1,4,5],[2,0,0,1]]

console.log(restaMatriz(matriz1,matriz2));

//m1 * m2 si tienen el mismo número de elementos

function productoMatriz(m1,m2) {
    var m3 = [];
    if (m1.length == m2.length) {
        for (var i=0; i < m1.length; i++) {
            m3[i] = myLib.productoVector(m1[i],m2[i]);
        }
    }
    else {
        console.log("No tienen el mismo número de elementos");
    }
    return m3;
};

var matriz1 = [[2,3,4,5],[3,5,0,1]]
var matriz2 = [[4,1,4,5],[2,0,0,1]]

console.log(productoMatriz(matriz1,matriz2));


//Probar todas las funciones del fichero

console.log(creaMatriz(2,4,5));

module.exports = {crearMatriz, sumaMatriz, productoNumeroMatriz, restaMatriz, productoMatriz}