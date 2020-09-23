const Profession = (director= "Director", guionista="Guionista", actor="Actor");

class Professional
{
    constructor(name,age,genre,weight,height,hairColor,eyeColor,race,isReteired,nacionality,oscarsNumber,profession,foto)
    {
            this.name = name
            this.age = age
            this.genre = genre
            this.weight = weight
            this.height = height
            this.hairColor = hairColor
            this.eyeColor = eyeColor
            this.race = race
            this.isRetired = isReteired
            this.nacionality = nacionality
            this.oscarsNumber = oscarsNumber
            this.profession = profession
            this.foto = foto
    }
    //  getName(){return this.name} 
    //  setName(newName){this.name = newName;}
    //  getAge(){return this.age}
    //  setAge(newAge){this.age = newAge;}
    //  getGenre(){this.genre}
    //  setGenre(newGenre){this.genre= newGenre;}
    //  getWeight(){return this.weight}
    //  setWeight(newWeight){this.weight = newWeight;}    
    //  setHeight(newHeight){this.height = newHeight;}
    //  getHeight(){return this.height}​
    //  getHairColor(){return this.hairColor}
    //  setHairColor(newHairColor){this.hairColor = newHairColor;}
    //  getEyeColor(){return  this.eyeColor}
    //  setEyeColor(newEyeColor){this.eyeColor = newEyeColor;}
    //  getRace(){return this.race}
    //  setRace(newRace){this.race = newRace;}
    //  getIsRetired(){return  this.isRetired}
    //  setIsRetired(newIsRetired){this.isRetired = newIsRetired;}
    //  getNacionality(){return   this.nacionality}
    //  setNacionality(newNacionality){this.nacionality = newNacionality;}
    //  getOscarsNumner(){return this.oscarsNumber}
    //  setOscarsNumner(newOscarsNumber){this.oscarsNumber = newOscarsNumber;}
    //  getProfession(){return this.profession}       
    //  setProfession(newProfession){this.profession = newProfession;}
     mostrarDatos(){let datos = ("Name: " + this.name + "<br>" + "Age: " + this.age + "<br>" + "Genre: " + this.genre + "<br>" +
        "Weight: " + this.weight + "<br>" + "Height: " + this.height + "<br>" + "Hair color: " + this.hairColor + "<br>" + "Eye color: " +
        this.eyeColor + "<br>" + "Race: " + this.race + "<br>" + "Is retired?: " + this.isRetired + "<br>" + "Nationality: " + this.nacionality +
        "<br>" + "Oscars number: " + this.oscarsNumber + "<br>" + "Profession: " + this.profession + "<br>");        
        return(datos);}};

class Movie
{
    constructor (title, releaseYear, nationality, genre, picture)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
        this.picture = picture
    }

     mostrarDatos(){let actores = ""; for (let i = 0; i < this.actors.length; i++){ actores += this.actors[i].name + ", " }; let datos = ("Tittle: " + this.title + "<br>" + "Release year: " + this.releaseYear + "<br>" + "Actors: " + actores + "<br>" +
        "Nationality: " + this.nationality + "<br>" + "Director: " + this.director.name + "<br>" + "Writer: " + this.writer.name + "<br>" + "Language: " +
        this.language + "<br>" + "Platform: " + this.platform + "<br>" + "Is MCU?: " + this.isMCU + "<br>" + "Main character name: " + this.mainCharacterName +
        "<br>" + "Producer: " + this.producer + "<br>" + "Distributor: " + this.distributor + "<br>" + "Genre: " + this.genre + "<br>");
        return(datos);}};

class Imdb
{
    constructor (films)
    {
        this.films = films
    }    
};
let fotoHelen = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Christopher_Markus.jpg/150px-Christopher_Markus.jpg"
let fotoJulia = "https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/52599.jpg"
let fotoWill = "https://vignette.wikia.nocookie.net/freshprince/images/3/39/2will.jpg/revision/latest?cb=20180626201446"
let fotoMatthew = "https://cdn.forbes.com.mx/2019/08/mmc-640x360.jpg"
let fotoJason = "https://i.pinimg.com/originals/90/dd/19/90dd1988b76de58c1e722ee835c98693.png"
let fotoPaz = "https://pbs.twimg.com/profile_images/903933654006673408/oYTR0sqO.jpg"

