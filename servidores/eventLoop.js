//Se sabe que la instrucción asíncrona se ha ejecutado correctamente dentro del cuerpo de la callback

// process.nextTick(function(){console.log("next tick")})
// setImmediate(function(){console.log("Inmmediate")})
// setTimeout(function(){console.log("TimeOut")}, 5000)
// console.log("Direct");

//Reto 1

setTimeout(function()
{
    console.log("after 1 second")
    setImmediate(function()
    {
        console.log("last process after finish the loop")
        process.nextTick(function()
        {
            console.log("initial loop event")
        })
    })
}, 1000)

// Reto 2

let start = Date.now();

setInterval(function()
{
    let goes = Date.now() - start;
    console.log("Tiempo pasado: " + goes)
    start = Date.now();
}, 5000)