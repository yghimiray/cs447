const { ObjectID } = require('mongodb');
const getDb = require('../utils/database').getDb;

module.exports = class Product {

    constructor(_id, title, price, description) {
        this._id = _id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save() {
        return getDb().collection('products').insertOne(this);
    }

    update() {
        return getDb().collection('products').updateOne({ _id: new ObjectID(this._id) }, { $set: { title: this.title, price: this.price, description: this.description } });
    }

    static fetchAll() {
        return getDb().collection('products').find();
    }

    static findById(productId) {
        return getDb().collection('products').findOne({ _id: new ObjectID(productId) });
    }

    static deleteById(productId) {
        return getDb().collection('products').deleteOne({ _id: new ObjectID(productId) });
    }

}