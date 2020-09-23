import { Vector1 } from "./vector"

let vect1:Vector1 = new Vector1 (2,3);
let vect2:Vector1 = new Vector1 (2,5);

vect1.print();
vect2.print();
console.log(vect1.add(vect2));
console.log(vect1.subs(vect2));
console.log(vect1.mult(vect2));
console.log(vect1.multNumber(3));