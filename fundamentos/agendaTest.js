const Persona = require("../retos día 7/persona")
const Agenda = require("../retos día 7/agenda")

const persona1 = new Persona ("Mika", 1999, "estudiante", "Alemania", ["jugar a la play","basket","leer"], 172, 62);
const persona2 = new Persona ("Laura", 1990, "camarera", "Italia", ["ok","si","bien"], 168, 55);
const agenda1 = new Agenda ([persona1, persona2], "20 de Agosto", "15 de Septiembre");

console.log(agenda1.reuniones);
console.log(agenda1.printPersonas());