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

let arrayPeliculas = lujo("apiRestpeliculas.json")

app.get("/", function(request, response) {
    console.log("Request Received from the client on the express server");
    response.send("Hello from express server!")
});

app.get("/peliculas/:id", function(request, response) {
    let id = request.params.id
    if (id < arrayPeliculas.length) response.send(arrayPeliculas[id]);
    else response.send( {error: true, codigo: 200, mensaje: 'Película no existente'} );
});

app.get("/peliculas", function(request, response) {
    response.send(arrayPeliculas);
});

app.post("/peliculas", function(request, response) {
    let newPelicula = new Movie (request.body.title, request.body.releaseYear, request.body.nationality, request.body.genre);
    arrayPeliculas.push(newPelicula);
    response.send( {error: true, codigo: 200, mensaje: 'Película creada!'} );
    let unJson = JSON.stringify(arrayPeliculas)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.put("/peliculas", function(request, response) {
    if(arrayPeliculas != null && (request.body.id < arrayPeliculas.length)) { 
    arrayPeliculas[request.body.id].title = request.body.title;
    arrayPeliculas[request.body.id].releaseYear = request.body.releaseYear;
    arrayPeliculas[request.body.id].nationality = request.body.nationality;
    arrayPeliculas[request.body.id].genre = request.body.genre;
    let respuesta = {error: false, codigo: 200, mensaje: 'Película Actualizada', resultado: arrayPeliculas};
    response.send(respuesta);
    }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ninguna película que actualizar'} );
    let unJson = JSON.stringify(arrayPeliculas)
    fs.writeFileSync("apiRestprofesionales.json", unJson)   
});

app.delete("/peliculas", function(request, response) {
    if(arrayPeliculas != null && (request.body.id < arrayPeliculas.length)) {
        let id = request.body.id;
        let respuesta = {error: false, codigo: 200, mensaje: 'Película Eliminada Borrado', resultado: arrayPeliculas.splice(id,1)};
        response.send(respuesta);
    }
    else response.send( {error: true, codigo: 200, mensaje: 'No hay ninguna película que borrar'} );
    let unJson = JSON.stringify(arrayPeliculas)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.listen(3000);