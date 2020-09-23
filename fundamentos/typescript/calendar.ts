import { Person } from "./person"

export class Calendar
{
    public people: Person[];
    
    constructor ()
    {
        this.people = [];
    }

    public printCalendar()
    {
        for (var i=0;i<this.people.length;i++)
        {
            console.log(this.people[i].accesoDatos())
        }
        
    };

};