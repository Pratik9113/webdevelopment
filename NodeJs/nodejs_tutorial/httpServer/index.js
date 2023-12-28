// include http 
const http = require("http");

// the http.createServer() method includes request and response parameter

// the request object can be used to get information about the current HTTP request.

// if the response from the HTTP server is supposed to be displayed as HTML

// you should include an HTTP header with the correct content type




const server = http.createServer((req,res)=>{
    // here i am requesting url 
    // console.log(req.url);

    // routing from one page to another pages
    if(req.url === '/'){
        res.end("you are at home page buddy");
    }else if (req.url == '/about'){
        res.end("you are at about page buddy");
    }else if (req.url == '/contact'){
        res.end("you are at contact page buddy");
    }else{
        res.end(`404 page error doesn't exit`);
    }``
    res.end("hello from the other side pratik");
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("server started at 8000 port");
});