/*
Decidir restaurante para una celebración:
Opción 1: 3 platos menú + dj + 2h barra libre
Opción 2: cóctel bienvenida + 2 platos menú + 1h barra libre
*/

var cóctel = false;
var platos = 2;
var dj = true;
var barra = 2;

if ((platos == 3 && dj == true && barra == 2) || (cóctel == true && platos == 2 && barra == 1))
{
    console.log ("Elegir restaurante")
}
else
    console.log ("No interesa este restaurante")
