let mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codenotch', {useNewUrlParser: true, useUnifiedTopology:true});

function checkRespuesta(err, res)
{
    if(err)
    console.log("Error: " + err)
    else
    {
        console.log("Método realizado correctamente");
    }
}

let UserSchema = new mongoose.Schema(
{
    login:
    {
        type: String
    },
    password:
    {
        type: String,
        validate: [
            function ()
            {
                let resultado = false;
                if (this.password.length >= 8)
                {
                    let mayuscula = false;
                    let minuscula = false;
                    let numero = false;
                    let caracterRaro = false;
                    for (let i=0;i<this.password.length;i++) {
                        if (this.password.charCodeAt(i)>=65 && this.password.charCodeAt(i) <=90) {
                            mayuscula = true;
                        }
                        else if (this.password.charCodeAt(i) >= 97 && this.password.charCodeAt(i) <= 122) {
                            minuscula = true;
                        }
                        else if (this.password.charCodeAt(i) >= 48 && this.password.charCodeAt(i) <= 57) {
                            numero = true;
                        }
                        else {
                            caracterRaro = true;
                        }
                    };
                    if(mayuscula == true && minuscula == true && numero == true && caracterRaro == true) {
                        resultado = true;
                    }  
                }
                return resultado   
            },
                'La contraseña debe contener al menos 8 caracteres, mayúscula, minúscula, número, caracter raro para que no la recuerdes jamás.'
            ]
    },
    name: 
    { 
        type: String 
    },
    surname: 
    {
         type: String
    },
    dateOfBirth:
    {
        type: Date 
    },
    Comments: 
    {
        type: String
    },
    rol: 
    {
        type: String
    },
    adress: 
    {
        type: String
    },
    phone: 
    {
        type: Number
    },
    email:
    {
        type: String
    },
    follow:
    [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    photos:
    [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Photo"
    }]
})

let UserModel = mongoose.model("User", UserSchema);