let julia= new Professional ("Julia Roberts",33,"Mujer",65,169,"Negro","Azules","Caucásica",true,"Americana",4,Profession.actor, fotoJulia)
let will= new Professional ("Will Smith",50,"Hombre",90,185,"Negro","Azules","Negro",true,"Americano",20,Profession.actor, fotoWill)
let matthew= new Professional ("Matthew McConaughey",65,"Hombre",92,195,"Negro","Negro","Negro",true,"Americano",4,Profession.actor, fotoMatthew)
let jason= new Professional ("Jason Sth",17,"Hombre",58,180,"Blanco","negro","Negro",false,"Holandés",4,Profession.actor, fotoJason)
let helen= new Professional ("Helen Hunt",45,"Hombre",55,164,"Negro","negro","Negro",true,"Turca",4,Profession.guionista,fotoHelen)
let paz= new Professional ("Paz Vega",25,"Mujer",65,175,"Blanca","Negro","Negro",false,"Española",4,Profession.director, fotoPaz)

let fotoThor = "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Thor_-_The_Dark_World_poster.png/revision/latest?cb=20191029194909&path-prefix=es"
let fotoPanther ="https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg"
let fotoDoctor ="https://pics.filmaffinity.com/Dr_Strange_Doctor_Extra_o-883697036-large.jpg"
let fotoTheJocker ="https://pics.filmaffinity.com/Joker-118854213-large.jpg"
let fotoWolfOfWallStreet ="https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg"
let fotoAlpha ="https://i.pinimg.com/originals/20/e2/67/20e2679a18f037ba635745b7cd9265e8.jpg"
let fotoIronMan ="https://i.pinimg.com/originals/6c/62/60/6c62604d2bd5d26e0a9437660bc325e1.jpg"
let fotoNosotros ="https://pics.filmaffinity.com/Nosotros-208891193-large.jpg"
let fotoCaptainMarvel ="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/66/Captain_Marvel_-_P%C3%B3ster_Diciembre_2018.png/revision/latest?cb=20191029195629&path-prefix=es"
let fotoCadaver ="https://m.media-amazon.com/images/M/MV5BOGVlZjBiNzMtNTQxMi00ZWE3LWI1MmEtYzY0MmM2YjJkYWY4XkEyXkFqcGdeQXVyMjExMDIwNzA@._V1_UY268_CR1,0,182,268_AL_.jpg"
let fotoGuardianOftheGalaxie = "https://es.web.img3.acsta.net/pictures/14/06/17/14/04/353959.jpg"
let fotoTheBFE = "https://m.media-amazon.com/images/M/MV5BNjAzOTUzNTY3Ml5BMl5BanBnXkFtZTgwMjYwNzE5ODE@._V1_.jpg"

let Sharknado = new Movie ("Thor", 2011, "USA", "Z", fotoThor);
let TheBFE = new Movie ("The BFG", 2014, "USA", "Drama", fotoTheBFE);
let TheJocker = new Movie ("The Jocker", 2019, "USA", "Thriller", fotoTheJocker);
let Panther = new Movie ("Panther", 2016, "France", "Heroes", fotoPanther);
let WolfOfWallStreet = new Movie ("Wolf of Wall Street", 2015, "Usa", "Action", fotoWolfOfWallStreet);
let Alpha = new Movie ("Alpha", 2018, "USA", "Action", fotoAlpha);
let IronMan = new Movie ("Iron Man 3", 2019, "Dominican", "Horror", fotoIronMan);
let Nosotros = new Movie ("Nosotros", 2014, "African", "Thriller", fotoNosotros);
let Doctor = new Movie ("Doctor Strange", 2014, "Italian", "Thriller", fotoDoctor);
let CaptainMarvel = new Movie ("Captain Marvel", 2014, "Usa", "Drama", fotoCaptainMarvel);
let Cadaver = new Movie ("Cadaver", 2014, "Spanin", "Horror", fotoCadaver);
let GuardianOftheGalaxie = new Movie ("Guardian of The Galaxie", 2014, "Usea", "Thriller", fotoGuardianOftheGalaxie);

let movies = [Sharknado, TheBFE, TheJocker, Panther, WolfOfWallStreet, Alpha, IronMan, Nosotros, Doctor, CaptainMarvel, Cadaver, GuardianOftheGalaxie];

let prueba = new Imdb (movies)

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

TheJocker.actors = [matthew, jason];
TheJocker.director = paz;
TheJocker.writer = helen;
TheJocker.language = "French";
TheJocker.platform = "Golden";
TheJocker.isMCU = true;
TheJocker.mainCharacterName = "Georgina";
TheJocker.producer = "Camp";
TheJocker.distributor = "Look at this fish"

