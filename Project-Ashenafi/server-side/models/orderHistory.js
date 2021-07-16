/* eslint-disable id-length */
/* eslint-disable require-jsdoc */


"use strict";

let orderHistories = [];

class OrderHistory {
    constructor(username, obj) {
        this.username = username;
        this.obj = obj;
    }

    addOrders() {
        orderHistories.push(this);
        return this;
    }

    searchOrder(username) {
        const index = orderHistories.findIndex(o => o.username === username);
        if (index > -1) {
            const myOrderHistory = orderHistories.filter(o => o.username === username);
            return myOrderHistory;
        } else {
            throw new Error("No search found.");
        }
    }

}

// orderHistory.push(new OrderHistory("Ashenafi",[]));
// orderHistory.push(new OrderHistory("Ashenafi",[]));
// orderHistory.push(new OrderHistory("Yogesh",[]));
// orderHistory.push(new OrderHistory("Ashenafi",[]));
// console.log(OrderHistory.searchOrder("Ashenafi"));

module.exports = OrderHistory;