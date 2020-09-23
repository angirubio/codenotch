//Reto final 1

var libros = ["Ready player one", "El nombre del viento","El temor de un hombre sabio", "Cien años de soledad", "Origen"]

var caracter = 0;
var posicion = 0;

for(var i=0; i < libros.length; i++){
    if(libros[i].length > caracter){
        caracter = libros[i].length;
         posicion=i;
    }    
}

//Negrita

for (var j=0; j<libros.length; j++)
{
    if(posicion==j){
        console.log("<b>" + libros[j] + "[" + libros[j].length + "]" + "</b>" + "</br>");
    }
    else{
        console.log(libros[j] + "[" + libros[j].length + "]" + "</br>")
    }
   
}