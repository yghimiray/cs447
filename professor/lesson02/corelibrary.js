const util = require('util'); // We do not use ./ before the filename
const sayHi = util.format("Hi, %s", 'Josh');
console.log(sayHi); //Hi, Josh