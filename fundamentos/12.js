//Función calculadora + parámetros de entrada: tipo de operación (sum, subs, mult, div) y operadores (2)

function calculadora(operacion,n,m) {
    if (operacion == "sum") {
       var resultado = n + m;
    }
    else if (operacion == "subs") {
        var resultado = n - m;
     }
    else if (operacion == "mult") {
        var resultado = n * m;
     }
    else if (operacion == "div") {
        var resultado = n / m;
     }
    return resultado;
};
console.log(calculadora("sum",5,7));
console.log(calculadora("subs",5,7));
console.log(calculadora("mult",5,4));
console.log(calculadora("div",20,2));