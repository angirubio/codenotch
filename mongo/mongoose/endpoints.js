const mongoose = require("mongoose");
let User = require("./user");
let Photos = require("./photo");
mongoose.connect('mongodb://localhost:27017/Users', {useNewUrlParser: true, useUnifiedTopology:true});

let func = require("./consulta")

const express = require("express");
const bodyParser = require('body-parser');
const { request } = require("http");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res)
    {
        let respuesta = {error: true, codigo: 200, mensaje: 'SERVIDOR API REST'};
        req.send(respuesta);
    }
);

//OBTENER FOTOS

app.get("/fotos/:usuario",
    function(req, res)
    {
        id = req.params.usuario
        func.obtener(id, res)
    }
);


//SUBIR FOTOS

app.post("/fotos",
    function(req, response)
    {
        func.subida(req.body.user, req.body.url, req.body.title, req.body.description, response);
        
    }
);

//SEGUIR, DEJAR DE SEGUIR

app.put("/usuario",
    function(req, response)
    {
        func.seguirA(req.body.name, req.body.follow, response);
    }
);

app.put("/usuario/dejarseguir",
    function(req, response)
    {
        func.dejarDeSeguir(req.body.name, req.body.follow, response);
    }
);

// Delete ELIMINAR FOTO, ELIMINAR TODAS LAS FOTOS

app.delete("/fotos",
    function(req, response)
    {
        func.eliminarUna(req.body.user, response);
    }
);

app.delete("/fotos/borrar",
    function(req, response)
    {
        func.eliminarTodas(req.body.user, response);
    }
);

app.listen(100);