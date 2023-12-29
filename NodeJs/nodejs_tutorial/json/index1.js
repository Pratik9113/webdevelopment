const fs = require("fs");
const obj = {
    name : "pratik",
    age :30
};

const jsonData = JSON.stringify(obj);
fs.writeFile('./json/json2.json',jsonData,()=>{
    console.log('done');
})

// how to access
fs.readFile("./json/json2.json", "utf-8", (err,data)=>{
   // console.log(data);
   const objData = JSON.parse(data);
   console.log(objData);
})