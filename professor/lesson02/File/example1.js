const fs = require('fs');
const path = require('path');
console.log(__dirname); // returns absolute path of current file
const greet = fs.readFileSync(path.join(__dirname, 'greet.txt'), 'utf8');
console.log(greet);

const greet2 = fs.readFile(path.join(__dirname, 'greet.txt'), 'utf8',
    function(err, data) { console.log(data); });
console.log('Done!');


const readable = fs.createReadStream("./greet.txt");

// Calling setEncoding method
readable.setEncoding('utf8');

// Handling data event
readable.on('data', (chunk) => {
    console.log(`${chunk}`);
});

// Displays that program 
// is ended
console.log("Program ends!!");