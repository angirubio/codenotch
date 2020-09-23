import { Professional } from "./professional"

export class Movie
{
    public title:string
    public releaseYear:number
    public actors:Professional[]
    public nationality:string
    public director:Professional
    public writer:Professional
    public language:string
    public platform:string
    public isMCU:boolean
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public genre:string

    constructor (title:string, releaseYear:number, nationality:string, genre:string)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
    }

    public mostrarDatos():string
    {
        let actores:string = "";
        for (let i = 0; i < this.actors.length; i++)
        {
            actores += this.actors[i].name + ", "
        };
        let datos:string = ("Tittle: " + this.title + "\n" + "Release year: " + this.releaseYear + "\n" + "Actors: " + actores + "\n" +
        "Nationality: " + this.nationality + "\n" + "Director: " + this.director.name + "\n" + "Writer: " + this.writer.name + "\n" + "Language: " +
        this.language + "\n" + "Platform: " + this.platform + "\n" + "Is MCU?: " + this.isMCU + "\n" + "Main character name: " + this.mainCharacterName +
        "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "Genre: " + this.genre);
        
        return(datos);
    }
};