const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
const UserController = require('../controllers/userController');

router.get('/',bookController.fetchAll);
router.get('/:bookId',bookController.searchById);
// router.post('/',UserController.authorizeAdmin,bookController.save);
// router.put('/:bookId',UserController.authorizeAdmin,bookController.update);
// router.delete('/:bookId',UserController.authorizeAdmin,bookController.deleteById);

router.post('/',bookController.save);
router.put('/:bookId',bookController.update);
router.delete('/:bookId',bookController.deleteById);


module.exports = router;
