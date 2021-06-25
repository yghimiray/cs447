// Create a web server that's going to send a response of big image (bigger then 3MB) to any client 
//that sends a request to your specified server:port. Use the best way for performance. 
//(Try to solve this in many different ways and inspect the loading time in the browser and 
//send many requests to see the performance differences)

"use strict";
const fs = require('fs');
const path = require('path');


//1. Synchronous Method (Output file does not open)
// const readable = fs.readFileSync(path.join(__dirname,'RedDahlia.jpg'),'utf8');
//const writable = fs.writeFileSync(path.join(__dirname,'responseSync.jpg'),readable,'utf8');

// 2. Asynchronous method (Output file does not open)
// const readable = fs.readFile(path.join(__dirname,'RedDahlia.jpg'),'utf8',(err,data)=>{
//     if(err)
//     throw err;
// });
// const writable = fs.writeFile(path.join(__dirname,'responseAsync.jpg'),readable,'utf8',(err)=>{
// if(err)
// throw err;
// });

// 3. Creating Stream Method
// const readable = fs.createReadStream(path.join(__dirname,'RedDahlia.jpg'),{highWaterMark : 20*1024});
// const writable = fs.createWriteStream(path.join(__dirname,'responseStream.jpg'));
// readable.pipe(writable);

// 4. Web (http) Server
const http = require('http');
const server = http.createServer();
server.on('request',(req, resp)=> {
    const readable = fs.createReadStream(path.join(__dirname,'RedDahlia.jpg'),{highWaterMark : 20*1024});
    readable.pipe(resp);
});
server.listen(8000);