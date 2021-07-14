let books = [];

class Book {
    constructor(id, title, qty, publishedDate, price) {
        this.id = id;
        this.title = title;
        this.qty = qty;
        this.publishedDate = publishedDate;
        this.price = price;
    }

    save() {
        this.id = Math.floor(Math.random()*1000000).toString();
        books.push(this);
        return this;
    }

    static searchById(bookId) {
        const index = books.findIndex(book => book.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error("No search found.")
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
        if(index > -1) {
            books.splice(index,1,this);
            return this;
        }else{
            throw new Error("Book not found to update");
        }
    }

    static fetchAll(){
        return books;
    }

}

module.exports = Book;