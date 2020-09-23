const Vector = require("./testVector.js")
const Matriz = require("./matriz.js")

let v1 = new Vector (5,5);
let m1 = new Matriz (5,5,7);
let m2 = new Matriz (5,5,20);
let m3 = new Matriz (4,3,30);

m1.print();
m2.print();
m3.print();

m1.suma(m2).print();