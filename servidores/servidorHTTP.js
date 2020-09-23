/* GET acceder a la url / HEAD / POST cambiar datos / PUT / DELETE borrar algo de la aplicación
request: HEADER / METHOD - response: STATUS CODE (404) / BODY(POST PUT UPDATE DELETE) / URL(MUESTRA URL)
127.0.0.1:puerto = localhost:3000/url */

const http = require("http");

const server = http.createServer(function(request, response)
{
    console.log("Request from client");
    console.log("Header Request: " + request.headers.host + " 127.0.0.1:3000 or localhost:3000")
    console.log("Content Type: " + request.headers["content-type"])
    console.log("Content Length: " + request.headers["content-length"])
    console.log("User Agent: " + request.headers["user-agent"])
    console.log("Request Method: " + request.method)
    console.log("Response Status Code: " + response.statusCode)
    console.log("Request URL: " + request.url)
    response.writeHead(200,{"Content-Type":"application/json"});
    if (request.url === "/bye")
    {
        response.write(JSON.stringify({"ok":"true", "message":"Adios!"}))
    } else {
        response.write(JSON.stringify({"ok":"true", "message":"Recibido!"}))
    }
    response.end();
});
server.listen(3000);