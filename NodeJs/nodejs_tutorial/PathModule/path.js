const path = require("path");
console.log(path.dirname('NodeJs\nodejs_tutorial\PathModule\path.js'));
console.log(path.extname('NodeJs\nodejs_tutorial\PathModule\path.js'));
console.log(path.basename('NodeJs\nodejs_tutorial\PathModule\path.js'));

const myPath = console.log(path.parse('NodeJs\nodejs_tutorial\PathModule\path.js'));
console.log(myPath.basename);

