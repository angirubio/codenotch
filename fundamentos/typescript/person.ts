export class Person
{
    public name: string;
    public age: number;
    private adress: string;

    constructor(name:string, age:number, adress:string)
    {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }

    public printName()
    {
        console.log(this.name);
    }
    public yearOfBirth(currentYear:number)
    {
        currentYear - this.age;
    }
    public getAdress():string
    {
        return this.adress
    }
    public setAdress(newadress)
    {
        this.adress = newadress;
    }
    public accesoDatos():string
    {
        return "Nombre: " + this.name + "\n" + 
        "Edad: " + this.age + "\n" +
        "Dirección: " + this.adress
    }
};