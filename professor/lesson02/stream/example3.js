const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// this is a readable & writable stream and it returns a zipped stream 
const gzip = zlib.createGzip();

const readable = fs.createReadStream(path.join(__dirname, 'source.txt'));
const compressed = fs.createWriteStream(path.join(__dirname, 'destination.txt.gz'));

readable.pipe(gzip).pipe(compressed);