/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
"use strict";
// const ShoppingCart = require('../models/shoppingCart');
// const OrderHistory = require('../models/orderHistory');



const User = require('../models/user');
const jwt = require('jsonwebtoken');
const ShoppingCart = require('../models/shoppingCart');
const secretKey = "Team C bookstore";


exports.login = (req, res, next) => {

    const user = new User(null, req.body.username, req.body.password, null).login();
    if (user) {
        const accessToken = jwt.sign({ username: user.username, role: user.role }, secretKey);
        res.json({
            accessToken: accessToken
        });
    } else {
        res.status(200).json({ 'error': 'Invalid username or password, please try again' });
    }
};

exports.authorize = (req, res, next) => {
    console.log(req.headers.authorization)
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403).json({ "error": "Forbidden" });
            }
            console.log("inside 1........")
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ "error": "Unauthorized" });
    }
};

exports.authorizeAdmin = (req, res, next) => {
    if (req.user.role === "admin") {
        next();
    } else {
        return res.status(403).json({ "error": "Forbidden" });
    }
};

//additional stuffs

exports.createUser = (req, res, next) => {
    console.log(req.body)
    const signedUpUser = new User(req.body.name, req.body.username, req.body.password, req.body.role).createUser();
    res.status(200).json(signedUpUser);
};


exports.updateUser = (req, res, next) => {

    const uname = req.params.username;
    const user = new User(req.body.name, uname, req.body.password, req.body.role).updateUser();
    res.status(200).json(user);
};


exports.searchUser = (req, res, next) => {
    const uname = req.params.username;
    res.status(200).json(User.searchUser(uname));
};




//cart and order history

exports.addShoppingCart = (req, res, next) => {
    // console.log("cart test")
    // console.log(req.body)
    const cart = ShoppingCart.addCarts(req.body);
    res.status(200).json(cart);

};

exports.searchShoppingCart = (req, res, next) => {

    const uname = req.params.username;
    const cart = ShoppingCart.searchCart(uname);
    res.status(200).json(cart);

};


exports.emptyShoppingCart = (req, res, next) => {

    const uname = req.params.username;
    const cart = new User(null, uname, null, null).emptyShoppingCart();
    res.status(200).json(cart);

};


exports.addOrderHistory = (req, res, next) => {
    const cart = new User(null, req.body.username, null, null).addOrderHistory();
    res.status(200).json(cart);
};


exports.searchOrders = (req, res, next) => {
    const uname = req.params.username;
    const cart = new User(null, uname, null, null).searchOrders();
    res.status(200).json(cart);
};