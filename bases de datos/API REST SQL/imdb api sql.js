const express = require("express");
const bodyParser = require('body-parser');
const { request } = require("http");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let mysql = require("mysql");
let connection = mysql.createConnection
(
    {
        host: "localhost",
        user: "root",
        password: null,
        database: "IMDB"
    }
)

connection.connect(function(err,res)
{
    if (err)
    console.log(err);
    else
    console.log("Conectado");
});

app.get("/profesionales/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM profesionales WHERE profesional_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/profesionales",
    function(request, response)
    {
        let sql = "SELECT * FROM profesionales";
        connection.query(sql, function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/profesionales",
    function(req, response)
    {
        let sql = "INSERT INTO profesionales (name, age, genre, weight, height, hair_color, eye_color, race, is_retired, nationality, oscars_number, profession) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        connection.query(sql, [req.body.name, req.body.age, req.body.genre, req.body.weight, req.body.height, req.body.hair_color, req.body.eye_color, req.body.race, req.body.is_retired, req.body.nationality, req.body.oscars_number, req.body.profession], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.put("/profesionales",
    function(req, response)
    {
        let sql = "UPDATE profesionales SET name = ?, age = ?, genre = ?, weight = ?, height = ?, hair_color = ?, eye_color = ?, race = ?, is_retired = ?, nationality = ?, oscars_number = ?, profession = ? WHERE profesional_id = ?";
        connection.query(sql, [req.body.name, req.body.age, req.body.genre, req.body.weight, req.body.height, req.body.hair_color, req.body.eye_color, req.body.race, req.body.is_retired, req.body.nationality, req.body.oscars_number, req.body.profession, req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/profesionales",
    function(req, response)
    {
        let sql = "DELETE FROM profesionales WHERE profesional_id = ?";
        connection.query(sql, [req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/productoras/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM productoras WHERE productora_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/productoras",
    function(request, response)
    {
        let sql = "SELECT * FROM productoras";
        connection.query(sql, function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/productoras",
    function(req, response)
    {
        let sql = "INSERT INTO productoras (name, age, country) VALUES (?, ?, ?)";
        connection.query(sql, [req.body.name, req.body.age, req.body.country], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.put("/productoras",
    function(req, response)
    {
        let sql = "UPDATE productoras SET name = ?, age = ?, country = ? WHERE profesional_id = ?";
        connection.query(sql, [req.body.name, req.body.age, req.body.country, req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/productoras",
    function(req, response)
    {
        let sql = "DELETE FROM productoras WHERE productora_id = ?";
        connection.query(sql, [req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/peliculas/:id",
    function(request, response)
    {
        let sql = "SELECT peliculas.*, profesionales.* FROM artistas INNER JOIN peliculas ON (artistas.pelicula_id = peliculas.pelicula_id) INNER JOIN profesionales ON (artistas.profesional_id = profesionales.profesional_id) WHERE peliculas.pelicula_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/peliculas",
    function(request, response)
    {
        let sql = "SELECT * FROM peliculas";
        connection.query(sql, function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/peliculas/actor/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM profesionales INNER JOIN actores ON (profesionales.profesional_id = actores.actor_id) WHERE pelicula_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/peliculas/director/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM profesionales INNER JOIN directores ON (profesionales.profesional_id = directores.director_id) WHERE pelicula_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/peliculas/guionista/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM profesionales INNER JOIN guionistas ON (profesionales.profesional_id = guionistas.guionista_id) WHERE pelicula_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/peliculas/productora/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM productoras INNER JOIN peliculas ON (productoras.productora_id = peliculas.productora_id) WHERE pelicula_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/peliculas",
    function(req, response)
    {
        let sql = "INSERT INTO peliculas (title, release_year, nationality, genre, productora_id, language) VALUES (?, ?, ?, ?, ?, ?)";
        connection.query(sql, [req.body.title, req.body.release_year, req.body.nationality, req.body.genre, req.body.productora_id, req.body.language], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/peliculas/actor/:id",
    function(request, response)
    {
        let sql = "INSERT INTO artistas (pelicula_id, profesional_id) VALUES (?, ?)";
        connection.query(sql, [request.params.id, request.body.profesional_id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/peliculas/director/:id",
    function(request, response)
    {
        let sql = "INSERT INTO artistas (pelicula_id, profesional_id) VALUES (?, ?)";
        connection.query(sql, [request.params.id, request.body.profesional_id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/peliculas/guionista/:id",
    function(request, response)
    {
        let sql = "INSERT INTO artistas (pelicula_id, profesional_id) VALUES (?, ?)";
        connection.query(sql, [request.params.id, request.body.profesional_id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.put("/peliculas",
    function(req, response)
    {
        let sql = "UPDATE peliculas SET title = ?, release_year = ?, nationality = ?, genre = ?, productora_id = ?, language = ? WHERE pelicula_id = ?";
        connection.query(sql, [req.body.title, req.body.release_year, req.body.nationality, req.body.genre, req.body.productora_id, req.body.language, req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/peliculas",
    function(req, response)
    {
        let sql = "DELETE FROM peliculas WHERE pelicula_id = ?";
        connection.query(sql, [req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/peliculas/actor/:id",
    function(request, response)
    {
        let sql = "DELETE FROM artistas WHERE pelicula_id = ? AND profesional_id = ?";
        connection.query(sql, [request.params.id, request.body.actor_id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/peliculas/director/:id",
    function(request, response)
    {
        let sql = "DELETE FROM directores WHERE pelicula_id = ? AND director_id = ?";
        connection.query(sql, [request.params.id, request.body.director_id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/peliculas/guionista/:id",
    function(request, response)
    {
        let sql = "DELETE FROM guionistas WHERE pelicula_id = ? AND  guionista_id = ?";
        connection.query(sql, [request.params.id, request.body.guionista_id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.listen(4);