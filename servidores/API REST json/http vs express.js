const express = require("express")
const app = express()

app.get("/", function(request, response)
{
    console.log("Request Received from the client on the express server")
    response.send("Hello from express server!")
});

app.listen(4000)

app.get('/ruta', function (req, resp) { /* ... */ });
app.post('/ruta', function (req, resp) { /* ... */ });
app.put('/ruta', function (req, resp) { /* ... */ });
app.patch('/ruta', function (req, resp) { /* ... */ });
app.update('/ruta', function (req, resp) { /* ... */ });
app.delete('/ruta', function (req, resp) { /* ... */ });
app.options('/ruta', function (req, resp) { /* ... */ });
app.all('/ruta', function (req, resp) { /* ... */ });

//Rutas
app.get('/ruta/a', (req, res) => {});
app.get('/ruta/b', (req, res) => {});
//Pseudo expresión
app.get('/ab*cd', (req, res) => {});
//Todas las rutas que contengan una 'a'
app.get(/a/, (req, res) => {});