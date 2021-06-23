const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    html = html.replace('{Message}', 'Hello from Node.js!');
    res.end(html);
}).listen(3000, '127.0.0.1', () => { console.log('listening on 3000...') });