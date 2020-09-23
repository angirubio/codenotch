//Reto final 2

//Matriz 10x10 con números aleatorios (0-50)

var matriz1 = new Array (10);

for(var i = 0; i < matriz1.length; i++) {
    matriz1[i]= new Array (10);
    for(var j = 0; j < matriz1[i].length; j++) {
        matriz1[i][j] = Math.round(Math.random()*50)
    }
}
console.log(matriz1)

//Otra matriz igual

var matriz2 = new Array (10);

for(var i = 0; i < matriz2.length; i++) {
    matriz2[i]= new Array (10);
    for(var j = 0; j < matriz2[i].length; j++) {
        matriz2[i][j] = Math.round(Math.random()*50)
    }
}
console.log(matriz2)


//Sumar ambas matrices

var matriz1 = new Array (10);
var matriz2 = new Array (10);
var matriz3 = new Array (10);

for(var i = 0; i < matriz1.length; i++) {
    matriz1[i]= new Array (10);
    for(var j = 0; j < matriz1[i].length; j++) {
        matriz1[i][j] = Math.round(Math.random()*50)
    }
    matriz2[i]= new Array (10);
    for(var j = 0; j < matriz2[i].length; j++) {
        matriz2[i][j] = Math.round(Math.random()*50)
    }
    matriz3[i]= new Array (10);
    for(var j = 0; j < matriz3[i].length; j++) {
        matriz3[i][j] = matriz1[i][j] + matriz2[i][j]
    }
}
console.log(matriz1)
console.log(matriz2)
console.log(matriz3)

// Multiplicar un número aleatorio por la matriz

var matriz1 = new Array (10);
var matriz2 = new Array (10);
var matriz3 = new Array (10);
var aleatorio = new Array (10);

for(var i = 0; i < matriz1.length; i++) {
    matriz1[i]= new Array (10);
    for(var j = 0; j < matriz1[i].length; j++) {
        matriz1[i][j] = Math.round(Math.random()*50)
    }
    matriz2[i]= new Array (10);
    for(var j = 0; j < matriz2[i].length; j++) {
        matriz2[i][j] = Math.round(Math.random()*50)
    }
    matriz3[i]= new Array (10);
    for(var j = 0; j < matriz3[i].length; j++) {
        matriz3[i][j] = matriz1[i][j] + matriz2[i][j]
    }
    aleatorio[i]= new Array (10);
    for(var j = 0; j < aleatorio[i].length; j++) {
        aleatorio[i][j] = Math.round(Math.random()*matriz3[i][j])
    }

}
console.log(matriz3)
console.log(aleatorio)
