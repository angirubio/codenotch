class Producto {
    constructor (nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

class Carrito {
    constructor () {
        this.productos = []
    }
}

var carro = new Carrito ()

function addToCart(nombre, cantidad, precio) {
    let productoPicked = new Producto(nombre, cantidad, precio);
    carro.productos.push(productoPicked);
    let mostrarString = "";
    for(i = 0; i < carro.productos.length; i++) {
        mostrarString += "Producto: " + carro.productos[i].nombre + " Cantidad: " + carro.productos[i].cantidad + " Precio: " + carro.productos[i].precio + "<br>"
    }
    let sumarProductos = 0;
    let mostrarSuma = ""
    for(i = 0; i < carro.productos.length; i++) {
        sumarProductos += carro.productos[i].precio
        mostrarSuma = "Total: " + sumarProductos + "€"
    }
    document.getElementById("datos_carrito").innerHTML = mostrarString
    document.getElementById("total").innerHTML = mostrarSuma
}

function removeFromCart(nombre, cantidad, precio) {
    let productoRemoved = new Producto(nombre, cantidad, precio);
    carro.productos.splice(productoRemoved);
    let restarProductos = 0;
    let mostrarTotal = ""
    for(i = 0; i < carro.productos.length; i++) {
        if(productoRemoved == productoPicked) {
            restarProductos += carro.productos[i].precio
            mostrarTotal = "Total: " + sumarProductos - restarProductos + "€"
        }
    }
    document.getElementById("total").innerHTML = mostrarTotal

}