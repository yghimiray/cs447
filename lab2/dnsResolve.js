"use strict";

const dns = require("dns");

const website = "www.miu.edu";

const option ={

};

function callback(error,address){
    console.log("Address :", address);
} 

dns.resolve4(website,option,callback)