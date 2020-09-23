const mongoose = require("mongoose");

let User = mongoose.Schema;

const UserSchema = new User (
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
         type: String, validate: [ 
             function(surn) 
            {
                  return surn.length > 1
            },
                 'Introduce apellido' ]
    },
    dateOfBirth:
    {
        type: Date 
    },
    Comments: 
    {
        type: String, validate: [ 
            function(comments) 
            {
                return comments.length <= 280
            },
                'Has introducido más de 280 caracteres' ]
    },
    rol: 
    { type: String,
        enum: [
            "User",
            "Client",
            "Admin" ]
    },
    adress: 
    {
        type: String,
        enum: [
            "Madrid",
            "París",
            "Londres",
            "Roma",
            "Atenas",
            "Ámterdam",
            "Viena",
            "Budapest",
            "Berlín",
            "Praga"
        ]
    },
    phone: 
    {
        type: Number,
        validate: [
            function ()
            {
                let resultado = false;
                if (this.phone.toString().length == 11) {
                   resultado = true;
                }
                return resultado               
            },
                'El número ha de llevar incluido un prefijo.'
            ]
    },
    email:
    {
        type: String
    },
    follow:
    {
        type: String
    }
})

UserSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.phone.toString()[0] == "4")
    {
        console.log("From North Europe");
        next();
    }
    else console.log("From South Europe");
        next();
})

module.exports = mongoose.model("UserValidation", UserSchema, "user");