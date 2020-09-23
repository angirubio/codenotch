const mongoose = require("mongoose");

let UserId = mongoose.Schema;

const UserIdSchema = new UserId (
    {
    login:
    {
        type: String,
        enum: ["Platano", "Banana"]
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
                'La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter raro.'
            ]
    }
})

UserIdSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.login == "Plátano")
    {
        console.log("Configuración en español");
        next();
    }
    else console.log("Configuración en inglés");
})

module.exports = mongoose.model("UserIdValidation", UserIdSchema, "user");