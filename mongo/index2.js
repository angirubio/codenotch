let mongoose = require("mongoose");
let User = require("./userMDB");

mongoose.connect('mongodb://localhost:27017/codenotch', {userNewUrlParser: true, useUnifiedTopology:true});


userDocument.save(checkRespuesta);

function checkRespuesta(err, res) {if(err) console.log("Error: " + err); else {console.log("Documeto guardado correctamente"); mongoose.disconnect()}};

user = new User( { name: "Pepon", email: "pepapepa@gmail.com", role: "user", verified: true, age: 20 });
user = new User( { name: "Pepa", email: "pepapepa@gmail.com", role: "user", verified: true, age: 20 });
user = new User( { name: "Pepa", email: "pepapepa@gmail.com", role: "user", verified: true, age: 15 });
user = new User( { name: "Pepa", password: "123443838", email: "pepapepa@gmail.com", role: "user", verified: true, age: 20 });
user = new User( { name: "Pepa", password: "1234", email: "pepapepa@gmail.com", role: "user", verified: true, age: 30 });