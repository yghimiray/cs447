let products = [];
let counter = 1;

module.exports = class Product{

    constructor(pid, title, price, description){
        this.pid = pid;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    static getProductById(pid){
        return products.find(prod => prod.pid === pid);
    }

    saveProduct(){
        this.pid = counter;
        products.push(this);
        counter++;
        return this;
    }

}