const fs = require("fs");

fs.appendFile('dummy.txt','pratik patil',(err)=>{
     if(err) throw err;

     console.log('we append "pratik patil" to the file "dummy.txt"');
});