const mongoose = require("mongoose");

let Credentials = mongoose.Schema;

const CredentialsSchema = new Credentials (
    {
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
        min:10000000000,
        max:99999999999,
        validate: [
            function ()
            {
                let resultado = false;
                if (this.phone.toString().length == 11) {
                    let zona3 = false;
                    let zona4 = false;
                        if (this.phone.toString()[0]=="3") {
                            zona3 = true;
                        }
                        else if (this.phone.toString()[0]=="4") {
                            zona4 = true;
                            
                        }
                    if(zona4 == true) {
                        resultado = true;
                    }  else if(zona3 == true) {
                        resultado = false;
                    }
                }
                return resultado
            },
                'El número ha de llevar incluido un prefijo.'
            ]
    },
    email:
    {
        type: String
    }
})

CredentialsSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.phone.toString()[1]=="0")
    {
        onsole.log("Procedente de Grecia");
        next();
    } else if (this.phone.toString()[1]=="1")
    {
        console.log("Procedente de Suiza");
        next();
    } else if (this.phone.toString()[1]=="2")
    {
        console.log("Procedente de Republica Checa");
        next();
    } else if (this.phone.toString()[1]=="3")
    {
        console.log("Procedente de España");
        next();
    } else if (this.phone.toString()[1]=="4")
    {
        console.log("Procedente de Reino Unido");
        next();
    } else if (this.phone.toString()[1]=="5")
    {
        console.log("Procedente de Dinamarca");
        next();
    } else if (this.phone.toString()[1]=="6") 
    {
        console.log("Procedente de Suecia");
        next();
    } else if (this.phone.toString()[1]=="7")
    {
        console.log("Procedente de Noruega");
        next();
    } else if (this.phone.toString()[1]=="8")
    {
        console.log("Procedente de Polonia");
        next();
    } else if (this.phone.toString()[1]=="9")
    {
        console.log("Procedente de Alemania");
        next();
    }
})

module.exports = mongoose.model("CredentialsValidation", CredentialsSchema, "credentials");