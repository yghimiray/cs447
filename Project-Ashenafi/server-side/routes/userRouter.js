/* eslint-disable quotes */
"use strict";
const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');


userRouter.post('/users', userController.createUser);
userRouter.post('/users/login', userController.login);
userRouter.use(userController.authorize);

userRouter.get('/users/:username', userController.searchUser); /// userRouter.put('/users/:username', userController.authorizeAdmin, userController.update);
userRouter.put('/users/:username', userController.updateUser); // Not working in Postman....userRouter.delete('/users/:id', userController.authorizeAdmin, userController.delete);



userRouter.post('/users/carts', userController.addShoppingCart);
userRouter.get('/users/carts/:username', userController.searchShoppingCart);
userRouter.delete('/users/carts/:username', userController.emptyShoppingCart);



userRouter.post('/users/orders', userController.addOrderHistory);
userRouter.get('/users/orders/:username', userController.searchOrders);



module.exports = userRouter;