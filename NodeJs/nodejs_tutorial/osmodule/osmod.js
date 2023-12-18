const os = require('os');
console.log(os.arch());
console.log(os.hostname());
const freeMemory  = os.freemem();
// console.log(freeMemory);
// it show me byte 
// convert into gb then look below 
console.log(`${freeMemory/1024/1024/1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);


console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());