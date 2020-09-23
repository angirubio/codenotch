//clase[objetos[propiedades,constructor,métodos]]

class Poligono {
    constructor (height, width) {
        this.height = height;
        this.width = width;

    }
    //Getter
    get area () {
        return this.calcArea();
    }
    //Método
    calcArea () {
    return this.height * this.width ;
    }
}

const cuadrado = new Poligono (10, 10);

class Punto {
    constructor (coordenadaX, coordenadaY) {
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
    }
    get X() {
        return this.coordenadaX;
    }
    get Y() {
        return this.coordenadaY;
    }
    getX() {
        return this.coordenadaX;
    }
    getY() {
        return this.coordenadaY;
    }
    set X(nuevaX) {
        return this.coordenadaX = nuevaX;
    }
    set Y(nuevaY) {
        return this.coordenadaY = nuevaY;
    }
    setX(nuevaX) {
        return this.coordenadaX = nuevaX;
    }
    setY(nuevaY) {
        return this.coordenadaY = nuevaY;
    }

}

p1 = new Punto(10,20)

console.log(p1.coordenadaX);
console.log(p1.X)
console.log(p1.getX())

console.log(p1.coordenadaY);
console.log(p1.Y)
console.log(p1.getY())

p2 = new Punto(10,20)

p2.coordenadaX = 11;
console.log(p2.coordenadaX);

p2.X = 12;
console.log(p2.coordenadaX)

p2.setX(13);
console.log(p2.coordenadaX)

p2.coordenadaY = 21;
console.log(p2.coordenadaY);

p2.Y = 22;
console.log(p2.coordenadaY)

p2.setY(23);
console.log(p2.coordenadaY)