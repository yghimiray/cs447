const express = require('express');
const router = express.Router();

const controller = require('../controllers/bookController');

router.get('/',controller.fetchAll);
router.get('/:bookId',controller.searchById);
router.post('/',controller.save);
router.put('/:bookId',controller.update);
router.delete('/:bookId',controller.deleteById);


module.exports = router;
