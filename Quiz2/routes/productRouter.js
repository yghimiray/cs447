const express = require('express');
const router = express.Router();
//place code your here
const productController = require('../controllers/productController');


// router.get('/products/:productId', productController.getProductById);
// router.post('/products', productController.save);

router.get('/:productId', productController.getProductById);
router.post('/', productController.save);

// router.get('/users/:uid/orders/:orderid/products/:pid', (req, res, next)=>{
//     console.log(req.params); // {uid:12, orderid:567}
//     console.log(req.query);
//     res.json({'success': 'Done!'});
// });


module.exports = router;