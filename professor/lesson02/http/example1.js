const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello!');
    res.end();
});

server.listen(3000);