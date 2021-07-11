let shoppingCart = [];

class ShoppingCart{
    constructor(username,arr){
        this.username= username;
        this.arr= arr;
    }

    addCarts(){
            shoppingCart.push(this)
            return this;
    }

    searchCart(username) {
        const index = shoppingCart.findIndex(c => c.username === username);
        if (index > -1) {
            const myCart = shoppingCart.filter(c=> c.username===username);
            return myCart;

        } else {
            throw new Error("No searched cart is  found.")
        }
    }


    emptyCart(username) {
        const index = shoppingCart.findIndex(c =>c.username === username);
        if (index > -1) {
            shoppingCart = shoppingCart.filter(c => c.username !== username);
        } else {
            throw new Error("Cart not found to delete.")
        }
    }



}

// const cart = new ShoppingCart("hi",[]);
// // const cart =ShoppingCart.additems("pen");
// cart.addCarts();
// cart.addCarts();

// console.log(shoppingCart);

module.exports = ShoppingCart;