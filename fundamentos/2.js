/*
Switch/Case
Recetas de cocina dependiendo del ingrediente principal.
*/

var ingrediente = "arroz";
var plato = "";

switch(ingrediente)
{
    case "aguacate" : plato = "Guacamole";
    break;
    case "huevos" : plato = "Tortilla";
    break;
    case "patatas" : plato = "French fries";
    break;
    case "tallarines" : plato = "Pasta parmesana";
    break;
    case "tomate" : plato = "Salsa tuco";
    break;
    case "espinacas" : plato = "Crema";
    break;
    case "arroz" : plato = "Paella";
    break;
    case "avena" : plato = "Porridge";
    break;
    case "garbanzos" : plato = "Hummus";
    break;
    default : plato = "Imposible proponer receta";
}

console.log(plato);