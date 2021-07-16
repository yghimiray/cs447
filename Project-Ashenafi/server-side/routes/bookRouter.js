/* eslint-disable quotes */
"use strict";

const express = require('express');
const bookRouter = express.Router();

const controller = require('../controllers/bookController');
const userController = require('../controllers/userController');


bookRouter.post('/',userController.authorizeAdmin, controller.save);
bookRouter.get('/', controller.fetchAll);
bookRouter.get('/:bookId', controller.searchById);

bookRouter.put('/:bookId', controller.update);
bookRouter.delete('/:bookId', controller.deleteById);


module.exports = bookRouter;