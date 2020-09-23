import { Book } from "./book"

let Winnie:Book = new Book("Winnie the pooh", 110, "1125WP-5323AB", "Alan Alexander Milne", "Papyrus");
let Exorcist:Book = new Book("The Exorcist", 349, "3240TE-8001CD", "William Peter Blatty", "Penguin Random");
let Salome:Book = new Book("Salomé", 36, "0001OW-3928SA", "Oscar Wilde", "Branden");

console.log(Winnie.toString());
console.log(Exorcist.toString());
console.log(Salome.toString());
console.log(Exorcist.getAuthor());
Salome.setEditorial("Branden Books");
console.log(Salome.getEditorial());