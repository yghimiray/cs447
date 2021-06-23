const personObj2 = require('./pattern3'); // cached
console.log('------- inside cached.js ----------');
personObj2.getName(); //Emma Smith
module.exports = personObj2;