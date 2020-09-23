const mongoose = require("mongoose");

let Profesional = mongoose.Schema;

const ProfesionalSchema = new Profesional (
    {
    name:
    {
        type: String
    },
    age:
    {
        type: Number,
        min: 15,
        max: 100
    },
    genre: 
    { 
        type: String,
        enum: [
            "Hombre",
            "Mujer"
        ]
    },
    weight:
    {
        type: Number
    },
    height:
    {
        type: Number
    },
    hairColor:
    {
        type: String
    },
    eyeColor:
    {
        type: String
    },
    race:
    {
        type: String,
        enum: [
            "Asiática",
            "Caucásica",
            "Latina",
            "Africana"
        ]
    },
    isRetired:
    {
        type: Boolean
    },
    nationality:
    {
        type: String
    },
    oscarsNumber:
    {
        type: Number
    },
    profession:
    {
        type: String,
        enum: [
            "Actor",
            "Director",
            "Guionista"
        ]
    }
})

ProfesionalSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.oscarsNumber >= 1)
    {
        console.log("Profesional reconocido");
        next();
    }
    else console.log("No es reconocido");
        next();
})

module.exports = mongoose.model("ProfesionalValidation", ProfesionalSchema, "profesional");