import { Book } from "./book"
import { Library } from "./library"

let Winnie:Book = new Book("Winnie the pooh", 110, "1125WP-5323AB", "Alan Alexander Milne", "Papyrus");
let Exorcist:Book = new Book("The Exorcist", 349, "3240TE-8001CD", "William Peter Blatty", "Penguin Random");
let Salome:Book = new Book("Salomé", 36, "0001OW-3928SA", "Oscar Wilde", "Branden");
let Ernesto:Book = new Book("La importancia de llamarse Ernesto", 211, "0039OW-3470LE", "Oscar Wilde", "Branden Books");
let novelas:Library = new Library([Winnie, Exorcist, Salome, Ernesto], "Joaquin Leguina", "Sr. Encargado Pérez")

console.log(novelas.getNumberOfBooks());
console.log(novelas.toString());
console.log(novelas.findByAuthor("Oscar Wilde"));
novelas.setManager("El Largo");
console.log(novelas.getManager());