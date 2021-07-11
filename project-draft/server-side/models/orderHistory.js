let orderHistory = [];

class OrderHistory{
    constructor(username,arr){
        this.username= username;
        this.arr= arr;
    }

    addOrders(){
            orderHistory.push(this)
            return this;
    }

    searchOrder(username) {
        const index = orderHistory.findIndex(o => o.username === username);
        if (index > -1) {
            const myOrderHistory = orderHistory.filter(o=> o.username===username);
            return myOrderHistory;
        } else {
            throw new Error("No search found.")
        }
    }

   

}


// orderHistory.push(new OrderHistory("Ashenafi",[]));
// orderHistory.push(new OrderHistory("Ashenafi",[]));
// orderHistory.push(new OrderHistory("Yogesh",[]));
// orderHistory.push(new OrderHistory("Ashenafi",[]));
// console.log(OrderHistory.searchOrder("Ashenafi"));

module.exports = OrderHistory;