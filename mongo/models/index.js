let mongoose = require("mongoose");
let UserId = require("./userID");
let Profile = require("./userPROFILE");
let Credentials = require("./userCREDENTIALS");

mongoose.connect('mongodb://localhost:27017/Banana',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
}
);

let usuario1 = new UserId (
    {
        login: "Platano",
        password: "GatitosAMADOS123*"
    }
);
usuario1.save(checkRespuesta);

let usuario2 = new UserId (
    {
        login: "Banana",
        password: "123456789.Aba"
    }
);
usuario2.save(checkRespuesta);

let usuario3 = new UserId (
    {
        login: "Banana",
        password: "megustanlosGATITOS123;"
    }
);
usuario3.save(checkRespuesta);

let perfil1 = new Profile (
    {
        name: "John",
        surname: "Malkovich",
        dateOfBirth: (1999, 09, 10),
        Comments: "Lol that's so funny",
        rol: "User"
    }
);
perfil1.save(checkRespuesta);

let perfil2 = new Profile (
    {
        name: "Pepon",
        surname: "Jejeje",
        dateOfBirth: (2002,10,13),
        Comments: "Great thanks",
        rol: "Admin"
    }
);
perfil2.save(checkRespuesta);

let perfil3 = new Profile (
    {
        name: "Angi",
        surname: "Randomovich",
        dateOfBirth: (1985,12,25),
        Comments: "Pa k qieres saber eso jaja saludos",
        rol: "Client"
    }
);
perfil3.save(checkRespuesta);

let credenciales1 = new Credentials (
    {
        adress: "Madrid",
        phone: 49867584909,
        email: "blublublu@email.com"
    }
);
credenciales1.save(checkRespuesta);

let credenciales2 = new Credentials (
    {
        adress: "Praga",
        phone: 49867584909,
        email: "ovejita@email.com"
    }
);
credenciales2.save(checkRespuesta);

let credenciales3 = new Credentials (
    {
        adress: "París",
        phone: 49867584909,
        email: "carnero@siesta.com"
    }
);
credenciales3.save(last);

function checkRespuesta(err, res)
{
    if(err)
    console.log("Error: " + err); 
    else
    {
        console.log("Documeto guardado correctamente");
    }
};
function last(err, res)
{
    if(err)
    console.log("Error: " + err); 
    else
    {
        console.log("Documeto guardado correctamente");
        mongoose.disconnect()
    }
};