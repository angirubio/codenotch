const mongoose = require("mongoose");

let Profile = mongoose.Schema;

const ProfileSchema = new Profile (
    {
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
    }
} );

ProfileSchema.pre('save', function(next)
{
    console.log("Middleware de entrada");
    if (this.name == "Angi")
    {
        console.log("Qué nombre más bonito"); 
        next(); 
    }
    else 
    console.log("Es un nombre común"); 
})

module.exports = mongoose.model("ProfileValidation", ProfileSchema, "profile");