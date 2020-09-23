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

let sql = "INSERT INTO `teachers` (`teacher_id`, `fisrt_name`, `last_name`) VALUES (NULL, 'Señor', 'Señorez')";
connection.query(sql, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Profesor añadido");
        console.log(result);
    }
})

let sql1 = "INSERT INTO `students` (`student_id`, `first_name`, `last_name`, `group_id`) VALUES (NULL, 'Lucas', 'Luquez', '1')";
connection.query(sql1, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Alumno añadido");
        console.log(result);
    }
})

let sql2 = "UPDATE `marks` SET `mark`=0";
connection.query(sql2, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Notas modificadas a 0");
        console.log(result);
    }
})

let sql3 = "SELECT `first_name`, `last_name` FROM `students`";
connection.query(sql3, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando Nombre y apellido de estudiantes...");
        console.log(result);
    }
})

let sql4 = "SELECT * FROM `teachers`";
connection.query(sql4, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando todos los datos...");
        console.log(result);
    }
})

let sql5 = "DELETE FROM `marks`WHERE YEAR(`date`)<2010";
connection.query(sql5, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Notas de hace una década eliminadas");
        console.log(result);
    }
})

let sql6 = "UPDATE `marks`SET `mark`=5 WHERE `subject_id`=1 and `mark`<5";
connection.query(sql6, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Notas actualizadas");
        console.log(result);
    }
})

let sql7 = "SELECT count(student_id) FROM `students`";
connection.query(sql7, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Resultado: ");
        console.log(result);
    }
})

let sql8 = "SELECT first_name, title FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) WHERE students.student_id = 2";
connection.query(sql8, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando asignaturas del alumno 2: ");
        console.log(result);
    }
})

// SQL DÍA 2 - PALABRAS RESERVADAS

let sql9 = "SELECT AVG (mark) FROM marks WHERE subject_id = 1";
connection.query(sql9, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando media de las notas de la asignatura 1: ");
        console.log(result);
    }
})

let sql10 = "SELECT COUNT (DISTINCT student_id) FROM `students`";
connection.query(sql10, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Estudiantes: ");
        console.log(result);
    }
})

let sql11 = "SELECT COLUMN_NAME FROM Information_Schema.Columns WHERE TABLE_NAME = 'groups'";
connection.query(sql11, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Listado: ");
        console.log(result);
    }
})

let sql12 = "DELETE FROM `marks`WHERE YEAR(`date`)=2019 AND `mark`>5";
connection.query(sql12, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Notas aprobadas del 2019 eliminadas");
        console.log(result);
    }
})

let sql13 = "SELECT * FROM students WHERE ingreso LIKE 2020";
connection.query(sql13, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando datos de los alumnos de este año: ");
        console.log(result);
    }
})

let sql14 = "SELECT DISTINCT subject_id, COUNT(DISTINCT teacher_id) AS count FROM subject_teacher GROUP BY subject_id";
connection.query(sql14, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando nº de profesores por asignatura: ");
        console.log(result);
    }
})

let sql15 = "SELECT student_id, mark FROM marks WHERE student_id BETWEEN 1 AND 5 OR (mark > 8 AND YEAR(`date`)=2019)";
connection.query(sql15, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando id y nota de alumnos con id entre 1 y 5 o nota superior a 8 del año pasado: ");
        console.log(result);
    }
})

let sql16 = "SELECT subject_id, AVG (mark) AS avg_mark FROM marks WHERE YEAR(`date`)=2019 GROUP BY subject_id";
connection.query(sql16, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando media de las notas por asignatura del año pasado: ");
        console.log(result);
    }
})

let sql17 = "SELECT student_id, AVG (mark) AS avg_mark FROM marks WHERE YEAR(`date`)=2019 GROUP BY student_id";
connection.query(sql17, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando media de las notas por alumno del año pasado: ");
        console.log(result);
    }
})

let sql18 = "SELECT students.first_name, COUNT(marks.subject_id) FROM marks JOIN students ON (marks.student_id = students.student_id) JOIN subject_teacher ON (marks.subject_id = subject_teacher.subject_id) WHERE (marks.subject_id = 1 OR marks.subject_id = 2) AND (subject_teacher.teacher_id = 1 OR subject_teacher.teacher_id = 2) GROUP BY students.first_name";
connection.query(sql18, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Resultado: ");
        console.log(result);
    }
})

// DÍA 3 - UNIÓN Y AUX.

let sql19 = "SELECT first_name, last_name, title FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) ORDER BY first_name ASC";
connection.query(sql19, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando alumnos y asignaturas: ");
        console.log(result);
    }
})

let sql20 = "SELECT first_name, last_name, title FROM subject_teacher INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) ORDER BY first_name ASC"
connection.query(sql20, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando profesores y asignaturas: ");
        console.log(result);
    }
})

let sql21 = "SELECT COUNT(DISTINCT marks.student_id) AS total_students, subjects.title, teachers.first_name, teachers.last_name FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) INNER JOIN subject_teacher ON (subjects.subject_id = subject_teacher.subject_id) INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) GROUP BY subjects.title ORDER BY teachers.first_name ASC"
connection.query(sql21, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando asignaturas, profesores y nº de alumnos: ");
        console.log(result);
    }
})

let sql22 = "SELECT teachers.first_name, teachers.last_name, subjects.title, AVG(mark) AS media FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) INNER JOIN subject_teacher ON (subjects.subject_id = subject_teacher.subject_id) INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) GROUP BY subjects.title ORDER BY teachers.first_name ASC"
connection.query(sql22, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando profesores, asignaturas y nota media: ");
        console.log(result);
    }
})

let sql23 = "SELECT students.first_name, students.last_name, COUNT(marks.subject_id) AS asignaturas_cursadas, AVG(mark) AS nota_media, MAX(mark) AS mejor_nota, MIN(mark) AS peor_nota FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) INNER JOIN subject_teacher ON (subjects.subject_id = subject_teacher.subject_id) INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) GROUP BY students.first_name ORDER BY teachers.first_name ASC"
connection.query(sql23, function( err, result)
{
    if (err)
    console.log(err);
    else
    {
        console.log("Mostrando estudiantes, nº de asignaturas, nota media, nota más alta y nota más baja: ");
        console.log(result);
    }
})