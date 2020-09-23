import { Movie } from "./movie"
import { Imdb } from "./imdb"
const readline = require("readline");

let rl = readline.createInterface({input: process.stdin, output: process.stdout});

let text = "";

rl.question("Introduce tittle: ", (tittle1:string) => {
  rl.question("Introduce release year: ", (release1:number) => {
    rl.question("Introduce nationality: ", (nationality1:string) => {
      rl.question("Introduce genre: ", (genre1:string) => {
        
        let newFilm : Movie = new Movie(tittle1, release1, nationality1, genre1)
        let myImdb: Imdb = new Imdb([])

        myImdb = myImdb.obtenerInstanciaIMDB("imdbBBDD.json")
        myImdb.films.push(newFilm);
        myImdb.escribirEnFicheroJSON("imdbBBDD.json")

        rl.close();
      })
    })
  })
});

/*
rl.question("What movie do you want to see? ", (answer1) => {
  let numero = 0
  numero = answer1
  let myImdb : Imdb = new Imdb([])
  myImdb = myImdb.obtenerInstanciaIMDB("imdbBBDD.json")
  console.log(myImdb.films[numero]);
  rl.close();
});
*/