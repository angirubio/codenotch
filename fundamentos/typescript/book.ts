export class Book
{
    private title: string;
    private nPages: number;
    private issn: string;
    private author: string;
    private editorial: string;

    constructor (title:string, nPages:number, issn:string, author:string, editorial:string)
    {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }

    public getTitle():string
    {
        return this.title
    }
    public setTitle(newTitle)
    {
        this.title = newTitle;
    }
    public getPages():number
    {
        return this.nPages
    }
    public setPages(newPages)
    {
        this.nPages = newPages;
    }
    public getIssn():string
    {
        return this.issn
    }
    public setIssn(newIssn)
    {
        this.issn = newIssn;
    }
    public getAuthor():string
    {
        return this.author
    }
    public setAuthor(newAuthor)
    {
        this.author = newAuthor;
    }
    public getEditorial():string
    {
        return this.editorial
    }
    public setEditorial(newEditorial)
    {
        this.editorial = newEditorial;
    }
    public toString():string
    {
        return "Title: " + this.title + "\n" + "Number of Pages: " + this.nPages + "\n" + 
        "ISSN: " + this.issn + "\n" + "Author: " + this.author + "\n"
        + "Editorial: " + this.editorial + "\n"
    }
}