class Direccion
{
    //Declaración de atributos y propiedades
    private calle: string;
    private numero: number;
    private piso: number;
    private puerta: string;

    constructor(calle:string, numero:number, piso:number, puerta:string)
    {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.puerta = puerta;
    }

    //Implementación de los métodos

    public getCalle():string
    {
        return this.calle;
    }
    public getNumero():number
    {
        return this.numero;
    }
    public setCalle(calle:string)
    {
        this.calle = calle
    }
    public setNumero(numero:number)
    {
        this.numero = numero
    }
    public esPisoPar(): boolean
    {
        return (this.piso %2 === 0)
    }
    public showDireccion()
    {
        console.log(this.toString());
    }
    //Implementación de los métodos privados
    private toString():string
    {
        return "Direccion: " + this.calle + " " + this.numero + " " + this.piso + " " + this.puerta
    }
}

let miCalle:Direccion = new Direccion("Teruel", 8, 2, "Izq");

miCalle.calle = "Avila";
miCalle.setCalle("Avila");

console.log(miCalle.numero);
console.log(miCalle.getNumero());

console.log(miCalle.esPisoPar());

console.log(miCalle.toString());
console.log(miCalle.showDireccion());

//Compilar = tsc fichero1.ts fichero2.ts
// fichero 2.js