WolfOfWallStreet.actors = [matthew, jason];
WolfOfWallStreet.director = paz;
WolfOfWallStreet.writer = helen;
WolfOfWallStreet.language = "French";
WolfOfWallStreet.platform = "Golden";
WolfOfWallStreet.isMCU = true;
WolfOfWallStreet.mainCharacterName = "Georgina";
WolfOfWallStreet.producer = "Camp";
WolfOfWallStreet.distributor = "Look at this fish"

Alpha.actors = [matthew, jason];
Alpha.director = paz;
Alpha.writer = helen;
Alpha.language = "French";
Alpha.platform = "Golden";
Alpha.isMCU = true;
Alpha.mainCharacterName = "Georgina";
Alpha.producer = "Camp";
Alpha.distributor = "Look at this fish"

IronMan.actors = [matthew, jason];
IronMan.director = paz;
IronMan.writer = helen;
IronMan.language = "French";
IronMan.platform = "Golden";
IronMan.isMCU = true;
IronMan.mainCharacterName = "Georgina";
IronMan.producer = "Camp";
IronMan.distributor = "Look at this fish"

Nosotros.actors = [matthew, jason];
Nosotros.director = paz;
Nosotros.writer = helen;
Nosotros.language = "French";
Nosotros.platform = "Golden";
Nosotros.isMCU = true;
Nosotros.mainCharacterName = "Georgina";
Nosotros.producer = "Camp";
Nosotros.distributor = "Look at this fish"

CaptainMarvel.actors = [matthew, jason];
CaptainMarvel.director = paz;
CaptainMarvel.writer = helen;
CaptainMarvel.language = "French";
CaptainMarvel.platform = "Golden";
CaptainMarvel.isMCU = true;
CaptainMarvel.mainCharacterName = "Georgina";
CaptainMarvel.producer = "Camp";
CaptainMarvel.distributor = "Look at this fish"

Cadaver.actors = [matthew, jason];
Cadaver.director = paz;
Cadaver.writer = helen;
Cadaver.language = "French";
Cadaver.platform = "Golden";
Cadaver.isMCU = true;
Cadaver.mainCharacterName = "Georgina";
Cadaver.producer = "Camp";
Cadaver.distributor = "Look at this fish"

GuardianOftheGalaxie.actors = [matthew, jason];
GuardianOftheGalaxie.director = paz;
GuardianOftheGalaxie.writer = helen;
GuardianOftheGalaxie.language = "French";
GuardianOftheGalaxie.platform = "Golden";
GuardianOftheGalaxie.isMCU = true;
GuardianOftheGalaxie.mainCharacterName = "Georgina";
GuardianOftheGalaxie.producer = "Camp";
GuardianOftheGalaxie.distributor = "Look at this fish"

TheBFE.actors = [matthew, jason];
TheBFE.director = paz;
TheBFE.writer = helen;
TheBFE.language = "French";
TheBFE.platform = "Golden";
TheBFE.isMCU = true;
TheBFE.mainCharacterName = "Georgina";
TheBFE.producer = "Camp";
TheBFE.distributor = "Look at this fish"

function datosCuerpo(num){

    $("#cuerpo").html(prueba.films[num].mostrarDatos())
    document.getElementById("picModal").src = prueba.films[num].picture
    $("#cuerpo2").html(prueba.films[num].actors[0].mostrarDatos())
    document.getElementById("picModal2").src = prueba.films[num].actors[0].foto
    $("#cuerpo3").html(prueba.films[num].actors[1].mostrarDatos())
    document.getElementById("picModal3").src = prueba.films[num].actors[1].foto
    $("#cuerpo4").html(prueba.films[num].director.mostrarDatos())
    document.getElementById("picModal4").src = prueba.films[num].director.foto
    $("#cuerpo5").html(prueba.films[num].writer.mostrarDatos())
    document.getElementById("picModal5").src = prueba.films[num].writer.foto
}

function addFilm() {
    let titulo = document.getElementById("titulo").value
    let year = document.getElementById("year").value
    let nacionalidad = document.getElementById("nacionalidad").value
    let genero = document.getElementById("genero").value
    let fotillo = document.getElementById("fotillo").value
    let newFilm = new Movie (titulo, year, nacionalidad, genero, fotillo)
    prueba.films.push(newFilm)
    $("#newTitle").html(newFilm.title)
    $("#newFoto").attr("src",fotillo)
    $("#newData").html(newFilm.releaseYear)
    $("#divTodo").show()
}

module.exports = Professional;
module.exports = Movie;
module.exports = Imdb;