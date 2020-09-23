const Professional = require("./importados")
const Movie = require("./movie")


const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(request, response) {
    console.log("Request Received from the client on the express server");
    response.send("Hello from express server!")
});

app.get("/profesionales/:id", function(request, response) {
    let id = request.params.id
    if (id < profesionales.length) response.send(profesionales[id]);
    else response.send( {error: true, codigo: 200, mensaje: 'Profesional no existente'} );
});

app.get("/profesionales", function(request, response) {
    response.send(profesionales);
});

app.post("/profesionales", function(request, response) {
    let profesionalix = new Professional (request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession);
    profesionales.push(profesionalix);
    response.send( {error: false, codigo: 200, mensaje: 'Usuario creado'} );
});

app.put("/profesionales", function(request, response) {
    profesionales[request.body.id].name = request.body.name;
    profesionales[request.body.id].age = request.body.age;
    profesionales[request.body.id].genre = request.body.genre;
    profesionales[request.body.id].weight = request.body.weight;
    profesionales[request.body.id].height = request.body.height;
    profesionales[request.body.id].hairColor = request.body.hairColor;
    profesionales[request.body.id].eyeColor = request.body.eyeColor;
    profesionales[request.body.id].race = request.body.race;
    profesionales[request.body.id].isRetired = request.body.isRetired;
    profesionales[request.body.id].nationality = request.body.nationality;
    profesionales[request.body.id].oscarsNumber = request.body.oscarsNumber;
    profesionales[request.body.id].profession = request.body.profession;
    let respuesta = {error: false, codigo: 200, mensaje: 'Profesional Actualizado', resultado: profesionales};
    response.send(respuesta);
});

app.delete("/profesionales", function(request, response) {
    let id = request.body.id;
    let respuesta = {error: false, codigo: 200, mensaje: 'Profesional Borrado', resultado: profesionales.splice(id,1)};
    response.send(respuesta);
    
});

//2

app.get("/pelicula", function(request, response) {

    response.send(pelicula);
});

app.post("/pelicula", function(request, response) {
    add = new Movie (request.body.title, request.body.releaseYear, request.body.nationality, request.body.genre);
    let respuesta = {error: false, codigo: 200, mensaje: 'Película Añadida', resultado: add};
    response.send(respuesta);
});

app.put("/pelicula", function(request, response) {
    pelicula.title = request.body.title;
    pelicula.releaseYear = request.body.releaseYear;
    pelicula.nationality = request.body.nationality;
    pelicula.genre = request.body.genre;
    let respuesta = {error: false, codigo: 200, mensaje: 'Profesional Actualizado', resultado: pelicula};
    response.send(respuesta);
});

app.delete("/pelicula", function(request, response) {
    pelicula = null;
    let respuesta = {error: false, codigo: 200, mensaje: 'Película Borrada', resultado: pelicula};
    response.send(respuesta);
});

//3

app.get("/pelicula/actor", function(request, response) {
    response.send(pelicula.actors);
});

app.get("/pelicula/actor/:id", function(request, response) {
    let id = request.params.id
    if (id < pelicula.actors.length) response.send(pelicula.actors[id]);
    else response.send( {error: true, codigo: 200, mensaje: 'Profesional no existente'} );
});

app.get("/pelicula/director", function(request, response) {
    response.send(pelicula.director);
});

app.get("/pelicula/guionista", function(request, response) {
    response.send(pelicula.writer);
});

app.post("/pelicula/actor", function(request, response) {
    let actor = new Professional (request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession);
    profesionales.push(actor);
    response.send( {error: false, codigo: 200, mensaje: 'Actor añadido'} );
});

app.post("/pelicula/director", function(request, response) {
    if(pelicula.director == null) {
        let dire = new Professional (request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession);
    profesionales.push(dire);
    response.send( {error: false, codigo: 200, mensaje: 'Director añadido'} );
    } else response.send( {error: true, codigo: 200, mensaje: 'Ya hay un director'} );

});

app.post("/pelicula/guionista", function(request, response) {
    if(pelicula.writer == null) {
        let guion = new Professional (request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession);
    profesionales.push(guion);
    response.send( {error: false, codigo: 200, mensaje: 'Guionista añadido'} );
    } else response.send( {error: true, codigo: 200, mensaje: 'Ya hay un guionista'} );

});

