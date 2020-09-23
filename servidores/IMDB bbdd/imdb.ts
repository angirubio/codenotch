import { Professional } from "./professional"
import { Movie } from "./movie"
let fs = require("fs");


export class Imdb
{
    public films:Movie[]

    constructor (films:Movie[])
    {
        this.films = films
    }

    public escribirEnFicheroJSON(nombreFichero:string)
    {
        let myJson = JSON.stringify(this.films)
        fs.writeFileSync(nombreFichero, myJson)
    }
    
    public obtenerInstanciaIMDB(nombreFichero:string):Imdb
    {
        let toRead = fs.readFileSync(nombreFichero);
        let object:Imdb = new Imdb ([])
        object.films = JSON.parse(toRead)

        console.log(object);
        
        return object
    }
};