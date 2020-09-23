const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/IMDB', {useNewUrlParser: true, useUnifiedTopology:true});

const express = require("express");
const bodyParser = require('body-parser');
const { request } = require("http");

const profesionalScheme = require("./profesionalesScheme");
let PeliculaSchema = require("./peliculasScheme");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/peliculas",
    function(request, response)
    {
        PeliculaSchema.find((function (err, res)
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

app.get("/peliculas/:id",
function(request, response)
{
    PeliculaSchema.find({ _id: request.params.id},
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

app.get("/pelicula/actors/:id",
    function(request, response)
    {
        PeliculaSchema.find({ _id: request.params.id }, { actors:1, _id:0},
            function(err, res)
            {
                if(err)
                console.log("Error: " + err); 
                else
                {
                    response.send(res);
                }
            }
        );
    }
);

app.get("/pelicula/directors/:id",
    function(request, response)
    {
        PeliculaSchema.find({ _id: request.params.id }, { directors:1, _id:0},
            function(err, res)
            {
                if(err)
                console.log("Error: " + err); 
                else
                {
                    response.send(res);
                }
            }
        );
    }
);

app.get("/pelicula/writers/:id",
    function(request, response)
    {
        PeliculaSchema.find({ _id: request.params.id }, { writers:1, _id:0},
            function(err, res)
            {
                if(err)
                console.log("Error: " + err); 
                else
                {
                    response.send(res);
                }
            }
        );
    }
);

app.get("/pelicula/producer/:id",
    function(request, response)
    {
        PeliculaSchema.find({ _id: request.params.id }, { producer:1, _id:0},
            function(err, res)
            {
                if(err)
                console.log("Error: " + err); 
                else
                {
                    response.send(res);
                }
            }
        );
    }
);

app.post("/peliculas",
    function(req, response)
    {
        PeliculaSchema.create({title: req.body.title, releaseYear: req.body.releaseYear, nationality: req.body.nationality,
            genre: req.body.genre, actors: req.body.actors, directors: req.body.directors, writers: req.body.writers,
            producer: req.body.producer, language: req.body.language},
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

app.post("/pelicula/actor",
    function(req, response)
    {
        PeliculaSchema.updateOne({title:req.body.title},{$push:{actors:req.body.actors}},
        function (err,res)
        {
            if(err)            
            console.log(err)
            else
            {
                response.send(res)            
            }
        })
    }
);

app.post("/pelicula/director",
    function(req, response)
    {
        PeliculaSchema.updateOne({title:req.body.title},{$push:{directors:req.body.directors}},
        function (err,res)
        {
            if(err)            
            console.log(err)
            else
            {
                response.send(res)            
            }
        })
    }
);

app.post("/pelicula/guionista",
    function(req, response)
    {
        PeliculaSchema.updateOne({title:req.body.title},{$push:{writers:req.body.writers}},
        function (err,res)
        {
            if(err)            
            console.log(err)
            else
            {
                response.send(res)            
            }
        })
    }
);

app.put("/peliculas",
    function(req, response)
    {
        PeliculaSchema.findByIdAndUpdate(req.body.id,
        {
            title : req.body.title,
            releaseYear : req.body.releaseYear,
            nationality : req.body.nationality,
            genre : req.body.genre,
            actors : req.body.actors,
            directors : req.body.directors,
            writers : req.body.writers,
            producer : req.body.producer,
            language : req.body.language
        },function (err,res)
            {
                if(err)            
                console.log(err)
                else
                response.send(res)                                
            }
        )
    }
);

app.delete("/peliculas",
    function(req, response)
    {
        PeliculaSchema.deleteOne({_id: req.body.id},
            function(err, res)
            {
                if(err)
                console.log("Error: " + err); 
                else
                {
                    console.log("Película eliminada correctamente");
                    response.send(res);
                }
            })
    }
);

app.listen(310);