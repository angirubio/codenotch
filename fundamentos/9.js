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

for (i = 0; i<arrayPeople.length; i++)
{
    if (arrayPeople[i].colorPelo == "castaño") {
        console.log(arrayPeople[i].nombre + " tiene el pelo castaño.")
    }
}

//Mayores de 30

for (i = 0; i<arrayPeople.length; i++)
{
    if (arrayPeople[i].anyoNacimiento < 1990) {
        console.log(arrayPeople[i].nombre + " es mayor de 30.")
    }
}


// Varias condiciones

for (i = 0; i<arrayPeople.length; i++)
{
    if (arrayPeople[i].colorPelo == "negro" && arrayPeople[i].dni.anyoExpedicion < 2010) {
        console.log(arrayPeople[i].nombre + " tiene el pelo negro y el DNI caducado.")
    }
    else if ((arrayPeople[i].anyoNacimiento > 2002) && (arrayPeople[i].aficiones[0] == "comer" 
    || arrayPeople[i].aficiones[1] == "comer" || arrayPeople[i].aficiones[0] == "dormir" 
    || arrayPeople[i].aficiones[1] == "dormir")) {
        console.log(arrayPeople[i].nombre + " es menor de edad y su afición favorita es comer o dormir.")
    }
}