app.put("/pelicula/actor", function(request, response) {
    pelicula.actors[request.body.id].name = request.body.name;
    pelicula.actors[request.body.id].age = request.body.age;
    pelicula.actors[request.body.id].genre = request.body.genre;
    pelicula.actors[request.body.id].weight = request.body.weight;
    pelicula.actors[request.body.id].height = request.body.height;
    pelicula.actors[request.body.id].hairColor = request.body.hairColor;
    pelicula.actors[request.body.id].eyeColor = request.body.eyeColor;
    pelicula.actors[request.body.id].race = request.body.race;
    pelicula.actors[request.body.id].isRetired = request.body.isRetired;
    pelicula.actors[request.body.id].nationality = request.body.nationality;
    pelicula.actors[request.body.id].oscarsNumber = request.body.oscarsNumber;
    pelicula.actors[request.body.id].profession = request.body.profession;
    let respuesta = {error: false, codigo: 200, mensaje: 'Actor Actualizado', resultado: pelicula.actors};
    response.send(respuesta);
});

app.put("/pelicula/director", function(request, response) {
    pelicula.director.name = request.body.name;
    pelicula.director.age = request.body.age;
    pelicula.director.genre = request.body.genre;
    pelicula.director.weight = request.body.weight;
    pelicula.director.height = request.body.height;
    pelicula.director.hairColor = request.body.hairColor;
    pelicula.director.eyeColor = request.body.eyeColor;
    pelicula.director.race = request.body.race;
    pelicula.director.isRetired = request.body.isRetired;
    pelicula.director.nationality = request.body.nationality;
    pelicula.director.oscarsNumber = request.body.oscarsNumber;
    pelicula.director.profession = request.body.profession;
    let respuesta = {error: false, codigo: 200, mensaje: 'Director Actualizado', resultado: pelicula.director};
    response.send(respuesta);
});

app.put("/pelicula/guionista", function(request, response) {
    pelicula.writer.name = request.body.name;
    pelicula.writer.age = request.body.age;
    pelicula.writer.genre = request.body.genre;
    pelicula.writer.weight = request.body.weight;
    pelicula.writer.height = request.body.height;
    pelicula.writer.hairColor = request.body.hairColor;
    pelicula.writer.eyeColor = request.body.eyeColor;
    pelicula.writer.race = request.body.race;
    pelicula.writer.isRetired = request.body.isRetired;
    pelicula.writer.nationality = request.body.nationality;
    pelicula.writer.oscarsNumber = request.body.oscarsNumber;
    pelicula.writer.profession = request.body.profession;
    let respuesta = {error: false, codigo: 200, mensaje: 'Guionista Actualizado', resultado: pelicula.writer};
    response.send(respuesta);
});

app.delete("/pelicula/actor", function(request, response) {
    pelicula.actors[request.body.id]= null;
    let respuesta = {error: false, codigo: 200, mensaje: 'Actor Borrado', resultado: pelicula.actors};
    response.send(respuesta);
});

app.delete("/pelicula/director", function(request, response) {
    pelicula.director = null;
    let respuesta = {error: false, codigo: 200, mensaje: 'Director Borrado', resultado: pelicula.director};
    response.send(respuesta);
});

app.delete("/pelicula/actor", function(request, response) {
    pelicula.writer = null;
    let respuesta = {error: false, codigo: 200, mensaje: 'Guionista Borrado', resultado: pelicula.guion};
    response.send(respuesta);
});

//4

app.get("/peliculas/:id", function(request, response) {
    let id = request.params.id
    if (id < arrayPeliculas.length) response.send(arrayPeliculas[id]);
    else response.send( {error: true, codigo: 200, mensaje: 'Profesional no existente'} );
});

app.get("/peliculas", function(request, response) {
    response.send(arrayPeliculas);
});

app.post("/peliculas", function(request, response) {
    let newPelicula = new Movie (request.body.title, request.body.releaseYear, request.body.nationality, request.body.genre);
    arrayPeliculas.push(newPelicula);
    response.send( {error: true, codigo: 200, mensaje: 'Película creada!'} );
});

