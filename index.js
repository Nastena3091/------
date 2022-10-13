// const http = require("http");
// const port =3000
// const hostname = '127.0.0.1';
// const users = [{name:"User1", age:"16"},{name:"User2", age:"18"}];
// const server = http.createServer(function(request, response){
//     if(request.url=="/users"){
//         response.statusCode=200;
//         response.setHeader('Content-Type','text/json')
//         response.end(JSON.stringify(users));
//     }
// })
// server.listen(port, hostname, ()=> {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

const express= require("express");
const app=express();
app.get("/", (req,res)=>(
    res.send("Hello World!")
));
app.listen(3000);

const server = http.createServer((req,res) => {
    if(req.url == "/users"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.end(JSON.stringify(users));
    }
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`)
})

http.createServer(
    function(req, res){res.end("Hello World!");}
).listen(3000);