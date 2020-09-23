//Array con 4 people

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

var personas = [persona1, persona2, persona3, persona4]

//Mostrar todos los elementos with for y while

for (i = 0; i<personas.length; i++)
{
    console.log(personas[i])
}

var i = 0;
while (i<personas.length)
{
    console.log(personas[i])
    i++;
}

//Mostrar elementos de las personas que cumplan entre 1980 y 2000: for y while

for (i = 0; i<personas.length; i++)
{
    if (personas[i].anyoNacimiento > 1980 && personas[i].anyoNacimiento < 2000)
    console.log(personas[i])
}

var i = 0;
while (i<personas.length)
{
    if (i<personas[i].anyoNacimiento >= 1980 && personas[i].anyoNacimiento < 2000)
    console.log(personas[i]);
    i++;
}

//Mostrar "tu edad está entre 20 y 40 años" y "tu edad es menor de 20"

for (i = 0; i<personas.length; i++)
{
    if (personas[i].anyoNacimiento >= 1980 && personas[i].anyoNacimiento < 2000)
    console.log(personas[i].nombre + " tu edad está entre 20 y 40 años.")
    else if (personas[i].anyoNacimiento < 1980)
    console.log(personas[i].nombre + " tu edad es mayor de 40.");
    else if (personas[i].anyoNacimiento >= 2000)
    console.log(personas[i].nombre + " tu edad es menor de 20.");
    else
    console.log(personas[i].nombre + " tu edad no es computable.");
}

var i = 0;
while (i<personas.length)
{
    if (i<personas[i].anyoNacimiento > 1980 && personas[i].anyoNacimiento < 2000)
    console.log(personas[i].nombre + " tu edad está entre 20 y 40 años.");
    else if (i<personas[i].anyoNacimiento < 1980)
    console.log(personas[i].nombre + " tu edad es mayor de 40.");
    else if (i<personas[i].anyoNacimiento > 2000)
    console.log(personas[i].nombre + " tu edad es menor de 20.");
    else
    console.log(personas[i].nombre + " tu edad no es computable.");
    i++;
}

//Añadir afición "jugar a la play" a todas las personas

for (i = 0; i<personas.length; i++)
{
    personas[i].aficiones.push("jugar a la play")
    console.log(personas[i])
}