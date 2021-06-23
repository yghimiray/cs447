const fs = require('fs');
const https = require('https');

const options = {
    key: fs.readFileSync('./privateKey.key'),
    cert: fs.readFileSync('./certificate.crt')
};

https.createServer(options, (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello from my HTTPS Web server!!!\n');
}).listen(8443, () => console.log('listening on 8443'));