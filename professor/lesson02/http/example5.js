const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.createReadStream('./big.txt').pipe(res);
}).listen(3000, () => console.log('listening on 3000'));