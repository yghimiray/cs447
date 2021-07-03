const express = require('express');

const router = express.Router();

router.get('/add', (req, res, next)=>{
    const html = `
    <!DOCTYPE html>
    <html>
    <body>
    <form action="add" method="post">
      Firstname: <input type="text" name="firstname"><br>
      Lastname: <input type="text" name="lastname"><br>
      <input type="submit" value="Submit">
    </form>   
    </body>
    </html>`;
    res.send(html);
});

router.post('/add', (req, res, next)=> {
    console.log(req.body); //save to DB
    res.send('save successfully');
});

module.exports = router;