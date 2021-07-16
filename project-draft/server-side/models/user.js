let users = [];
let ShoppingCart = require('./shoppingCart');
const OrderHistory = require('./orderHistory');

class User {
    constructor(name,username, password, role ) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.role = role;

    }

    static init(){
        users.push(new User("Yogesh",'admin',12345,'admin'));
    }
  

    login() {
        return users.find(u => { return u.username === this.username && u.password === this.password });
    }

    createUser(){
        const index = users.findIndex(u => u.username === this.username);
        if(index > -1){
            throw new Error ({error:"User already exists"})
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

    static searchUser(uname) {
        const index = users.findIndex(u => u.username === uname);
        if (index > -1) {
            return users[index];
        } else {
            throw new Error("No search found.")
        }
    }

    addShoppingCart(book){
        const shoppingCart = new ShoppingCart(this.username,book).addCarts();
        // this.shoppingCart.push(book);
        return shoppingCart;
    }

    searchShoppingCart(){
        const shoppingCart = new ShoppingCart(this.username,null).searchCart(this.username);
        return shoppingCart;
        
        // const length = this.
        // shoppingCart.length;
        // if (length === 0) {
        //     throw new Error("Your cart is empty.")
        // } else {
        //    return this.shoppingCart;
        // }
    }

    emptyShoppingCart(){
        const shoppingCart = new ShoppingCart(this.username,null).emptyCart(this.username);
        return shoppingCart;


        // return this.shoppingCart = [];
    }


    addOrderHistory(book){
        const orderHistory = new OrderHistory(this.username,book).addOrders();
        return orderHistory;
    }


    searchOrders(){
        const orderHistory = new OrderHistory(this.username,null).searchOrder(this.username);
        return orderHistory;
    }
}



// users.push(new User("john Smith",'john', 'admin123', 'admin'));
// users.push(new User("Edward Jack", 'edward', 'Edward567', 'member'));


// const user = new User("john Smith",'Ashenafi', 'admin123', 'admin');
// const user1 = new User("john Smith",'Yogesh', 'admin123', 'admin');
// user.addShoppingCart();
// user1.addShoppingCart();
// user.addShoppingCart();
// user.addShoppingCart();
// user1.addShoppingCart();

// user1.searchShoppingCart().forEach(elem=>{
//     console.log(elem.username)
// });

// user1.emptyShoppingCart()

// user.searchShoppingCart().forEach(elem=>{
//     console.log(elem.username)
// });




// console.log(User.searchUser("edward"));

module.exports = User;