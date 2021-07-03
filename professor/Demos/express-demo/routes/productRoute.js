const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'product-form.html'));
});

router.post('/add', (req, res, next)=> {
    console.log(req.body); //save to DB
    res.send('save successfully');
});


module.exports = router;