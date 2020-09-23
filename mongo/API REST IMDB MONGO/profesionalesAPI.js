const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/IMDB', {useNewUrlParser: true, useUnifiedTopology:true});

const express = require("express");
const bodyParser = require('body-parser');
const { request } = require("http");

const profesionalScheme = require("./profesionalesScheme");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/profesionales/:name",
    function(request, response)
    {
        profesionalScheme.find({ name: request.params.name},
            function(err, res)
            {
                if(err)
                console.log("Error: " + err); 
                else
                {
                    response.send(res);
                }
            }
        )
    }
);

app.get("/profesionales",
    function(request, response)
    {
        profesionalScheme.find((function (err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                response.send(res);
            }
        }))
    }
);

app.post("/profesionales",
    function(req, response)
    {
        profesionalScheme.create({name: req.body.name, age: req.body.age, genre: req.body.genre, weight: req.body.weight,
            height: req.body.height, hairColor: req.body.hairColor, eyeColor: req.body.eyeColor,
            race: req.body.race, isRetired: req.body.isRetired, nationality: req.body.nationality,
            oscarsNumber: req.body.oscarsNumber, profession: req.body.profession},
            function(err, result)
            {
                if(err)
                console.log("Error: " + err); 
                else
                {
                    response.send(result);
                }
            }
        )        
    }
);

app.put("/profesionales",
    function(req, response)
    {
        if(profesionalScheme != null) { 
        profesionalScheme.name = req.body.name;
        profesionalScheme.age = req.body.age;
        profesionalScheme.genre = req.body.genre;
        profesionalScheme.weight = req.body.weight;
        profesionalScheme.height = req.body.height;
        profesionalScheme.hairColor = req.body.titlhairColore;
        profesionalScheme.eyeColor = req.body.eyeColor;
        profesionalScheme.race = req.body.race;
        profesionalScheme.isRetired = req.body.isRetired;
        profesionalScheme.nationality = req.body.nationality;
        profesionalScheme.oscarsNumber = req.body.oscarsNumber;
        profesionalScheme.profession = req.body.profession;
        let respuesta = {error: false, codigo: 200, mensaje: 'Profesional actualizado', resultado: profesionalScheme};
        response.send(respuesta);
        }
        else response.send( {error: true, codigo: 200, mensaje: 'No hay ningún profesional que actualizar'} );
    }
);

app.delete("/profesionales",
    function(req, response)
    {

        profesionalScheme.deleteOne({name: req.body.name},
            function(err, res)
            {
                if(err)
                console.log("Error: " + err); 
                else
                {
                    console.log("Profesional eliminado correctamente");
                    response.send(res);
                }
            })
    }
);

app.listen(300);