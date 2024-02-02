const { EventEmitter } = require("nodemailer/lib/xoauth2");

class myEmitter extends EventEmitter{}
myEmitter = new myEmitter();

myEmitter.on('WaterFull' , () =>{
    console.log('please turn off the motar')
    setTimeout(()=>{
        console.log('please turnm off');
    },3000);
});
console.log("the script is still running");

myEmitter.emit('WaterFull');