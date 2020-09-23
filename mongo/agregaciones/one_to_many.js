let mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codenotch', {useNewUrlParser: true, useUnifiedTopology:true});

let LibroSchema = new mongoose.Schema(
{
    titulo: String,
    nPaginas: Number
})

let LibroModel = mongoose.model("Libro", LibroSchema);

let AutorSchema = new mongoose.Schema(
{
    nombre: String,
    edad: Number,
    libros: [{type: mongoose.Schema.Types.ObjectId, ref: "Libro"}]
})

let AutorModel = mongoose.model("Autor", AutorSchema);

let referencias = [];
let libro = new LibroModel({titulo: "Tijuana", nPaginas: 580})

libro.save(function(err, res)
{
    if(err)
    console.log("Error: " + err)
    else
    {
        console.log("Método realizado correctamente");
        referencias.push(res._id)
        libro = new LibroModel({titulo: "El capitán Hipster", nPaginas: 670})
        libro.save(function(err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                referencias.push(res._id);
                libro = new LibroModel({titulo:"El cuarto de Ben Affleck", nPaginas: 810})
                libro.save(function(err, res)
                {
                    if(err)
                    console.log("Error: " + err)
                    else
                    {
                        referencias.push(res._id);
                        let autor = new AutorModel({nombre: "Lala Mema", edad: 28, libros: referencias})
                        autor.save(function(err, res)
                        {
                            if(err)
                            console.log("Error: " + err); 
                            else
                            {
                                console.log("Método realizado correctamente");
                                mongoose.disconnect();
                            }
                        })
                    }
                })
            }
        });
    }
})

AutorModel.findOne({ nombre: 'Lala Mema'})
    .populate('libros')
    .exec((err, autor) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log(`El autor ${autor.nombre} tiene ${autor.libros.length} libros`);
        console.log("DATOS DEL PRIMER LIBRO: " + "\n" + "Titulo: " + autor.libros[0].titulo + "\n" + "Páginas: " + autor.libros[0].nPaginas);
        console.log(autor);
        mongoose.disconnect();
    })