const Book = require ('../models/book');

exports.fetchAll = (req, res,next)=>{
    res.status(200).json(Book.fetchAll());
};

exports.searchById = (req,res,next)=>{
    const id = req.params.bookId;
    res.status(200).json(Book.searchById(id));
};

exports.save = (req,res,next)=>{
    const book = req.body;
    const savedBook = new Book(book.id,book.title,book.qty,book.publishedDate,book.price).save();
    res.status(201).json(savedBook);
};

exports.update = (req,res,next)=>{
    const book = req.body;
    const id = req.params.bookId;
    const updatedBook = new Book(id,book.title,book.qty,book.publishedDate,book.price).update();
    res.status(200).json(updatedBook);
};

exports.deleteById = (req,res,next)=>{
    const id = req.params.bookId;
    Book.deleteById(id);
    res.status(200).end();
};