const fs = require("fs");
// fs.mkdirSync('make');
// fs.writeFileSync('make/demo.txt','here is my file in folder make');
// fs.appendFileSync('make/demo.txt',' here is my file in folder make');
// read 
// const data = fs.readFileSync('make/demo.txt');
// buuferdata = data.toString();
// console.log(buuferdata);


// const data = fs.readFileSync('make/demo.txt','utf-8');
// console.log(data);

// fs.renameSync('make/demo.txt','make/demo1.txt');

// delete the both file and folder 
// 1 way first delete file 
// fs.unlinkSync('make/demo1.txt');

fs.rmdirSync('make');