const fs = require('fs');
// fs.writeFile("read.txt","this is async file",(err)=>{
//     console.log('completed');
//     console.log(err);
// });
// fs.appendFile("read.txt"," this is async file",(err)=>{
//     console.log('completed');
//     console.log(err);
// });
// fs.readFile("read.txt",(err,response)=>{
//         console.log(response);
// });
/// it will give buffer data 

fs.readFile("read.txt","utf-8",(err,response)=>{
    console.log(response);
});