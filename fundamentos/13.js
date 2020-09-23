//Crear un directorio proyectosJavascript
//Subdirectorio proyecto1
//Iniciar el proyecto npm init (consola)
//Fichero index.js y run.js
//index.js: funciones (suma, resta, producto, división) + module.exports =
//{nombre de las funciones a exportar}
//run.js: var myLib = require("./index.js");
//Llamar a todas las funciones e imprimir resultados
var myLib = require("../proyectosJavascript/proyecto1/index");
console.log(myLib.suma(4,5));
console.log(myLib.resta(4,5));
console.log(myLib.producto(4,5));
console.log(myLib.division(4,5));