let mongoose = require("mongoose");
let Profesional = require("./profesionalesScheme");
let Pelicula = require("./peliculasScheme");

mongoose.connect('mongodb://localhost:27017/IMDB', {useNewUrlParser: true, useUnifiedTopology:true});

let pro1 = new Profesional (
    {
        name: "Joe",
        age: 50,
        genre: "Hombre",
        weight: 75, height:
        180,
        hairColor:"Brown",
        eyeColor: "Green",
        race: "Caucásica",
        isRetired: false,
        nationality: "Estadounidense",
        oscarsNumber: 2,
        profession: "Actor"
    })
let pro2 = new Profesional (
    {
        name: "Hannah",
        age: 30,
        genre: "Mujer",
        weight: 55,
        height: 170,
        hairColor: "Brown",
        eyeColor: "Brown",
        race: "Caucásica",
        isRetired: false,
        nationality: "Estadounidense",
        oscarsNumber: 0,
        profession: "Actor"
    })
let pro3 = new Profesional (
    {
        name: "Adrian",
        age: 28,
        genre: "Hombre",
        weight: 85,
        height: 185,
        hairColor:"Dark",
        eyeColor: "Green",
        race: "Caucásica",
        isRetired: true,
        nationality: "Estadounidense",
        oscarsNumber: 3,
        profession: "Actor" })
let pro4 = new Profesional (
    {
        name: "Johanness",
        age: 44,
        genre: "Hombre",
        weight: 65,
        height: 170,
        hairColor:"Blue",
        eyeColor: "Blue",
        race: "Asiática",
        isRetired: false,
        nationality: "Finés",
        oscarsNumber: 0,
        profession: "Director"
    })
let pro5 = new Profesional (
    {
        name: "Roberta",
        age: 35,
        genre: "Mujer",
        weight: 55,
        height: 165,
        hairColor:"Blonde",
        eyeColor: "Blue",
        race: "Africana",
        isRetired: false,
        nationality: "Egipto",
        oscarsNumber: 1,
        profession:
        "Director"
    })
let pro6 = new Profesional (
    {
        name: "Jorge",
        age: 25,
        genre: "Hombre",
        weight: 75,
        height: 185,
        hairColor:"Brown",
        eyeColor: "Brown",
        race: "Caucásica",
        isRetired: false,
        nationality: "Español",
        oscarsNumber: 1,
        profession: "Guionista"
    })
let pro7 = new Profesional (
    {
        name: "Angi",
        age: 20,
        genre: "Mujer",
        weight: 60,
        height: 175,
        hairColor:"Dark",
        eyeColor: "Brown",
        race: "Caucásica",
        isRetired: true,
        nationality: "Española",
        oscarsNumber: 0,
        profession: "Guionista"
    })

let peli1 = new  Pelicula (
    {
        title: "Ratones buceadores",
        releaseYear: 1999,
        nationality: "Polaca",
        genre: "Aventura",
        actors: [pro1, pro2],
        directors: [pro4, pro5],
        writers: [pro6, pro7],
        language: "Alemán",
        producer: "123Blah"
    }
)

let peli2 = new  Pelicula (
    {
        title: "Ricardito y la fafafa",
        releaseYear: 2007,
        nationality: "Argentina",
        genre: "Crimen",
        actors: [pro1, pro3],
        directors: [pro4, pro5],
        writers: [pro6, pro7],
        language: "Latino",
        producer: "Mecmecflix"
    }
)

let peli3 = new  Pelicula (
    {
        title: "El paro vital",
        releaseYear: 1953,
        nationality: "Griega",
        genre: "Social",
        actors: [pro2, pro3],
        directors: [pro4, pro5],
        writers: [pro6, pro7],
        language: "Griego",
        producer: "Filete"
    }
)

pro1.save(checkRespuesta);

function checkRespuesta(err, res)
{
    if(err)
    console.log("Error: " + err); 
    else
    {
        console.log("Profesional guardado!");
        pro2.save(function (err, res)
        { if(err) console.log("Error: " + err); else { console.log("Profesional guardado"); } })
        pro3.save(function (err, res)
        { if(err) console.log("Error: " + err); else { console.log("Profesional guardado"); } })
        pro4.save(function (err, res)
        { if(err) console.log("Error: " + err); else { console.log("Profesional guardado"); } })
        pro5.save(function (err, res)
        { if(err) console.log("Error: " + err); else { console.log("Profesional guardado"); } })
        pro6.save(function (err, res)
        { if(err) console.log("Error: " + err); else { console.log("Profesional guardado"); } })
        pro7.save(function (err, res)
        { if(err) console.log("Error: " + err); else { console.log("Profesional guardado"); } })
        peli1.save(function (err, res)
        { if(err) console.log("Error: " + err); else { console.log("Película guardada"); } })
        peli2.save(function (err, res)
        { if(err) console.log("Error: " + err); else { console.log("Película guardada"); } })
        peli3.save(function (err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                console.log("Película guardada");
                mongoose.disconnect();
            }
        })
    }
};