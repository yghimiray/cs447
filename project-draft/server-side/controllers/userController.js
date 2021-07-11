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
        // res.status(200).json(user);
        next();
    }else{
        res.status(200).json({'error':'Invalid username and password'});
    }
}

exports.addShoppingCart = (req,res,next)=>{
    const cart = new User(req.body.name,req.body.username,req.body.password,req.body.role).addCart();
    res.status(200).json(cart);
};

exports.searchCart = (req,res,next)=>{
    const username = req.params.username;
    res.status(200).json(ShoppingCart.searchCart(username));
};

exports.emptyCart = (req,res,next)=>{
    const username= req.params.username;
    ShoppingCart.emptyCart(username);
    res.status(200).end();
};


exports.addOrderHistory = (req,res,next)=>{
    const order = new User(req.body.name,req.body.username,req.body.password,req.body.role).addOrderHistory();
    res.status(200).json(order);
};

exports.searchOrder = (req,res,next)=>{
    const uname = req.params.uname;
    res.status(200).json(OrderHistory.searchOrder(uname));
};
