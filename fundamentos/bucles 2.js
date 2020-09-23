//Suma de cuadrados de los 100 primeros números

var cuadrado = 0;
var resultado = 0;

for (var i=0; i<101; i++)
{
    cuadrado = Math.pow(i,2)
    resultado = cuadrado + i
}
console.log(resultado)