let PhotoSchema = new mongoose.Schema(
{
    user:
    [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    url:
    {
        type: "String"
    },
    title:
    {
        type: String
    },
    description:
    {
        type: String
    }
})

let PhotoModel = mongoose.model("Photo", PhotoSchema);
/*
let user = new UserModel ({
    login: "Ana Cardo",
    password: "GatitosAMADOS123*",
    name: "Ana",
    surname: "Cardo",
    dateOfBirth: new Date(1999, 09, 10),
    Comments: "Hahahahahaha!",
    rol: "User",
    adress: "Berlín",
    phone: 49867584909,
    email: "anacardo@email.eu",
    follow: [],
    photos: []
})
user.save(checkRespuesta);

let user2 = new UserModel ({
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
    follow: [],
    photos: []
})
user2.save(checkRespuesta);

let user3 = new UserModel ({
    login: "Pedro",
    password: "41CrystalFighters!",
    name: "Piter",
    surname: "Grifin",
    dateOfBirth: new Date (1987, 02, 11),
    Comments: "Cool",
    rol: "User",
    adress: "Madrid",
    phone: 49867584909,
    email: "borjamari@email.com",
    follow: [],
    photos: []
})
user3.save(checkRespuesta);

let photo = new PhotoModel ({
    user: [user],
    url: "https://gatitos.com",
    title: "Miau",
    description: "Bigotitos!"
})
photo.save(checkRespuesta);

let photo2 = new PhotoModel ({
    user: [user2],
    url: "https://yate.com",
    title: "My little boy!",
    description: "Tras un merecido descanso"
})
photo2.save(checkRespuesta);

let photo3 = new PhotoModel ({
    user: [user2],
    url: "https://coctel.com",
    title: "Sex on the beach",
    description: "Disfrutando de las vacaciones"
})
photo3.save(checkRespuesta);

let photo4 = new PhotoModel ({
    user: [user3],
    url: "https://hamburguesa.com",
    title: "Rebel Whoper",
    description: "Mmmmm!"
})
photo4.save(checkRespuesta);

UserModel.updateOne({login: "Ana Cardo"}, {follow: ['5f5f71dba2276306eb419ea8', '5f5f71dba2276306eb419ea9'], photos: ['5f5f71dba2276306eb419eaa']}, checkRespuesta)
UserModel.updateOne({login: "Borja Mari"}, {follow: ['5f5f71dba2276306eb419ea7', '5f5f71dba2276306eb419ea9'], photos: ['5f5f71dba2276306eb419eab', '5f5f71dba2276306eb419eac']}, checkRespuesta)
UserModel.updateOne({login: "Pedro"}, {follow: ['5f5f71dba2276306eb419ea7', '5f5f71dba2276306eb419ea8'], photos: ['5f5f71dba2276306eb419ead']}, checkRespuesta)

UserModel.findOne({ name: 'Borja'})
    .populate('photos')
    .exec((err, usuario) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log(`El usuario ${usuario.login} tiene ${usuario.photos.length} fotos`);
        console.log(usuario);
        mongoose.disconnect();
    })

UserModel.findOne({ name: 'Borja'})
    .populate('follow')
    .exec((err, usuario) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log(`El usuario ${usuario.login} sigue a ${usuario.follow[0].login} y a ${usuario.follow[1].login}`);
        console.log(usuario);
        mongoose.disconnect();
    })

function timeline (id)
{
    UserModel.findOne({ _id: id})
    .populate('follow', 'photos')
    .exec((err, usuario) =>
    {
        if(err)
        {
            console.log(err);
        }
        for(i=0;usuario.follow.length;i++)
        {
            for(j=0;usuario.follow[i].photos[j].length;j++)
            {
                let datos = usuario.follow[i].photos[j].url
                console.log('TIMELINE' + '\n' + datos);                
            }
            
        }
        mongoose.disconnect();
    })

}

function timeline (id, response)
{
    UserModel.findOne({ _id: id})
    .populate({path: 'follow', populate: {path:'photos'}})
    .exec(function(err, usuario)
    {
        if(err)
        {
            console.log(err);
        }
        else {
            response.send('TIMELINE' + '\n' + usuario.follow[0].photos[0].url + '\n' + usuario.follow[0].photos[0].title
            + '\n' + usuario.follow[0].photos[0].description + '\n' + usuario.follow[0].photos[1].url + '\n' + usuario.follow[0].photos[1].title
            + '\n' + usuario.follow[0].photos[1].description + '\n' + usuario.follow[1].photos[0].url + '\n' + usuario.follow[1].photos[0].title
            + '\n' + usuario.follow[1].photos[0].description);

        }        
    })
}

module.exports = {timeline};


let user4 = new UserModel ({
    login: "Crystal",
    password: "41CrystalFighters!",
    name: "Piter",
    surname: "Grifin",
    dateOfBirth: new Date (1987, 02, 11),
    Comments: "Cool",
    rol: "User",
    adress: "Madrid",
    phone: 49867584909,
    email: "borjamari@email.com",
    follow: [],
    photos: []
})
user4.save(checkRespuesta);

let user5 = new UserModel ({
    login: "Ana",
    password: "51CrystalFighters!",
    name: "Piter",
    surname: "Grifin",
    dateOfBirth: new Date (1987, 02, 11),
    Comments: "Cool",
    rol: "User",
    adress: "Madrid",
    phone: 49867584909,
    email: "borjamari@email.com",
    follow: [],
    photos: []
})
user5.save(checkRespuesta);

let user6 = new UserModel ({
    login: "Claudio",
    password: "41CrystalFighters!",
    name: "Piter",
    surname: "Grifin",
    dateOfBirth: new Date (1987, 02, 11),
    Comments: "Cool",
    rol: "User",
    adress: "Madrid",
    phone: 49867584909,
    email: "borjamari@email.com",
    follow: [],
    photos: []
})
user6.save(checkRespuesta);

let user7 = new UserModel ({
    login: "Juanete",
    password: "41CrystalFighters!",
    name: "Piter",
    surname: "Grifin",
    dateOfBirth: new Date (1987, 02, 11),
    Comments: "Cool",
    rol: "User",
    adress: "Madrid",
    phone: 49867584909,
    email: "borjamari@email.com",
    follow: [],
    photos: []
})
user7.save(checkRespuesta);

let user8 = new UserModel ({
    login: "Abundio",
    password: "41CrystalFighters!",
    name: "Piter",
    surname: "Grifin",
    dateOfBirth: new Date (1987, 02, 11),
    Comments: "Cool",
    rol: "User",
    adress: "Madrid",
    phone: 49867584909,
    email: "borjamari@email.com",
    follow: [],
    photos: []
})
user8.save(checkRespuesta);

let photo5 = new PhotoModel ({
    user: [user4],
    url: "https://dietcokes.com",
    title: "Diet Cokes",
    description: "Rise your glass!"
})
photo5.save(checkRespuesta);

let photo6 = new PhotoModel ({
    user: [user5],
    url: "https://cars.com",
    title: "My new car",
    description: "Brum brum!"
})
photo6.save(checkRespuesta);

let photo7 = new PhotoModel ({
    user: [user6],
    url: "https://riding.com",
    title: "Riding",
    description: "Race!"
})
photo7.save(checkRespuesta);

let photo8 = new PhotoModel ({
    user: [user7],
    url: "https://surfing.com",
    title: "Surfing USA",
    description: "Surf!"
})
photo8.save(checkRespuesta);

let photo9 = new PhotoModel ({
    user: [user8],
    url: "https://vivaldi.com",
    title: "Concierto",
    description: "Vivaldi!"
})
photo9.save(checkRespuesta);

let photo10 = new PhotoModel ({
    user: [user8],
    url: "https://ifif.com",
    title: "If",
    description: "Between!"
})
photo10.save(checkRespuesta);
*/

function explora (id)
{
    UserModel.findOne({ _id: id})
    .populate({path: 'follow', populate: {path:'photos'}})
    .aggregate( [
        { $match: { follow: );
}

explora("5f5f71dba2276306eb419ea7")