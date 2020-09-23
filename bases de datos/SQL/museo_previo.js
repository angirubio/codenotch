let mysql = require("mysql");
let connection = mysql.createConnection
(
    {
        host: "localhost",
        user: "root",
        password: null,
        database: "MEME MUSEO"
    }
)

connection.connect(function(err,res)
{
    if (err)
    console.log(err);
    else
    console.log("Conectado");
});

let sql = "SELECT piezas.nombre AS pieza, lugar.ubicacion, lugar.numero, estado.hasta, owner.nombre AS owner, owner.apellido, owner.email FROM piezas INNER JOIN lugar ON (piezas.lugar_id = lugar.lugar_id) INNER JOIN estado ON (piezas.estado_id = estado.estado_id) INNER JOIN owner ON (piezas.owner_id = owner.owner_id) WHERE estado.posesionprestamo = 'prestamo' GROUP BY piezas.nombre";
connection.query(sql, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando piezas");
        console.log(result);
    }
})