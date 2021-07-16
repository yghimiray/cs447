/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";

let b = [{ "id": 1, "title": "Book A", "qty": 300, "publishedDate": "07/07/2021", "price": 25 },
    { "id": 2, "title": "Book B", "qty": 100, "publishedDate": "07/07/2021", "price": 20 }
];

let books = [b[0], b[1]];

class Book {
    constructor(id, title, qty, publishedDate, price) {
        this.id = id;
        this.title = title;
        this.qty = qty;
        this.publishedDate = publishedDate;
        this.price = price;
    }

    save() {
        this.id = Math.floor(Math.random() * 10000000).toString();
        books.push(this);
        return this;
    }

    static searchById(bookId) {
        const index = books.findIndex(book => book.id === bookId);
        console.log(" index  " + index)
        if (index > -1) {
            return books[index];
        } else {
            throw new Error("No search found.");
        }
    }

    static deleteById(bookId) {
        const index = books.findIndex(book => book.id === bookId);
        if (index > -1) {
            books = books.filter(book => book.id !== bookId);
        } else {
            throw new Error("Book not found to delete.")
        }
    }

    update() {
        const index = books.findIndex(book => book.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error("Book not found to update");
        }
    }

    static fetchAll() {
        return books;
    }

}

module.exports = Book;