// Using Node Stream API, create a script to unzip a file (after you zip it). 
//(Use zlib.createGunzip() stream)

"use strict";
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

///////////////////////////////////////////////////////////////////////////////////
// To zip the file

// const zip = zlib.createGzip();

// const readable = fs.createReadStream(path.join(__dirname,'primary.txt'));
// const writable = fs.createWriteStream(path.join(__dirname,'zipped.txt.gz'));

// readable.pipe(zip).pipe(writable);

///////////////////////////////////////////////////////////////////////////////////////
// To unzip the file

const unzip = zlib.createGunzip();
const zippedFile = fs.createReadStream(path.join(__dirname,'zipped.txt.gz'));
const unzippedFile = fs.createWriteStream(path.join(__dirname,'unzipped.txt'));

zippedFile.pipe(unzip).pipe(unzippedFile);
