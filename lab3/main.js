// Lab 3
// Create a http or https server which is listen to 3000 port.
// The home page “/” which displays an html page with one input to enter any text message
// User enter some message, then click “Submit” button
// The user’s inputs are stored in a local file on the server side.
// User will be redirect to home page after saving successfully.

"use strict";
const fs = require('fs');
const path = require('path');
const http = require('http');

http.createServer((req, res) => {

    if (req.url === "/") {
        fs.createReadStream('index.html').pipe(res);

    } else if (req.url === "/textMessage" && req.method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const postData = Buffer.concat(body).toString();
            // fs.writeFileSync("destination.txt",postData,(err,data)=>{
            //     if(err) throw err
            //     res.end(`printed ${postData}`);

            // });

            const writable = fs.createWriteStream("destination.txt", { flags: 'a' });
            writable.write(postData + "\n");
            res.end("Saved Successfully!");
        });
        res.statusCode = 302;
        res.setHeader("Location", "/");

    } else {
        res.end("Try Again!");
    }

}).listen(3000);