const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codenotch', {useNewUrlParser: true, useUnifiedTopology:true});

const express = require("express");
const bodyParser = require('body-parser');
const { request } = require("http");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let User = require("./relaciones_usuarios");
let Photos = require("./relaciones_usuarios");
let tablon = require("./relaciones_usuarios")

app.get("/timeline/:id",
    function(request, response)
    {
        tablon.timeline(request.params.id, response)
    }
);

app.listen(215);