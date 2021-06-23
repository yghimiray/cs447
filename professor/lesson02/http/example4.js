const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('./big.txt', (err, data) => {
        if (err) throw err;

        res.end(data);
    });
}).listen(3000, () => console.log('listening on 3000'));