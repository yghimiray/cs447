const querystring = require('querystring');

const result1 = querystring.stringify({
    firstname: 'Josh',
    lastname: 'Edward'
})
console.log(result1); //firstname=Josh&lastname=Edward

const result2 = querystring.parse('firstname=Josh&lastname=Edward');
console.log(result2); // {firstname: 'Josh', lastname: 'Edward'}