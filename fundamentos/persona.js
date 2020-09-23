//Reto 8

class Persona {
    constructor (hombre, anyoNacimiento, profesion, pais, aficiones, estatura, peso) {
        this.nombre = hombre;
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
    
};

module.exports = Persona;