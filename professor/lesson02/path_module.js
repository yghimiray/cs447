const path = require('path');

//Return the directory part of a path:
console.log(path.dirname('Buffer'));
console.log(path.dirname('File/example1.js')); // /test/something

//Joins two or more parts of a path:
const name = 'joe';
console.log(path.join('/', 'users', name, 'notes.txt'));