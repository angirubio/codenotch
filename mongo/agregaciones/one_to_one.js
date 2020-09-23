let mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codenotch', {useNewUrlParser: true, useUnifiedTopology:true});

let LibroSchema = new mongoose.Schema(
{
    titulo: String,
    nPaginas: Number
})

let LibroModel = mongoose.model("LibroUno", LibroSchema);

let AutorSchema = new mongoose.Schema(
{
    nombre: String,
    edad: Number,
    libro: {type: mongoose.Schema.Types.ObjectId, ref: "LibroUno"}
})

let AutorModel = mongoose.model("AutorUno", AutorSchema);

let libro = new LibroModel({titulo: "Los Franciscanos", nPaginas: 300})

libro.save(function(err, res)
{
    if(err)
    console.log("Error: " + err)
    else
    {
        console.log("Método realizado correctamente");
        console.log(res);
        let autor = new AutorModel({nombre: "Lala Mema", edad: 28, libro: res._id})
        autor.save(function(err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                console.log("Método realizado correctamente");
                mongoose.disconnect();
            }
        });
    }
})

AutorModel.findOne({ nombre: 'Lala Mema'})
    .populate('libro')
    .exec((err, autor) =>
    {
        if(err)
        {
            console.log(err);
        }
        console.log(`El autor ${autor.nombre} tiene ${autor.libro.titulo}`);
        console.log(autor);
        mongoose.disconnect();
    })