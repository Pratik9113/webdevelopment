const fs = require("fs");
// fs.mkdir("sync",(err)=>{
//     console.log("folder created");
// })
// fs.writeFile('./sync/bio.txt','my name is pratik', (err) =>{
//     console.log('flies created');
// });

// fs.appendFile('./sync/bio.txt',' here is the append my name is pratik', (err) =>{
//     console.log('flies created');
// });

// fs.readFile('./sync/bio.txt', "utf-8",(err,data)=>{
//     console.log(data);
// })

// fs.rename('./sync/bio.txt', './sync/mybio.txt', (err)=>{
//     console.log('rename done');
// })

// delete 
// fs.unlink('./sync/mybio.txt',(err)=>{
//     console.log("file deleted");
// })

// want to remove folder 
fs.rmdir('./sync', (err) =>{
    console.log('folder deleted');
})