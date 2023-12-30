const http = require("http");
const url = require("url");
const fs = require("fs");
const server = http.createServer((req,res)=>{

    const data = fs.readFile(`${__dirname}/UserApi/userapi.json`, 'utf8');
    const objData = JSON.parse(data);
    // console.log(req.url);
    // how to do routing
    if(req.url == '/'){
        res.end('hello from the or side');
    }else if (req.url == '/about'){
        res.write('hello from the about side');
        res.end();
    }else if (req.url == '/contact'){
        res.end('hello from the contact side');
    }else if (req.url == '/userapi'){
        // fs.readFile(`${__dirname}/UserApi/userapi.json`, 'utf8', (err,data)=>{
        //     console.log(data);
        //     const objData = JSON.parse(data);
        //     res.end(objData[4].id);
        // });
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(objData[2].id)
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1>404 - error</h1>");
    }
});

// now listen that server

server.listen(8004 , "127.0.0.1" ,()=>{
    console.log("started at 8004 port");
})