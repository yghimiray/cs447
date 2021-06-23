const fs = require('fs');
const path = require('path');

// Reading from a file: 
fs.readFile(path.join(__dirname, 'greet.txt'), { encoding: 'utf8' }, (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Writing to a file: 
fs.writeFile('students.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('Done');
});