//Calcular el factorial: for y while

var resultado = 1;
for (var i=5; i>0; i--)
{
    resultado *= i
}
console.log(resultado)

var i = 5;
while (i>0)
{
    resultado *= i
    i--;
}
console.log(resultado)

//Buscar un número en un array que sea múltiplo de 2: while

var arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
var index=0;
var multiplo = false;
while (index<arrayNumeros.length && !multiplo)
{
    if (arrayNumeros[index]%2 == 0) {
        multiplo = true;
        console.log(arrayNumeros[index] + " es múltiplo de 2.")
    }
    index++;
}

//Suma de los 100 primeros números
var resultado = 0;
for (var i=0; i<101; i++)
{
    resultado += i
}
console.log(resultado)

//Dado un array de nombres mostrar el índice de la ocurrencia de "Pepe"
var nombres = ["Juan", "Antonia", "Pepe", "Marcial"]
var index=0;
var bingo = false;
while (index<nombres.length && bingo == false)
{
    if (nombres[index] == "Pepe"){
        console.log(index)
        bingo = true;
    }
    index++;
}

//Dos vectores de 100 números entre 0 y 20

var vect1 = [];
var vect2 = [];

for (var i=0; i<100; i++)
{
    vect1.push(Math.round(Math.random()*20))
    vect2.push(Math.round(Math.random()*20))
}
console.log(vect1)
console.log(vect2)

//Suma vectores

var suma = [];

for (var i=0; i<100; i++)
{
    vect1.push(Math.round(Math.random()*20))
    vect2.push(Math.round(Math.random()*20))
    suma[i]=vect1[i] + vect2[i]
}
console.log(vect1)
console.log(vect2)
console.log(suma)