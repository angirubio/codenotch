//Creación y Método GET
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let usuario = {nombre:"", apellidos: ""};

app.get("/", function(request, response)
    {
        let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
        response.send(respuesta);
    }
);

app.get("/usuario",
    function(request, response)
    {
        response.send(usuario);
    }
);

//Paso de Parámetros en GET
app.get("/usuario/:name",
    function(request, response)
    {
        let name = request.params.name
        if (name === usuario.nombre)
        response.send(usuario);
        else
        response.send({error: true, codigo: 200, mensaje: "El usuario no existe"});
    }
);

app.get("/usuario",
    function(request, response)
    {
        let name = request.query.name
        if (!name || name === usuario.nombre)
        response.send(usuario);
        else
        response.send({error: true, codigo: 200, mensaje: "El usuario no existe"});
    }
);

//Resto de Métodos
app.post("/usuario",
    function(request, response)
    {
        usuario.nombre = request.body.nombre;
        usuario.apellidos = request.body.apellidos;

        let respuesta = {error: false, codigo: 200, mensaje: 'Usuario creado', resultado: usuario};
        response.send(respuesta);
    }
);

app.put("/usuario",
    function(request, response)
    {
        usuario.nombre = request.body.nombre;
        usuario.apellidos = request.body.apellidos;

        let respuesta = {error: false, codigo: 200, mensaje: 'Usuario Actualizado', resultado: usuario};
        response.send(respuesta);
    }
);

app.delete("/usuario",
    function(request, response)
    {
        usuario.nombre = "";
        usuario.apellidos = "";

        let respuesta = {error: false, codigo: 200, mensaje: 'Usuario Borrado', resultado: usuario};
        response.send(respuesta);
    }
);


//Middleware
app.use(function(request, response)
    {
        let respuesta = {error: false, codigo: 404, mensaje: 'URL no encontrada', resultado: usuario};
        response.status(404).send(respuesta);
    }
);

app.listen(3000);
//En el link: 127.0.0.1:3000/usuario/ || usuario/Pepe || usuario?name=Pepe