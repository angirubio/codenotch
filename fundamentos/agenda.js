const Persona = require("../retos día 7/persona")

class Agenda {
    constructor (contactos, reuniones, viajes) {
        this.contactos = contactos;
        this.reuniones = reuniones;
        this.viajes = viajes;
    }
    printPersonas() {
        var todasPersonas = ""
        for (var i=0;i<this.contactos.length;i++) {
         todasPersonas += this.contactos[i].mostrarTodos()
        }
        return todasPersonas
    }
}

module.exports = Agenda;