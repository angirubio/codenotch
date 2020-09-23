import { Person } from "./person"
import { Calendar } from "./calendar"

let Manu:Person = new Person("Manuel", 38, "c/ Magnolia 58, Sevilla");
let Eulalia:Person = new Person("Eulalia", 25, "c/ Amapola 2, Sevilla");
let agenda1:Calendar = new Calendar();

agenda1.people.push(Manu, Eulalia)

agenda1.printCalendar();