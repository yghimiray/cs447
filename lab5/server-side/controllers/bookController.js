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
    const savedBook = new Book(null,book.title,book.ISBN,book.publishedDate,book.author).save();
    res.status(200).json(savedBook);
};

exports.update = (req,res,next)=>{
    const book = req.body;
    const id = req.params.bookId;
    const updatedBook = new Book(id,book.title,book.ISBN,book.publishedDate,book.author).update();
    res.status(200).json(updatedBook);
};

exports.deleteById = (req,res,next)=>{
    const id = req.params.bookId;
    res.status(200).json(Book.deleteById(id));
};