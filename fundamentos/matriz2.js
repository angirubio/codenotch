const Vector = require("./testVector.js")

class Matriz {
    constructor (n,k,m) {
        this.elements = [];
        for(let i=0; i<n; i++) {
            this.elements[i] = new Vector(k,m);
        }
    }
    print()
    {
        console.log(this.elements)
    }
    suma(m)
    {   
        let sumar = new Matriz (0,0,0);
        for (let i=0;i<this.elements.length;i++) {
            sumar.elements[i] = this.elements[i].add(m.elements[i]);
        }
        return sumar
    }
    productoNum(n)
    {
        let multiplicar = new Matriz (0,0,0);

        for (let i=0;i<this.elements.length;i++) {
            multiplicar.elements[i] = this.elements[i].producto(n);
        }
        return multiplicar
    }
    resta(m)
    {   
        let sumar = new Matriz (0,0,0);
        for (let i=0;i<this.elements.length;i++) {
            sumar.elements[i] = this.elements[i].substract(m.elements[i]);
        }
        return sumar
    }
    producto(a)
    {
        let productoSi = new Matriz ();
        let multiplicarSi = new Vector ();

        for (let i=0;i<this.elements.length;i++)
        {
            for (let j=0;j<this.elements[i].elements.length;j++)
            {
                if (this.vect.length == a.vect.length)
                {
                    for (var i=0;i<a.vect.length;i++)
                    {
                        productoSi[i] = this.vect[i] * a.vect[i];
                    }
                } else {
                    console.log("No tienen el mismo número de elementos");
                }
                multiplicarSi.productoSi(a) = productoSi;
                return productoSi;
            }
        }                
    } 
};

module.exports={Matriz}