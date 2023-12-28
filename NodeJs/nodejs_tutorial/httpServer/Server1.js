const http = require("http");

// get  or create the server 
const server = http.createServer((req,res)=>{
    res.end('hello from the other side');
})
// now listen that server

server.listen(8009 , "127.0.0.1" ,()=>{
    console.log("started at 8009 port");
})