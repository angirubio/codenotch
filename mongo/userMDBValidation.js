const mongoose = require("mongoose");

let User = mongoose.Schema;

const UserSchema = new User ({
    name: {type: String, enum: ["Pepe", "Pepa", "Pepito"]},
    email: String,
    password: { type: String, validate: [
        function(password) {
            return password.length >= 6},
            'El password debería ser más largo' ] },
    role: String,
    verified: Boolean,
    age: { type: Number, min: 18, max: 65} });

UserSchema.pre('save', function(next) { console.log("Middleware de entrada");
    if (this.age > 20) { console.log("Has introducido una edad mayor que 20"); next(); }
    else console.log("Solo edades mayores que 20"); })

module.exports = mongoose.model("UserValidation", UserSchema, "user");