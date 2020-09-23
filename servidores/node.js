//Reto 1

function a() {
   console.log("hola desde a");
}

function b() {
    console.log("hola desde b");
}

function main(a) {
    console.log("hola desde main");
    a()
}

main(a)
main(b)
main(main)


// //Reto 2

function cuadrado(x) {
    return Math.pow(x,2)
}

console.log(cuadrado(4))

function aleatorio(x) {
    return Math.round(Math.random()*x)
}

console.log(aleatorio(8));

function compose(a,b) {
    function otra(x) {
        a(b(x))
    }
    return otra
}
console.log(compose(cuadrado, aleatorio)(5));