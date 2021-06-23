const Person = require('./pattern4');
const personObj1 = new Person();
personObj1.getName() // Josh Edward
personObj1.name = 'Emma Smith';
personObj1.getName(); //Emma Smith

const Person2 = require('./pattern4');
const personObj2 = new Person2();
personObj2.getName(); // Josh Edward