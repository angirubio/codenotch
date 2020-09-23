let mongoose = require("mongoose");
let User = require("./userMDB");

mongoose.connect('mongodb://localhost:27017/codenotch', {userNewUrlParser: true, useUnifiedTopology:true});

let user = new User ({ name: "Simón", email: "simondela@villa.com", role: "admin",verified: false });

userDocument.save(checkRespuesta);

function checkRespuesta(err, res) {if(err) console.log("Error: " + err); else {console.log("Documeto guardado correctamente"); mongoose.disconnect()}};