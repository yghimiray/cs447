const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/messsage" method="POST"><input name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/messsage' && method === 'POST') {

        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFileSync('message.txt', parsedBody.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
    }
}).listen(4000);