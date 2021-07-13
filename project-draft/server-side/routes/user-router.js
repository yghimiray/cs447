const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');

userRouter.post('/users/login',userController.login);
userRouter.post('/users',userController.createUser);
userRouter.put('/users/:username',userController.updateUser);// Not working in Postman
userRouter.get('/users/:username',userController.searchUser);
userRouter.post('/shoppingCarts',userController.addShoppingCart);
userRouter.get('/shoppingCarts/:username',userController.searchShoppingCart);
userRouter.delete('/shoppingCarts/:username',userController.emptyShoppingCart);
userRouter.post('/orderHistories',userController.addOrderHistory);
userRouter.get('/orderHistories/:username',userController.searchOrders);

module.exports=userRouter
