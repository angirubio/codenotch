import { Vector1 } from "./vector";

export class Matrix
{
    public elements: Vector1[]

    constructor(n:number, k:number, m:number)
    {
        this.elements = [];
        for(let i=0; i<n; i++) {
            this.elements[i] = new Vector1(k,m);
        }
    }

    print()
    {
        console.log(this.elements)
    }
    add(m1:Matrix):Matrix
    {   
        let sumar:Matrix = new Matrix (0,0,0);
        for (let i=0;i<this.elements.length;i++) {
            sumar.elements[i] = this.elements[i].add(m1.elements[i]);
        }
        return sumar
    }
    multNumber(n:number):Matrix
    {
        let multiplicar:Matrix = new Matrix (0,0,0);

        for (let i=0;i<this.elements.length;i++) {
            multiplicar.elements[i] = this.elements[i].multNumber(n);
        }
        return multiplicar
    }
    mutSpecial(n:number):Matrix
    {
        let especial:Matrix = new Matrix (this.elements.length,0,0);

        for (let i=0;i<this.elements.length;i++) {
            for (let j=0;j<this.elements[i].elements.length;j++){
                if (this.elements[i].elements[j]%2==0) {
                    especial.elements[i].elements[j] = this.elements[i].elements[j]*n;
                }
                else {
                    especial.elements[i].elements[j] = this.elements[i].elements[j]*(n-1);
                }
            }
        }
        return especial
    }
};