let mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codenotch', {useNewUrlParser: true, useUnifiedTopology:true});

function checkRespuesta(err, res)
{
    if(err)
    console.log("Error: " + err)
    else
    {
        console.log("Método realizado correctamente");
    }
}

let LibroSchema = new mongoose.Schema(
{
    titulo: String,
    nPaginas: Number,
    autores: [{type: mongoose.Schema.Types.ObjectId, ref: "MuchosAutores"}]
})

let LibroModel = mongoose.model("MuchosLibros", LibroSchema);

let AutorSchema = new mongoose.Schema(
{
    nombre: String,
    edad: Number,
    libros: [{type: mongoose.Schema.Types.ObjectId, ref: "MuchosLibros"}]
})

let AutorModel = mongoose.model("MuchosAutores", AutorSchema);

let libro = new LibroModel({titulo: "Jeff Koons ladrando", nPaginas: 230, autores:[]})
libro.save(checkRespuesta);

let libro2 = new LibroModel({titulo: "Ronda por Lladró", nPaginas: 420, autores:[]})
libro2.save(checkRespuesta);

let libro3 = new LibroModel({titulo: "Anuario 2004/2005", nPaginas: 355, autores:[]})
libro3.save(checkRespuesta);

let libro4 = new LibroModel({titulo: "Qué pasó cuando te dije que te amaba", nPaginas: 290, autores:[]})
libro4.save(checkRespuesta);

let autor = new AutorModel({nombre: "Fulano", edad: 63, libros: []})
autor.save(checkRespuesta);

let autor2 = new AutorModel({nombre: "Mengana", edad: 43, libros: []})
autor2.save(checkRespuesta);

let autor3 = new AutorModel({nombre: "Zutano", edad: 23, libros: []})
autor3.save(checkRespuesta);

let autor4 = new AutorModel({nombre: "Perengana", edad: 38, libros: []})
autor4.save(checkRespuesta);

LibroModel.updateOne({titulo: "Jeff Koons ladrando"}, {autores:['5f5f4f286c7911057885f201', '5f5f4f286c7911057885f202']}, checkRespuesta)
LibroModel.updateOne({titulo: "Ronda por Lladró"}, {autores:['5f5f4f286c7911057885f201', '5f5f4f286c7911057885f203']}, checkRespuesta)
LibroModel.updateOne({titulo: "Anuario 2004/2005"}, {autores:['5f5f4f286c7911057885f203', '5f5f4f286c7911057885f202']}, checkRespuesta)
LibroModel.updateOne({titulo: "Holaquétal"}, {autores:['5f5f4f286c7911057885f204', '5f5f4f286c7911057885f201']}, checkRespuesta)

AutorModel.updateOne({nombre: "Fulano"}, {libros: ['5f5f4f286c7911057885f1fd', '5f5f4f286c7911057885f1fe', '5f5f4f286c7911057885f200']}, checkRespuesta)
AutorModel.updateOne({nombre: "Mengana"}, {libros: ['5f5f4f286c7911057885f1fd', '5f5f4f286c7911057885f1ff']}, checkRespuesta)
AutorModel.updateOne({nombre: "Zutano"}, {libros: ['5f5f4f286c7911057885f1fe', '5f5f4f286c7911057885f1ff']}, checkRespuesta)
AutorModel.updateOne({nombre: "Perengana"}, {libros: ['5f5f4f286c7911057885f200']}, checkRespuesta)

AutorModel.findOne({ nombre: 'Zutano'})
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

LibroModel.findOne({ titulo: 'Jeff Koons ladrando'})
    .populate('autores')
    .exec((err, libro) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log(`El libro ${libro.titulo} tiene ${libro.autores.length} autores`);
        console.log("AUTORES: " + "\n" + libro.autores[0].nombre + "\n" + libro.autores[1].nombre);
        console.log(libro);
        mongoose.disconnect();
    })