/*
Else/IF
Si un peatón debe cruzar un paso de zebra o no
*/

var semáforo = "no hay";
var coches = 1;
var cruza = "";

if (semáforo == "verde" )
{
    cruza = "Puede cruzar"
}
else if (semáforo == "rojo" )
{
    cruza = "No puede cruzar"
}
else if (semáforo == "no hay" && (coches = 0))
{
    cruza = "Puede cruzar"
}
else
{
    cruza = "No puede cruzar"
}

console.log(cruza)