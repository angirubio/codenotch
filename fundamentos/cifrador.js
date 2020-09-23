//Reto 4

var frase = ("Codenotch and Javascript are awesome!");

cifrar = (frase) => { 
    let codificada = " ";
for (let i=0;i<frase.length;i++) {
    codificada += frase[i].charCodeAt() + " "; 
};
return codificada; 
};

console.log(cifrar(frase));