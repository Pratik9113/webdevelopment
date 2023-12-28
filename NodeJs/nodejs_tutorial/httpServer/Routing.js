const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // how to do routing
    if(req.url == '/'){
        res.end('hello from the or side');
    }else if (req.url == '/about'){
        res.write('hello from the about side');
        res.end();
    }else if (req.url == '/contact'){
        res.end('hello from the contact side');
    }else{
        res.writeHead(404);
        res.end("404 - error");
    }
})
// now listen that server

server.listen(8004 , "127.0.0.1" ,()=>{
    console.log("started at 8004 port");
})