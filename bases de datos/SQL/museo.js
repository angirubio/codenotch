let mysql = require("mysql");
let connection = mysql.createConnection
(
    {
        host: "localhost",
        user: "root",
        password: null,
        database: "MUSEO"
    }
)

connection.connect(function(err,res)
{
    if (err)
    console.log(err);
    else
    console.log("Conectado");
});

let sql = "SELECT COUNT(p.coleccion_id) AS Piezas, colecciones.situacion AS Coleccion, (SELECT COUNT(p1.coleccion_id) FROM registro AS r INNER JOIN piezas AS p1 ON (r.pieza_id = p1.pieza_id) WHERE r.estado_id = 1 AND p1.coleccion_id = p.coleccion_id GROUP BY p1.coleccion_id) AS Prestamo, (SELECT COUNT(p1.coleccion_id) FROM registro AS r INNER JOIN piezas AS p1 ON (r.pieza_id = p1.pieza_id) WHERE r.estado_id = 2 AND p1.coleccion_id = p.coleccion_id GROUP BY p1.coleccion_id) AS Prestado, (SELECT COUNT(p1.coleccion_id) FROM registro AS r INNER JOIN piezas AS p1 ON (r.pieza_id = p1.pieza_id) WHERE r.estado_id = 3 AND p1.coleccion_id = p.coleccion_id GROUP BY p1.coleccion_id) AS Posesion FROM registro AS r INNER JOIN piezas AS p ON (r.pieza_id = p.pieza_id) JOIN colecciones ON (p.coleccion_id = colecciones.coleccion_id) GROUP BY p.coleccion_id";
connection.query(sql, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando: ");
        console.log(result);
    }
})