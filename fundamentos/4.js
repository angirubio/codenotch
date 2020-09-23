/*
array con 4 personas {
    "nombre": string,
    "apellido": string,
    "anyoNacimiento": number,
    "aficiones": array of string,
    "dni": {"anyoExpedicion": number, "lugarNacimiento": string},
    "colorPelo: string"
}
-Mostrar "nombre" If (pelo == castaño)
-Mostrar "edad" If (edad > 30)
-Mostrar "lugarNacimiento" If ((pelo == negro && dni.anyoExpedicion < 05/08/2010)
|| (anyoNacimiento > 05/08/2002 && aficiones == ("comer" || "dormir")))
*/

var persona1 = {
    "nombre": "Pablo",
    "apellido": "López",
    "anyoNacimiento": 1980,
    "aficiones": ["dormir", "netflix"],
    "dni": {"anyoExpedicion": 2009, "lugarNacimiento": "Villanueva de la Cañada"},
    "colorPelo": "negro"
}
var persona2 = {
    "nombre": "Mariví",
    "apellido": "Quintanilla",
    "anyoNacimiento": 1970,
    "aficiones": ["comer", "bailar"],
    "dni": {"anyoExpedicion": 2010, "lugarNacimiento": "Valdemorillo"},
    "colorPelo": "castaño"
}
var persona3 = {
    "nombre": "Edurne",
    "apellido": "Martín",
    "anyoNacimiento": 2003,
    "aficiones": ["dormir", "móvil"],
    "dni": {"anyoExpedicion": 2014, "lugarNacimiento": "Fresnedillas"},
    "colorPelo": "rubio"
}
var persona4 = {
    "nombre": "Roberto",
    "apellido": "Lázaro",
    "anyoNacimiento": 2000,
    "aficiones": ["fútbol", "fiesta"],
    "dni": {"anyoExpedicion": 2011, "lugarNacimiento": "Navalagamella"},
    "colorPelo": "negro"
}

var arrayPeople = [persona1, persona2, persona3, persona4]

var edad1 = 2020 - arrayPeople[0].anyoNacimiento;
var edad2 = 2020 - arrayPeople[1].anyoNacimiento;
var edad3 = 2020 - arrayPeople[2].anyoNacimiento;
var edad4 = 2020 - arrayPeople[3].anyoNacimiento;


//Con pelo castaño

if ( arrayPeople[0].colorPelo == "castaño") {
    console.log(arrayPeople[0].nombre)
}
if ( arrayPeople[1].colorPelo == "castaño") {
    console.log(arrayPeople[1].nombre)
}
if ( arrayPeople[2].colorPelo == "castaño") {
    console.log(arrayPeople[2].nombre)
}
if ( arrayPeople[3].colorPelo == "castaño") {
    console.log(arrayPeople[3].nombre)
}


//Mayores de 30

if ( arrayPeople[0].anyoNacimiento < 1990) {
    console.log(edad1)
}
if ( arrayPeople[1].anyoNacimiento < 1990) {
    console.log(edad2)
}
if ( arrayPeople[2].anyoNacimiento < 1990) {
    console.log(edad3)
}
if ( arrayPeople[3].anyoNacimiento < 1990) {
    console.log(edad4)
}



// Varias condiciones

if ((arrayPeople[0].colorPelo == "negro" && arrayPeople[0].dni.anyoExpedicion < 2010)
|| (arrayPeople[0].anyoNacimiento > 2002 && (arrayPeople[0].aficiones[0] == "comer"
|| arrayPeople[0].aficiones[1] == "comer" || arrayPeople[0].aficiones[0] == "dormir"
|| arrayPeople[0].aficiones[1] == "dormir"))) {
    console.log(arrayPeople[0].dni.lugarNacimiento)
}
if ((arrayPeople[1].colorPelo == "negro" && arrayPeople[1].dni.anyoExpedicion < 2010)
|| (arrayPeople[1].anyoNacimiento > 2002 && (arrayPeople[1].aficiones[0] == "comer"
|| arrayPeople[1].aficiones[1] == "comer" || arrayPeople[1].aficiones[0] == "dormir"
|| arrayPeople[1].aficiones[1] == "dormir"))) {
    console.log(arrayPeople[1].dni.lugarNacimiento)
}
if ((arrayPeople[2].colorPelo == "negro" && arrayPeople[2].dni.anyoExpedicion < 2010)
|| (arrayPeople[2].anyoNacimiento > 2002 && (arrayPeople[2].aficiones[0] == "comer"
|| arrayPeople[2].aficiones[1] == "comer" || arrayPeople[2].aficiones[0] == "dormir"
|| arrayPeople[2].aficiones[1] == "dormir"))) {
    console.log(arrayPeople[2].dni.lugarNacimiento)
}
if ((arrayPeople[3].colorPelo == "negro" && arrayPeople[3].dni.anyoExpedicion < 2010)
|| (arrayPeople[3].anyoNacimiento > 2002 && (arrayPeople[3].aficiones[0] == "comer"
|| arrayPeople[3].aficiones[1] == "comer" || arrayPeople[3].aficiones[0] == "dormir"
|| arrayPeople[3].aficiones[1] == "dormir"))) {
    console.log(arrayPeople[3].dni.lugarNacimiento)
}