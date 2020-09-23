const Professional = require("./importados")
const Movie = require("./movie")
let fs = require("fs");

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function lujo(nombreFich) {
    let alJson = fs.readFileSync(nombreFich);
    let obJson = []
    obJson = JSON.parse(alJson)
    return obJson
}

let pelicula = lujo("apiRestpelicula.json")

app.get("/", function(request, response) {
    console.log("Request Received from the client on the express server");
    response.send("Hello from express server!")
});

app.get("/pelicula", function(request, response) {

    response.send(pelicula);
});

app.post("/pelicula", function(request, response) {
    if(pelicula == null) {
        add = new Movie (request.body.title, request.body.releaseYear, request.body.nationality, request.body.genre, request.body.actors, request.body.director, request.body.writer, request.body.language);
        let respuesta = {error: false, codigo: 200, mensaje: 'Película Añadida', resultado: add};
        response.send(respuesta);
    }
    else response.send( {error: true, codigo: 200, mensaje: 'Ya hay una película'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)

});

app.put("/pelicula", function(request, response) {
    if(pelicula != null) {
    pelicula.title = request.body.title;
    pelicula.releaseYear = request.body.releaseYear;
    pelicula.nationality = request.body.nationality;
    pelicula.genre = request.body.genre;
    pelicula.actors = request.body.actors;
    pelicula.director = request.body.director;
    pelicula.writer = request.body.writer;
    pelicula.language = request.body.language;
    let respuesta = {error: false, codigo: 200, mensaje: 'Profesional Actualizado', resultado: pelicula};
    response.send(respuesta);
    }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ninguna película que actualizar'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.delete("/pelicula", function(request, response) {
    if(pelicula != null) {
        pelicula = null;
        let respuesta = {error: false, codigo: 200, mensaje: 'Película Borrada', resultado: pelicula};
        response.send(respuesta);
    }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ninguna película que borrar'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.get("/pelicula/actor", function(request, response) {
    if(pelicula.actors != null) { response.send(pelicula.actors); }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay actores'} );
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
    pelicula.actors.push(actor);
    response.send( {error: false, codigo: 200, mensaje: 'Actor añadido'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.post("/pelicula/director", function(request, response) {
    if(pelicula.director == null) {
        let dire = new Professional (request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession);
    pelicula.director = dire;
    response.send( {error: false, codigo: 200, mensaje: 'Director añadido'} );
    } else response.send( {error: true, codigo: 200, mensaje: 'Ya hay un director'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.post("/pelicula/guionista", function(request, response) {
    if(pelicula.writer == null) {
        let guion = new Professional (request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession);
    pelicula.writer = guion;
    response.send( {error: false, codigo: 200, mensaje: 'Guionista añadido'} );
    } else response.send( {error: true, codigo: 200, mensaje: 'Ya hay un guionista'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.put("/pelicula/actor", function(request, response) {
    if(pelicula.actors != null && (request.body.id < pelicula.actors.length)) {
    if(request.body.name) { pelicula.actors[request.body.id].name = request.body.name; }
    if(request.body.age) { pelicula.actors[request.body.id].age = request.body.age; }
    if(request.body.genre) { pelicula.actors[request.body.id].genre = request.body.genre; }
    if(request.body.weight) { pelicula.actors[request.body.id].weight = request.body.weight; }
    if(request.body.height) { pelicula.actors[request.body.id].height = request.body.height; }
    if(request.body.hairColor) { pelicula.actors[request.body.id].hairColor = request.body.hairColor; }
    if(request.body.eyeColor) { pelicula.actors[request.body.id].eyeColor = request.body.eyeColor; }
    if(request.body.race) { pelicula.actors[request.body.id].race = request.body.race; }
    if(request.body.isRetired) { pelicula.actors[request.body.id].isRetired = request.body.isRetired; }
    if(request.body.nationality) { pelicula.actors[request.body.id].nationality = request.body.nationality; }
    if(request.body.oscarsNumber) { pelicula.actors[request.body.id].oscarsNumber = request.body.oscarsNumber; }
    if(request.body.profession) { pelicula.actors[request.body.id].profession = request.body.profession; }
    let respuesta = {error: false, codigo: 200, mensaje: 'Actor Actualizado', resultado: pelicula.actors};
    response.send(respuesta); }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ningún actor que actualizar'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.put("/pelicula/director", function(request, response) {
    if(pelicula.director != null) {
    if(request.body.name) { pelicula.director.name = request.body.name; }
    if(request.body.age) { pelicula.director.age = request.body.age; }
    if(request.body.genre) { pelicula.director.genre = request.body.genre; }
    if(request.body.weight) { pelicula.director.weight = request.body.weight; }
    if(request.body.height) { pelicula.director.height = request.body.height; }
    if(request.body.hairColor) { pelicula.director.hairColor = request.body.hairColor; }
    if(request.body.eyeColor) { pelicula.director.eyeColor = request.body.eyeColor; }
    if(request.body.race) { pelicula.director.race = request.body.race; }
    if(request.body.isRetired) { pelicula.director.isRetired = request.body.isRetired; }
    if(request.body.nationality) { pelicula.director.nationality = request.body.nationality; }
    if(request.body.oscarsNumber) { pelicula.director.oscarsNumber = request.body.oscarsNumber; }
    if(request.body.profession) { pelicula.director.profession = request.body.profession; }
    let respuesta = {error: false, codigo: 200, mensaje: 'Director Actualizado', resultado: pelicula.director};
    response.send(respuesta); }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ningún director que actualizar'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.put("/pelicula/guionista", function(request, response) {
    if(pelicula.writer != null) {
    if(request.body.name) { pelicula.writer.name = request.body.name; }
    if(request.body.age) { pelicula.writer.age = request.body.age; }
    if(request.body.genre) { pelicula.writer.genre = request.body.genre; }
    if(request.body.weight) { pelicula.writer.weight = request.body.weight; }
    if(request.body.height) { pelicula.writer.height = request.body.height; }
    if(request.body.hairColor) { pelicula.writer.hairColor = request.body.hairColor; }
    if(request.body.eyeColor) { pelicula.writer.eyeColor = request.body.eyeColor; }
    if(request.body.race) { pelicula.writer.race = request.body.race; }
    if(request.body.isRetired) { pelicula.writer.isRetired = request.body.isRetired; }
    if(request.body.nationality) { pelicula.writer.nationality = request.body.nationality; }
    if(request.body.oscarsNumber) { pelicula.writer.oscarsNumber = request.body.oscarsNumber; }
    if(request.body.profession) { pelicula.writer.profession = request.body.profession; }
    let respuesta = {error: false, codigo: 200, mensaje: 'Guionista Actualizado', resultado: pelicula.writer};
    response.send(respuesta); }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ningún guionista que actualizar'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)   
});

app.delete("/pelicula/actor", function(request, response) {
    if(pelicula.actors != null) {
        let respuesta = {error: false, codigo: 200, mensaje: 'Actor Borrado', resultado: pelicula.actors.splice()};
        response.send(respuesta);
    }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ningún actor que borrar'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.delete("/pelicula/director", function(request, response) {
    if(pelicula.director != null) {
        pelicula.director = null;
        let respuesta = {error: false, codigo: 200, mensaje: 'Director Borrado', resultado: pelicula};
        response.send(respuesta);
    }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ningún director que borrar'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.delete("/pelicula/guionista", function(request, response) {
    if(pelicula.writer != null) {
        pelicula.writer = null;
        let respuesta = {error: false, codigo: 200, mensaje: 'Guionista Borrado', resultado: pelicula};
        response.send(respuesta);
    }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ningún guionista que borrar'} );
    let unJson = JSON.stringify(pelicula)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});


app.listen(2000);