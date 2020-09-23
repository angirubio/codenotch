var tripArray = [];
function crearUsuario() {
    var origen = document.getElementById("origen").value
    var destino = document.getElementById("introducir_destino").value
    var ida = document.getElementById("ida_fechas").value
    var vuelta = document.getElementById("vuelta_fechas").value
    var pasajeros = document.getElementById("introducir_pasajeros").value
    var trip = {
        "Origen": origen,
        "Destino": destino,
        "Ida": ida,
        "Vuelta": vuelta,
        "Pasajeros": pasajeros
}
console.log(trip);
tripArray.push(trip);
console.log(tripArray);
}

function filtrarR() {
    var arrayR = [];
    let visible = "";
    let mostrarR = document.getElementById("mostrarR")
    for(var i = 0; i < tripArray.length; i++) {
        var conR = false;
        var j = 0;
        console.log();
        while(j < tripArray[i].Destino.length && (conR == false)) {
            if((tripArray[i].Destino[j] == "R") || (tripArray[i].Destino[j] == "r")){
                conR = true
                arrayR.push(tripArray[i])
                visible += tripArray[i].Destino + " "
            }
            ; j++
        }
    }
    mostrarR.value = visible
}