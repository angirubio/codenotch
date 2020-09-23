let mysql = require("mysql");
let connection = mysql.createConnection
(
    {
        host: "localhost",
        user: "root",
        password: null,
        database: "Codenotch"
    }
)

connection.connect(function(err,res)
{
    if (err)
    console.log(err);
    else
    console.log("Conectado");
});

let sql1 = "CREATE TABLE Alumnos (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(10), apellidos VARCHAR(20), edad INT(3), estudios VARCHAR (100), nacionalidad VARCHAR (15), domicilio VARCHAR(20))";
connection.query(sql1, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Tabla de alumnos creada");
        console.log(result);
    }
})

let sql2 = "CREATE TABLE Profesores (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(10), apellidos VARCHAR(20), edad INT(3), estudios VARCHAR (100), nacionalidad VARCHAR (15), domicilio VARCHAR(20))";
connection.query(sql2, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Tabla de profesores creada");
        console.log(result);
    }
})

let sql3 = "CREATE TABLE Asignaturas (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(10), duración VARCHAR(10), dificultad INT (2))";
connection.query(sql3, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Tabla de asignaturas creada");
        console.log(result);
    }
})

let sql = "DROP TABLE Profesores";
connection.query(sql, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Tabla borrada");
        console.log(result);
    }
})

let sql = "ALTER TABLE Asignaturas ADD COLUMN lenguaje INT;";
connection.query(sql, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Tabla modificada");
        console.log(result);
    }
})

let sql = "ALTER TABLE Asignaturas DROP COLUMN lenguaje;";
connection.query(sql, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Tabla modificada");
        console.log(result);
    }
})