app.put("/peliculas", function(request, response) {
    arrayPeliculas[request.body.id].title = request.body.title;
    arrayPeliculas[request.body.id].releaseYear = request.body.releaseYear;
    arrayPeliculas[request.body.id].nationality = request.body.nationality;
    arrayPeliculas[request.body.id].genre = request.body.genre;
    let respuesta = {error: false, codigo: 200, mensaje: 'Película Actualizada', resultado: arrayPeliculas};
    response.send(respuesta);
});

app.delete("/peliculas", function(request, response) {
    let id = request.body.id;
    let respuesta = {error: false, codigo: 200, mensaje: 'Película Eliminada', resultado: arrayPeliculas.splice(id,1)};
    response.send(respuesta);
    
});

app.listen(2700);

let pro1 = new Professional ("Nino Essex", 27, "Hombre", 70, 180, "Castaño", "Castaño", "Europeo", false, "Italiano", 1, "Actor");
let pro2 = new Professional ("Li Lin", 38, "Mujer", 60, 175, "Oscuro", "Azul", "Asiática", true, "China", 0, "Director")
let pro3 = new Professional ("Wu Jinyan", 30, "Mujer", 50, 160, "Rubio", "Verde", "Asiático", false, "China", 0, "Actor")
let pro4 = new Professional ("Xiao Zhan", 28, "Hombre", 70, 183, "Moreno", "Castaño", "Asiático", false, "China", 2, "Actor")
let pro5 = new Professional ("Yan Yang", 35, "Hombre", 70, 180, "Pelirrojo", "Negro", "Asiático", false, "China", 1, "Actor")
let pro6 = new Professional ("Zhan Ziyi", 41, "Mujer", 55, 165, "Moreno", "Castaño", "Asiático", false, "China", 3, "Guionista")

let profesionales = [pro1,pro2,pro3,pro4,pro5,pro6];

let pelicula = new Movie ("El laberinto del socarrat", 1994, "Gerogia", "Turbio");
let peli2 = new Movie ("Esternón", 2011, "Grecia", "Sopor");
let peli3 = new Movie ("Sharknado", 2011, "USA", "Z");

pelicula.actors = [pro1,pro3,pro4,pro5];
pelicula.director = pro2;
pelicula.writer = pro6;
pelicula.language = "Russian";
pelicula.platform = "Codeflix";
pelicula.isMCU = false;
pelicula.mainCharacterName = "Plipli";
pelicula.producer = "Nuclearnado";
pelicula.distributor = "So surreal films"

peli2.actors = [pro1,pro3];
peli2.director = pro2;
peli2.writer = pro6;
peli2.language = "Greek";
peli2.platform = "Codeflix";
peli2.isMCU = false;
peli2.mainCharacterName = "Tachan";
peli2.producer = "Discorayanado";
peli2.distributor = "Bestest"

peli3.actors = [pro4,pro5];
peli3.director = pro2;
peli3.writer = pro6;
peli3.language = "English";
peli3.platform = "Netflix";
peli3.isMCU = false;
peli3.mainCharacterName = "Phinley";
peli3.producer = "Firenado+";
peli3.distributor = "Cool surreal films"

let arrayPeliculas = [pelicula,peli2,peli3]

/*
{
    "name": "Li Qin",
    "age": 29,
    "genre": "Mujer",
    "weight": 50,
    "height": 166,
    "hairColor": "Castaño",
    "eyeColor": "Miel",
    "race": "Asiática",
    "isRetired": true,
    "nationality": "China",
    "oscarsNumber": 0,
    "profession": "actriz"
}
{
    "name": "Tiffany Tang",
    "age": 29,
    "genre": "Mujer",
    "weight": 50,
    "height": 166,
    "hairColor": "Castaño",
    "eyeColor": "Miel",
    "race": "Asiática",
    "isRetired": true,
    "nationality": "China",
    "oscarsNumber": 0,
    "profession": "actriz"
}

{
    "title": "El estornudante",
    "releaseYear": 2020,
    "nationality": "Mónaco",
    "genre": "Aquar"
}
*/