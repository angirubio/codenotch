import { Vector1 } from "./vector"
import { Matrix } from "./matrix"

let v1:Vector1 = new Vector1 (5,5);
let m1:Matrix = new Matrix (5,5,7);
let m2:Matrix = new Matrix (5,5,20);
let m3:Matrix = new Matrix (4,3,30);

m1.print();
// m2.print();
// m3.print();

// m1.add(m2).print();

// m1.multNumber(3).print();
m1.mutSpecial(2).print();

// m1.elements[0].elements[0]