const express = require('express');
const productRouter = require('./routes/product');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', productRouter);

// app.get('/', function(req, res) {
//     throw new Error('BROKEN'); // Express will catch this on its own. 
// });

app.get('/file', function(req, res, next) {
    fs.readFile('/file-does-not-exist', function(err, data) {
        if (err) {
            next(err); // Pass errors to Express. 
        } else {
            res.send(data);
        }
    });
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.use(function(err, req, res, next) {
    res.status(500).send('Something broke!');
});


app.listen(3000, () => console.log('listening on 3000...'));