let users = [];
let ShoppingCart = require('./shoppingCart');
const OrderHistory = require('./orderHistory');

class User {
    constructor(name,username, password, role) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    login() {
        return users.find(u => { return u.username === this.username && u.password === this.password });
    }

    createUser(){
        const index = users.findIndex(u => u.username === this.username);
        if(index > -1){
            throw new Error ("User already exists")
        }else{
            users.push(this);
            return this;
        }
    }

    updateUser() {
        const index = users.findIndex(u => u.username === this.username);
        if(index > -1) {
            users.splice(index,1,this);
            return this;
        }else{
            throw new Error("User not found to update");
        }
    }

    static search(username) {
        const index = users.findIndex(u => u.username === username);
        if (index > -1) {
            return users[index];
        } else {
            throw new Error("No search found.")
        }
    }

    addShoppingCart(){
        const shoppingCart = new ShoppingCart(this.username,[]).addCarts();
        return shoppingCart;
    }

    searchShoppingCart(){
        const cart = new ShoppingCart(this.username,[]).searchCart(this.username);
        return cart;
    }

    emptyShoppingCart(){
        const cart = new ShoppingCart(this.username,[]).emptyCart(this.username);
        return cart;
    }


    addOrderHistory(){
        const orderHistory = new OrderHistory(this.username,[]).addOrders();
        return orderHistory;
    }


    searchOrders(){
        const orderHistory = new OrderHistory(this.username,[]).searchOrder(this.username);
        return orderHistory;
    }
}



users.push(new User("john Smith",'john', 'admin123', 'admin'));
// users.push(new User("Edward Jack", 'edward', 'Edward567', 'member'));


const user = new User("john Smith",'Ashenafi', 'admin123', 'admin');
const user1 = new User("john Smith",'Yogesh', 'admin123', 'admin');

user.addShoppingCart();
user1.addShoppingCart();
user.addShoppingCart();
user.addShoppingCart();
user1.addShoppingCart();


user1.searchShoppingCart().forEach(elem=>{
    console.log(elem.username)
});

user1.emptyShoppingCart()

user.searchShoppingCart().forEach(elem=>{
    console.log(elem.username)
});






module.exports = User;