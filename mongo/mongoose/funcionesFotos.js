let mongoose = require("mongoose");
let Photos = require("./photo");

mongoose.connect('mongodb://localhost:27017/Users', {useNewUrlParser: true, useUnifiedTopology:true});

let photo1 = new Photos ({
    user: "Ana",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEaq6jjAODstTzlyqNh2Om7OOKDW8hGo02wA&usqp=CAU",
    title: "Me in the forest",
    description: "Blessed🙏"
})
let photo2 = new Photos ({
    user: "Borja",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEaq6jjAODstTzlyqNh2Om7OOKDW8hGo02wA&usqp=CAU",
    title: "En el quinto pino",
    description: "Evergreen"
})

photo1.save(checkRespuesta);

function checkRespuesta(err, res)
{
    if(err)
    console.log("Error: " + err); 
    else
    {
        console.log("Documeto guardado correctamente");
        photo2.save(function (err, res)
        {
            if(err)
            console.log("Error: " + err); 
            else
            {
                console.log("Documeto guardado correctamente");
                mongoose.disconnect();
            }
        })
    }
};