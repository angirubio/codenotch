const mongoose = require("mongoose");
const Professional = require("../../modulo3/API REST/importados")
let Pelicula = mongoose.Schema;

const PeliculaSchema = new Pelicula (
    {
    title:
    {
        type: String
    },
    releaseYear:
    {
        type: Number,
        min: 1900,
        max: 2020
    },
    nationality:
    {
        type: String
    },
    genre: 
    { 
        type: String,
        enum: [
            "Acción",
            "Animación",
            "Aventura",
            "Ciencia Ficción",
            "Comedia",
            "Crimen",
            "Drama",
            "Fantasía",
            "Histórico",
            "Horror",
            "Misterio",
            "Política",
            "Romance",
            "Saga",
            "Sátira",
            "Social",
            "Suspense",
            "Western" ] 
    },
    actors:
    {
        type: Array
    },
    directors:
    {
        type: Array
    },
    writers:
    {
        type: Array
    },
    producer:
    {
        type: String
    },
    language:
    {
        type: String,
        enum: [
            "Alemán",
            "Árabe",
            "Chino",
            "Español",
            "Francés",
            "Griego",
            "Inglés",
            "Italiano",
            "Japonés",
            "Latino",
            "Portugués" ]
    }
})

PeliculaSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.releaseYear > 1900 && this.releaseYear < 1950)
    {
        console.log("Cine antiguo");
        next();
    } else if (this.releaseYear >= 1950 && this.releaseYear < 1980)
    {
        console.log("Cine clásico");
        next();
    } else if (this.releaseYear >= 1980 && this.releaseYear < 2000)
    {
        console.log("Cine moderno");
        next();
    } else console.log("Cine posmoderno");
        next();
})

module.exports = mongoose.model("PeliculaValidation", PeliculaSchema, "pelicula");