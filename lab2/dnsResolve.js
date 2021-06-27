// Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address. 
//(Search and learn 'dns' module, resolve4)

"use strict";

const dns = require("dns");

const website = "www.miu.edu";

const option ={

};

function callback(error,address){
    console.log("Address :", address);
} 

dns.resolve4(website,option,callback)