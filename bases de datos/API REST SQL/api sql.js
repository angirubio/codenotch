const express = require("express");
const bodyParser = require('body-parser');
const { request } = require("http");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

//ENDPOINTS ALUMNOS

app.get("/alumnos/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM students WHERE student_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/alumnos",
    function(request, response)
    {
        let sql = "SELECT * FROM students";
        connection.query(sql, function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/alumnos",
    function(req, response)
    {
        let sql = "INSERT INTO students (first_name, last_name, group_id, ingreso) VALUES (?, ?, ?, ?)";
        connection.query(sql, [req.body.first_name, req.body.last_name, req.body.group_id, req.body.ingreso], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.put("/alumnos",
    function(req, response)
    {
        let sql = "UPDATE students SET first_name = ?, last_name = ?, group_id = ? WHERE student_id = ?";
        connection.query(sql, [req.body.first_name, req.body.last_name, req.body.group_id, req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/alumnos",
    function(req, response)
    {
        let sql = "DELETE FROM students WHERE student_id = ?";
        connection.query(sql, [req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

//ENDPOINTS PROFESORES

app.get("/profesores/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM teachers WHERE teacher_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/profesores",
    function(request, response)
    {
        let sql = "SELECT * FROM teachers";
        connection.query(sql, function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/profesores",
    function(req, response)
    {
        let sql = "INSERT INTO teachers (first_name, last_name) VALUES (?, ?)";
        connection.query(sql, [req.body.first_name, req.body.last_name], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.put("/profesores",
    function(req, response)
    {
        let sql = "UPDATE teachers SET first_name = ?, last_name = ? WHERE teacher_id = ?";
        connection.query(sql, [req.body.first_name, req.body.last_name, req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/profesores",
    function(req, response)
    {
        let sql = "DELETE FROM teachers WHERE teacher_id = ?";
        connection.query(sql, [req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

//ENDPOINTS GRUPOS

app.get("/grupos/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM groups WHERE group_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/grupos",
    function(request, response)
    {
        let sql = "SELECT * FROM groups";
        connection.query(sql, function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/grupos",
    function(req, response)
    {
        let sql = "INSERT INTO groups (name) VALUES (?)";
        connection.query(sql, [req.body.name], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.put("/grupos",
    function(req, response)
    {
        let sql = "UPDATE groups SET name = ? WHERE group_id = ?";
        connection.query(sql, [req.body.name, req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/grupos",
    function(req, response)
    {
        let sql = "DELETE FROM groups WHERE group_id = ?";
        connection.query(sql, [req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

//ENDPOINTS ASIGNATURAS

app.get("/asignaturas/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM subjects WHERE subject_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/asignaturas",
    function(request, response)
    {
        let sql = "SELECT * FROM subjects";
        connection.query(sql, function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/asignaturas",
    function(req, response)
    {
        let sql = "INSERT INTO subjects (title) VALUES (?)";
        connection.query(sql, [req.body.title], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.put("/asignaturas",
    function(req, response)
    {
        let sql = "UPDATE subjects SET title = ? WHERE subject_id = ?";
        connection.query(sql, [req.body.title, req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/asignaturas",
    function(req, response)
    {
        let sql = "DELETE FROM subjects WHERE subject_id = ?";
        connection.query(sql, [req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

//ENDPOINTS NOTAS

app.get("/notas/:id",
    function(request, response)
    {
        let sql = "SELECT * FROM marks INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) WHERE student_id = ? GROUP BY subjects.title ";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/notas",
    function(req, response)
    {
        let sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (?, ?, ?, ?)";
        connection.query(sql, [req.body.student_id, req.body.subject_id, req.body.date, req.body.mark], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.put("/notas",
    function(req, response)
    {
        let sql = "UPDATE marks SET student_id = ?, subject_id = ?, date = ?, mark = ? WHERE mark_id = ?";
        connection.query(sql, [req.body.student_id, req.body.subject_id, req.body.date, req.body.mark, req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/notas",
    function(req, response)
    {
        let sql = "DELETE FROM marks WHERE mark_id = ?";
        connection.query(sql, [req.body.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

//ENDPOINTS ADICIONALES

app.get("/media/:id",
    function(request, response)
    {
        let sql = "SELECT AVG(mark) AS 'Nota Media' FROM marks WHERE marks.student_id = ?";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/apuntadas/:id",
    function(request, response)
    {
        let sql = "SELECT subjects.title FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) WHERE students.student_id = ? GROUP BY subjects.title ";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/apuntadas",
    function(request, response)
    {
        let sql = "SELECT students.first_name, students.last_name, subjects.title FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) GROUP BY students.first_name";
        connection.query(sql, function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/impartidas/:id",
    function(request, response)
    {
        let sql = "SELECT teachers.first_name, teachers.last_name, subjects.title FROM subject_teacher INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) WHERE teachers.teacher_id = ? GROUP BY subjects.title";
        connection.query(sql, [request.params.id], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.get("/impartidas",
    function(request, response)
    {
        let sql = "SELECT teachers.first_name, teachers.last_name, subjects.title FROM subject_teacher INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) ORDER BY teachers.first_name ASC"
        connection.query(sql, function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.listen(550);