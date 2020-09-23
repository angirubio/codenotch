module.exports = class Movie
{
    constructor (title, releaseYear, nationality, genre, actors, director, writer, language)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
        this.actors = actors
        this.director = director
        this.writer = writer
        this.language = language
    }
}