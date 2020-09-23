/*
&& = shift * 6 = and
|| = alt + 1 = or
! = shift + 1 = not

Ejecutar el terminal con node:
node 0508reto4.js
*/


var hour = 0;
var saludo = "";

if (hour < 0)
{
    saludo = "La hora es negativa"
}
else if (hour === 0 )
{
    saludo = "Ya es otro día"
}
else if (hour < 12)
{
    saludo = "Buenos días!"
}
else if (hour > 20)
{
    saludo = "Buenas tardes!"
}
else
{
    saludo = "Buenas noches!"
}

console.log(saludo)


var diaSemana = "Lunes";
var dia = "";

switch(diaSemana)
{
    case "Lunes" : dia = "Feliz Lunes!";
    break;
    case "Martes" : dia = "Feliz Martes!";
    break;
    case "Miércoles" : dia = "Feliz Miércoles!";
    break;
    case "Jueves" : dia = "Feliz Jueves!";
    break;
    case "Viernes" : dia = "Feliz Viernes!";
    break;
    case "Sábado" : dia = "Feliz Sábado!";
    break;
    case "Domingo" : dia = "Feliz DOmingo!";
    break;
    default : dia = "Dia erroneo";
}

console.log(dia);


var ram = 15
var disk_type = "M2"
var disk = 257

if ( ram == 16 && (disk > 256 || (disk > 128 && disk_type == "M2")))
{
    console.log ("Compra este equipo")
}
else
    console.log ("No es el equipo que me interesa")