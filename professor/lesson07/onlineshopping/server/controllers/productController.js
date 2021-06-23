const Product = require('../models/product');

exports.getProducts = async(req, res, next) => {
    try {
        res.status(200).json(await Product.fetchAll().toArray());
    } catch (error) {
        next(error);
    }
}

exports.getProductById = async(req, res, next) => {
    try {
        res.status(200).json(await Product.findById(req.params.prodId));
    } catch (error) {
        next(error);
    }

}

exports.save = async(req, res, next) => {
    try {
        const prod = req.body;
        const savedProd = await new Product(null, prod.title, prod.price, prod.description).save();
        res.status(201).json(savedProd.ops[0]);
    } catch (error) {
        next(error);
    }

}

exports.update = async(req, res, next) => {
    try {
        const prod = req.body;
        const updatedProd = new Product(req.params.prodId, prod.title, prod.price, prod.description);
        await updatedProd.update();
        res.status(200).json(updatedProd);
    } catch (error) {
        next(error);
    }

}

exports.deleteById = async(req, res, next) => {
    try {
        await Product.deleteById(req.params.prodId);
        res.status(200).end();
    } catch (error) {
        next(error);
    }

}