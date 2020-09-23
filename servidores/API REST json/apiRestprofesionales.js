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

let arrayProfesionales = lujo("apiRestprofesionales.json")

app.get("/", function(request, response) {
    console.log("Request Received from the client on the express server");
    response.send("Hello from express server!")
});

app.get("/profesionales/:id", function(request, response) {
    let id = request.params.id
    if (id < arrayProfesionales.length) response.send(arrayProfesionales[id]);
    else response.send( {error: true, codigo: 200, mensaje: 'Profesional no existente'} );
});

app.get("/profesionales", function(request, response) {
    response.send(arrayProfesionales);
});

app.post("/profesionales", function(request, response) {
    let profesionalix = new Professional (request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession);
    arrayProfesionales.push(profesionalix);
    response.send( {error: false, codigo: 200, mensaje: 'Usuario creado'} );
    let unJson = JSON.stringify(arrayProfesionales)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.put("/profesionales", function(request, response) {
    arrayProfesionales[request.body.id].name = request.body.name;
    arrayProfesionales[request.body.id].age = request.body.age;
    arrayProfesionales[request.body.id].genre = request.body.genre;
    arrayProfesionales[request.body.id].weight = request.body.weight;
    arrayProfesionales[request.body.id].height = request.body.height;
    arrayProfesionales[request.body.id].hairColor = request.body.hairColor;
    arrayProfesionales[request.body.id].eyeColor = request.body.eyeColor;
    arrayProfesionales[request.body.id].race = request.body.race;
    arrayProfesionales[request.body.id].isRetired = request.body.isRetired;
    arrayProfesionales[request.body.id].nationality = request.body.nationality;
    arrayProfesionales[request.body.id].oscarsNumber = request.body.oscarsNumber;
    arrayProfesionales[request.body.id].profession = request.body.profession;
    let respuesta = {error: false, codigo: 200, mensaje: 'Profesional Actualizado', resultado: arrayProfesionales};
    response.send(respuesta);
    let unJson = JSON.stringify(arrayProfesionales)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
});

app.delete("/profesionales", function(request, response) {
    let id = request.body.id;
    let respuesta = {error: false, codigo: 200, mensaje: 'Profesional Borrado', resultado: arrayProfesionales.splice(id,1)};
    response.send(respuesta);
    let unJson = JSON.stringify(arrayProfesionales)
    fs.writeFileSync("apiRestprofesionales.json", unJson)
    
});

app.listen(1000);