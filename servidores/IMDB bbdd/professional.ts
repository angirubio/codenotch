enum Profession {director, guionista, actor};

export class Professional
{
    public name:string
    public age:number
    public genre:string
    public weight:number
    public height:number
    public hairColor:string
    public eyeColor:string
    public race:string
    public isRetired:boolean
    public nacionality:string
    public oscarsNumber:number
    public profession:Profession

    constructor(name:string,age:number,genre:string,weight:number,height:number,hairColor:string,eyeColor:string,race:string,isReteired:boolean,nacionality:string,oscarsNumber:number,profession:Profession)
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
    }

    public getName():string
    {
       return this.name
    } 
    public setName(newName:string)
    {
    this.name = newName;
    }

    public getAge():number
    {
        return this.age
    }
    public setAge(newAge:number)
    {
    this.age = newAge;
    }

    public getGenre()
    {
        this.genre
    }
    public setGenre(newGenre:string)
    {
        this.genre= newGenre;
    }

    public getWeight()
    {
        return this.weight
    }
    public setWeight(newWeight:number)
    {
        this.weight = newWeight;
    }
    
    public setHeight(newHeight:number)
    {
        this.height = newHeight;
    }
    public getHeight()
    {
        return this.height
    }

      public getHairColor()
    {
        return this.hairColor
    }
    public setHairColor(newHairColor:string)
    {
     this.hairColor = newHairColor;
    }

    public getEyeColor()
    {
      return  this.eyeColor
    }
    public setEyeColor(newEyeColor:string)
    {
        this.eyeColor = newEyeColor;
    }

    public getRace()
    {
       return this.race
    }
    public setRace(newRace:string)
    {
        this.race = newRace;
    }

    public getIsRetired()
    {
      return  this.isRetired
    }
    public setIsRetired(newIsRetired:boolean)
    {
        this.isRetired = newIsRetired;
    }

    public getNacionality()
    {
     return   this.nacionality
    }
    public setNacionality(newNacionality:string)
    {
        this.nacionality = newNacionality;
    }

    public getOscarsNumner()
    {
     return this.oscarsNumber
    }
    public setOscarsNumner(newOscarsNumber:number)
    {
    this.oscarsNumber = newOscarsNumber;
    }

    public getProfession()
    {
    return this.profession
    }       
    public setProfession(newProfession:Profession)
    {
    this.profession = newProfession;
    }
    
    public mostrarDatos():string
    {
        let datos:string = ("Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" +
        "Weight: " + this.weight + "\n" + "Height: " + this.height + "\n" + "Hair color: " + this.hairColor + "\n" + "Eye color: " +
        this.eyeColor + "\n" + "Race: " + this.race + "\n" + "Is retired?: " + this.isRetired + "\n" + "Nationality: " + this.nacionality +
        "\n" + "Oscars number: " + this.oscarsNumber + "\n" + "Peofession: " + this.profession);
        
        return(datos);
    }

};