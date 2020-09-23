var corredores = ["Juan", "Maria", "Pedro", "Daniel", "Lucas", "Sara", "Virginia", "David", "Ignacio", "Carlos"];

var text = "";
var suma = 0;


for (var index=0;index<5;index++)
{
    text += corredores[index] + "\n";
    suma += index;
    console.log(index);
}

console.log(text);
console.log(suma);


var index = 0;


while (index < 5)
{
    text += corredores[index] + "\n";
    index++;
}

console.log(text);


var tieneSara = false;

while (index < corredores.length && tieneSara == false)
{
    tieneSara = (corredores[index] == "Sara")
    index++;
}

for (index = 0; index<corredores.length; index++)
{
    if (corredores[index] == "Sara")
        tieneSara = true;
}

console.log(tieneSara)


var cuantasSaras = 0;

for (index = 0; index<corredores.length; index++)
{
    if (corredores[index] == "Sara")
        cuantasSaras++;
}

console.log(cuantasSaras);


do
{
    text += corredores[index] + "\n";
    index++;
} while (index < 5)

console.log(text);