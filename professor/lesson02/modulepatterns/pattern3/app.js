const personObj = require('./pattern3');
personObj.getName(); // Josh Edward
personObj.name = 'Emma Smith';
personObj.getName(); //Emma Smith
const cachedObj = require('./cached.js'); // cached
cachedObj.getName();