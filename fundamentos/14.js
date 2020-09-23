//Crear una persona
//IMC
//Edad
//Mostrar todos los atributos
//Mostrar aficiones

class Persona {
    constructor (nombre, anyoNacimiento, profesion, pais, aficiones, estatura, peso) {
        this.nombre = nombre;
        this.anyoNacimiento = anyoNacimiento;
        this.profesion = profesion;
        this.pais = pais;
        this.aficiones = aficiones;
        this.estatura = estatura;
        this.peso = peso;
    }
    //Método
    imc() {
    return (this.peso / Math.pow(this.estatura,2))*10000;
    }
    edad(anyoActual) {
        return anyoActual - this.anyoNacimiento;
    }
    mostrarTodos() {
        return "Nombre: " + this.nombre + "\n" + "Año de nacimiento: " + this.anyoNacimiento + "\n" +
        "Profesión: " + this.profesion + "\n" + this.mostrarAficiones() + "\n" + 
        "País: " + this.pais + "\n" + "Estatura: " + this.estatura + "\n" + "Peso: " + this.peso;
    }
    mostrarAficiones() {
        return "Aficiones: " + this.aficiones;
    }
    //Getters y setters
    get nom() {
        return this.nombre;
    }
    set setNom(nombreNew) {
        return this.nombre = nombreNew;
    }
    get an() {
        return this.anyoNacimiento;
    }
    set setAn(anyoNew) {
        return this.anyoNacimiento = anyoNew;
    }
    get pro() {
        return this.profesion;
    }
    set setPro(profesionNew) {
        return this.profesion = profesionNew;
    }
    get af() {
        return this.aficiones;
    }
    set setAf(aficionesNew) {
        return this.aficiones = aficionesNew;
    }
    get pai() {
        return this.pais;
    }
    set setPai(paisNew) {
        return this.pais = paisNew;
    }
    get est() {
        return this.estatura;
    }
    set setEst(estaturaNew) {
        return this.estatura = estaturaNew;
    }
    get pes() {
        return this.peso;
    }
    set setPes(pesoNew) {
        return this.peso = pesoNew;
    }
    
}

const persona1 = new Persona ("Mika", 1999, "estudiante", "Alemania", ["jugar a la play","basket","leer"], 172, 62);

console.log(persona1.imc());
console.log(persona1.edad(2020));
console.log(persona1.mostrarTodos());
console.log(persona1.mostrarAficiones());

persona1.pais = "España";
console.log(persona1.pais);

//Clase Agenda con un atributo de objetos de la clase Persona

class Agenda {
    constructor (contactos, reuniones, viajes) {
        this.contactos = contactos;
        this.reuniones = reuniones;
        this.viajes = viajes;
    }
    printPersonas() {
        return this.contactos;
    }
}

const persona2 = new Persona ("Laura", 1990, "camarera", "Italia", ["ok","si","bien"], 168, 55);
const agenda1 = new Agenda ([persona1, persona2], "20 de Agosto", "15 de Septiembre")

console.log(agenda1.printPersonas());

//Reto 8 : fichero persona.js

const Persona = require("../retos día 7/persona")

//Reto 9 : fichero agenda.js

var Agenda = require("../retos día 7/agenda");