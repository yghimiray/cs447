const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secretKey = "Team C bookstore";


exports.login = (req,res,next)=>{
    const user = new User(req.body.fname,req.body.lname,req.body.username,req.body.password,req.body.role).login();
    if(user){
        const accessToken= jwt.sign({username:user.username,role:user.role},secretKey);
        res.json(accessToken);
        // res.status(200).json(user);
        next();
    }else{
        res.status(200).json({'error':'Invalid username and password'});
    }
}