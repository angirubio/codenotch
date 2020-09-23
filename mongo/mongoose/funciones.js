let mongoose = require("mongoose");
let User = require("./user");

mongoose.connect('mongodb://localhost:27017/Users', {useNewUrlParser: true, useUnifiedTopology:true});


let user1 = new User ({
    login: "Ana Cardo",
    password: "GatitosAMADOS123*",
    name: "Ana",
    surname: "Cardo",
    dateOfBirth: new Date(1999, 09, 10),
    Comments: "I absolutely love it!",
    rol: "User",
    adress: "Berlín",
    phone: 49867584909,
    email: "anacardo@email.eu",
    follow: "Borja Mari"
})


let user2 = new User ({
    login: "Borja Mari",
    password: "Soy1truhan*",
    name: "Borja",
    surname: "Mari",
    dateOfBirth: new Date (1987, 02, 11),
    Comments: "Cool",
    rol: "User",
    adress: "Madrid",
    phone: 49867584909,
    email: "borjamari@email.com",
    follow: "Ana Cardo"
})

user1.save(checkRespuesta);

function checkRespuesta(err, res)
{
    if(err)
    console.log("Error: " + err); 
    else
    {
        console.log("Documeto guardado correctamente");
        user2.save(function (err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                console.log("Documeto guardado correctamente");
                mongoose.disconnect();
            }
        })
    }
};