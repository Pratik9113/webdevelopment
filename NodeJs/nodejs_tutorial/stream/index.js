// // create a server 
// const fs = require("fs")
// const http = require("http")

// const server = http.createServer();

// server.on('request', (req,res)=>{
//     var fs = require("fs")
//     fs.readFile("input.txt", (err,data)=>{
//         if(err) return console.error(err)
//         res.end(data.toString())
//     })
// })

// // start the server 
// server.listen(8000, "127.0.0.1")






// 2 way for streaming

// const fs = require("fs")
// const http = require("http")

// const server = http.createServer();

// server.on('request', (req,res)=>{
//     const rstream = fs.createReadStream('input.txt');
//     rstream.on('data',(chunkdata)=>{
//         res.write(chunkdata)

//     })
//     rstream.on('end',()=>{
//         res.end()
//     })
//     rstream.on('error', (err)=>{
//         console.error(err);
//         res.end("file not found")
//     })
// })

// server.listen(8000, "127.0.0.1")


// .pipe() event 
const fs = require("fs")
const http = require("http")

const server = http.createServer();

server.on('request', (req,res)=>{
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res)
})

server.listen(8000, "127.0.0.1")