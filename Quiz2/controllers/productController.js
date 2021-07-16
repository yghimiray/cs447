const Product = require('../models/product');

exports.getProductById = (req, res, next) => {
    console.log(req.query);
    console.log(req.query.firstname, req.query.lastname);
    const productId = Number(req.params.productId); //number
    res.json(Product.getProductById(productId));
}

exports.save = (req, res, next) =>{
    res.json(new Product(null, req.body.title, req.body.price, req.body.description).saveProduct());  
}