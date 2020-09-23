import { Person } from "./person"

let Manu:Person = new Person("Manuel", 38, "c/ Magnolia 58, Sevilla");

Manu.printName();
console.log(Manu.yearOfBirth(2020));

Manu.setAdress("c/ Flor de lis 4, San José, Almería");

console.log(Manu.getAdress());