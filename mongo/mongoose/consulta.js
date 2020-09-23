const mongoose = require("mongoose");
let User = require("./user");
let Photos = require("./photo");
mongoose.connect('mongodb://localhost:27017/Users', {useNewUrlParser: true, useUnifiedTopology:true});

const data = {
    login: 'Ana Cardo',
    password: 'GatitosAMADOS123*',
    name: 'Ana',
    surname: 'Cardo',
    dateOfBirth: new Date(1999, 09, 10),
    Comments: 'I absolutely love it!',
    rol: 'User',
    adress: 'Berlín',
    phone: 49867584909,
    email: 'anacardo@email.eu',
    follow: 'Borja Mari'
}

let subida =    function subirFotos(usuario, foto, titulo, descripcion, response) {
    Photos.create({user: usuario, url: foto, title: titulo, description: descripcion},
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

let obtener =   function obtenerFotos(data, rep) {
    Photos.find({ user: data},
        function(err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                rep.send(res);
            }
        }
    )
}

let seguirA =   function seguir (origen, destino, rep) {
    User.updateOne({name: origen}, {follow: destino},
        function(err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                rep.send(res);
            }
        })
}

let dejarDeSeguir =   function dejarSeguir (origen, destino, rep) {
    User.findOneAndUpdate({name: origen, follow: destino}, {follow: null},
        function(err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                console.log("Foto eliminada correctamente");
                rep.send(res);
            }
        })
}

let eliminarUna =  function eliminarFoto (usuario, rep) {
    Photos.deleteOne({user: usuario},
        function(err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                console.log("Foto eliminada correctamente");
                rep.send(res);
            }
        })
}

let eliminarTodas = function eliminarTodasFotos (data, rep) {
    Photos.deleteMany({user: data},
        function(err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                console.log("Todas las fotos han sido eliminadas correctamente");
                rep.send(res);
            }
        })
}

module.exports = {obtener, seguirA, dejarDeSeguir, eliminarUna, eliminarTodas, subida};

// obtenerFotos("Borja Mari");
// seguir("Borja", "John");
// dejarSeguir("Borja", "John");
// eliminarFoto("Borja Mari", "🌲");
// eliminarTodasFotos("Borja Mari");
// subirFotos("MariCarmen", "http:kdjfnxkcm.com", "The ocean", "Aquí en la playa malvavisco");