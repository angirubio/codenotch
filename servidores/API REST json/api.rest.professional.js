const Professional = require("./importados")

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let professional = null;

app.get("/", function(request, response) {
    console.log("Request Received from the client on the express server");
    response.send("Hello from express server!")
});

app.get("/professional", function(request, response) {response.send(professional);});

app.get("/professional/:name", function(request, response) {
    let name = request.params.name
    if (name === professional.name)
    response.send(professional);
    else
    response.send({error: true, codigo: 200, mensaje: 'Profesional no existente'});
});

app.get("/professional", function(request, response) {
    let name = request.query.name
    if (!name || name === professional.name)
    response.send(professional);
    else
    response.send({error: true, codigo: 200, mensaje: 'Profesional no existente'});
});

app.post("/professional", function(request, response) {
    professional = new Professional (request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession);
    response.send(professional);
});

app.put("/professional", function(request, response) {
    professional.name = request.body.name;
    professional.age = request.body.age;
    professional.genre = request.body.genre;
    professional.weight = request.body.weight;
    professional.height = request.body.height;
    professional.hairColor = request.body.hairColor;
    professional.eyeColor = request.body.eyeColor;
    professional.race = request.body.race;
    professional.isRetired = request.body.isRetired;
    professional.nationality = request.body.nationality;
    professional.oscarsNumber = request.body.oscarsNumber;
    professional.profession = request.body.profession;
    let respuesta = {error: false, codigo: 200, mensaje: 'Profesional Actualizado', resultado: professional};
    response.send(respuesta);
});

app.delete("/professional", function(request, response) {
    let professional = null;
    let respuesta = {error: false, codigo: 200, mensaje: 'Profesional Borrado', resultado: professional};
    response.send(respuesta);
});

app.use(function(request, response) {
    let respuesta = {error: false, codigo: 404, mensaje: 'URL no encontrada', resultado: professional};
    response.status(404).send(respuesta);
});

app.listen(1500);