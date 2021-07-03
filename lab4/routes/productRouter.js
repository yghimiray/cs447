const express= require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/add',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','product.html'));
});

router.post('/add', (req,res,next)=>{
    res.send("Product Saved Successfully");
});

module.exports = router;