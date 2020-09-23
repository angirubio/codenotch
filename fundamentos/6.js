//Mostrar números del 1 al 10

for (cont=1; cont<=10; cont++) {
    console.log(cont)
}

//Mostrar pares

for (cont=2; cont<=10; cont+=2) {
    console.log(cont)
}

//Mostrar impares
for (cont=1; cont<=10; cont+=2) {
    console.log(cont)
}

//Mostrar impares dvisibles%3
for (cont=1; cont<=10; cont+=2) {
    if (cont%3 == 0)
    console.log(cont)
}

//while y do/while

var index = 1;
while (index<=10)
{
    if (index%3 == 0)
    index+=2;
}
console.log(index)

var i = 1;
do
{
    if (i%3 == 0)
    i+=2;
} while (i<=10)

console.log(i);
