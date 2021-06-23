const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const person = {
        firstname: 'Josh',
        lastname: 'Edward'
    };
    res.end(JSON.stringify(person));
}).listen(3000, '127.0.0.1');