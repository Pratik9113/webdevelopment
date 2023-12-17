const fs = require('fs');
// fs.writeFileSync('read.txt', 'welcome to new file here we use data');
// fs.writeFileSync('read.txt', 'welcome to new file here we use data here ');

// fs.appendFileSync('read.txt', ' this is new line boss');
// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// nodejs include an additional data type called buffer
// buffer is mainly used to store binary data
{/* <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 65 77 20 66 69 6c 65 20 68 65 72 65 20 77 65 20 75 73 65 20 64 61 74 61 20 68 65 72 65 20 20 74 68 69 73 20 69 73 ... 36 more bytes>
     */}

// ord_data - data converted into string
// const buf_data = fs.readFileSync('read.txt');

// org_data = buf_data.toString();
// console.log(org_data);

// to rename the file
fs.renameSync('read.txt','readwrite.txt');