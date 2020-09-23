import { Professional } from "./professional"
import { Movie } from "./movie"
import { Imdb } from "./imdb"
let fs = require("fs");

enum Profession {director, guionista, actor};

let julia:Professional= new Professional ("Julia Roberts",33,"Mujer",65,169,"Negro","Azules","Caucásica",true,"Americana",4,Profession.actor)
let will:Professional= new Professional ("Will Smith",50,"Hombre",90,185,"Negro","Azules","Negro",true,"Americano",20,Profession.actor)
let matthew:Professional= new Professional ("Matthew McConaughey",65,"Hombre",92,195,"Negro","Negro","Negro",true,"Americano",4,Profession.actor)
let jason:Professional= new Professional ("Jason Sth",17,"Hombre",58,180,"Blanco","negro","Negro",false,"Holandés",4,Profession.actor)
let helen:Professional= new Professional ("Helen Hunt",45,"Hombre",55,164,"Negro","negro","Negro",true,"Turca",4,Profession.guionista)
let paz:Professional= new Professional ("Paz Vega",25,"Mujer",65,175,"Blanca","Negro","Negro",false,"Española",4,Profession.director)

let Sharknado:Movie = new Movie ("Sharknado", 2011, "USA", "Z");
let Panther:Movie = new Movie ("Black Panther", 2016, "France", "Heroes");
let Doctor:Movie = new Movie ("Doctor Strange", 2014, "Italian", "Thriller");
let movies:Movie[] = [Sharknado, Panther, Doctor];

let prueba:Imdb = new Imdb (movies)

Sharknado.actors = [julia, will];
Sharknado.director = paz;
Sharknado.writer = helen;
Sharknado.language = "English";
Sharknado.platform = "Netflix";
Sharknado.isMCU = false;
Sharknado.mainCharacterName = "Phinley";
Sharknado.producer = "Firenado+";
Sharknado.distributor = "Cool surreal films"

Panther.actors = [matthew, jason];
Panther.director = paz;
Panther.writer = helen;
Panther.language = "French";
Panther.platform = "Golden";
Panther.isMCU = true;
Panther.mainCharacterName = "Georgina";
Panther.producer = "Camp";
Panther.distributor = "Look at this fish"

Doctor.actors = [julia, matthew, jason];
Doctor.director = paz;
Doctor.writer = helen;
Doctor.language = "Italian";
Doctor.platform = "Livin";
Doctor.isMCU = false;
Doctor.mainCharacterName = "Frances";
Doctor.producer = "Fresh";
Doctor.distributor = "What the hell!"

// console.log(Sharknado.mostrarDatos());
// console.log(prueba.films[0].mostrarDatos());
// console.log(prueba.films[1].mostrarDatos());
// console.log(prueba.films[2].mostrarDatos());

// let myJson = JSON.stringify(prueba)
// fs.writeFile("imdbBBDD.json", myJson, function(err, result) {
//     if(err) {console.log("error", err)}
//     else{console.log("Your file has been created successfully!")};
// })

/*
fs.writeFileSync("imdbBBDD.json", myJson);
*/

//5th update

/*
let data = fs.readFileSync("imdbBBDD.json", "utf-8")
let object:Imdb = JSON.parse(data)
console.log(object.films[0].title);
*/

// let object : Imdb = new Imdb ([])

// fs.readFileSync("imdbBBDD.json", "utf-8", function(err, result) {
//     if(err) {console.log("error", err)}
//     else{console.log("Your file has been read!")
//     object = JSON.parse(result)};
//     console.log(object.films[0].title);
// })

/*
prueba.escribirEnFicheroJSON("imdbBBDD.json");
let object:Imdb = prueba.obtenerInstanciaIMDB("imdbBBDD.json");
console.log(object.films[0].title);
*/

// prueba.escribirEnFicheroJSON("hola.json")