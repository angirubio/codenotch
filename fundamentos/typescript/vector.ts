export class Vector1
{
    public elements: number[]

    constructor(n:number, k:number)
    {

        var elements = [];
        for (let i=0; i<n;i++) {
            elements.push(Math.round(Math.random()*k))
        }
        this.elements = elements;

    }
    print()
    {
        console.log(this.elements)
    }
    add(v1:Vector1):Vector1
    {
        let sumar:Vector1 = new Vector1 (0,0);
        for (var i=0;i<this.elements.length;i++) {
            sumar.elements[i] = this.elements[i] + v1.elements[i];
        }
        return sumar
    }
    subs(v1:Vector1):Vector1
    {
        let restar:Vector1 = new Vector1 (0,0);
        for (var i=0;i<this.elements.length;i++) {
            restar.elements[i] = this.elements[i] - v1.elements[i];
        }
        return restar
    }
    mult(v1:Vector1):Vector1
    {
        let multiplicar:Vector1 = new Vector1 (0,0);
        for (var i=0;i<this.elements.length;i++) {
            multiplicar.elements[i] = this.elements[i] * v1.elements[i];
        }
        return multiplicar
    }
    multNumber(n:number):Vector1
    {
        let multiplicarNum:Vector1 = new Vector1 (0,0);
        for (var i=0;i<this.elements.length;i++) {
            multiplicarNum.elements[i] = this.elements[i] * n;
        }
        return multiplicarNum
    }

};