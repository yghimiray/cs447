const User = require('../models/user');
const ShoppingCart = require('../models/shoppingCart');
const OrderHistory = require('../models/orderHistory');
const jwt = require('jsonwebtoken');
const secretKey = "Team C bookstore";


exports.login = (req,res,next)=>{
    const user = new User(req.body.name,req.body.username,req.body.password,req.body.role).login();
    if(user){
        const accessToken= jwt.sign({username:user.username,role:user.role},secretKey);
        res.json(accessToken);
    }else{
        res.status(200).json({'error':'Invalid username and password'});
    }
};


exports.createUser = (req,res,next)=>{
    const user = new User(req.body.name,req.body.username,req.body.password,"user").createUser();
    res.status(200).json(user);
};


exports.updateUser = (req,res,next)=>{
    const uname = req.params.username;
    const user = new User(req.body.name,uname,req.body.password,"user").updateUser();
    res.status(200).json(user);
};


exports.searchUser = (req,res,next)=>{
    const uname = req.params.username;
    res.status(200).json(User.searchUser(uname));
};



exports.addShoppingCart = (req,res,next)=>{
    const cart = new User(req.body.name,req.body.username,req.body.password,"user").addShoppingCart();
    res.status(200).json(cart);
};

exports.searchShoppingCart = (req,res,next)=>{
    const uname = req.params.username;
    const cart = new User(null,uname,null,null).searchShoppingCart();
    res.status(200).json(cart);
};


exports.emptyShoppingCart = (req,res,next)=>{
    const uname = req.params.username;
    const cart = new User(null,uname,null,null).emptyShoppingCart();
    res.status(200).json(cart);
};


exports.addOrderHistory = (req,res,next)=>{
    const cart = new User(null,req.body.username,null,null).addOrderHistory();
    res.status(200).json(cart);
};


exports.searchOrders = (req,res,next)=>{
    const uname = req.params.username;
    const cart = new User(null,uname,null,null).searchOrders();
    res.status(200).json(cart);
};