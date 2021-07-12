const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
const userController = require('../controllers/userController');

router.get('/',bookController.fetchAll);
router.get('/:bookId',bookController.searchById);
router.post('/',userController.authorizeAdmin,bookController.save);
router.put('/:bookId',userController.authorizeAdmin,bookController.update);
router.delete('/:bookId',userController.authorizeAdmin,bookController.deleteById);


module.exports = router;
