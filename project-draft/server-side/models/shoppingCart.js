let shoppingCarts = [];

class ShoppingCart{
    constructor(username,obj){
        this.username= username;
        this.obj= obj;
    }

    addCarts(){
            shoppingCarts.push(this)
            return this;
    }

    searchCart(username) {
        const index = shoppingCarts.findIndex(c => c.username === username);
        if (index > -1) {
            const myCart = shoppingCarts.filter(c=> c.username===username);
            return myCart;

        } else {
            throw new Error("No searched cart is  found.")
        }
    }


    emptyCart(username) {
        const index = shoppingCarts.findIndex(c =>c.username === username);
        if (index > -1) {
            shoppingCart = shoppingCarts.filter(c => c.username !== username);
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