const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secretKey = "Yogesh's bookstore";

exports.login = (req,res,next)=>{
    const userBody = req.body;
    const loginUser = new User(userBody.username,userBody.password,null).login();
    if(loginUser){//make an object with username+role and sign with the secretkey.
        const accessToken= jwt.sign({username:loginUser.username,role:loginUser.role},secretKey);
        res.json(accessToken);
    }else{
        res.status(200).json({'error':'Invalid username and password'});
    }
};

exports.authorize = (req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(authHeader){//if authheader exists, verify, else say unauthorized user.
        const token = authHeader.split(' ')[1];
        jwt.verify(token.secretKey,(err,data)=>{
            if(err){//if authheader exists but token is corrupted.
              return  res.status(403).json({'error':'Forbidden'});
            }else{//this data is an object made from token which has username and role as properties.
                req.user=data;//add a new property in req to access it in other middlewares.
                next(); // move to next middleware
            }
        })
    }else{ // authheader does not exists
        res.status(401).json({'error':'Unauthorized user'});
    }
};


exports.authorizeAdmin = (req,res,next)=>{
    if(req.user.role='admin'){
        next();
    }else{
        return res.status(403).json({'error':'Forbidden'});
    }
};