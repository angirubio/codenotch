class Vector {
    constructor (n,m) {
        var vectores = [];
        for (var i=0; i<n;i++) {
            vectores.push(Math.round(Math.random()*m))
        }
        this.vect = vectores;
    }
    suma(a) {
        var sumaVect = [];
        const sumar = new Vector ();
    if (this.vect.length == a.vect.length) {
        for (var i=0;i<a.vect.length;i++) {
            sumaVect[i] = this.vect[i] + a.vect[i];
        }
    }
    else {
        console.log("No tienen el mismo número de elementos");
    }
    sumar.vect = sumaVect;
    return sumar;
    }
    producto(n) {
        var productoVect = [];
        const multiplicar = new Vector ();
        for (var i=0;i<this.vect.length;i++) {
            productoVect[i] = this.vect[i] * n;
        };
    multiplicar.vect = productoVect;
    return multiplicar;
    }
    resta(a) {
        var restaVect = [];
        const restar = new Vector ();
    if (this.vect.length == a.vect.length) {
        for (var i=0;i<a.vect.length;i++) {
            restaVect[i] = this.vect[i] - a.vect[i];
        }
    }
    else {
        console.log("No tienen el mismo número de elementos");
    }
    restar.vect = restaVect;
    return restar;
    }
    productoSi(a)  {
        var productoVect = [];
        const mult = new Vector ();
    if (this.vect.length == a.vect.length) {
        for (var i=0;i<a.vect.length;i++) {
            sumaVect[i] = this.vect[i] * a.vect[i];
        }
    }
    else {
        console.log("No tienen el mismo número de elementos");
    }
    mult.vect = productoVect;
    return mult;
    }
    
}
// const unVector = new Vector (2,3);
// const otroVector = new Vector (2,5);

// console.log(unVector.vect);

// console.log(otroVector.vect);
// console.log(unVector.resta(otroVector));
// console.log(unVector.producto(5));

module.exports={Vector}