const express = require('express');
const path = require('path');
const fs = require('fs');
const exp = require('constants');

const router = express.Router();

router.get('/add',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','user.html'));
});

router.post('/add',(req,res,next)=>{
    res.send("User Saved Successfully.")
});

module.exports= router;