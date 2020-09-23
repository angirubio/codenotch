import { Book } from "./book"

export class Library
{
    private books: Book[];
    private adress: string;
    private manager: string;

    constructor (books:Book[], adress:string, manager: string,)
    {
        this.books = books;
        this.adress = adress;
        this.manager = manager;
    }

    public getAdress():string
    {
        return this.adress
    }
    public setAdress(newAdress)
    {
        this.adress = newAdress;
    }
    public getManager():string
    {
        return this.manager
    }
    public setManager(newManager)
    {
        this.manager = newManager;
    }
    public toString():string
    {
        let cadena :string = "";
        for (let i=0;i<this.books.length;i++)
        {
            cadena += this.books[i].toString()
        }
        return cadena
    }
    public getNumberOfBooks():number
    {
        return this.books.length
    }
    public findByAuthor(author:string):Book[]
    {
        let encontrados :Book[] = []
        for (let i=0;i<this.books.length;i++)
        {
            if (this.books[i].getAuthor() == author) {
                encontrados.push(this.books[i])
            }
        }
        return encontrados;
    }

}